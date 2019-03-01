import * as React from 'react'
import * as convert from 'color-convert'
import { connect } from 'redux-zero/react'
import { View } from '@allthings/elements'
import ConvertedColorValues from '../components/ConvertedColorValues'
import Drop from '../components/Drop'
import Text from '../components/Text'
import { matchingTextColor } from '../utils/contrast'
import { opacity, lighten, darken } from '../utils/conversions'
import { IColors } from '../utils/interfaces'
import { textColors } from '../utils/palette'
import SeparatorText from '../components/SeparatorText'

export interface IColorDropProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly backgroundColors: IColors
  readonly colors: IColors
}

class ColorDrop extends React.Component<IColorDropProps> {
  public render(): JSX.Element {
    const {
      activeColor,
      activeBackgroundColor,
      backgroundColors,
      colors,
    } = this.props

    const color = Object.values(colors)[activeColor]
    const bgColor = Object.values(backgroundColors)[activeBackgroundColor]

    const colorName = Object.keys(colors)[activeColor]

    const textColor = matchingTextColor(textColors.dark, bgColor)
    const textColorLight = opacity(textColor, 0.4)

    const convertedColor = {
      base: {
        hex: color,
        cmyk: convert.hex.cmyk(color),
        hsl: convert.hex.hsl(color),
        rgb: convert.hex.rgb(color),
      },
      lightened: {
        hex: lighten(color),
        cmyk: convert.hex.cmyk(lighten(color)),
        hsl: convert.hex.hsl(lighten(color)),
        rgb: convert.hex.rgb(lighten(color)),
      },
      darkened: {
        hex: darken(color),
        cmyk: convert.hex.cmyk(darken(color)),
        hsl: convert.hex.hsl(darken(color)),
        rgb: convert.hex.rgb(darken(color)),
      },
    }

    return (
      <View direction="row" fill alignH="center" alignV="center">
        <View direction="column" alignV="center" alignH="center">
          <View style={{ top: 40, position: 'absolute', zIndex: 3 }}>
            <View>
              <Drop
                color={convertedColor.lightened.hex}
                strokeColor={bgColor}
                stroke
                size={0.3}
              />
            </View>
            <SeparatorText
              bgColor={bgColor}
              textColor={textColor}
              textColorLight={textColorLight}
              text="lighten()"
            />
          </View>
          <View style={{ position: 'relative', zIndex: 2 }}>
            {/* <Drop color={color} gradientColor={convertedColor.darkened.hex} stroke size={1.3} /> */}
            <Drop color={color} stroke strokeColor={bgColor} size={1.3} />
          </View>
          <View style={{ bottom: 40, position: 'absolute', zIndex: 3 }}>
            <Drop
              color={convertedColor.darkened.hex}
              stroke
              strokeColor={bgColor}
              size={0.3}
            />
            <SeparatorText
              bgColor={bgColor}
              textColor={textColor}
              textColorLight={textColorLight}
              text="darken()"
            />
          </View>
          <hr
            style={{
              transform: 'rotate(90)',
              border: 0,
              borderLeft: `1px solid ${opacity(textColor, 0.1)}`,
              position: 'absolute',
              height: 'auto',
              bottom: 140,
              top: 70,
              zIndex: 1,
            }}
          />
        </View>
        <View direction="column">
          <View direction="row" alignV="center" style={{ marginLeft: -30 }}>
            <View style={{ opacity: 0.9 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.8 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.7 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.6 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.5 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.4 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.3 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.2 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <View style={{ opacity: 0.1 }} alignV="center">
              <Drop color={color} stroke strokeColor={bgColor} size={0.06} />
            </View>
            <Text color={textColorLight} size="xs" style={{ marginLeft: 10 }}>
              opacity(0.9) - opacity(0.1)
            </Text>
          </View>
          <Text
            color={matchingTextColor(color, bgColor, 1.2)}
            size="giant"
            strong
            style={{ fontWeight: 800, fontSize: 48 }}
          >
            {colorName}
          </Text>
          <ConvertedColorValues
            textColor={textColor}
            textColorLight={textColorLight}
            convertedColor={convertedColor.base}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({
  activeColor,
  activeBackgroundColor,
  colors,
}: any) => ({
  activeColor,
  activeBackgroundColor,
  backgroundColors: { white: '#ffffff', black: '#000000', ...colors },
  colors,
})

export default connect(mapStateToProps)(ColorDrop)

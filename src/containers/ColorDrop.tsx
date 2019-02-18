import * as React from 'react'
import * as convert from 'color-convert'
import { alpha } from '@allthings/colors'
import { View } from '@allthings/elements'
import ConvertedColorValues from '../components/ConvertedColorValues'
import Drop from '../components/Drop'
import Text from '../components/Text'
import { textColors } from '../utils/palette'
import { lighten, darken } from '../utils/conversions'

export interface IColorDropProps {
  readonly color: string
  readonly colorName?: string
}

interface IColorDropState {
  readonly color: string
  readonly colorName: string
}

class ColorDrop extends React.Component<IColorDropProps, IColorDropState> {
  public readonly state = {
    color: '#000000',
    colorName: '',
  }

  public render(): JSX.Element {
    const { color, colorName } = this.props

    const textColor = textColors.dark
    const textColorLight = alpha(textColor, 0.4)

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

    console.log(convertedColor)

    return (
      <View
        direction="row"
        fill
        alignH="center"
        alignV="center"
        style={{ paddingBottom: 35 }}
      >
        <View direction="column" alignV="center" alignH="center">
          <View style={{ top: 40, position: 'absolute', zIndex: 3 }}>
            <View>
              <Drop color={convertedColor.lightened.hex} stroke size={0.3} />
            </View>
          </View>
          <View style={{ position: 'relative', zIndex: 2 }}>
            {/* <Drop color={color} gradientColor={convertedColor.darkened.hex} stroke size={1.3} /> */}
            <Drop color={color} stroke size={1.3} />
          </View>
          <View style={{ bottom: 75, position: 'absolute', zIndex: 3 }}>
            <Drop color={convertedColor.darkened.hex} stroke size={0.3} />
          </View>
          <hr
            style={{
              transform: 'rotate(90)',
              border: 0,
              borderLeft: `1px solid ${alpha(textColor, 0.1)}`,
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
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.8 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.7 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.6 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.5 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.4 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.3 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.2 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.1 }} alignV="center">
              <Drop color={color} stroke size={0.06} />
            </View>
            <Text color={textColorLight} size="xs" style={{ marginLeft: 10 }}>
              90% - 10%
            </Text>
          </View>
          <Text
            color={color}
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

export default ColorDrop
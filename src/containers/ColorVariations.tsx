import * as React from 'react'
import * as convert from 'color-convert'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import { css } from 'glamor'
import Text from '../components/Text'
import ConvertedColorValues from '../components/ConvertedColorValues'
import { lighten, darken } from '../utils/conversions'
import { textColors } from '../utils/palette'
import { matchingTextColor } from '../utils/contrast'

export interface IColorVariationsProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly backgroundColors: IColors
  readonly colors: IColors
}

export interface IColors {
  readonly [key: string]: string
}

const styles = {
  colorContainer: css({
    padding: 10,
    transition: 'background 0.2s ease-in-out',
  }),
}
class ColorVariations extends React.Component<IColorVariationsProps> {
  private renderColorBox = (
    backgroundColor: string,
    text: string,
    textSize: string | number,
    flex: number,
    convertedColor?: any,
    gradient?: boolean,
  ) => {
    const textColor = matchingTextColor(textColors.dark, backgroundColor)
    const textColorLight = alpha(textColor, 0.7)

    return (
      <View
        direction="column"
        alignV={textSize === 'xs' ? 'center' : 'start'}
        alignH={textSize === 'xs' ? 'center' : 'end'}
        flex={flex}
        {...css([
          styles.colorContainer,
          { backgroundColor },
          textSize !== 'xs' && {
            padding: 20,
          },
          gradient && {
            background: `linear-gradient(150deg, ${darken(
              backgroundColor,
            )}, ${backgroundColor})`,
          },
        ])}
      >
        <Text
          size={textSize}
          color={textSize === 'xs' ? textColorLight : textColor}
          strong={textSize === 'xs' ? false : true}
        >
          {text}
        </Text>
        {convertedColor && (
          <ConvertedColorValues
            convertedColor={convertedColor}
            textColor={textColor}
            textColorLight={textColorLight}
          />
        )}
      </View>
    )
  }

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
      <View direction="row" fill>
        <View flex={58} direction="column" alignH="space-between">
          {this.renderColorBox(color, colorName, 48, 100, convertedColor.base)}
        </View>
        <View flex={4} direction="column" alignH="space-between">
          {this.renderColorBox(
            alpha(color, 0.1, true, bgColor),
            '10%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.2, true, bgColor),
            '20%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.3, true, bgColor),
            '30%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.4, true, bgColor),
            '40%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.5, true, bgColor),
            '50%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.6, true, bgColor),
            '60%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.7, true, bgColor),
            '70%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.8, true, bgColor),
            '80%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            alpha(color, 0.9, true, bgColor),
            '90%',
            'xs',
            10,
          )}
          {this.renderColorBox(alpha(color, 1), '100%', 'xs', 10)}
        </View>
        <View flex={38} direction="column" alignH="space-between">
          {this.renderColorBox(
            lighten(color),
            'lighten()',
            48,
            50,
            convertedColor.lightened,
          )}
          {this.renderColorBox(
            darken(color),
            'darken()',
            48,
            50,
            convertedColor.darkened,
          )}
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
  backgroundColors: { white: '#ffffff', ...colors },
  colors,
})

export default connect(mapStateToProps)(ColorVariations)

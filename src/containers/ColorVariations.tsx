import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import { css } from 'glamor'
import Text from '../components/Text'
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
    transition: 'background 0.2s ease-in-out',
  }),
}
class ColorVariations extends React.Component<IColorVariationsProps> {
  private renderColorBox = (
    backgroundColor: string,
    text: string,
    textSize: string | number,
    flex: number,
    gradient?: boolean,
  ) => {
    const textColor = matchingTextColor(textColors.dark, backgroundColor)
    const textColorLight = alpha(textColor, 0.4)

    return (
      <View
        direction="column"
        alignV="start"
        alignH="end"
        flex={flex}
        {...css([
          styles.colorContainer,
          { backgroundColor },
          gradient && {
            background: `linear-gradient(150deg, ${darken(
              backgroundColor,
            )}, ${backgroundColor})`,
          },
        ])}
      >
        <Text size={textSize} color={textColor} style={{ margin: 10 }}>
          {text}
        </Text>
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

    return (
      <View direction="row" fill>
        <View flex={58} direction="column" alignH="space-between">
          {this.renderColorBox(color, 'colorName', 48, 100)}
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
          {this.renderColorBox(lighten(color), 'lighten', 48, 33)}
          {this.renderColorBox(darken(color), 'darken', 48, 33)}
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

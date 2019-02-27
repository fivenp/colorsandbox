import * as React from 'react'
import * as convert from 'color-convert'
import { View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import { css } from 'glamor'
import Text from '../components/Text'
import ConvertedColorValues from '../components/ConvertedColorValues'
import { opacity, lighten, darken } from '../utils/conversions'
import { textColors } from '../utils/palette'
import { matchingTextColor } from '../utils/contrast'
import { IColors } from '../utils/interfaces'
import SeparatorText from '../components/SeparatorText'

export interface IColorVariationsProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly backgroundColors: IColors
  readonly colors: IColors
}

export interface IColorVariationsState {
  readonly withGradient: boolean
}

const styles = {
  colorContainer: css({
    padding: 10,
    transition: 'background 0.2s ease-in-out',
  }),
  colorBox: css({
    '> div': {
      transition: 'background 0.2s ease-in-out, opacity 0.2s ease-in-out',
      opacity: 0,
    },
    ':hover > div': {
      opacity: 1,
    },
  }),
}
class ColorVariations extends React.Component<
  IColorVariationsProps,
  IColorVariationsState
> {
  public readonly state = {
    withGradient: false,
  }

  private renderColorBox = (
    backgroundColor: string,
    text: string,
    textSize: string | number,
    flex: number,
    convertedColor?: any,
    gradient?: boolean,
    disableHover?: boolean,
  ) => {
    const textColor = matchingTextColor(textColors.dark, backgroundColor)
    const textColorLight = opacity(textColor, 0.7)

    return (
      <View
        direction="column"
        alignV={textSize === 'xs' ? 'center' : 'start'}
        alignH={textSize === 'xs' ? 'center' : 'end'}
        flex={flex}
        {...css([
          styles.colorContainer,
          !disableHover && styles.colorBox,
          textSize !== 'xs' && {
            padding: 20,
          },
          { background: backgroundColor },
          gradient
            ? {
                backgroundImage: `linear-gradient(170deg, ${darken(
                  backgroundColor,
                )}, ${backgroundColor})`,
              }
            : {
                backgroundImage: `linear-gradient(170deg, ${opacity(
                  backgroundColor,
                  0,
                )}, ${opacity(backgroundColor, 0)})`,
              },
        ])}
      >
        <Text
          size={typeof textSize === 'number' ? 'giant' : textSize}
          color={textSize === 'xs' ? textColorLight : textColor}
          strong={textSize === 'xs' ? false : true}
          style={{
            fontWeight: typeof textSize === 'number' && 800,
            fontSize: typeof textSize === 'number' && +textSize,
          }}
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

    const { withGradient } = this.state

    const color = Object.values(colors)[activeColor]
    const bgColor = Object.values(backgroundColors)[activeBackgroundColor]

    const colorName = Object.keys(colors)[activeColor]
    const bgColorName = Object.keys(backgroundColors)[activeBackgroundColor]

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
      <View direction="column" fill>
        <View flex={5} direction="row-reverse" alignH="space-between">
          {this.renderColorBox(
            opacity(color, 0.1, true, bgColor),
            '10%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.2, true, bgColor),
            '20%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.3, true, bgColor),
            '30%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.4, true, bgColor),
            '40%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.5, true, bgColor),
            '50%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.6, true, bgColor),
            '60%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.7, true, bgColor),
            '70%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.8, true, bgColor),
            '80%',
            'xs',
            10,
          )}
          {this.renderColorBox(
            opacity(color, 0.9, true, bgColor),
            '90%',
            'xs',
            10,
          )}
          {this.renderColorBox(opacity(color, 1), '100%', 'xs', 10)}
        </View>
        <View
          flex={60}
          direction="column"
          alignH="space-between"
          style={{ position: 'relative' }}
        >
          <View
            {...css({
              position: 'absolute',
            })}
          >
            <SeparatorText
              bgColor={convertedColor.darkened.hex}
              text={`opacity() on ${bgColorName}`}
              direction="top"
            />
          </View>
          <View
            {...css({
              position: 'absolute',
              top: '6vh',
              left: -50,
              cursor: 'pointer',
            })}
            onClick={() => {
              this.setState({ withGradient: !withGradient })
            }}
          >
            <SeparatorText
              bgColor={convertedColor.darkened.hex}
              text={
                withGradient
                  ? `gradient() - linear-gradient(170deg) from darken(${colorName}) to ${colorName}`
                  : `gradient()`
              }
            />
          </View>
          {this.renderColorBox(
            color,
            colorName,
            48,
            100,
            convertedColor.base,
            withGradient ? true : false,
            true,
          )}
          <View
            {...css({
              position: 'absolute',
              bottom: '0',
            })}
          >
            <SeparatorText
              bgColor={convertedColor.base.hex}
              text={`opacity() on white`}
              direction="bottom"
            />
          </View>
        </View>
        <View flex={5} direction="row-reverse" alignH="space-between">
          {this.renderColorBox(opacity(color, 0.1, true), '10%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.2, true), '20%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.3, true), '30%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.4, true), '40%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.5, true), '50%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.6, true), '60%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.7, true), '70%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.8, true), '80%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 0.9, true), '90%', 'xs', 10)}
          {this.renderColorBox(opacity(color, 1), '100%', 'xs', 10)}
        </View>

        <View flex={30} direction="column" alignH="space-between">
          {this.renderColorBox(
            lighten(color),
            'lighten()',
            'l',
            50,
            convertedColor.lightened,
          )}
          {this.renderColorBox(
            darken(color),
            'darken()',
            'l',
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
  backgroundColors: { white: '#ffffff', black: '#000000', ...colors },
  colors,
})

export default connect(mapStateToProps)(ColorVariations)

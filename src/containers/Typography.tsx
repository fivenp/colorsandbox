import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import { css } from 'glamor'
import Text from '../components/Text'
import { textColors } from '../utils/palette'
import { matchingTextColor } from '../utils/contrast'

export interface ITypographyProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly backgroundColors: IColors
  readonly colors: IColors
}

export interface IColors {
  readonly [key: string]: string
}

const styles = {
  typoContainer: css({
    padding: 20,
    transition: 'background 0.2s ease-in-out',
  }),
}
class Typography extends React.Component<ITypographyProps> {
  private renderText = (color: string, colorLight: string) => (
    <React.Fragment>
      <Text
        size="giant"
        strong
        style={{ fontWeight: 800, fontSize: 48 }}
        color={color}
      >
        Headline
      </Text>
      <Text size="giant" color={color}>
        This is a longer subheadline
      </Text>
      <Text
        size="m"
        color={color}
        style={{ margin: 20, marginLeft: 0, marginRight: 0 }}
      >
        Content
      </Text>
      <Text size="xs" color={colorLight}>
        Small subtext
      </Text>
    </React.Fragment>
  )

  public render(): JSX.Element {
    const {
      activeColor,
      activeBackgroundColor,
      backgroundColors,
      colors,
    } = this.props

    const color = Object.values(colors)[activeColor]
    const bgColor = Object.values(backgroundColors)[activeBackgroundColor]

    const textColor = matchingTextColor(textColors.dark, color)
    const textColorLight = alpha(textColor, 0.4)

    return (
      <View direction="row" fill>
        <View flex={33} direction="column" alignH="space-between">
          <View
            direction="column"
            alignV="start"
            alignH="end"
            flex={50}
            {...css([
              styles.typoContainer,
              {
                backgroundColor: '#ffffff',
              },
            ])}
          >
            {this.renderText(color, alpha(color, 0.4))}
          </View>
          <View
            direction="column"
            alignV="start"
            alignH="end"
            flex={50}
            {...css([
              styles.typoContainer,
              {
                backgroundColor: '#000',
              },
            ])}
          >
            {this.renderText(color, alpha(color, 0.4))}
          </View>
        </View>
        <View
          flex={33}
          fill
          direction="column"
          alignV="start"
          alignH="end"
          {...css([
            styles.typoContainer,
            {
              backgroundColor: color,
            },
          ])}
        >
          {this.renderText(textColor, textColorLight)}
        </View>
        <View
          flex={33}
          fill
          direction="column"
          alignV="start"
          alignH="end"
          {...css([
            styles.typoContainer,
            {
              backgroundColor: activeBackgroundColor,
            },
          ])}
        >
          {this.renderText(color, alpha(color, 0.4))}
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

export default connect(mapStateToProps)(Typography)

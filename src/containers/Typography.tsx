import * as React from 'react'
import { View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import { css } from 'glamor'
import Text from '../components/Text'
import { opacity } from '../utils/conversions'
import { textColors } from '../utils/palette'
import { matchingTextColor } from '../utils/contrast'
import { IColors } from '../utils/interfaces'

export interface ITypographyProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly backgroundColors: IColors
  readonly colors: IColors
}

const styles = {
  typoContainer: css({
    padding: 20,
    transition: 'background 0.2s ease-in-out',
  }),
}
class Typography extends React.Component<ITypographyProps> {
  private renderText = (
    color: string,
    colorLight: string,
    headline?: string,
    subheadline?: string,
  ) => (
    <React.Fragment>
      <Text
        size="giant"
        strong
        style={{ fontWeight: 800, fontSize: 48 }}
        color={color}
      >
        {headline}
      </Text>
      <Text size="giant" color={color} style={{ marginTop: -10 }}>
        {subheadline}
      </Text>
      <Text size="m" color={color} style={{ marginTop: 20 }}>
        This is a sample content in 13px fontSize
      </Text>
      <Text size="xs" color={colorLight}>
        This is even smaller copytext with opacity() and 11px fontSize
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
    const colorName = Object.keys(colors)[activeColor]
    const bgColor = Object.values(backgroundColors)[activeBackgroundColor]
    const bgColorName = Object.keys(backgroundColors)[activeBackgroundColor]

    const textColor = matchingTextColor(textColors.dark, color)
    const textColorLight = opacity(textColor, 0.4)

    return (
      <View direction="row" fill>
        <View flex={50} direction="column" alignH="space-between">
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
            {this.renderText(
              color,
              opacity(color, 0.4),
              colorName,
              `on bright background`,
            )}
          </View>
          <View
            direction="column"
            alignV="start"
            alignH="end"
            flex={50}
            {...css([
              styles.typoContainer,
              {
                backgroundColor: color,
              },
            ])}
          >
            {this.renderText(
              textColor,
              textColorLight,
              'readable color',
              `on ${colorName} background`,
            )}
          </View>
        </View>
        <View flex={50} direction="column" alignH="space-between">
          <View
            direction="column"
            alignV="start"
            alignH="end"
            flex={50}
            {...css([
              styles.typoContainer,
              {
                backgroundColor: activeBackgroundColor,
              },
            ])}
          >
            {this.renderText(
              color,
              opacity(color, 0.4),
              colorName,
              `on ${bgColorName} background`,
            )}
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
            {this.renderText(
              color,
              opacity(color, 0.4),
              colorName,
              `on dark background`,
            )}
          </View>
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

export default connect(mapStateToProps)(Typography)

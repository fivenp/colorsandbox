import * as React from 'react'
import { View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import Drop from '../components/Drop'
import Text from '../components/Text'
import { opacity } from '../utils/conversions'
import { IColors } from '../utils/interfaces'
import { textColors } from '../utils/palette'
import basicActions from '../store/actions/basic'
import { css } from 'glamor'

export interface IColorListProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly backgroundColors: IColors
  readonly colors: IColors
  readonly paletteIsOpen: boolean
  readonly textColor: string
  readonly isBottomPalette?: boolean
  readonly setActiveBackgroundColor: (value: number) => void
  readonly setActiveColor: (value: number) => void
}

const styles = {
  palette: css({
    height: 0,
    backgroundColor: 'transparent',
    transition:
      'height 0.3s ease-in-out, padding 0.2s ease-in-out, background 0.2s ease-in-out',
    borderBottom: '0px solid #efefef',
    borderTop: '0px solid #efefef',
    overflowY: 'hidden',
    overflowX: 'scroll',
    overflowScrolling: 'touch',
    WebkitOverflowScrolling: 'touch',
  }),
  openPalette: css({
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    padding: 10,
    height: 60,
  }),
  openBottomPalette: css({
    borderTopWidth: 1,
    borderBottomWidth: 0,
  }),
  paletteItem: css({
    padding: 10,
    cursor: 'pointer',
    borderRadius: 10,
  }),
  activePaletteItem: css({
    backgroundColor: '#efefef',
  }),
}

class ColorList extends React.Component<IColorListProps> {
  public render(): JSX.Element {
    const {
      colors,
      backgroundColors,
      activeColor,
      activeBackgroundColor,
      isBottomPalette,
      paletteIsOpen,
      textColor,
    } = this.props

    const separatorColor = opacity(textColor, 0.1)

    return (
      <View
        alignH="start"
        alignV="stretch"
        direction="row"
        {...css([
          styles.palette,
          paletteIsOpen && styles.openPalette,
          paletteIsOpen && isBottomPalette && styles.openBottomPalette,
          { borderTopColor: separatorColor },
        ])}
      >
        {Object.keys(isBottomPalette ? backgroundColors : colors).map(
          (color, i) => (
            <View
              direction="row"
              alignV="center"
              onClick={() => {
                isBottomPalette
                  ? this.props.setActiveBackgroundColor(i)
                  : this.props.setActiveColor(i)
              }}
              key={i}
              {...css([
                styles.paletteItem,
                isBottomPalette &&
                  activeBackgroundColor === i &&
                  styles.activePaletteItem,
                !isBottomPalette &&
                  activeColor === i &&
                  styles.activePaletteItem,
              ])}
            >
              <Drop
                color={
                  Object.values(isBottomPalette ? backgroundColors : colors)[i]
                }
                size={0.07}
              />
              <Text
                color={opacity(textColors.dark, 0.4)}
                size="xs"
                style={{ marginLeft: 5 }}
              >
                {color}
              </Text>
            </View>
          ),
        )}
      </View>
    )
  }
}

const mapStateToProps = ({
  activeColor,
  activeBackgroundColor,
  colors,
  paletteIsOpen,
}: any) => ({
  activeColor,
  activeBackgroundColor,
  backgroundColors: { white: '#ffffff', ...colors },
  colors,
  paletteIsOpen,
})

export default connect(
  mapStateToProps,
  basicActions,
)(ColorList)

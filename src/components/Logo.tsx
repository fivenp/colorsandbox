import * as React from 'react'
import { View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import Text from '../components/Text'
import { matchingTextColor } from '../utils/contrast'
import { textColors } from '../utils/palette'
import Drop from './Drop'

interface ILogoProps {
  readonly activeView: string
  readonly paletteIsOpen: boolean
}
class Logo extends React.Component<ILogoProps> {
  public render(): JSX.Element {
    const bgColor = document.body.style.backgroundColor || '#ffffff'
    const textColor = /*this.props.activeView === 'Typography' || */ this.props
      .paletteIsOpen
      ? textColors.dark
      : matchingTextColor(textColors.dark, bgColor)

    return (
      <View
        direction="row"
        alignH="start"
        alignV="center"
        style={{ marginLeft: 10 }}
      >
        <Drop color="#24C333" gradientColor="#13A021" size={0.07} />
        <View style={{ marginLeft: 5, textTransform: 'uppercase' }}>
          <Text logoFont color={textColor} size="xs">
            scenario
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ activeView, paletteIsOpen }: any) => ({
  activeView,
  paletteIsOpen,
})

export default connect(mapStateToProps)(Logo)

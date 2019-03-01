import * as React from 'react'
import { View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import Text from '../components/Text'
import { matchingTextColor } from '../utils/contrast'
import { textColors } from '../utils/palette'
import Drop from './Drop'

interface ILogoProps {
  readonly activeView: string
  readonly color: string
  readonly paletteIsOpen: boolean
}
class Logo extends React.Component<ILogoProps> {
  public render(): JSX.Element {
    const textColor = /*this.props.activeView === 'Typography' || */ this.props
      .paletteIsOpen
      ? textColors.dark
      : this.props.color

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
            ColorSandbox
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

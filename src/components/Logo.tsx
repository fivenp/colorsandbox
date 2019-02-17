import * as React from 'react'
import { alpha } from '@allthings/colors'
import { View } from '@allthings/elements'
import Text from '../components/Text'
import { textColors } from '../utils/palette'
import Drop from './Drop'

interface ILogoProp {
  readonly textColor?: string
}

class Logo extends React.Component<ILogoProp> {
  public readonly state = {
    textColor: textColors.dark,
  }

  public render(): JSX.Element {
    const { textColor } = this.state

    return (
      <View
        direction="row"
        fill
        alignH="start"
        alignV="center"
        style={{ marginLeft: 10 }}
      >
        <Drop color="#24C333" gradient size={0.07} />
        <View style={{ marginLeft: 5, textTransform: 'uppercase' }}>
          <Text logoFont color={textColor} size="xs">
            scenario
          </Text>
        </View>
      </View>
    )
  }
}

export default Logo

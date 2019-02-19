import * as React from 'react'
import { alpha } from '@allthings/colors'
import { View } from '@allthings/elements'
import Text from '../components/Text'
import { matchingTextColor } from '../utils/contrast'
import { textColors } from '../utils/palette'

interface ISeparatorTextProp {
  readonly bgColor: string
  readonly textColor: string
  readonly textColorLight: string
  readonly text: any
}

class SeparatorText extends React.Component<ISeparatorTextProp> {
  public render(): JSX.Element {
    const { bgColor, textColor, textColorLight, text } = this.props

    return (
      <View
        fill
        direction="row"
        alignV="center"
        alignH="center"
        style={{
          position: 'absolute',
          zIndex: 2,
          left: 60,
          top: 0,
          width: '10vw',
        }}
      >
        <hr
          style={{
            border: 0,
            borderTop: `1px dashed ${alpha(textColor, 0.1)}`,
            marginLeft: 10,
            marginRight: 10,
            width: 120,
            position: 'relative',
            zIndex: 1,
          }}
        />
        <Text color={matchingTextColor(textColorLight, bgColor, 1.2)} size="xs">
          {text}
        </Text>
      </View>
    )
  }
}

export default SeparatorText

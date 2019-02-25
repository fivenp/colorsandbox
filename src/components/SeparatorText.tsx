import * as React from 'react'
import { alpha } from '@allthings/colors'
import { View } from '@allthings/elements'
import Text from '../components/Text'
import { matchingTextColor } from '../utils/contrast'
import { textColors } from '../utils/palette'

interface ISeparatorTextProp {
  readonly bgColor: string
  readonly textColor?: string
  readonly textColorLight?: string
  readonly text: any
  readonly direction?: 'top' | 'bottom' | 'left'
}

class SeparatorText extends React.Component<ISeparatorTextProp> {
  public render(): JSX.Element {
    const { bgColor, text, direction } = this.props

    const textColor = this.props.textColor
      ? this.props.textColor
      : matchingTextColor(textColors.dark, bgColor)
    const textColorLight = alpha(textColor, 0.4)

    return (
      <View
        fill
        direction={
          direction === 'top'
            ? 'column'
            : direction === 'bottom'
              ? 'column-reverse'
              : 'row'
        }
        alignV={
          direction === 'top' || direction === 'bottom' ? 'end' : 'center'
        }
        alignH={
          direction === 'top' || direction === 'bottom' ? 'end' : 'center'
        }
        style={{
          position: 'absolute',
          zIndex: 2,
          left: direction === 'top' || direction === 'bottom' ? '78vw' : 60,
          top: direction === 'top' ? 10 : 'auto',
          bottom: direction === 'bottom' ? 10 : 0,
          width:
            direction === 'top' || direction === 'bottom' ? '20vw' : '10vw',
          height:
            direction === 'top' || direction === 'bottom' ? '10vh' : 'auto',
        }}
      >
        <hr
          style={{
            border: 0,
            borderTop:
              direction === 'top' || direction === 'bottom'
                ? 'none'
                : `1px dashed ${alpha(textColor, 0.2)}`,
            borderLeft:
              direction === 'top' || direction === 'bottom'
                ? `1px dashed ${alpha(textColor, 0.2)}`
                : 'none',
            marginLeft: direction === 'top' || direction === 'bottom' ? 0 : 10,
            marginRight: direction === 'top' || direction === 'bottom' ? 0 : 10,
            width: direction === 'top' || direction === 'bottom' ? 0 : 120,
            height: direction === 'top' || direction === 'bottom' ? 120 : 0,
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

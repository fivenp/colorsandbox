import * as React from 'react'
// import * as convert from 'color-convert'
import { alpha } from '@allthings/colors'
import { View } from '@allthings/elements'
import Drop from '../components/Drop'
import Text from '../components/Text'
import { textColors } from '../utils/palette'

export interface IColorDropProps {
  readonly color: string
  readonly colorName?: string
}

interface IColorDropState {
  readonly color: string
  readonly colorName: string
}

class ColorDrop extends React.Component<IColorDropProps, IColorDropState> {
  public readonly state = {
    color: '#000000',
    colorName: '',
  }

  public render(): JSX.Element {
    const { color, colorName } = this.props

    const textColor = textColors.dark
    const textColorLight = alpha(textColor, 0.4)

    return (
      <View direction="row" fill alignH="center" alignV="center">
        <View direction="column" alignV="center" alignH="center">
          <View style={{ top: 40, position: 'absolute', zIndex: 2 }}>
            <Drop color="#49D055" stroke size={0.3} />
          </View>
          <View style={{ position: 'relative', zIndex: 1 }}>
            <Drop color="#24C333" gradient size={1.3} />
          </View>
          <View style={{ bottom: 40, position: 'absolute', zIndex: 2 }}>
            <Drop color="#13A020" stroke size={0.3} />
          </View>
        </View>
        <View direction="column">
          <View direction="row" alignV="center">
            <View style={{ opacity: 0.9 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.8 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.7 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.6 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.5 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.4 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.3 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.2 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <View style={{ opacity: 0.1 }} alignV="center">
              <Drop color="#24C333" stroke size={0.06} />
            </View>
            <Text color={textColorLight} size="xs" style={{ marginLeft: 10 }}>
              90% - 10%
            </Text>
          </View>
          <Text
            color="#24C333"
            size="giant"
            strong
            style={{ fontWeight: 800, fontSize: 48 }}
          >
            {colorName}
          </Text>
          <View direction="row">
            <Text color={textColorLight} size="xs">
              HEX &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              #24C333
            </Text>
          </View>
          <View direction="row">
            <Text color={textColorLight} size="xs">
              R &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              255 &nbsp;
            </Text>
            <Text color={textColorLight} size="xs">
              G &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              0 &nbsp;
            </Text>
            <Text color={textColorLight} size="xs">
              B &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              0 &nbsp;
            </Text>
          </View>
          <View direction="row">
            <Text color={textColorLight} size="xs">
              C &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              255 &nbsp;
            </Text>
            <Text color={textColorLight} size="xs">
              M &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              0 &nbsp;
            </Text>
            <Text color={textColorLight} size="xs">
              Y &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              0 &nbsp;
            </Text>
            <Text color={textColorLight} size="xs">
              K &nbsp;
            </Text>
            <Text color={textColor} size="xs" strong>
              0 &nbsp;
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ColorDrop

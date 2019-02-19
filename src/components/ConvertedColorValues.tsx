import * as React from 'react'
import { View } from '@allthings/elements'
import Text from './Text'

interface IConvertedColorValuesProp {
  readonly textColor: string
  readonly textColorLight: string
  readonly convertedColor: any
}

class ConvertedColorValues extends React.Component<IConvertedColorValuesProp> {
  public render(): JSX.Element {
    const { textColor, textColorLight, convertedColor } = this.props

    return (
      <View direction="row">
        <View direction="row">
          <Text color={textColorLight} size="s">
            HEX &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.hex}
          </Text>
        </View>
        <View direction="row" style={{ marginLeft: 10 }}>
          <Text color={textColorLight} size="s">
            R &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.rgb[0]} &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            G &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.rgb[1]} &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            B &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.rgb[2]} &nbsp;
          </Text>
        </View>
        <View direction="row" style={{ marginLeft: 10 }}>
          <Text color={textColorLight} size="s">
            C &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.cmyk[0]} &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            M &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.cmyk[1]} &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            Y &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.cmyk[2]} &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            K &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.cmyk[3]} &nbsp;
          </Text>
        </View>
        <View direction="row" style={{ marginLeft: 10 }}>
          <Text color={textColorLight} size="s">
            H &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.hsl[0]} &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            S &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.hsl[1]}% &nbsp;
          </Text>
          <Text color={textColorLight} size="s">
            L &nbsp;
          </Text>
          <Text color={textColor} size="s" strong>
            {convertedColor.hsl[2]}% &nbsp;
          </Text>
        </View>
      </View>
    )
  }
}

export default ConvertedColorValues

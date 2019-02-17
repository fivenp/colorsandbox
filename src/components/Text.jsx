import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import { Theme, View } from '@allthings/elements'
import neue from 'neue'

if (typeof window !== `undefined`) {
  neue.load([
    {
      families: ['Open Sans:n4,n4i,n6,n6i,n8,n8i'],
      css:
        '//fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,800,800i',
    },
  ])
}

const availableSizes = {
  xs: 10,
  s: 12,
  m: 13,
  l: 14,
  xl: 18,
  xxl: 18,
  giant: 24,
}

export const createTextStyles = (
  { block, italic, strong, size, underline, lineThrough, align, autoBreak } = {
    size: 'm',
  },
) => {
  return css({
    display: block ? 'block' : 'inline',
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    fontStyle: italic && 'italic',
    fontWeight: strong && '600',
    fontSize: availableSizes[size],
    letterSpacing: size === 'giant' && '-1.2',
    textDecoration:
      (underline && 'underline') || (lineThrough && 'line-through'),
    textAlign: align,
    whiteSpace: autoBreak && 'pre-wrap',
    wordBreak: autoBreak && 'break-word',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  })
}

/**
 * Text will be used for everywhere a text appears.
 * The only exception is in molecules that already provide the
 * text component for you.
 *
 * ```example
 * <Text>
 *   Text will be used for everywhere a text appears. The only exception
 *   is in molecules that already provide the text component for you.
 * </Text>
 * ```
 *
 * ```example
 * <Text autoBreak={true}>
 *   Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.
 *  </Text>
 *  ```
 */
class Text extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    autoBreak: PropTypes.bool,
    block: PropTypes.bool,
    children: PropTypes.node,
    color: PropTypes.string,
    italic: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'giant']),
    strong: PropTypes.bool,
    underline: PropTypes.bool,
    lineThrough: PropTypes.bool,
  }

  static defaultProps = {
    size: 'l',
    block: true,
    color: 'text',
  }

  render() {
    const {
      color,
      block,
      children,
      italic,
      size,
      strong,
      align,
      underline,
      autoBreak,
      lineThrough,
      ...props
    } = this.props

    const styles = createTextStyles({
      block,
      italic,
      strong,
      size,
      underline,
      lineThrough,
      align,
      autoBreak,
    })

    return (
      <Theme>
        {({ colorize }) => (
          <View {...css(styles, { color: colorize(color) })} {...props}>
            {children}
          </View>
        )}
      </Theme>
    )
  }
}

export default Text

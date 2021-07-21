import * as React from 'react'

export interface IDropProps {
  readonly color: string
  readonly gradientColor?: string
  readonly size?: number
  readonly stroke?: boolean
  readonly strokeColor?: string
}

class Drop extends React.Component<IDropProps> {
  public render(): JSX.Element {
    const { color, gradientColor, size, stroke, strokeColor } = this.props

    const scale = size || 1

    return (
      <svg
        width={235 * scale}
        height={328 * scale}
        viewBox="0 0 235 328"
        xmlns="http://www.w3.org/2000/svg"
      >
        {gradientColor && (
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientTransform="rotate(30)"
            >
              <stop offset="0%" stopColor={gradientColor} stopOpacity="1" />
              <stop offset="60%" stopColor={color} stopOpacity="1" />
            </linearGradient>
          </defs>
        )}
        <path
          // d="M138.317 12.952c-9.249-16.02-32.372-16.02-41.621 0L15.62 153.382h.252C5.682 171.405.11 192.381.824 214.717c1.937 60.503 50.445 110.039 110.902 113.126 67.468 3.446 123.245-50.235 123.245-116.953 0-24.838-7.754-47.858-20.949-66.809L138.317 12.952z"
          d="M134.760621,34.2860875 C126.842517,20.5713042 107.046828,20.5713042 99.1287234,34.2860875 L29.7192495,154.508748 L29.9349876,154.508748 C21.2112896,169.938307 16.4410791,187.895941 17.0523372,207.017876 C18.7106104,258.814726 60.2384948,301.222685 111.995964,303.865478 C169.755577,306.815612 217.50648,260.859102 217.50648,203.741567 C217.50648,182.47766 210.868251,162.77015 199.571961,146.546126 L134.760621,34.2860875 Z"
          fill={gradientColor ? 'url(#gradient)' : color}
          fillRule="nonzero"
          strokeWidth={stroke ? 30 : 0}
          stroke={strokeColor || '#ffffff'}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: 'fill 0.5s ease-in-out, stroke 0.5s ease-in-out',
          }}
        />
      </svg>
    )
  }
}

export default Drop

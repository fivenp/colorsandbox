import { ColorPalette } from '@allthings/colors'
import createStore from 'redux-zero'
import { applyMiddleware } from 'redux-zero/middleware'
import { connect } from 'redux-zero/devtools'

const initialState = {
  colors: {
    lightBlack: '#2c2c2c',
    lightBlackIntense: '#232323',
    turquoise: '#00bf93',
    turquoiseIntense: '#16a086',
    mint: '#2dcc70',
    mintIntense: '#27ae61',
    green: '#42e453',
    greenIntense: '#24c333',
    yellow: '#ffff25',
    yellowIntense: '#d9d921',
    yellowOrange: '#f1c40f',
    yellowOrangeIntense: '#f39c11',
    brown: '#e67f22',
    brownIntense: '#d25400',
    orange: '#ff944e',
    orangeIntense: '#ff5500',
    red: '#e84c3d',
    redIntense: '#c1392b',
    blue: '#3598db',
    blueIntense: '#297fb8',
    darkBlue: '#34495e',
    darkBlueIntense: '#2d3e50',
    lightGrey: '#ecf0f1',
    lightGreyIntense: '#bec3c7',
    grey: '#95a5a5',
    greyIntense: '#7e8c8d',
    magenta: '#ef3e96',
    magentaIntense: '#e52383',
    violet: '#df21b9',
    violetIntense: '#be127e',
    purple: '#9a59b5',
    purpleIntense: '#8d44ad',
    lightBlue: '#7dc2d2',
    lightBlueIntense: '#1cabbb',
    white: '#ffffff',
    whiteIntense: '#f3f5f7',
    black: '#000000',
  },
  activeColor: 0,
  activeBackgroundColor: 0,
  activeView: 'ColorDrop',
  paletteIsOpen: false,
  backgroundPaletteIsOpen: false,
}

const middlewares = connect ? applyMiddleware(connect(initialState)) : []
const store = createStore(initialState, middlewares)

export default store

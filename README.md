<h1 align="center">
  <a href="https://colorsandbox.netlify.com"><img src="https://user-images.githubusercontent.com/132332/52920033-968ba580-3308-11e9-8230-24fe21e3a491.png" style="border:0;max-width:100%" alt="ColorSandbox logo" title="ColorSandbox logo"></a>
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">A toolkit to clevery abstract, manage, document, export and preview your color palettes</p>

## Table of Contents

- [Features](#features)
- [Try it](#try-it)
- [How to use it](#how-to-use-it)
  * [(WIP) Color preview / documentation](#wip-color-preview--documentation)
  * [(WIP) Helper functions API](#wip-helper-functions-api)
    + [lighten(color)](#lightencolor)
    + [darken(color)](#darkencolor)
- [Local development](#local-development)
- [Useful resources](#useful-resources)

## Features

> To manage your expectations upfront: **ColorSandbox is NOT a Color Palette / Color Theme generator**

You should rather see it as a visual presentation / documentation / abstraction / export / whatever helper to your already existing Color Palette

<hr />

The main features are

* Preview your programatically abstracted colors and rules
* See how colors would harmonize together inside your palette behaves
* Check which typography will work in which combination
* (WIP) Access the color abstraction methods via an easy API
* (WIP) Export all posible abstractions to CSS, Sketch, Photoshop, etc
* (WIP) Customize the abstraction rules
* (WIP) Enable multiple palettes
* (WIP) Embed your colors/abstraction combination into your website/document/etc

## Try it

[![ColorSandbox](https://user-images.githubusercontent.com/132332/53442167-ef45f700-3a08-11e9-99a3-9c866bc722d3.png)](https://colorsandbox.netlify.com)

<p align="center" style="font-size: 1.2rem;">https://colorsandbox.netlify.com</p>


## How to use it

ColorSandbox consists of two parts - one for previewing/documenting your colors - and one providing you with the matching rules for the abstractions.

In both cases you should start with a simple

```shell
yarn add colorsandbox
```

### (WIP) Color preview / documentation

Simply import the component to your existing React App and pass a color palette object down.

```tsx
import { ColorSandbox } from 'colorsandbox'

class App extends React.Component {
  const myPalette = {
      'red' : '#ff0000',
      'green' : '#00ff00',
      'blue' : '#0000ff',
      'yellow' : '#ffff00',
  }

  public render(): JSX.Element {
    return (
      <ColorSandbox colors={myPalette} />
    )
  }
}

export default App
```

#### Props

| prop             | type       | default    | required   | description
| ---------------- | ---------- | ---------- | ---------- | ----------
| colors           | `object`   | `N/A`      | **yes**    | The palette object defining your color palette

### (WIP) Helper functions API

#### lighten(color)

Lightens the provided HEX color. It programatically converts it to **HSL**, **removes** 10% of Saturation and **adds** 10% of Lightnes to it. Returns a valid hex color

```tsx
import { lighten } from 'colorsandbox'

const red = '#ff0000'
const myLightRed = lighten(red)

```

| argument         | type       | description
| ---------------- | ---------- | ----------
| color            | `string`   | Must be a valid **hex** color - e.g. `#ff0000`


#### darken(color)

Darkens the provided HEX color. It programatically converts it to **HSL**, **adds** 10% of Saturation and **removes** 10% of Lightnes from it. Returns a valid hex color


```tsx
import { darken } from 'colorsandbox'

const red = '#ff0000'
const myDarkRed = darken(red)

```

| argument         | type       | description
| ---------------- | ---------- | ----------
| color            | `string`   | Must be a valid **hex** color - e.g. `#ff0000`

## Local development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find information about how to set up a local devenv over [here](https://github.com/fivenp/colorsandbox/blob/master/CONTRIBUTING.md#setting-up-the-project-locally)

## Useful resources

![scenario](https://user-images.githubusercontent.com/132332/52920033-968ba580-3308-11e9-8230-24fe21e3a491.png)

A toolkit to clevery abstract, manage, document, export and preview your color palettes

## Table of Contents

- [Features](#features)
- [Try it](#try-it)
- [How to use it](#how-to-use-it)
  * [(WIP) Color preview / documentation](#wip-color-preview--documentation)
    + [Props](#props)
  * [(WIP) Helper functions API](#wip-helper-functions-api)
    + [lighten(color)](#lightencolor)
    + [darken(color)](#darkencolor)
- [Local development](#local-development)
- [Useful resources](#useful-resources)

## Features

To manage your expectations upfront: **Scenario is NOT a Color Palette / Color Theme generator**

You should rather see it as a visual presentation / documentation / abstraction / export / whatever helper to your already existing Color Palette

* Preview your programatically abstracted colors and rules
* See how colors would harmonize together inside your palette behaves
* Check which typography will work in which combination
* (WIP) Access the color abstraction methods via an easy API
* (WIP) Export all posible abstractions to CSS, Sketch, Photoshop, etc
* (WIP) Customize the abstraction rules
* (WIP) Enable multiple palettes
* (WIP) Embed your colors/abstraction combination into your website/document/etc

## Try it

[![scenario](https://user-images.githubusercontent.com/132332/53442167-ef45f700-3a08-11e9-99a3-9c866bc722d3.png)](https://scenario.netlify.com)

https://scenario.netlify.com


## How to use it

Scenario consists of two parts - one for previewing/documenting your colors - and one providing you with the matching rules for the abstractions.

In both cases you should start with a simple

```shell
yarn add @fivenp/scenario
```

### (WIP) Color preview / documentation

Simply import the component to your existing App and pass a color palette object down.

```tsx
import { Scenario } from '@fivenp/scenario'

class App extends React.Component {
  const myPalette = {
      'red' : '#ff0000',
      'green' : '#00ff00',
      'blue' : '#0000ff',
      'yellow' : '#ffff00',
  }

  public render(): JSX.Element {
    return (
      <Scenario colors={myPalette} />
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
import { lighten } from '@fivenp/scenario'

const red = '#ff0000'
const myLightRed = lighten(red)

```

| argument         | type       | description
| ---------------- | ---------- | ----------
| color            | `string`   | Must be a valid **hex** color - e.g. `#ff0000`


#### darken(color)

Darkens the provided HEX color. It programatically converts it to **HSL**, **adds** 10% of Saturation and **removes** 10% of Lightnes from it. Returns a valid hex color


```tsx
import { darken } from '@fivenp/scenario'

const red = '#ff0000'
const myDarkRed = darken(red)

```

| argument         | type       | description
| ---------------- | ---------- | ----------
| color            | `string`   | Must be a valid **hex** color - e.g. `#ff0000`

## Local development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find information about how to set up a local devenv over [here](https://github.com/fivenp/scenario/blob/master/CONTRIBUTING.md#setting-up-the-project-locally)

## Useful resources

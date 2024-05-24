# Custom-Mouse-effect 🖱️
Hi! 👋
Welcome to custom-mouse-effect, a project created for my exam focused on learning and working with npm to create reusable React components. This package offers two customizable cursor effects: FollowingCircle and CustomCursorParticles, designed to simplify styling and enhance user interaction.

## Components:

### FollowingCircle
A cursor effect that creates a trail of circles following the mouse pointer, with customizable primary and secondary colors, and the number of circles.

<details closed>
  <summary>See Video of FollowingCircle</summary>
  
</details>

### CustomCursorParticles
A cursor effect that generates particles exploding from the mouse pointer, with customizable particle color and size.

<details closed>
  <summary>See Video of CustomCursorParticles</summary>
  
</details>


## Installation
```bash
npm install custom-mouse-effect
```
### Usage
```js
import React from 'react';
import { FollowingCircle, CustomCursorParticles } from 'custom-mouse-effect'; // Remember to import the package

const App = () => {
  return (
    <div className="App">
      <FollowingCircle primaryColor="blue" secondaryColor="green" numCircles={15} /> // Properties that you can change, out of your taste.
      <CustomCursorParticles particleColor="255, 0, 0" radius={2} /> // Properties that you can change, out of your taste.
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
```

## Inspiration

This project draws inspiration from various sources:

#### • Code Morphism
Youtube: https://www.youtube.com/watch?v=7eE8xPyXSR4
Codepen: https://codepen.io/zainzafar/pen/oNypoEr

#### • Michaelkoelewijn
Codepen: https://codepen.io/michaelkoelewijn/pen/QOdEWe

## Educational Purpose
This package is created for educational purposes and does not have a license. It aims to provide an easy way for users to add unique cursor effects to their React applications.

Feel free to explore, use, and modify the package to suit your needs. Your feedback and contributions are welcome!

import React from 'react';
import Card from './assets/Card';

function App() {
  return (
    <div>
      <Card car={{
        img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/105969/exterior-right-front-three-quarter-4.jpeg?isig=0",
        title: "Car Title",
        description: "Car Description"
      }} />
      <Card bike={{
        img: "https://cdn.motor1.com/images/mgl/9mNq8X/354:0:1080:1080/royal-enfield-bullet-350---black-gold.webp",
        title: "Bike Title",
        description: "Bike Description"
      }} />
      <Card volvo={{
        img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/105969/exterior-right-front-three-quarter-4.jpeg?isig=0",
        title: "Volvo Title",
        description: "Volvo Description"
      }} />
    </div>
  );
}

export default App;

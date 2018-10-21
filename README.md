# Your weight on distant and potentially habitable exoplanets

This project implements React's Render Props pattern (children as a function approach), trying to give you a good example of its value.

Also gives you an easy way to obtain your weight in your favorite exoplanet, just for free, you know..

## Render Props applied

In this example we want to know our hypothetical weight in some known exoplanets. The piece of info we need to share between components is our weight on Earth (input value), as every planet knows how to calculate its equivalent weight in its particular conditions.

In this implementation, you are going to find a 'Weight' component that's in charge of store weight in his own state, and an 'APP' component that invokes 'Weight' applying render props pattern as children as a function, in order to obtain the Weight state value and pass it as a property to the different planets.

_In order to maintain the simplicity in this first implementation, Exoplanet components remain independent, even being very similar._

## Stack

This project was bootstrapped with CRA.

- React
- Css Modules
- Webpack

## Install instructions

```sh
git clone https://github.com/emilioponce/your-weight-on-habitable-exoplanets.git
yarn i
yarn start
```

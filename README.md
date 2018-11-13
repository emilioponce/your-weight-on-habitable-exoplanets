# Your weight on some potentially habitable exoplanets

This project implements React's Render Props pattern (children as a function approach), trying to give you a good example of its value.

Also gives you an easy way to obtain your weight in your favorite exoplanet, just for free, you know..

## Render Props applied

In this example we want to know our hypothetical weight in some known exoplanets. The piece of info we need to share between components is our weight on Earth (input value), as every planet knows how to calculate its equivalent weight in its particular conditions.

In this implementation, you are going to find a 'Weight' component that's in charge of store the weight value in his own state, and an 'APP' component that invokes 'Weight' applying render props in order to obtain the Weight state value and pass it as a property to the different exoplanets.

_In order to maintain the simplicity, Exoplanet components remain fully independent, even being very similar and therefore being able to share some code._

## Stack

This project was bootstrapped with CRA.

- React
- Css Modules
- Webpack

## Install instructions

```sh
git clone https://github.com/emilioponce/your-weight-on-habitable-exoplanets.git
yarn
yarn start
```

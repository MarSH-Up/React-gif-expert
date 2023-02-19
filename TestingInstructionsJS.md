# Installation and configuration of Jest + React Testing Library (JS)

### In React + Vite projects
1. Install the required packages as dev dependencies:

```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react 
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```
2. Optional: If you are using the Fetch API in your project, 
install the whatwg-fetch package:

```
npm install --save-dev whatwg-fetch

```
3. Update the scripts section of your package.json file:
```
"scripts: {
  ...
  "test": "jest --watchAll"
```
4. Create a Babel configuration file named babel.config.cjs:
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
5. Optional, but eventually necessary, create a Jest configuration file and setup file:
   
Create a jest.config.cjs file:

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```
Create a jest.setup.js file:

```
// If you need to use the Fetch API
import 'whatwg-fetch'; // <-- npm install whatwg-fetch
```
# Installing and Configuring Jest + React Testing Library
### In React + Vite Projects with TypeScript

1. Installations:
```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react 
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```
2. Optional: If you're using the Fetch API in your project:
```
npm install --save-dev whatwg-fetch
```
3. Update the scripts in your package.json file:
```
"scripts: {
  ...
  "test": "jest --watchAll"
```
4. Create a Babel configuration file babel.config.cjs:
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        [ '@babel/preset-typescript' ]
    ],
};
```
5. Create a TypeScript configuration file tsconfig.json:
```
{
    "compilerOptions": {
        "jsx": "react",
        "esModuleInterop": true,
        "lib": ["DOM", "ESNext"],
        "module": "ESNext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "sourceMap": true,
        "target": "ESNext"
    },
    "include": ["src"]
}
```
6. Optional, but eventually necessary, create Jest configuration and setup files:
<strong>jest.config.cjs</strong>

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```
<strong>jest.setup.js</strong>
```
// If you're using the Fetch API in your project
import 'whatwg-fetch'; // <-- npm install --save-dev whatwg-fetch

```
After following these steps, you should be able to run Jest tests with TypeScript and React components in your project.
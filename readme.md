# ModernTodoList: ReactImpl
### step 1: install webpack and babel dependencies:
```
npm i webpack-cli webpack @babel/core babel-loader @babel/preset-env @babel/preset-react webpack-dev-server --save-dev
```
### step 2: install React and Redux
```
npm i react react-dom redux react-redux --save
```
### step 3: set up webpack.config.js
### step 4: set up .babelrc
### step n: install UI Library 
```
npm i antd --save
```
### step n + 1: configure babel less for antd
```
npm i babel-plugin-import babel-plugin-transform-class-properties css-loader style-loader --save-dev
```
### step n + 2: configure babelrc and webpack.config.js 
```
  "presets": ...,
  "plugins": ["transform-class-properties",["import", {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css"
  }]]

  webpack.config.js
  rules: [
      {...}
      ,
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
  ]
```
### Test prod version on Live Server extension

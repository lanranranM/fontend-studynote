# playground1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### **项目结构**

- `.eslintrc.js`: 这个是 [eslint](https://eslint.org/) 的配置文件，可以通过它来管理你的校验规则。
- `babel.config.js`: 这个是 [Babel](https://babeljs.io/) 的配置文件，可以在开发中使用 JavaScript 的新特性，并且将其转换为在生产环境中可以跨浏览器运行的旧语法代码。你也可以在这个里配置额外的 babel 插件。 
- `.browserslistrc`: 这个是 [Browserslist](https://github.com/browserslist/browserslist) 的配置文件，可以通过它来控制需要对哪些浏览器进行支持和优化。
- `public`: 这个目录包含一些在 Webpack编译过程中没有加工处理过的文件（有一个例外：index.html 会有一些处理）。
  - `favicon.ico`: 这个是项目的图标，当前就是一个 Vue 的 logo。
  - `index.html`: 这是应用的模板文件，Vue 应用会通过这个 HTML 页面来运行，也可以通过 lodash 这种模板语法在这个文件里插值。【lodash管理vue应用以外的static html】

- `src`: 这个是 Vue 应用的核心代码目录
  - `main.js`：这是应用的入口文件。目前它会初始化 Vue 应用并且制定将应用挂载到 `index.html` 文件中的哪个 HTML 元素上。通常还会做一些注册全局组件或者添额外的 Vue 库的操作。
  - `App.vue`：这是 Vue 应用的根节点组件，往下看可以了解更多关注 Vue 组件的信息。
  - `components`：这是用来存放自定义组件的目录，目前里面会有一个示例组件。
  - `assets`：这个目录用来存放像 CSS 、图片这种静态资源，但是因为它们属于代码目录下，所以可以用 webpack 来操作和处理。意思就是你可以使用一些预处理比如 [Sass/SCSS](https://sass-lang.com/) 或者 [Stylus](https://stylus-lang.com/)。


介绍

在设定一个 React 项目时候，通常会使用 create-React-app 这个套件来快速产出开发样板环境，而另外一个选择 Next.js 则包好了许多功能，例如Server Side Render （SSR），Webpack，Router.... 不需要额外再多花时间在设定方面，但同时又有弹性可以扩充，非常的快速可以马上开发项目，在使用next时候因为是基于React，如果没有React基础要记得补一下，在这30天中会以Next.js的各种组合来介绍

功能
Next.js功能一直快速增加中，目前以下列出来的是 Next4 版的功能
## 1.Automatic Code Splitting
CODE SPLITTING可以在切换 Router的时候把需要的代码做分割 达到最轻量化 而加快速度，因为 Next.js 的Router的目录是在pages底下使用 File-System 架构目录来替代 Router 这部分的 Code Splitting 已经内建了

## 2.Css
Built-In Css Support
Next.js之中有内建一套 style jsx 的Css In Js 的功能，如下面的风格

```javascript
export default () =>
  <div>
    Hello world
    <p>scoped!</p>
    <style jsx>{`
      p {
        color: blue;
      }
     </style>
   </div>
```

除了內建的 Style Jsx之外也提供了 Inline的 開發寫作
```javascript
export default () => <p style={{ color: 'red' }}>hi there</p>
```

PS. Next.js是很弹性的也可以使用其他如Jss或是 styled-component.... 等等的Css In Js套件
## 3.Static File Serving
静态档案的约定目录，可以把一些静态档案都放在这里例如图档，声音档案等等都可以在根目录下的static（约定目录），也可以透过Express去指定

## 4.Populating

在Next.js中因为是使用 React Render 所有的代码都会 Render在一个DOM节点下，如果今天要改变Document 的 Head 里面的或是等等就可以使用 Next.js 提供的 Head 元件

```javascript
import Head from 'next/head'
```

## 5.Fetching Data And ComponentT LifeCycle
Next.js提供了 Server Side Render 功能当网站使用了SSR 的部分的时候为了SPA与SSR同步 所以提供了一个生命周期 getInitialProps 方便前后端一致

```javascript
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
```

## 6.Routing

Client-Side的部分 Next.js 提供 Link 工具可以使用 import Link from 'next/link'
在转 Routing 时候 Next.js 绑定一些功能，例如 Prefetch 功能可以提前把指定的下一页预处理好增加ux体验
除了Link 像使用tag A href 的方式写在 JSX 中外 ，如果要在程序中使用 API LINK 的功能可以使用
import Router from 'next/router' 范例如下

```javascript
export default () =>
  <div>
    Click <span onClick={() => Router.push('/about')}>here</span> to read more
  </div>
```

### 6.3.ROUTER EVENT
通常可以用在过场的时候，使用以下的一些EVENT管理， 常见可以用在LOADING的图样效果
onRouteChangeStart（url） - 开始转换ROTUER时触发
onRouteChangeComplete（url） - 完成时
onRouteChangeError（err， url） - 有错误时
onBeforeHistoryChange（url） - 如果有异动 BROWSER时

## 7.ShallowW Routing
再换页的时候不去执行 getInitialProps 如果希望在同一页底下每次的参数改变时候不执行 getInitialProps 就可以打开Shallow

## 8.Useing a High Order Component
React 常用的 HOC 在 Next.js 元件中也是可以使用的

## 9.Prefetching Pages
同上述 Router功能 ，使用 import Link from 'next/link' LINK有提供PREFETCH功能可以预先 Preload 资料的功能

## 10.custom Server And Routing
Next.js 可以客制化绑定常见的Server Express Koa2 Hapi Connect.... 等 Routing 部分也非常弹性可以完全自定义

## 11.Dynamic Import
动态加载通常可以先显示某些页面，然后组件可以再慢慢加载，通常也会使用在 Loading 效果， SSR 部分可以自己决定需不需要使用，同时也支持多组件包成同一个动态加载元件

## 12.Custom
在默认 React DOM 结点 Render 之外，如果要填加一些设定就可以在目录中的 pages 中增加一个 _document.js 的档案
在这里就可以在编辑更多自订义的玩意儿

### 12.1 Custom Error HandLing
NEXT提供了 ERROR 元件可以使用
import Error from 'next/error'
### 12.2 Custom Congiuation
一般NEXT默认输出目录是在.next底下，如果要设定输出为其他目录可以在 next.config.js 底下设置

```javascript
   module.exports = {
    distDir: 'build'
   }
```

### 12.3 Customing Webpack Config
因为 Next.js 把基本会用倒的 Webpack 都包好了，如果要增加功能的话可以到 next.config.js 设定

```javascript
module.exports = {
  webpack: (config, { buildId, dev }) => {
    return config
  },
  webpackDevMiddleware: config => {
    return config
  }
}
```

### 12.4 CUSTOMIZING BABEL CONFIG
如果想要挂一些BABEL的新功能 就可以在跟目录底下设定一个.babelrc的档案
在挂入想要增加的PLUGIN 例如

```javascript
{
  "presets": ["next/babel", "stage-0"]
}
```

1. CDN SUPPORT WITH ASSET PREFIX
   支持CDN 设置方法如下可以替换 PREFIX 变成CDN模式

```javascript
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
}
```

## 14.PRODUCTION DEPLOYMENT

Next.js 可以使用 now 直接发布到 now 提供的主机上 https://zeit.co/now
now 主机有提供 http2 功能，透过 now 提供的 cli 界面 在项目目录下直接下 now 即可部署

## 15.STATIC HTML EXPORT
静态页面输出不需要 Server Part 的功能的时候使用，可以参考以下网址
https://github.com/zeit/Next.js/tree/canary/examples/with-static-export

以上是 Next.js 提供的功能
鲜为人知的是，Next.js提供了许多在应用程序中支持CSS的方法。无论你喜欢实用程序CSS及其类还是更喜欢CSS-in-JS，Next.js都能满足您的需求。在本教程中，您将发现在 Next.js 应用程序中实现样式设置的几种方法。让我们实现一个样式文本，当用户将其悬停在一起时，该文本将变为红色：

![文本突出显示](https://cdn.jsdelivr.net/gh/zshipu/images/202205222012618.gif)

## 在Next中使用全局 CSS 样式.js

在 Next.js 应用程序中编写 CSS 的最简单[方法是通过其全局样式表](https://github.com/mariesta/nextjs-styling-options/tree/main/with-global-css))。每个新创建的Next.js项目都带有一个文件夹，其中有一个样式表。`styles``global.css`

因此，您可以立即开始编写CSS，而无需进行任何设置。例如，在 中，您可以添加以下内容：`styles/global.css`

```css
    .paragraph {
      font-size: 16px;
      text-align: center;
    }

    .paragraph:hover {
      color: red;
    }
```

然后，在 中创建的样式将应用于整个应用程序。`global.css`

为此，只能在组件初始化 Next.js 页中的所有页时导入此样式表。`_app.js,``App`

在新的 Next.js 项目中，它已为您完成，但如果文件夹中还没有文件，请创建一个。完成后，导入新的全局样式表：`_app.js``pages`

```css
//In _app.js, import your global stylesheets
    import '../styles/globals.css'

    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }

    export default MyApp
```

然后，可以在应用程序中使用这些类。例如，在您的主页上：`pages/index.js`

```css
    export default function Home() {
      return (
        <p className="paragraph">I am styled with a global css stylesheet</p>
      )
    }
```

### 在 CSS 中使用全局样式的优点

- 无需设置
- 非常适合 POC 等小型项目

### 缺点

- 所有样式都包含在单个文件中
- 随着项目的增长，很难扩展

## 将 CSS 模块与 Next 一起使用.js

与刚开始时全局样式表一样方便，但随着应用程序的增长，此文件的可管理性可能会降低。

此外，Next.js 是一个基于组件的框架，这意味着可以更轻松地拆分相应组件的样式。例如，如果您的页脚有一个组件，则导入包含此组件样式的样式表会更容易，但仅此而已。输入 CSS 模块！

如果您不熟悉，[CSS 模块允许您通过为特定于样式的组件创建文件来隔离 CSS](https://github.com/mariesta/nextjs-styling-options/tree/main/with-css-modules)。它们非常易于使用，因为它们是简单的CSS，但具有扩展名。与前面的方法一样，它不需要设置，并且可以在全局样式表之外使用。`module.css`

下面是一个示例：`Home.module.css`

```css
    //Home.module.css
    .paragraph {
      font-size: 16px;
      text-align: center;
    }

    .paragraph:hover {
      color: red;
    }
```

在组件中，您可以导入样式表并使用它：`pages/index.js`

```css
  import styles from '../styles/Home.module.css'
   export default function Home() {
      return (
        <p className={styles.paragraph}>I am styled with CSS modules</p>
      )
    }
```

### 使用 CSS 模块进行样式设置的优点

- 无需设置
- 组件可以拆分样式
- 可与全局样式一起使用
- 与全局样式不同，避免了类之间的冲突

### 缺点

- 无动态样式（例如，基于加载、错误、成功等状态）

## Next.js Sass 的造型

如果基本的CSS还不够，你发现自己正在寻找一个CSS框架，那么Sass就是最好的选择。它将自己描述为“[具有超能力的CSS](https://sass-lang.com/)”，是一个与CSS兼容的流行框架，并提供了许多很酷的功能，如变量，嵌套和混合。[下面是我们示例项目的 GitHub 存储库](https://github.com/mariesta/nextjs-styling-options/tree/main/with-sass)。

将 Sass 与 Next.js 一起使用非常简单。您所要做的就是安装库：

```css
   npm install sass
    # or
    yarn add sass
```

完成后，您可以开始编写 Sass 代码。不要忘记 或 文件扩展名！下面是 Sass 代码的一个示例：`.scss``.sass``styles/Home.module.scss`

```css
    //Home.module.scss
    $hover-color: red;

    .paragraph {
      font-size: 16px;
      text-align: center;
    }

    .paragraph:hover {
      color: $hover-color;
    }
```

与使用 CSS 模块类似，一旦我们完成 CSS 的编写，我们将导入新文件来设置应用程序的样式。

```css
  import styles from '../styles/Home.module.scss'
    export default function Home() {
      return (
        <p className={styles.paragraph}>I am styled with SASS</p>
      )
    }
```

优点：

- 使用Next.js轻松设置
- 兼容 CSS
- 有趣的功能，满足复杂的样式需求，如变量，嵌套等。

缺点：

- 浪费时间学习 SASS 的新功能

## `More complex than CSS`使用 Styled-JSX 进行样式设置

前三种方法涵盖了最好的样式选项，如果你更喜欢实用工具CSS。但也许你更像是一个CSS-in-JS的人。在这种情况下，[Styled-JSX](https://github.com/vercel/styled-jsx)可能就在你的小巷里。

Styled-JSX由Next.js的创始人Vercel构建，允许开发人员在他们的JavaScript代码中编写CSS。无需进行任何设置，开箱即用。

[下面是 Styled-JSX 的一个示例](https://github.com/mariesta/nextjs-styling-options/tree/main/with-styled-jsx)：

```css
    export default function Home() {
      return (
        <div className="paragraph">
          <style jsx>{`
            .paragraph {
              font-size: 16px;
              text-align: center;
            }

            .paragraph:hover {
              color: red;
            }
          `}</style>
          <p>I am a component styled with Styled-JSX</p>
        </div>
      )
    }
```

### 将 Sass 与 Next 一起使用的优点.js

- 无需设置
- 动态样式
- 可移植性：您的代码（CSS和JS）包含在一个文件中，因此可以轻松移动

### 缺点

- 不像其他 CSS-in-JS 库那样多的支持（Github 上有 7k 颗星，而样式组件有 36k 颗星）
- 混合 CSS 和 JS 时，代码可读性可能更加困难

## 使用带样式的组件

Styled-JSX 开始时可能很方便，但随着应用程序的增长很难调试。因此，您可能会受到[样式组件的](https://blog.logrocket.com/8-awesome-features-of-styled-components/)诱惑。

Styled-components非常实用，因为它是为React创建的。它允许开发人员创建自动注入样式的组件。您还可以使用 props 进行动态样式设置（即，用于禁用或悬停状态）。[在此处](https://github.com/mariesta/nextjs-styling-options/tree/main/with-styled-components)查看示例项目。

要在 Next.js 中使用它，请先安装库：

```css
    npm i styled-components
    # or
    yarn add styled-components
```

使用 styled 组件的唯一缺点是它是为 React 制作的，这意味着它适用于客户端渲染。目前，不支持开箱即用的服务器端呈现。

但是，通过创建新文件并添加以下内容可以轻松解决此问题：` pages/_document.js`

```css
 import Document, { Head, Html, Main, NextScript } from 'next/document'
    import { ServerStyleSheet } from 'styled-components'

    export default class MyDocument extends Document {
      render() {
        return (
          <Html lang="en">
            <Head></Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }

      static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })

          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }
    }
```

完成后，您可以将库导入到组件中并开始使用它。例如，在 中，您可以为主页创建一个带样式的组件：`pages/index.js``Paragraph`

```css
 import styled from 'styled-components'
    const Paragraph = styled.p`
      font-size: 16px;
      text-align: center;

      &:hover {
        color: ${props => props.hoverColor};
      }
    `

    export default function Home() {
      return <Paragraph hoverColor="red">I am a component made with Styled Components</Paragraph>
    }
```

### 将样式化组件与 Next 一起使用的优点.js

- 使用 React 构建，并拥有大量的社区支持
- 基于道具的动态造型
- 像 React 组件一样可定制和可重用（即，而不是`<Title />``<h2 className="title"/>`)

### 缺点

- 服务器端渲染框架所需的其他配置，如 Next.js
- 有点学习曲线习惯功能
- 编译时，样式组件类变得随机（即），使调试更加困难`css-1kybr8i`

## 情感

另一个考虑到 React 的 CSS 框架是 [Emotion](https://emotion.sh/docs/introduction)。它提供了一个CSS prop（将样式直接传递给元素）和样式化的组件。Emotion 的另一个好处是服务器端渲染开箱即用。[在这里查看GitHub](https://github.com/mariesta/nextjs-styling-options/tree/main/with-emotion)。

要在 Next.js 应用程序中使用 Emotion，您首先需要安装该库：

```css
    npm install --save @emotion/react
    #or
    yarn add @emotion/react
```

要使用带样式的组件，还应安装所需的库：

```css
    npm install --save @emotion/styled
    # or
    yarn add @emotion/styled
```

然后，您可以直接开始编写带样式的组件。下面是一个组件示例：` pages/index.js``Paragraph`

```css
    import styled from '@emotion/styled'

    const Paragraph = styled.p`
      font-size: 16px;
      text-align: center;

      &:hover {
        color: ${props => props.hoverColor};
      }
    `

    export default function Home() {
      return <Paragraph hoverColor="red">I am a component made with Emotion (Styled Components)</Paragraph>
    }
```

### 使用情感的优点

- 服务器端支持和轻松设置Next.js
- 通过@emotion/样式，您可以获得样式化组件的所有优点
- 许多包满足不同的需求：CSS，样式，Jest，本机等。

### 缺点

- 与样式组件一样，Emotion会生成随机的类名，这使得使用元素检查器进行调试变得更加困难。
- 一些学习曲线习惯功能

## 样式Next.js与TailwindCSS

使用PostCSS，Next.js还为流行的工具（如Tailwind CSS）提供支持。[通过将Tailwind安装为PostCSS插件](https://github.com/mariesta/nextjs-styling-options/tree/main/with-tailwind-css)，它将扫描您的代码并为您生成正确的样式表。它不仅速度快，而且还附带了一个实用程序类列表供您选择（即间距，文本大小等）。

要将其与 Next.js 一起使用，请从安装 开始，并作为对等依赖项：`tailwindcss``postcss``autoprefixer`

```css
    npm install -D tailwindcss postcss autoprefixer
```

运行 init 以生成所需的文件：`tailwindcss`

```css
    npx tailwindcss init -p
```

此命令生成了两个文件：

- ```
  postcss.config.js,
  ```

  您不需要触摸

  

- `tailwind.config.js`

在后者中，添加模板路径。这些配置将告诉Tailwind CSS扫描哪些代码来生成样式表：

```css
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
```

在 中，添加 Tailwind CSS 指令：`styles/global.css`

```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

如果您使用的是新创建的 Next.js 项目，这将为您完成，但是，如果没有，请确保导入样式表：`pages/_app.js``styles/global.css`

```css
    import '../styles/globals.css'

    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }

    export default MyApp
```

您现在可以开始使用Tailwind CSS。在 中，如果要创建具有悬停状态的居中段落，可以按如下方式操作：`pages/index.js`

```css
    export default function Home() {
      return (
        <p class="text-center text-lg hover:text-red-600">
          I am a component made with Tailwind CSS
        </p>
      )
    }
```

### 使用TailwindCSS的优点

- 许多预定义的类，无论是填充，边距，颜色还是其他
- 熟悉类后，样式设置过程将变得更快
- 编译后的 CSS 通过删除未使用的 CSS 自动优化

### 缺点

- 没有内容与结构的分离，因为CSS和HTML是组合在一起的
- 学习所有不同课程所需的时间

## 结论

选择样式选项取决于许多因素：项目的大小，时间以及大多数个人偏好。值得庆幸的是，无论你喜欢实用型CSS还是CSS-in-JS，Next.js都提供了对CSS的内置支持。

在本教程中，您发现了其中的一些。首先，您学习了如何使用全局样式表或 CSS 模块编写 CSS。对于具有更复杂需求的开发人员，您还将了解如何将 Sass 与 Next.js。

然后，对于那些喜欢CSS-in-JS的人，我们介绍了一些方法，如Styled-JSX，styled-components和Emotion。

最后，您还了解到Next.js为带有PostCSS的Tailwind CSS等工具提供支持，这有利于希望访问具有数千个预构建CSS类的设计系统的开发人员。感谢您的阅读！

## [LogRocket](https://logrocket.com/signup)：全面了解生产环境 Next.js应用

调试 Next 应用程序可能很困难，尤其是当用户遇到难以重现的问题时。如果您对监视和跟踪状态，自动显示JavaScript错误以及跟踪缓慢的网络请求和组件加载时间感兴趣，[请尝试LogRocket](https://logrocket.com/signup)。[![img](https://cdn.jsdelivr.net/gh/zshipu/images/202205222012619.png)](https://logrocket.com/signup)[![LogRocket Dashboard 免费试用横幅](https://cdn.jsdelivr.net/gh/zshipu/images/202205222012620.png)](https://logrocket.com/signup)

[LogRocket](https://logrocket.com/signup)就像一个用于Web和移动应用程序的DVR，从字面上记录Next应用程序上发生的一切。您不必猜测问题发生的原因，而是可以汇总并报告问题发生时应用程序所处的状态。LogRocket 还会监控应用的性能，使用客户端 CPU 负载、客户端内存使用情况等指标进行报告。

LogRocket Redux 中间件包为您的用户会话增加了一层额外的可见性。LogRocket 记录 Redux 存储中的所有操作和状态。

实现 Next.js 应用调试方式的现代化 — [免费开始监控](https://logrocket.com/signup)。

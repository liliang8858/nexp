
NextUI ，本文有两种集成方式    
1. React + NextUI 
2. Next.js + NextUI

# 1.React + NextUI 安装

### [ 安装](https://nextui.org/docs/guide/getting-started#installation)

在 React 项目目录中，通过运行以下任一命令安装 NextUI：

```
yarn add @nextui-org/react
# or
npm i @nextui-org/react
```



### [设置](https://nextui.org/docs/guide/getting-started#setup)

为了让 NextUI 正常工作，您需要`NextUIProvider`在应用程序的根目录下设置。

#### [React](https://nextui.org/docs/guide/getting-started#react)

转到应用程序的根目录并执行以下操作：

```
import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  );
}
```



#### [Next.js](https://nextui.org/docs/guide/getting-started#next.js)

1. 转到`pages/_app.js`或`pages/_app.tsx`（如果它不存在则创建它）并添加：

```
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
```



1. 转到`pages/_document.js`或`pages/_document.tsx`（如果不存在则创建）并添加：

```
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [<>{initialProps.styles}</>]
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```



### [使用 NextUI 组件](https://nextui.org/docs/guide/getting-started#using-nextui-components)

安装 NextUI 后，您可以使用以下任何组件。NextUI 使用 tree-shaking，因此在构建过程中未使用的模块不会包含在包中，并且每个组件都单独导出。

```
import { Button } from '@nextui-org/react';

const Component = () => <Button>Click me</Button>;
```





### [单个组件导入](https://nextui.org/docs/guide/getting-started#individual-components-import)

```
import Button from '@nextui-org/react/button';

const Component = () => <Button>Click me</Button>;
```





### [NextUIProvider 道具](https://nextui.org/docs/guide/getting-started#nextuiprovider-props)

| 属性         | 类型           | 可接受的值                                                   | 描述                                          | 默认    |
| :----------- | :------------- | :----------------------------------------------------------- | :-------------------------------------------- | :------ |
| **主题**     | `NextUIThemes` | [主题对象](https://nextui.org/docs/guide/getting-started#theme-object) | 可选的自定义主题，默认 NextUI 应用`light`主题 | -       |
| **禁用基线** | `boolean`      | `true/false`                                                 | NextUI 自动包含`<CssBaseline/>`               | `false` |



[打字稿类型](https://nextui.org/docs/guide/getting-started#typescript-types)


[主题对象](https://nextui.org/docs/guide/getting-started#theme-object)

> 有关更多信息，您可以查看[Stitches 主题文档](https://stitches.dev/docs/api#theme)


```
{
  "type": "light", // light / dark
  "className": "", // optional
  "theme": {
    "colors": {},
    "space": {},
    "fontSizes": {},
    "fonts": {},
    "fontWeights": {},
    "lineHeights": {},
    "letterSpacings": {},
    "sizes": {},
    "borderWidths": {},
    "borderStyles": {},
    "radii": {},
    "shadows": {},
    "zIndices": {},
    "transitions": {}
  }
}
```







# 2.NextUI + Next.js



### [服务器渲染](https://nextui.org/docs/guide/nextui-plus-nextjs#server-render)

的所有组件`@nextui-org/react`都与**Server Render**兼容。实际上，您现在看到的页面是由服务器渲染的。

服务器端渲染 (SSR) 是在服务器上渲染网页并将其传递给浏览器（客户端）的过程，而不是在浏览器中渲染它们。SSR 向客户端发送一个完全渲染的页面；客户端的 JavaScript 包接管并启用 SPA 框架运行，在 React.js 中使用服务器端渲染的最佳选择是使用[Next.js](https://nextjs.org/).

如果您担心通过实现服务器端呈现而失去单页应用程序的优势，您可以使用该`hybrid render`应用程序。请阅读[Next.js 团队的帖子](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support)了解更多。

此外，对于**服务器端渲染**和 Web 应用程序，我们强烈建议您阅读这篇著名的帖子 [丰富网络应用程序的 7 个原则](https://rauchg.com/2014/7-principles-of-rich-web-applications)来自*吉列尔莫·劳赫*。



### [Next.js](https://nextui.org/docs/guide/nextui-plus-nextjs#next.js)

在[Next.js](https://nextjs.org/)框架，需要自定义文件`_document.js`，请参考[Next.js 文件在这里](https://nextjs.org/docs/advanced-features/custom-document) 创建文件`_document.js`。

然后我们将以下代码添加到文件中：

```react
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```



`_document.js`这是您的文件应该是什么样子的示例：[_文档.jsx](https://github.com/nextui-org/nextui/blob/main/examples/create-next-app/pages/_document.js).

### [自定义服务器](https://nextui.org/docs/guide/nextui-plus-nextjs#custom-server)

在自定义服务器中，还可以从函数中获取样式集，`CssBaseline.flush`如下所示。

```react
import React from 'react';
import ReactDOM from 'react-dom/server';
import { CssBaseline } from '@nextui-org/react';
import App from './app';

export default (req, res) => {
  const app = ReactDOM.renderToString(<App />);
  const styles = CssBaseline.flush();
  const html = ReactDOM.renderToStaticMarkup(
    <html>
      <head>{styles}</head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: app }} />
      </body>
    </html>
  );
  res.end('<!doctype html>' + html);
};
```
























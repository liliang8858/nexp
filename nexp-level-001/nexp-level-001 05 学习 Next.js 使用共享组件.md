**使用共享组件**

我们知道 Next.js 是和页面相关的. 通过导出一个 React组件创建一个页面, 然后把它放到 **pages** 目录中, 基于这个文件名, Next.js存在一个固定的URL.

因为导出的页面是Javascript模块, 我们当然也能够导入其他组件进来.

在这节课中, 我们会创建一个共享的页头组件, 并在多个页面之间共用. 最后我们事先一个布局组件来看看, 它是如何定义多个页面的外观的.

**设置**

为了演示这节课说讲的知识点, 我们需要一个可运行的示例应用程序, 通过下面的命令来获取一个现成的应用程序:

```
git clone https://github.com/arunoda/learnnextjs-demo.git
cd learnnextjs-demo
git checkout navigate-between-pages
```

可以通过下面的命令行来运行:

```
npm install
npm run dev
```

访问 http://localhost:3000.

**创建页头组件**

现在, 让我们来为我们的应用程序创建一个页头组件. 添加下面的代码到 **components/Header.js** 模块文件中.

```
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
```

该组件包含两个链接到其他页面的连接. 我们同时给两个链接设置了一个样式对象, 设置了它的字体为15.

**使用页头组件**

现在, 让我们在页面中导入这个刚创建的页头组件. 现在对于 **pages/index.js**, 它的内容看起来像下面这样:

```
import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
  </div>
)
```

你可以对 **pages/about.js** 页面做同样的事情. 现在, 如果你访问 http://localhost:3000/, 你会看到新的页头, 并且能够在页面之间进行导航.

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202205222051808.18534311465837683)

现在, 我们对这个应用程序进行一些小修改.

停止应用程序.

重命名 **components** 目录为 **comps**.

从 **../comps/Header** 导入, 而非 **../components/Header**

再次启动应用程序

它还能工作么?

**组件目录**

是的, 和之前一样, 工作正常! 我们不需要把组件放在一个特殊的目录下, 组件目录可以是任意名称, 唯一特殊的目录就是 **pages** 目录, 你甚至可以在 **pages** 目录中创建组件目录. 这里, 我们没有直接在 **pages** 目录下创建组件目录是因为, 我们不需要直接连接到 Header 组件.

```
译注: pages目录就像Web服务器的根目录一样, 通过自然的目录/URL路径, 你可以访问到 pages 目录下的组件. 就像Linux文件系统一样, URL中的PATH和文件系统的路径是一一对应的.
```

**布局组件**

在我们的应用程序中, 我们在多个页面之间共享一个公共的样式. 为此我们可以创建一个公共的布局组件, 并且在多个页面使用它. 下面是一个例子, 添加下面的代码到 **components/MyLayout.js** 模块文件:

```
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
```

然后, 我们可以像下面一样, 在我们的应用程序页面中使用这个布局组件:

```
// pages/index.js

import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>Hello Next.js</p>
    </Layout>
)
// pages/about.js

import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

访问 http://localhost:3000/, 看看有什么效果.

现在我们从布局组件中删除 **{props.chidren}**, 看看会发生什么?

**渲染子组件**

如果你删除了 **{props.chidren}**, 布局组件Layout不再渲染它所包含的内容:

```
export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

这只是创建布局组件的一种方式. 还有创建布局组件的其他方式:

```
import withLayout from '../lib/layout'

const Page = () => (
  <p>This is the about page</p>
)

export default withLayout(Page)
const Page = () => (
  <p>This is the about page</p>
)

export default () => (<Layout page={Page}/>)
const content = (<p>This is the about page</p>)

export default () => (<Layout content={content}/>)
```

**使用组件**

上面, 我们提到了, 两种创建共享组件的方式:

1.作为公共的页头组件
2.作为布局组件

你可以把组件用于: 设置公共样式, 页面布局, 以及任何其他你想要的用途. 另外, 你也可以从NPM模块中导入组件并且使用他们.


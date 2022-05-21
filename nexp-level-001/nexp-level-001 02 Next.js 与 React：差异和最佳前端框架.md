随着每年都有新的 JavaScript 框架和库出现，很难跟上不断变化的 JS 生态系统的步伐。

但即使在[JavaScript 框架](https://snipcart.com/blog/javascript-frameworks)和库的汪洋大海中，React 和 Next.js 也能脱颖而出。React 是最受前端开发人员欢迎的 JavaScript 库。Next.js 虽然比 React 小，但多年来一直在稳步增长，并有望成为最常用的 JavaScript 框架。

React 的 UI 库非常健壮，但强大的功能带来了巨大的责任，你必须配置 Babel、Webpack、ESLint 和一个服务器——至少是这样。如此广泛的工具对每个人来说都是令人生畏的，尤其是想要更直接的方法的初学者和开发人员。

Next.js 是一个基于 React 的 UI 库构建的前端 JavaSript 框架，旨在通过使开发人员能够在零配置环境中构建 Web 应用程序来减少 JavaScript 疲劳，该环境提供了他们所需的所有开箱即用工具。

框架和库之间的区别在于，框架具有更多功能，并且专注于开发的多个方面，同时还为您提供编写代码和构建文件的规则和指南。

对于已经熟悉React 框架[Create React App](https://create-react-app.dev/)的 React 用户来说，切换到另一个框架就足以让他们产生 PTSD，但是使用 Next.js，回报可能值得最初的麻烦。

在本文中，我们将研究这两种工具，了解它们的比较方式，并讨论何时适合使用每种工具。

想知道哪一款适合你吗？

## 什么是React？

[React](https://reactjs.org/)由 Facebook 于 2011 年创建，然后于 2013 年开源，它是一个声明性、高效且灵活的 JavaScript 库，用于构建受 XHP（PHP 的 HTML 组件库）影响的交互式用户界面。

React 通常用于开发需要在其 UI 上不断更改数据的 Web 应用程序。想想 Facebook 和 Instagram，您可以在其中滚动查看新帖子和内容，而大多数页面部分保持不变。

传统方法需要在您每次点击某些内容时重新加载整个网站（或应用程序），这对访问者来说既耗时又令人沮丧。

**React 通过使用称为组件**的 UI 片段来避免重新处理每一行代码。

购物清单的典型 React 组件如下所示：

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Apples</li>
          <li>Oranges</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
}
```

因此，在使用 React 构建应用程序时，会创建独立且可重用的组件，然后将其组合以构建复杂的用户界面。

要了解组件如何交互，让我们看一下下图。该图显示了一个类似 Twitter 的应用程序。

![类似 Twitter 的应用程序组件的架构。](https://cdn.jsdelivr.net/gh/zshipu/images/202205211040408.png)

如您所见，应用程序的每个部分都代表一个组件，可以单独开发，然后组合在一起形成一个应用程序。

组件告诉 React 在屏幕上显示什么。当数据发生变化时，图书馆

在称为渲染的过程中更新并生成新的图像或文本。

现在我们知道了 React.js 这个库是什么，让我们来谈谈 Create React App (CRA) 这个框架。

### 什么是创建React应用程序？

将 React.js 集成到网站中的最简单方法是使用 Create React App。它设置了一个开发环境，您可以在其中利用[React 的 UI 组件](https://snipcart.com/blog/storybook-react-tutorial-example)库并开箱即用地构建基于 JavaScript 的 Web 应用程序。

如果您想运行，请创建 React App 并自己尝试。只需打开 Node.js 并键入下面的代码。

```bash
npx create-react-app my-app
cd my-app
npm start
```

React 固执己见的方法可能对一些开发人员来说太过分了，他们更喜欢像 Next.js 这样固执己见的简单框架来完成工作。

## Next.js 是什么？

[Next.js](https://nextjs.org/)是一个用于 React 应用程序的轻量级框架。在 Web 开发中，由于它的静态站点和服务器端渲染，它被用来构建快速的 Web 应用程序。

Next 允许您构建一个 React 应用程序，该应用程序使用服务器端渲染将内容提前存储在服务器上。这样，访问者和搜索机器人与完全预渲染的 HTML 页面和完全交互式的网站或应用程序进行交互。



![显示服务器端渲染如何工作的图形](https://cdn.jsdelivr.net/gh/zshipu/images/202205211040386.png)

这种方法确保访问者可以在不到三秒的时间内看到一个交互式站点。

Next.js 的内置配置和样式解决方案简化了开发并为您提供模板和网站启动器来启动您的 Web 应用程序。

但是，如果您喜欢冒险，Next.js 让您可以自由地深入了解并调整配置，以充分利用您的应用程序的性能。但是，您甚至可能不需要这样做，因为您开箱即用的东西已经很不错了。

这是一张图表，展示了 Nex.js 如何与 React 和其他工具一起使用，以在几秒钟内呈现一个功能齐全的 Web 应用程序。



![显示 Next.js 框架库的图形](https://cdn.jsdelivr.net/gh/zshipu/images/202205211043790.jpeg)



如果您从未使用过 Next.js 并且想亲自尝试一下，您可以在终端上运行这个网站启动器并进行尝试。

```bash
npx create-next-app nexp001 --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

## Next.js 比 React.js 好吗？

老实说，很难说一个比另一个更好，因为感觉就像将苹果与橙子进行比较。

请记住，React.js 是一个 JS 库——一组可用于构建 UI 的工具——而 Next.js 是一个框架——构建整个应用程序所需的蓝图和规则——基于 React，所以它不是一个选择一种而不是另一种情况。

就像你不会在枪战中带上香蕉一样，有时使用 React 比使用 Next.js 更有意义，反之亦然。

**使用 React 如果...**

- 您需要高度动态的路由
- 你已经熟悉 JSX
- 您需要离线支持

**如果…，请使用 Next.js**

- 你需要一个包罗万象的框架
- 您需要后端 API 端点
- 你需要服务器端渲染

## Next.js 与 React 比较

现在您知道何时使用每个框架，让我们对 React 和 Next.js 进行并排比较。

|                  | React                           | Next.js                             |
| ---------------- | ------------------------------- | ----------------------------------- |
| **服务器端渲染** | 不支持开箱即用的 SSR。          | 支持不同类型的 SSR 和增量静态再生。 |
| **可配置性**     | 不是很可配置。                  | 您几乎可以配置所有内容。            |
| **维护**         | 要求您随时了解新的 React 版本。 | 更容易维护。                        |
| **学习曲线**     | 更陡峭的学习曲线。              | 如果您了解 React，则更容易学习。    |
| **表现**         | 加载速度比 Next.js 慢。         | 比 React 和 CRA 更快。              |
| **社区**         | 庞大的用户社区                  | 较小但非常敬业的社区                |
| **文档**         | 可靠的文档和开发者社区。        | 较小的社区，但一尘不染的文档。      |

## React 和 Next.js 的优缺点

## 优点和缺点

我们已经看到 Next.js 和 React 并排比较，您可能对选择哪一个有了一些想法。但这只是冰山一角。让我们更深入地了解每个框架的优缺点。

### React的优点

- **比 Next.js 更容易学习：**它基于 JavaScript，并且有大量文档可以帮助您快速入门。使用 Next.js，你需要学习 React，*然后*是 Next.js。
- **允许您重用组件：**每个 React 应用程序都由可重用的组件组成，您可以混合搭配以构建 Web 应用程序。
- **附带预打包的脚本：**使用 Create React App 等工具，React.js 允许您以最少的配置快速启动项目。
- **强大的用户社区：** React 在 Github 上有 182,000 颗星，以及一个由数千名用户创建内容以帮助其他人使用该库构建项目的社区。

### React 的缺点

- **不如 Next.js 对 SEO 友好：**使用 React 创建的单页应用程序不适合 SEO，因为加载它们通常需要更长的时间，而 Next.js 在构建时考虑了 SEO。
- **JSX 可能令人反感：**虽然 JSX 扩展了 React 的功能，但对于可能不熟悉它的新开发人员来说，它可能会令人望而生畏。
- **与 Next.js 相比性能较低：**与使用 Next.js 构建的类似 Web 应用程序相比，React 应用程序通常需要更长的时间才能成为交互式应用程序。

## Next.js 的优点

- **开箱即用的 SSR：**您不需要像使用 React 和 CRA 那样创建服务器端渲染应用程序的额外配置。
- **减少对构建工具的摆弄：在**Next.js 中，您无需担心额外的工具和捆绑程序，因为所有内容都包含在其初始配置中。
- **比 React 更适合 SEO：** SSR 使基于 Next 构建的 Web 应用程序可以更快地抓取和访问，从而提高搜索引擎排名。
- **图像优化：** Next.js 带有一个用于优化图像的 API。该工具获取您在 Web 应用程序上使用的每张图像并优化其大小以将它们提供给客户
- **支持第三方 API：** Next.js 支持 API Routes，可用于处理用户身份验证、表单提交、数据库查询，甚至自定义 Slack 命令。

### Next.js 的缺点

- **需要 Node.js 进行动态路由：**与 React 不同，Next.js 并不容易支持动态路由，而且设置起来可能很复杂。
- **大型网站的构建时间长：**开发人员抱怨 Next.js 花费了很多时间来构建网站，虽然有一些解决方法，但它会阻止一些用户。
- **潜在的框架锁定：**如果您在没有学习基础知识的情况下直接使用 Next.js，您可能会被锁定并在必要时无法更改为新框架。

到目前为止，您可能已经知道要使用哪个框架，但暂时不要做出任何轻率的决定，并检查这些用例，以便最终下定决心。

## React 的最佳用例

虽然 Facebook 为其平台创建了 React，但社交媒体平台并不是 React 的唯一用例。您可以将其用于各种项目；让我们来看看其中的一些：

### 数据可视化



![机身仪表板屏幕截图](https://cdn.jsdelivr.net/gh/zshipu/images/202205211043069.png)

[Airframe](https://madewithreactjs.com/airframe)是一个基于 React 的免费开源仪表板。Airframe 为开发人员提供了工具来构建具有漂亮、干净 UI 的强大仪表板。

该工具专为大型项目而设计。其庞大的组件库可用于创建各种自定义 Web 应用程序，如 CRM、CMS、仪表板和分析平台。

### 跨平台应用



![智能手机上 Uber 应用程序的屏幕截图](https://cdn.jsdelivr.net/gh/zshipu/images/202205211044127.jpeg)

React 用户还可以利用[React Native](https://reactnative.dev/)为 Android 和 iOS 构建移动应用程序，从而节省构建两个独立应用程序所需的时间和精力。它遵循“一次学习，随处编写”的理念，使开发人员无需 Java、C 或 Swift 即可构建移动应用程序。

[例如， Uber](https://www.uber.com/ar/es/)使用 React Native 作为其技术堆栈中的核心框架，以确保可以在 iOS 和 Android 平台上访问该应用程序。

### 单页应用程序 (SPA)



![Trello 单页应用截图](https://cdn.jsdelivr.net/gh/zshipu/images/202205211044213.png)

像[Trello](https://trello.com/)这样的应用程序是基于 React 构建的 SPA 的一个很好的例子。Trello 使用看板来创建将任务分解为可管理块的工作流。

当访问者浏览 SPA 时，他们会继续与同一个页面进行交互，而不是每次点击都加载一个新页面。React 支持路由，并提供了 React-router 库来实现这一点。

## Next.js 的最佳用例

Next.js 非常适合需要 SEO 和速度的网站项目。它可用于各种类型的网站，例如：

### 电子商务商店



![AT&T eCommerce website screenshot](https://cdn.jsdelivr.net/gh/zshipu/images/202205211044623.png)

[电信巨头AT&T](https://www.att.com/)使用 Next.js 为其在美国的在线商店提供支持。Next.js 的架构使他们能够将其在线商店与其他第三方系统（如 CMS、PIM 和 ERP）集成。

### 客户门户



![PlayStation 客户门户截图](https://cdn.jsdelivr.net/gh/zshipu/images/202205211044275.png)

门户网站也可以从 Next 的超快速度中受益。例如，[PlayStation 竞赛中心](https://compete.playstation.com/en-pl/play)托管用户生成的内容，访问者可以实时互动。Next.js 还使索尼的开发人员能够将个性化功能和数据安全功能集成到平台中。

### 营销网站



![InVision营销网站截图](https://cdn.jsdelivr.net/gh/zshipu/images/202205211045618.png)

如果公司想将访问者转化为客户，他们需要快速的网站。Next.js 为[InVision](https://www.invisionapp.com/)等网站提供支持，为它们提供吸引和转化新访问者的功能和性能优势。

## 结论

我相信 React 和 Next.js 是很棒的、强大的工具，可以帮助你构建漂亮、快速的 Web 应用程序，而且在我心中没有赢家。他们服务于不同的任务。

例如，如果您正在构建一个需要图像优化和零配置部署的 SEO 驱动的营销网站，则可以使用 Next.js。

另一方面，React 将为需要强大 UI 和跨平台应用程序支持的网站提供更好的结果。此外，如果你是初学者，从 React 开始更有意义。

在我结束之前，让我们倒带。

- React 为您提供了一组工具来构建基于 JavaScript 的 UI。此外，使用 CRA 和 React Native 等工具，您可以开箱即用地创建单页面和跨平台应用程序，但您必须处理 Babel、ESlint 和 webpack。
- Next.js 虽然仍然基于 React，但对其进行了改进，使您能够构建速度极快的 Web 应用程序和 SPA。Next 的 SSR 功能减少了加载时间，提供了可靠的性能和 SEO 收益。但请记住，如果您选择 Next.js，您将不得不在服务器上托管您的应用程序，这会增加您的基础架构的规模和复杂性。

然而，最终这一切都将是 React 编码。如果你选择 Next.js，你仍然需要先学习 React，因为它建立在 React 的 UI 库和 React 的核心方面，所以无论你走哪条路，你都需要 React。

从我的角度来看，如果您是初学者，最好先学习 React 的基础知识，然后转向 CRA 学习基础知识。

如果你真的需要它，我会朝着 Next.js 前进。成为框架热潮的牺牲品太容易了。最后，重要的是在对您有意义时使用工具。

话虽如此，选择权在您手中，取决于您的目标和您正在构建的项目。

那你呢？你用过 React 和 Next.js 吗？在评论中让我们知道您对他们的看法。
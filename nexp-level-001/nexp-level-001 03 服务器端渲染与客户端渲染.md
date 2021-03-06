最近在准备技术面试时，我偶然发现了服务器端渲染 (SSR) 和客户端渲染 (CSR) 的概念，我并不清楚它的含义，也不知道它们之间的区别是什么两种方法。

在我的研究中，我意识到在选择在您的网站上实施哪种方法时，这不是一个简单的决定。出于所有这些原因，我决定写一篇关于什么是 SSR 和 SCR 以及它们的优缺点的博文。

长期以来，呈现我们视图的唯一方法是 SSR，在请求之后，服务器返回一个完全填充的 HTML 页面，这是一个有效且快速的过程，但每次用户导航到不同的路线时，这需要再重复一遍，不过，对于我们当时拥有的那种静态网站来说，这是一种有效的策略。

随着动态网站和 javascript 框架的出现，SSR 开始被一种更新的方法 CSR 取代。

让我们更详细地讨论这两种方法……

# 服务器端渲染

当用户访问网页时，客户端向服务器发出 HTTP 请求，作为响应，服务器在响应中发回 HTML，因此浏览器可以将其显示在用户的屏幕上。正如我之前提到的，每次用户转到不同的页面时，都会重复这个过程，即使新页面上的微小变化，也会呈现整个页面。

客户端发送请求和服务器发送响应之间的时间可能取决于多种因素，其中一些是：

- 服务器的位置
- 网速
- Web 服务器功能（当前流量、Web 应用程序的编写方式等……）

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202205212103589.png)

## **SSR 优点：**

- 初始页面加载速度更快
- 更适合搜索引擎优化 (SEO)
- 非常适合静态网站

## SSR 缺点：

- 对服务器的频繁请求
- 整体缓慢的页面渲染

# 客户端渲染

CSR 是一种相对较新的方法，随着 Angular、React 和 Vue.js 等框架的出现而流行起来。使用 CSR，页面使用 Javascript 直接在浏览器中呈现，所有逻辑，如数据获取、路由等，都由客户端处理。服务器只发送网站的样板，内容由客户端负责。这一次，如果用户导航到不同的路线，浏览器将使用 Javascript 加载新内容，而不是向服务器发出新请求，因为我们没有渲染整个页面，所以速度更快。然而，这种方法对搜索引擎优化 (SEO) 并不友好，因为在页面加载之前不会呈现内容，因此，一些搜索引擎爬虫可能无法读取页面内容。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202205212103025.png)

## 企业社会责任专家：

- 初始加载后的快速网站渲染
- 丰富的站点交互
- 非常适合 Web 应用程序（动态网站）
- 强大的 JavaScript 库/框架选择

## 企业社会责任的缺点：

- 如果未正确实施，则 SEO 低。
- 初始加载可能需要更多时间。
- 在大多数情况下，需要一个外部库。

# 结论

重要的是要认识到这两种方法之间的差异以及它们的优缺点是什么，因此您可以为您的网站选择最佳方法，因为它根本不是非黑即白的选择。

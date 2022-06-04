---
title: css-level-001 学习 TailwindCSS：制作个人资料卡
author: 知识铺
date: 2022-05-23 10:05:00+08:00
tags: [css,nexp]
---

## Tailwind 是一个 CSS 框架

Tailwind 是一个 CSS 框架，可让您轻松构建出色的响应式 UI。
如果您正在学习 TailwindCSS，此博客可以帮助您通过在 5 分钟内创建一个带有按钮的迷你配置文件卡来构建更强大的概念。

[![轮廓](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958282.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--Is1BG4-B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jir3csift2d3h44mginl.jpg)

1. 首先，您需要在项目中安装 Tailwind。现在有以下3种方法。访问您喜欢的那个。由于这是一张简单的卡片，我将只使用 CDN：
   - 通过 CLI（最快）：[阅读这里](https://tailwindcss.com/docs/installation)
   - 通过 CDN：[在这里阅读](https://tailwindcss.com/docs/installation/play-cdn)-`we will use this`
   - 作为 PostCSS 插件：[阅读这里](https://tailwindcss.com/docs/installation/using-postcss)
2. 我们在这个项目中使用 CDN。所以`link`在`<head>`标签中添加这个：

```
 <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```



------

- 现在我们准备好使用 Tailwind。让我们首先定义基本结构：
  - 要使用此项目中使用的图像，请复制[此链接](https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-8.png)

```
   <!-- main - parent div -->
    <div class="main">
        <!--card-->
        <div class="card">
            <!--profile-image-->
            <div class="image">
                <img src="#" alt="profile">
            </div>
            <!--name-->
            <div class="name">
                <p>Simp</p>
            </div>
            <!--username-->
            <div class="username">
                <p>@simpyy</p>
            </div>
            <!--work-->
            <div class="work">
                <p>Front-end developer 🧑‍💻</p>
            </div>
            <!-- follow button -->
            <div>
                <button>Follow</button>
            </div>
        </div>
    </div>
```



这就是你现在看到的。

[![第一的](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958205.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--dxdTjDZf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xvzz63b400sq4rgz9msy.png)
很无聊吧？

> 让我们通过添加 Tailwind 为我们提供的类来让它变得有趣：

------

我们将从上到下开始以避免混淆。但首先我会选择 div 有一个类`"card"`：

### **卡片部分**

```
<div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64">
```



- `bg-white`：将白色背景设置为`div`

- ```
  flex items-center justify-center
  ```

  : 就像我们使用 CSS flexbox 模型将 div 居中一样。

  - `flex:`将显示设置为 flex
  - `items-center:` `align-items: center;`在 CSS 中
  - `justify-center:` `justify-content: center;`在 CSS 中

- ```
  p-4:
  ```

  设置 1rem 的填充

  - [在此处](https://tailwindcss.com/docs/padding)检查所有可能的值

- ```
  shadow-lg:
  ```

  为 div 设置阴影

  - 可能的值：`sm | md | lg | xl | 2xl | inner`

[![主目录](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958431.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--7xl6u2CN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/guoxqtwh0xueoryt7hnh.png)

- ```
  rounded-2xl:
  ```

  设置元素的边框半径

  - ```
    md | lg | full | xl | 2xl
    ```

    - `w-64:`我们希望我们的卡片具有固定宽度，因此请相应地设置它。
    - 尝试`w-{number}`和[探索更多](https://tailwindcss.com/docs/width#fixed-widths)

#### 结果：

[![卡片分区](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958000.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--2Tp6ypdP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kldobfbers1eefbg1ttm.png)
我们的卡片已经开始成形，所以让我们把它居中并开始设计吧！

------

### **父（最高）DIV**

- 为了使`card`div 居中，我将使用父 div`main`并将 CSS 网格设置为它：

```
<!-- parent div -->
<div class="main bg-yellow-400 grid place-items-center h-screen">
```



- ```
  bg-yellow-400:
  ```

  设置黄色背景颜色。

  - `bg`： 背景
  - `yellow`: 颜色 | [在这里](https://tailwindcss.com/docs/customizing-colors#default-color-palette)尝试更多可用的颜色
  - `400`: 色调 | 范围从 50-900

- ```
  grid h-screen place-items-center:
  ```

  使卡片 div 居中

  - `grid:`将显示设置为网格

  - ```
    place-items-center
    ```

    - 像`place-items: center;`在 CSS 中一样工作

  - `h-screen:`设置全视口高度（全宽作为屏幕）

#### 结果：

[![bg](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958857.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--l63oSQPx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fqlr1yezlh8gsb59k4dg.png)
现在这张卡片看起来好多了，也更明显了。

### **简介图片部**

```
<div class="profile mx-auto rounded-full py-2 w-16 "> 
    <img src="/simp.jpg" alt="profile">
</div>
```



- 要使用此项目中使用的图像，请复制[此链接](https://www.disneyplusinformer.com/wp-content/uploads/2021/09/The-Simpsons-Profile-Icons-8.png)

- `mx-auto:`为（左右）两侧设置相等的边距，因此使图像居中

- ```
  rounded-full:
  ```

  给出圆形

  - 就像`border-radius: 50%`

- `py-2:`设置`padding-top`和`padding-bottom`值都为 0.5rem

- ```
  w-16:
  ```

  设置图像宽度

  - 根据卡片调整图像大小（实验值）

#### 结果：

[![图像](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958341.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--T07-iZJY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2rl62pz7ibprams0h2wr.png)

### **名称分区**

```
<div class="name text-gray-800 text-2xl font-medium mt-4 ">
      <p>Simp</p>
</div>
```



- `text-gray-800:`将`font-color`属性设置为灰黑色

- ```
  text-2xl:
  ```

  增加字体大小

  - 可能的值：`sm | base | lg | xl | 2xl ...`

- ```
  font-medium:
  ```

  设置

  ```
  font-weight
  ```

  属性

  - `light | normal | medium | semibold | bold`

- `mt-4:`套`margin-top`

### **用户名 DIV**

```
<div class="username text-gray-500">
      <p>@simpyy</p>
</div>
```



- `text-gray-500:`将字体颜色设置为浅灰色。

### **工作部门**

```
<div class="work text-gray-700 mt-4">
     <p>Front-end developer 🧑‍💻</p>
</div>
```



- `text-gray-700:`将字体颜色更改为灰色。
- `mt-4:`套`margin-top`

[![字体](https://cdn.jsdelivr.net/gh/zshipu/images/202206021959749.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--e5bepuyO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/15mgokbbxs4lztt4rhin.png)

现在几乎所有事情都完成了。*让我们完成设计Follow Button*的最后工作。

### **关注按钮**

```
<div class="w-full mt-8">
    <button class="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
        Follow
    </button>
</div>
```



> *分区*：

- `w-full`设置全宽（根据父 div），以便正确覆盖卡片。
- `mt-8:`套`margin-top`

> *按钮*：

- ```
  bg-blue-500:
  ```

  设置蓝色

  - [在这里](https://tailwindcss.com/docs/customizing-colors)探索所有可能的颜色

- `py-2`和:分别`px-4`设置`padding-bottom`和`padding-top`

- `text-white:`设置`font-color`为白色

- `hover:bg-blue-600`: 设置 CSS 悬停属性，在这种情况下，我们只是增加了阴影，`500 to 600`使其看起来更逼真。



动图![btn](https://cdn.jsdelivr.net/gh/zshipu/images/202206021958677.gif)




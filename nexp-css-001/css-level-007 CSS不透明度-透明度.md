该`opacity`属性指定元素的不透明度/透明度。

------

## 透明图像

该`opacity`属性的取值范围为 0.0 - 1.0。值越低，越透明：

不透明度 0.2

![image-20220605135342443](https://cdn.jsdelivr.net/gh/zshipu/images/202206051354002.png)



不透明度 0.5

![image-20220605135426243](https://cdn.jsdelivr.net/gh/zshipu/images/202206051354422.png)

不透明度 1

![image-20220605135440524](https://cdn.jsdelivr.net/gh/zshipu/images/202206051354175.png)

### 例子

```css
img {
 opacity: 0.5;
}


```



------

## 透明悬停效果

该`opacity`属性通常与`:hover` 选择器一起使用以更改鼠标悬停时的不透明度：

![image-20220605135614569](https://cdn.jsdelivr.net/gh/zshipu/images/202206051357111.png)



鼠标经过

![北极光](https://cdn.jsdelivr.net/gh/zshipu/images/202206051357297.jpg)

### 例子

```css
img {
 opacity: 0.5;
}

img:hover {
 opacity: 1.0;
}
```





### 示例说明

第一个 CSS 块类似于示例 1 中的代码。此外，我们添加了当用户将鼠标悬停在其中一个图像上时应该发生的情况。在这种情况下，当用户将鼠标悬停在图像上时，我们希望图像不透明。用于此的 CSS 是`opacity:1;`.

当鼠标指针离开图像时，图像将再次透明。

反向悬停效果示例：

![北极光](https://cdn.jsdelivr.net/gh/zshipu/images/202206051357650.jpg)

鼠标离开

![image-20220605135614569](https://cdn.jsdelivr.net/gh/zshipu/images/202206051358102.png)





### 例子

```css
img:hover {
 opacity: 0.5;
}
```





------

------

## 透明盒子

当使用该`opacity`属性为元素的背景添加透明度时，其所有子元素都继承相同的透明度。这会使完全透明元素内的文本难以阅读：

不透明度 1

不透明度 0.6

不透明度 0.3

不透明度 0.1

![image-20220605135937501](https://cdn.jsdelivr.net/gh/zshipu/images/202206051359992.png)

### 例子

```css
div {
 opacity: 0.3;
}
```





------

## 使用 RGBA 的透明度

如果您不想对子元素应用不透明度，就像我们上面的示例一样，请使用**RGBA**颜色值。以下示例设置背景颜色而不是文本的不透明度：

100% 不透明度

60% 不透明度

30% 不透明度

10% 不透明度

![image-20220605140000886](https://cdn.jsdelivr.net/gh/zshipu/images/202206051400615.png)

您从我们的[CSS 颜色章节](https://www.w3schools.com/css/css_colors.asp)中了解到，您可以使用 RGB 作为颜色值。除了 RGB，您还可以使用带有 Alpha 通道 (RGBA) 的 RGB 颜色值 - 它指定颜色的不透明度。

RGBA 颜色值通过以下方式指定：rgba(red, green, blue, *alpha* )。*alpha*参数是一个介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。

**提示：您将在我们的**[CSS 颜色章节](https://www.w3schools.com/css/css3_colors.asp)中了解有关 RGBA 颜色的更多信息。

### 例子

```css
div {
 background: rgba(76, 175, 80, 0.3) /* Green background with 30% opacity */
}
```



## 透明框中的文字

这是放置在透明框中的一些文本。

![image-20220605140142206](https://cdn.jsdelivr.net/gh/zshipu/images/202206051401282.png)

### 例子

```css
<html>
<head>
<style>
div.background {
  background: url(klematis.jpg) repeat;
  border: 2px solid black;
}

div.transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.6;
}

div.transbox p {
  margin: 5%;
  font-weight: bold;
  color: #000000;
}
</style>
</head>
<body>

<div class="background">
  <div class="transbox">
    <p>This is some text that is placed in the transparent box.</p>
  </div>
</div>

</body>
</html>
```



## 示例说明

首先，我们创建一个带有背景图像和边框的 <div> 元素（class="background"）。

然后我们在第一个 <div> 中创建另一个 <div> (class="transbox")。

<div class="transbox"> 有背景颜色和边框 - div 是透明的。

在透明的 <div> 中，我们在 <p> 元素中添加一些文本。
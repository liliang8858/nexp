---
title: css-level-004 CSS选择器
author: 知识铺
date: 2022-06-01 10:07:00+08:00
tags: [nextjs,nexp]
---

[CSS](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS)中，选择器用来指定网页上我们想要样式化的[HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML)元素。有CSS选择器提供了很多种方法，所以在选择要样式化的元素时，我们可以做到很精细的地步。本文和本文的子篇中，我们将会详细地讲授选择器的不同使用方式，并了解它们的工作原理。

| 学习前提： | 计算机的基本知识， [安装了基础软件](https://developer.mozilla.org/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software)，[处理文件](https://developer.mozilla.org/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files)的基本知识，HTML基础（学习[HTML介绍](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML)）以及对CSS工作方式的了解（学习[CSS初步](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps)） |
| :--------- | ------------------------------------------------------------ |
| 目标：     | 详细学习CSS选择器的工作方式。                                |

## [选择器是什么？](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#选择器是什么？)

你也许已经见过选择器了。CSS选择器是CSS规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

![Some code with the h1 highlighted.](https://cdn.jsdelivr.net/gh/zshipu/images/202206041337648.png)

前面的文章中，你也许已经遇到过几种不同的选择器，了解到选择器可以以不同的方式选择元素，比如选择诸如`h1`的元素，或者是根据class (类) 选择例如`.special`。

CSS中，选择器由CSS选择器规范加以定义。就像是CSS的其他部分那样，它们需要浏览器的支持才能工作。你会遇到的大多数选择器都是在[CSS 3](https://www.w3.org/TR/selectors-3/)中定义的，这是一个成熟的规范，因此你会发现浏览器对这些选择器有良好的支持。

## [选择器列表](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#选择器列表)

如果你有多个使用相同样式的CSS选择器，那么这些单独的选择器可以被混编为一个“选择器列表”，这样，规则就可以应用到所有的单个选择器上了。例如，如果我的`h1`和`.special`类有相同的CSS，那么我可以把它们写成两个分开的规则。

```
h1 {
  color: blue;
}

.special {
  color: blue;
} 
```

Copy to Clipboard

我也可以将它们组合起来，在它们之间加上一个逗号，变为选择器列表。

```
h1, .special {
  color: blue;
} 
```

Copy to Clipboard

空格可以在逗号前或后，你可能还会发现如果每个选择器都另起一行，会更好读些。

```
h1,
.special {
  color: blue;
} 
```

Copy to Clipboard

在下面的实时示例中，试着把两个有ID声明的选择器组合起来。外观在组合起来以后应该还是一样的。

 

当你使用选择器列表时，如果任何一个选择器无效 (存在语法错误)，那么整条规则都会被忽略。

在下面的示例中，无效的class选择器会被忽略，而`h1`选择器仍会被样式化。

```
h1 {
  color: blue;
}

..special {
  color: blue;
} 
```

Copy to Clipboard

但是在被组合起来以后，整个规则都会失效，无论是`h1`还是这个class都不会被样式化。

```
h1, ..special {
  color: blue;
} 
```

Copy to Clipboard

## [选择器的种类](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#选择器的种类)

有几组不同的选择器，知道了需要哪种选择器，你会更容易正确使用它们。在本文的子篇中，我们将会来更详细地看下不同种类的选择器。

### [类型、类和ID选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#类型、类和id选择器)

这个选择器组，第一个是指向了所有HTML元素`<h1>。`

```
h1 { }
```

Copy to Clipboard

它也包含了一个class的选择器：

```
.box { }
```

Copy to Clipboard

亦或，一个id选择器：

```
#unique { }
```

Copy to Clipboard

### [标签属性选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#标签属性选择器)

这组选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式：

```
a[title] { }
```

Copy to Clipboard

或者根据一个有特定值的标签属性是否存在来选择：

```
a[href="https://example.com"] { }
```

Copy to Clipboard

### [伪类与伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#伪类与伪元素)

这组选择器包含了伪类，用来样式化一个元素的特定状态。例如`:hover`伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素：

```
a:hover { }
```

Copy to Clipboard

它还可以包含了伪元素，选择一个元素的某个部分而不是元素自己。例如，`::first-line`是会选择一个元素（下面的情况中是`<p>`）中的第一行，类似`<span>`包在了第一个被格式化的行外面，然后选择这个`<span>`。

```
p::first-line { }
```

Copy to Clipboard

### [运算符](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#运算符)

最后一组选择器可以将其他选择器组合起来，更复杂的选择元素。下面的示例用运算符（`>`）选择了`<article>`元素的初代子元素。

```
article > p { }
```

Copy to Clipboard

## [接下来要做的事情](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#接下来要做的事情)

你可以看下下面的选择器参考表，可以获得到这个学习章节——或者总体来说是MDN上——的各种选择器的直接链接；你也可以继续下去，开始你的了解[类型、类和ID选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)的旅程。



- [上一页](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Overview: Building blocks](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks)
- [下一页](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)



## [选择器参考表](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#选择器参考表)

下面的表格让你可以浏览你可以用的选择器，还有本指南中教你如何使用每种选择器的页面的链接。我还加上了一个能查看浏览器对每个选择器的支持信息的MDN页面链接。你可以把这个作为回头的参考，在你以后需要查询文献中提到的选择器的时候，或者是在你广义上实验CSS的时候。

| 选择器                                                       | 示例                | 学习CSS的教程                                                |
| :----------------------------------------------------------- | :------------------ | :----------------------------------------------------------- |
| [类型选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors) | `h1 { }`            | [类型选择器](https://developer.mozilla.org/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Type_selectors) |
| [通配选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors) | `* { }`             | [通配选择器](https://developer.mozilla.org/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#The_universal_selector) |
| [类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors) | `.box { }`          | [类选择器](https://developer.mozilla.org/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Class_selectors) |
| [ID选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors) | `#unique { }`       | [ID选择器](https://developer.mozilla.org/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#ID_Selectors) |
| [标签属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors) | `a[title] { }`      | [标签属性选择器](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Attribute_selectors) |
| [伪类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) | `p:first-child { }` | [伪类](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class) |
| [伪元素选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements) | `p::first-line { }` | [伪元素](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element) |
| [后代选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator) | `article p`         | [后代运算符](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Descendant_Selector) |
| [子代选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator) | `article > p`       | [子代选择器](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Child_combinator) |
| [相邻兄弟选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`            | [相邻兄弟](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Adjacent_sibling) |
| [通用兄弟选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator) | `h1 ~ p`            | [通用兄弟](https://developer.mozilla.org/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#General_sibling) |

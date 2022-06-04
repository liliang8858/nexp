---
title: css-level-003 CSS颜色体系
author: 知识铺
date: 2022-06-01 10:05:00+08:00
tags: [nextjs,nexp]
---

**`<颜色>`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [数据类型](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)表示一种颜色。A 还可以包括 [Alpha 通道](https://en.wikipedia.org/wiki/Alpha_compositing)*透明度值*，指示颜色应如何与其背景[复合](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending)。`<color>`

可以通过以下任一方式定义 A：`<color>`

- 使用关键字（如 或 ）。所有现有关键字都指定 [sRGB 色彩空间中的颜色](https://en.wikipedia.org/wiki/SRGB)`blue``transparent`
- 使用 [RGB 三次坐标](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation)系（通过 #-十六进制或函数表示法）。它们始终指定 [sRGB 颜色空间中的颜色](https://en.wikipedia.org/wiki/SRGB)`rgb()``rgba()`
- 使用 [HSL 圆柱坐标系](https://en.wikipedia.org/wiki/HSL_and_HSV)（通过 [`hsl（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 和 [`hsla（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla) 函数表示法）。它们始终指定 [sRGB 颜色空间中的颜色](https://en.wikipedia.org/wiki/SRGB)
- 使用 [HWB 圆柱坐标系](https://en.wikipedia.org/wiki/HWB_color_model)（通过 [`hwb（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb) 函数表示法）。它们始终指定 [sRGB 颜色空间中的颜色](https://en.wikipedia.org/wiki/SRGB)
- 使用 [LCH 圆柱坐标系](https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_representation:_CIELCh_or_CIEHLC)，通过 [`lch（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch) 函数表示法。这可以指定任何可见颜色。
- 使用 [Lab 坐标系](https://en.wikipedia.org/wiki/CIELAB_color_space)，通过 [`lab（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab) 函数表示法。这可以指定任何可见颜色。
- 使用 [`color（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color) 函数表示法，在各种预定义或自定义色彩空间中指定颜色。

**注意：**本文详细介绍了数据类型。若要了解有关在 HTML 中使用颜色的详细信息，请参阅[使用 CSS 将颜色应用于 HTML 元素](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color)。`<color>`

## [语法

数据类型是使用下面列出的选项之一指定的。`<color>`

**注意：**尽管值已精确定义，但其实际外观可能因设备而异（有时显着）。这是因为大多数设备未校准，并且某些浏览器不支持输出设备[的颜色配置文件](https://en.wikipedia.org/wiki/ICC_profile)。`<color>tps://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords)

color 关键字是不区分大小写的标识符，表示特定颜色，例如 、、、 或 。虽然这些名称或多或少地描述了它们各自的颜色，但它们本质上是人为的，所使用的名称背后没有严格的理由。`red``blue``black``lightseagreen`

此类关键字的完整列表可[在此处](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color_keywords)找到。

### [透明关键字

关键字表示完全透明的颜色。这将使彩色项目后面的背景完全可见。从技术上讲，是 的快捷方式。`transparent``transparent``rgba(0,0,0,0)`

**注意：**为了防止意外行为（例如在[`<渐变>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)中），当前的 CSS 规范声明应在 [alpha 预乘颜色空间中](https://www.w3.org/TR/css-color-4/#interpolation-alpha)计算这些行为。但是，请注意，较旧的浏览器可能会将其视为黑色，alpha 值为 。`transparent``0`

**注意：**在 CSS 级别 2（修订版 1）中不是真彩色。这是一个特殊的关键字，可以在两个CSS属性上使用而不是常规值：[`背景`](https://developer.mozilla.org/en-US/docs/Web/CSS/background)和[`边框`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)。它本质上是为了让开发人员覆盖继承的纯色而添加的。随着 CSS Colors Level 3 中 Alpha 通道的出现，被重新定义为真正的颜色。现在可以在可以使用值的任何地方使用它。`transparent``<color>``transparent``<color>`

### [当前颜色关键字

关键字表示元素[`的颜色`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)属性的值。这允许您在默认情况下不接收值的属性上使用该值。`currentcolor``color`

如果 用作属性的值，则它反而从属性的继承值中获取其值。`currentcolor``color``color`

```
<div style="color: blue; border: 1px dashed currentcolor;">
  The color of this text is blue.
  <div style="background: currentcolor; height:9px;"></div>
  This block is surrounded by a blue border.
</div>
```

复制到剪贴板

<iframe class="sample-code-frame" title="currentcolor keyword sample" id="frame_currentcolor_keyword" width="600" height="80" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/color_value/_sample_.currentcolor_keyword.html" loading="lazy" style="box-sizing: border-box; border: 1px solid var(--border-primary); max-width: 100%; width: 753.578px; background: rgb(255, 255, 255); border-radius: var(--elem-radius); padding: 1rem;"></iframe>

### [RGB 颜色模型

RGB 颜色模型根据其红色、绿色和蓝色分量在 [sRGB 颜色空间中](https://en.wikipedia.org/wiki/SRGB)定义给定颜色。可选的 Alpha 组件表示颜色的透明度。

RGB 颜色可以通过十六进制（前缀为 ） 和函数式 （， ） 表示法来表示。`#``rgb()``rgba()`

- [十六进制表示法](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color)：或`#RGB[A]``#RRGGBB[AA]`

  `R`（红色）、（绿色）、（蓝色）和 （alpha） 是十六进制字符 （0–9， A–F）。 是可选的。例如，等效于 。三位数表示法 （） 是六位数形式 （） 的较短版本。例如，是 与 相同的颜色。同样，四位 RGB 表示法 （） 是八位数字形式 （） 的较短版本。例如，是 与 相同的颜色。`G``B``A``A``#ff0000``#ff0000ff``#RGB``#RRGGBB``#f09``#ff0099``#RGBA``#RRGGBBAA``#0f38``#00ff3388`

- [`rgb（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb) 或 [`rgba（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgba)： 或`rgb[a](R, G, B[, A])``rgb[a](R G B[ / A])`

  `R`（红色）、（绿色）和（蓝色）可以是[`<数>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number)或[`<百分>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)，其中数字对应于 。 （alpha） 可以是介于 和 之间的[`<数字>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number)也可以是 [`<百分>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)，其中数字对应于（完全不透明）。`G``B``255``100%``A``0``1``1``100%`

### [HSL 颜色模型

HSL 颜色模型根据其色调、饱和度和亮度分量在 [sRGB 色彩空间中](https://en.wikipedia.org/wiki/SRGB)定义给定颜色。可选的 Alpha 组件表示颜色的透明度。

许多设计人员发现HSL比RGB更直观，因为它允许独立调整色调，饱和度和亮度。HSL 还可以更轻松地创建一组匹配的颜色（例如，当您需要单个色调的多种色调时）。但是，使用HSL创建颜色变化会产生令人惊讶的结果，因为它在[感知上并不均匀](https://en.wikipedia.org/wiki/Color_difference#Tolerance)。例如，两者具有相同的亮度，即使前者比后者暗得多。`hsl(240 100% 50%)``hsl(60 100% 50%)`

HSL颜色通过函数和符号表示。`hsl()``hsla()`

- [`hsl（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 或 [`hsla（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla)： 或`hsl[a](H, S, L[, A])``hsl[a](H S L[ / A])`

  `H`（hue） 是 CSS 颜色规范中以 [`s、s、`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)s 或 s 为单位的色圈的<角[>](https://drafts.csswg.org/css-color/#the-hsl-notation)。当写入为无单位[`<数字>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number)时，它被解释为度数，如 [CSS 颜色级别 3](https://drafts.csswg.org/css-color-3/#hsl-color) 规范中指定的那样。根据定义，红色= 0度 = 360度，其他颜色分布在圆圈周围，因此绿色 = 120 度，蓝色 = 240 度等。作为 ，它隐式地环绕-120deg=240deg，480deg=120deg，-1turn=1turn，等等。`deg``rad``grad``turn``<angle>``S`（饱和度）和（亮度）是百分比。 **饱和度**完全饱和，而完全不饱和（灰色）。 **亮度**是白色的，亮度是黑色的，亮度是“正常的”。`L``100%``0%``100%``0%``50%``A`（alpha） 可以是介于 和 之间的[`<数字>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number)，也可以是 [`<百分>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)，其中数字对应于（完全不透明）。`0``1``1``100%`

### [HWB 颜色模

与HSL颜色模型类似，HWB颜色模型根据其色调，白度和黑色分量在[sRGB颜色空间中](https://en.wikipedia.org/wiki/SRGB)定义给定的颜色。

与HSL一样，HWB比RGB更直观。色调的指定方式相同，后跟白色和黑色的量，分别以百分比值表示。此函数还接受 Alpha 值。

**注意：****没有**像HSL那样的单独函数，alpha值是一个可选参数，如果未指定，则使用alpha值1（或100%）。要指定此值，在指定 alpha 值之前，必须跟在黑色值之后。`hwba()``/`

HWB 颜色通过功能表示法表示。`hwb()`

**注意：**HWB 函数**不像**以前的颜色函数那样使用逗号来分隔其值。

- [`hwb（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb)：`hwb(H W B[ / A])`

  与 HSL 相同：（色相）是 [CSS 颜色](https://drafts.csswg.org/css-color/#the-hsl-notation)规范中以 s、s、s 或 s 为单位给出的色圈的[`<角`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)>。当写入为无单位[`<数字>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number)时，它被解释为度数，如 [CSS 颜色级别 3](https://drafts.csswg.org/css-color-3/#hsl-color) 规范中指定的那样。根据定义，红色= 0度 = 360度，其他颜色分布在圆圈周围，因此绿色 = 120 度，蓝色 = 240 度等。作为 ，它隐式地环绕-120deg=240deg，480deg=120deg，-1turn=1turn，等等。`H``deg``rad``grad``turn``<angle>``W`（白色）和（黑色）是百分比。这两种颜色混合在一起，所以你需要**白色**和**黑色**来产生黑色。反之亦然 白色和黑色为白色。 的两个值都呈现中灰色，任何其他变体呈现指定色调的阴影。`B``0%``100%``100%``0%``50%``A`（alpha），可选，可以是介于 和 之间的[`<数字>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number)，也可以是[`<百分比>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)，其中数字对应于（完全不透明）。指定 Alpha 值时，必须以正斜杠 （） 开头。`0``1``1``100%``/`

### [系统颜

在*强制颜色模式下*（可通过[强制颜色](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)媒体查询进行检测），大多数颜色被限制在用户和浏览器定义的调色板中。这些系统颜色由以下关键字公开，这些关键字可用于确保页面的其余部分与受限制的调色板很好地集成。这些值也可以在其他上下文中使用，但浏览器并不广泛支持这些值。

以下列表中的关键字由 CSS 颜色模块级别 4 规范定义：、、、`ActiveText``ButtonBorder``ButtonFace``ButtonText``Canvas``CanvasText``Field``FieldText``GrayText``Highlight``HighlightText``LinkText``Mark``MarkText``VisitedText`

**注意：**请注意，这些关键字*不区分大小写*，但为了便于阅读，此处列出了大小写混合。

### [实验室颜色

CSS Color 4 引入了 Lab 颜色。实验室颜色通过 [`lab（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab) 函数表示法指定。它们不局限于特定的色彩空间，可以代表人类视觉的整个光谱。

### [LCH 颜色模

CSS Color 4 引入了 LCH 颜色。LCH 颜色通过 [`lch（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch) 函数表示法指定。它们不局限于特定的色彩空间，可以代表人类视觉的整个光谱。

事实上，LCH是Lab的极性形式。它比Lab更人性化，因为它的色度和色调成分指定了所需颜色的质量，而不是混合。它以这种方式与HSL相似，尽管它在感知上更加均匀。与HSL将两者描述为具有相同的亮度不同，LCH（和Lab）正确地将不同的亮度归因于它们：前者（黄色）的L为97.6，后者（蓝色）的L为29.6。因此，LCH可用于创建完全不同颜色的调色板，并具有可预测的结果。请注意，LCH色调与HSL色调不同，LCH色度与HSL饱和度不同，尽管它们确实具有一些概念上的相似之处。`hsl(60 100% 50%)``hsl(240 100% 50%)`

### [颜色（） 颜色

CSS Color 4 引入了这种表示法。通过 [`color（）`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color) 函数指定的颜色可以在任何预定义的颜色空间中指定颜色，也可以指定通过[`@color配置文件`](https://developer.mozilla.org/en-US/docs/Web/CSS/@color-profile)规则定义的自定义颜色空间。

## [插值

在动画和[渐变中](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)，值在其每个红色、绿色和蓝色分量上进行[插值](https://developer.mozilla.org/en-US/docs/Glossary/Interpolation)。每个分量都内插为一个实数浮点数。请注意，颜色的插值发生在 [alpha 预乘 sRGBA 颜色空间中](https://www.w3.org/TR/css-color-4/#interpolation-alpha)，以防止出现意外的灰色。在动画中，插值的速度由[定时函数](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)决定。`<color>`

## [辅助功能注意事项

有些人难以区分颜色。[WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast)建议强烈建议不要将颜色作为传达特定信息，操作或结果的唯一手段。有关详细信息[，请参阅颜色和颜色对比度](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)。

## [例子

### [色值测试仪

在此示例中，我们提供了 和 文本输入。在输入中输入有效的颜色会导致 采用该颜色，从而允许您测试我们的颜色值。`<div>``<div>`

#### 断续器

```
<div></div>
<hr>
<label for="color">Enter a valid color value:</label>
<input type="text" id="color">
```

 

#### 断续器

```
div {
  width: 100%;
  height: 200px;
}
```

 

#### 结果

<iframe class="sample-code-frame" title="Color value tester sample" id="frame_color_value_tester" width="100%" height="300" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/color_value/_sample_.color_value_tester.html" loading="lazy" style="box-sizing: border-box; border: 1px solid var(--border-primary); max-width: 100%; width: 753.578px; background: rgb(255, 255, 255); border-radius: var(--elem-radius); padding: 1rem;"></iframe>

### RGB syntax variations

This example shows the many ways in which a single color can be created with the various RGB color syntaxes.

```
/* These syntax variations all specify the same color: a fully opaque hot pink. */

/* Hexadecimal syntax */
#f09
#F09
#ff0099
#FF0099

/* Functional syntax */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0)
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* ERROR! Don't mix numbers and percentages. */
rgb(255 0 153)

/* Hexadecimal syntax with alpha value */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* Functional syntax with alpha value */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, 100%)

/* Whitespace syntax */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* Functional syntax with floats value */
rgb(255, 0, 153.6, 1)
rgb(2.55e2, 0e0, 1.53e2, 1e2%)
```



### [RGB 透明度变化

```
/* Hexadecimal syntax */
#3a30                    /*   0% opaque green */
#3A3F                    /* full opaque green */
#33aa3300                /*   0% opaque green */
#33AA3380                /*  50% opaque green */

/* Functional syntax */
rgba(51, 170, 51, .1)    /*  10% opaque green */
rgba(51, 170, 51, .4)    /*  40% opaque green */
rgba(51, 170, 51, .7)    /*  70% opaque green */
rgba(51, 170, 51,  1)    /* full opaque green */

/* Whitespace syntax */
rgba(51 170 51 / 0.4)    /*  40% opaque green */
rgba(51 170 51 / 40%)    /*  40% opaque green */

/* Functional syntax with floats value */
rgba(51, 170, 51.6, 1)
rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)
```



### [HSL 语法变体

```
/* These examples all specify the same color: a lavender. */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(.75turn, 60%, 70%)

/* These examples all specify the same color: a lavender that is 15% opaque. */
hsl(270, 60%, 50%, .15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / .15)
hsl(270 60% 50% / 15%)
```



### [HWB syntax variations

```
/* These examples all specify varying shades of a lime green. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* Same lime green but with an alpha value */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```



### 完全饱和的色彩

| 表示法                | 描述   | 住   |
| :-------------------- | :----- | :--- |
| `hsl(0, 100%, 50%)`   | 红     |      |
| `hsl(30, 100%, 50%)`  | 橙     |      |
| `hsl(60, 100%, 50%)`  | 黄色   |      |
| `hsl(90, 100%, 50%)`  | 石灰绿 |      |
| `hsl(120, 100%, 50%)` | 绿     |      |
| `hsl(150, 100%, 50%)` | 蓝绿色 |      |
| `hsl(180, 100%, 50%)` | 青色   |      |
| `hsl(210, 100%, 50%)` | 天蓝色 |      |
| `hsl(240, 100%, 50%)` | 蓝     |      |
| `hsl(270, 100%, 50%)` | 紫色   |      |
| `hsl(300, 100%, 50%)` | 品红   |      |
| `hsl(330, 100%, 50%)` | 粉红色 |      |
| `hsl(360, 100%, 50%)` | 红     |      |

### 浅绿色和深绿色

| 表示法                 | 描述 | 住   |
| :--------------------- | :--- | :--- |
| `hsl(120, 100%, 0%)`   | 黑   |      |
| `hsl(120, 100%, 20%)`  |      |      |
| `hsl(120, 100%, 40%)`  |      |      |
| `hsl(120, 100%, 60%)`  |      |      |
| `hsl(120, 100%, 80%)`  |      |      |
| `hsl(120, 100%, 100%)` | 白   |      |

### 饱和和去饱和果岭

| 表示法                | 描述 | 住   |
| :-------------------- | :--- | :--- |
| `hsl(120, 100%, 50%)` | 绿   |      |
| `hsl(120, 80%, 50%)`  |      |      |
| `hsl(120, 60%, 50%)`  |      |      |
| `hsl(120, 40%, 50%)`  |      |      |
| `hsl(120, 20%, 50%)`  |      |      |
| `hsl(120, 0%, 50%)`   | 灰色 |      |

### HSL 透明度变化

```
hsla(240, 100%, 50%, .05)     /*   5% opaque blue */
hsla(240, 100%, 50%, .4)      /*  40% opaque blue */
hsla(240, 100%, 50%, .7)      /*  70% opaque blue */
hsla(240, 100%, 50%, 1)       /* full opaque blue */

/* Whitespace syntax */
hsla(240 100% 50% / .05)      /*   5% opaque blue */

/* Percentage value for alpha */
hsla(240 100% 50% / 5%)       /*   5% opaque blue */
```

复制到剪贴板

## 规格

| 规范                                                         |
| :----------------------------------------------------------- |
| [CSS 颜色模块级别 4 # 颜色语法](https://drafts.csswg.org/css-color/#color-syntax) |

## 另请参见

- [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) 属性允许您在元素级别定义透明度。
- 使用此数据类型的一些常见属性：[`颜色`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)、[`背景色`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)、[`边框色`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)、[`框阴影`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)、[`轮廓色`](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color)、[`文本阴影`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [使用 CSS 将颜色应用于 HTML 元素](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color)

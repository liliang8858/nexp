---
title: css-level-003 CSS颜色体系-HSL
author: 知识铺
date: 2022-06-01 10:06:00+08:00
tags: [nextjs,nexp]
---



[必看颜色](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

[工具：调色板](https://serennu.com/colour/hsltorgb.php)



### HSL



- hue 色相

  

  ![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032227773.jpeg)

  - 0° Red
  - 60° Yellow 
  - 120° Green
  - 180° Cyan
  - 240° Blue
  - 300° Magenta

- saturation 饱和度

  ![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032227574.jpeg)

  饱和度（Saturation）是指色彩的纯度，饱和度越高色彩越纯越浓，饱和度越低则色彩变灰变淡。

- lightness 亮度

  ![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032228166.jpeg)

  亮度（Lightness）指的是色彩的明暗程度，亮度值越高，色彩越白，亮度越低，色彩越黑。





HSL 圆柱中的任意一个点，都对应了一种颜色。圆环上的度数代表了颜色的色相，离中轴的距离代表了颜色的饱和度，点的高度则对应了颜色的亮度。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032229631.jpeg)









这 8 个调色滑块对应了我们前面讲过的红、橙、黄、绿、青（浅绿）、蓝、紫、品（洋红）8 种自然界中的主要色彩。这样我们就能对照片中的不同色彩，进行分别的调整了。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032229353.jpeg)



我们调整红色的时候，不仅仅会影响色环上 0° 的准红色，还会影响到红色周围的偏红色相。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233767.jpeg)

比如我在色相面板中，把红色滑块往右移动。这样照片中的红色，会往色环顺时针方向偏色，也就是偏向橙色。可以看到下图中，红色色相 +100 后，色环中红色及附近区域都变成了橙色。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233768.jpeg)

如果把红色色相滑块往左移动。这样照片中的红色，会往色环的逆时针方向偏色，也就是偏向品色。可以看到下图中，红色色相 -100 后，色环中红色及附近区域都偏向了品红色。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233769.jpeg)

绿色在色环中，顺时针方向是青色，逆时针方向是黄色。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233770.jpeg)

因此如果我们在色相面板里，把绿色变成 -100。色环中绿色以及周边色相，就全部偏向了黄色。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233771.jpeg)

如果我们在色相面板里，把绿色变成 +100。色环中绿色以及周边色相，就全部往青色色相偏移。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233772.jpeg)

**色相滑块往右移（加数值），颜色会在色环中顺时针偏色。色相滑块往左移（减数值），颜色会在色环中逆时针偏色。**

理解了上面两句话，我们就学会了 HSL 的色相调整。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233773.jpeg)

HSL 中的饱和度面板很好理解。**饱和度滑块右移，该颜色的浓度纯度增加。饱和度滑块左移，该颜色变灰变淡。**

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233774.jpeg)

比如色环中的蓝色区域。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233775.jpeg)

如果我们把饱和度面板里的蓝色滑块移到最左边，可以发现色环中的蓝色区域大大的变淡变灰了。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233776.jpeg)

但是为什么蓝色区域没有完全变成中灰色呢？这是因为这部分色彩区域，不仅会被蓝色滑块作用，也会被紫色滑块影响。

如果我在饱和度面板中，把紫色滑块的饱和度也减到 -100，可以看到原来色环上整片的蓝紫色区域，都变成了纯灰色。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233777.jpeg)

最后一个 HSL 面板是明亮度面板，**明亮度滑块右移，该颜色变暗变黑，滑块左移，该颜色变亮变白。**

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233778.jpeg)

比如我把黄色的明亮度滑块移动到 +100，可以看到色环中的黄色变亮了。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233779.jpeg)

# 3. 实例应用分析

接下来我们将以下面这张照片为例，告诉大家如何用 HSL 面板进行调色。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233780.jpeg)

**在调色之前，我们首先要弄清楚这张照片都是由哪些颜色组成的。**

山体上裸露岩石，主要是橙色，以及少量黄色构成。天空和水面，主要颜色是蓝色和少量青色。地面上星星点点的红色小木屋，实际上受到红色和橙色共同作用。

比较复杂的是图中的绿色植物。近处山上被阳光照耀的植物，主要是黄色，其次才是绿色。远处山体上的深绿植被，则主要是大量绿色和少量青色构成。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233781.jpeg)

首先我们在色相面板进行调整。黄色和绿色的色相滑块都往左移，让他们的色彩偏向黄色。这步主要是想把画面中绿意盎然的春色，变成橙黄的金秋色彩。

原来的天空偏青，所以我把蓝色滑块右移，天空海面的色相往紫色轻微靠拢。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233782.jpeg)

照片中原来的绿色植被变成了黄色，天空从青蓝变成微微的紫蓝。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233783.jpeg)

接下来是饱和度面板调整。这张图片我不仅想变成秋色，还想变成晚秋草木凄凉的枯败感觉。因此我降低了黄色和绿色的饱和度。

降低橙色饱和度，则是不想让岩石的色彩太过突兀。

蓝色和青色滑块我却向右移动，增加饱和度。这样天空和海面的蓝色就更加纯净浓烈了。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233784.jpeg)

饱和度调整之后，草木惨淡，天空通透。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233785.jpeg)

最后是明亮度调整。照片中的山体是由草木和岩石组成。我们可以通过明度分离，来让草木和岩石的边界更明显。

我降低橙色的明度，也就是降低岩石的亮度；稍微增加黄色亮度，也就是草木的亮度。这样山上的岩石和草木就完全区分了开来。

之后降低蓝色的亮度，天空和海面变得更加深沉耐看。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233787.jpeg)

明亮度调整之后，岩石和天空亮度的减少让画面更加沉稳。

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233788.jpeg)

再来对比一下 HSL 调色前后，感觉是不是完全不一样了？

![img](https://cdn.jsdelivr.net/gh/zshipu/images/202206032233789.jpeg)

总结：

- 色彩是由色相（Hue）、饱和度（Saturation）和亮度（Lightness）组成的。
- ACR 和 Lightroom 中的 HSL 工具，由色相、饱和度、明亮度3个子面板组成，每个子面板有 8 个滑块，对应调整照片中的 8 种颜色范围。
- HSL 调色的第一步，是对照片中的色彩和对应物体做一个归类，之后我们就可以分别调整画面中不同色彩物体的色相、饱和度和亮度了。










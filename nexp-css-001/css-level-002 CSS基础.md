

## 一、 CSS组成部分

```
    <p>Lorem ipsum dolor sit amet.</p>


    <style>
        p{
            color: red;
        }
    </style>

```

1. p :  selector 选择器
2. {}: 放在在大括号内
3. color: property 属性
4. red: value 值
5. ；：每行结尾分号



## 二、三种方式添加CSS

1. 外部样式表
   1. 保持.css
   2. link 引入到html
   3. 最常用
2. 内部样式表
   1. html文件内 style 包裹
   2. 偶热使用
3. 内联样式
   1. 仅影响一个元素
   2. html元素的style属性中添加
   3. 不推荐使用



三、选择器

```
<p class="paragraph" id="para1">
      Lorem ipsum dolor sit amet
    </p>
```

1. 元素选择器

   ```
   p{
     color:red;
   }
   ```

2. class 选择器

   ```
   .paragraph{
     color:red;
   }
   ```

3. ID选择器

   ```
   #para1{
     color:red;
   }
   ```

   [推荐必看网站](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)   

   




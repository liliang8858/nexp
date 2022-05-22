Next.js 通过 `[name].module.css` 文件命名约定来支持 [CSS 模块](https://github.com/css-modules/css-modules) 。

CSS 模块通过自动创建唯一的类名从而将 CSS 限定在局部范围内。 这使您可以在不同文件中使用相同的 CSS 类名，而不必担心冲突。

此行为使 CSS 模块成为包含组件级 CSS 的理想方法。 CSS 模块文件 **可以导入（import）到应用程序中的任何位置**。

例如，假设 `components/` 目录下有一个可重用 `Button` 组件：

首先，创建 `components/Button.module.css` 文件并填入以下内容：

```css
/*
You do not need to worry about .error {} colliding with any other `.css` or
`.module.css` files!
*/
.error {
  color: white;
  background-color: red;
}
```

然后，创建 `components/Button.js` 文件，导入（import）并使用上述 CSS 文件：

```jsx
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  )
}
```

CSS 模块是一项 *可选功能*，**仅对带有 `.module.css` 扩展名的文件启用**。 普通的 `<link>` 样式表和全部 CSS 文件仍然是被支持的。

在生产环境中，所有 CSS 模块文件将被自动合并为 **多个经过精简和代码分割的** `.css` 文件。 这些 `.css` 文件代表应用程序中的热执行路径（hot execution paths），从而确保为应用程序绘制页面加载所需的最少的 CSS。


#### **CSS What I learned**

![img](http://img.mukewang.com/52fde5c30001b0fe03030117.jpg)

- 注释/* */

- 内联式

  ```css
  <p style="color:red;font-size:12px"></p>
  ```

- 嵌入式 style type="text/css"

  ```css
  <style type="text/css">
  	p{
  		color:red;
  	}
  </style>
  ```

- 外联式

  ```css
  <link href="style.css" rel="stylesheet" type="text/css" />
  ```

  - rel, type是固定写法

- 类选器，同一种选择符的不同类 . 10

  ```css
  <style type="text/css">
  	.cls{
  		color:red;
  	}
  </style>
  <p class="cls"></p>
  ```

  权重：10

- ID选择器 # 100

  ```css
  <style type="text/css">
  	#id{
  		color:red;
  	}
  </style>
  <div id="id"></div>
  ```

  权重100

- 子选择器，注意谁是儿子 0.1 >

- 后代选择器 空格

- 通用选择器 *

- 伪类选择器

  ```css
  <style type="text/css">
  <!--鼠标滑过-->
  a:hover{
  	color:red;
  }
  </style>
  ```

- 分组选择器 ,

- 有些属性有继承功能

- 优先级

  - 内联样式 > id选择器 > 类选择器 > 标签选择器 > 通配符选择器

- 权重计算 ，！impoartant;

- 字体样式

  - font-weight
  - 缩写必须指定font-size, and font-family

- text-decoration

- text-indent



#### **盒模型**

![img](http://img.mukewang.com/543b4cae0001b34304300350.jpg)

- 块级元素
- 内联元素
- 内块元素
- display:none;
- padding(top, bottom, right, left), margin, border,
- border
  - width, style, color
  - -top, right, left,bottom
  - -radius: how to  draw a circle
- flow模型
  - 块元素上到下，内元素左到右
- float模型
  - 使元素浮动在同一行、列
- layer
  - position: absolute 相对浏览器定位，改变所在layout
  - position: relative 相对自己定位，不改变所在layout
- 相对元素定位
  - father.position:relative; child.position:absolute![image-20210721195404537](CSS What I learned.assets/image-20210721195404537-1626868447849.png)
- 弹性盒模型
  - display:flex
  - justify-content: flex-start, flex-end, center, space-between, space-around //x轴
  - align-items: flex-start, flex-end, center, baseline, stretch(?)
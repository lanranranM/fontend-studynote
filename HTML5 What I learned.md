#### **HTML5 What I learned**

**content**

- 无序列表

  ```html
  <ul>
  	<li>1</li>
  	<li>2</li>
  </ul>
  ```

- 有序列表

  ```html
  <ol>
  </ol>
  ```

- 图片

  ```html
  <img src="pic link" alt="图片无法显示时替换文本" title="悬浮时提示文本">
  ```

- link

  ```html
  <a href="link" tiitle="悬浮时提示文本" target="_self/_blank">文本</a>
  ```

- table

  ```html
  <table border="1">
  	<caption>表格标题</caption>
  	<!--row-->
  	<tr>
  		<!--col-->
  		<th>[0][0]</th>
  		<td>[0][1]</td>
  	</tr>
  ```

  - 行列头border

  - 头身尾双标签加载

    <img src="http://img.mukewang.com/5e91834a000161cc06140254.jpg" alt="img" style="zoom:50%;" />

- form

  用户交互，用表单将浏览器输入的数据传送至服务器端

  ```html
  <form method="传送方法" action="服务器文件，浏览器数据将被传送到的地方">
  	
  </form>
  ```

- input

  ```html
  <label for ="inputid">input:</label>
  <input type="text" id="inputid" placeholder="提示文字", name="name",value="default value">
  ```

  - input type: text, password, number, url, email, radio, checkbox, submit, reset
  - name: 文本框命名，为后端使用
  - value: 文本输入框的默认值
  - label：帮助鼠标用户聚焦

- textarea

  ```html
  <textarea rows="2" cols="2" placeholder="tips"></textarea>
  ```

- 单选框/复选框

  ```html
  选项1<input type="radio/checkbox" value="value" name="name" checked="checked"/>
  ```

  - checked="checked"时，该选项被默认选中
  - 同一组的**单选项**的name要求保持一致

- 下拉菜单

  ```html
  <select>
  	<option value="提交服务器value">选项1</option>
  	<option value="选项2" selected="selected"> 选项2 </option>
  </select>
  ```

- buttom

  ```html
  <input type="submit" value="submit" name="submit">
  <!--name是buttom上显示内容-->
  ```

- container

  ```html
  <span></span>
  ```

  


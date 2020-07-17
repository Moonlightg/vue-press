---
sidebar: auto
---
# JQuery常用DOM操作

## jQuery对象和dom对象的互换  

<br/>
将jquey对象转换为dom对象  

```js
var $box=$("#box"); //jquery对象
var box=$box[0]; //dom对象
```

将dom对象那个转换为jquery对  

```js
var box=document.getElementById("box"); //dom对象
var $box=$(box) //jquery对象
```

## 判断dom元素是否存在  

```js
if($("#box")){} //不推荐
if($("#box").length>0){} //推荐
if($("#box")[0]){} //推荐
```

## 判断check复选框是否被勾选  

```js
// dom方式判断是否选中，以属性的形式进行判断
var cr=document.getElementById("cr");//dom对象
if(cr.checked)

// jQuery方式判断是否选中
var $box=$("#box")
if($box.is(":checked"))
```

## prop()与attr()  

```html
<input id="check1" type="checkbox" checked="checked">
<label for="check1">复选框</label>
```

```js

返回属性的值：
$(selector).prop(property)

设置属性和值：
$(selector).prop(property,value)

使用函数设置属性和值：
$(selector).prop(property,function(index,currentvalue))

设置多个属性和值：
$(selector).prop({property:value, property:value,...})

$("#check1").prop("checked", false); // 设置checked的值为false
$("#check1").attr('checked'); // 返回checked
$("#check1").prop('checked'); // 返回checked的值为false或者true
```

## 过滤选择器

### 基本过滤选择器

```js
$("div:first")、$("div:last") //获取第一个/最后一个div元素
$("div:not(.myclass)"); //选取class不是myClass的div元素
$("div:even")、$("div:odd")、$("div:gt/lt/eq(index)"):查找自然顺序为奇数(索引值为偶数)的div标签、或者(大于、小于、等于)索引值的标签。
$(":header")；//获取所有的标题元素
$(":animated") //获取当前正在执行动画的元素
$(":focus") //选取当前具有焦点的元素
```

### 内容过滤选择器

```js
$("div:contains('你好')") //文本中含有"你好"的元素
$("div:empty") //选取不含子元素（包括文本元素）的div元素
$("div:has('p')") //选取含有p元素的div元素
$("tbody>tr:has(':checked')").addClass("selected")：表格中单/复选框被选中的话变颜色。
$("div:has('.p')") //选取class为p的div元素
$("div:parent") //选取含有子元素（包括文本元素）的div元素
```

### 可见性过滤选择器

```js
$("div:hidden")、$("div:visible"):获取显示或隐藏的div元素
```

### 属性过滤选择器

```js
$("div[title=test]")//获取title=test的div元素
```

### 子元素过滤选择器

```js
$("li:nth-child(2n)")://表示索引值为2的倍数的li标签，如第2、4...
```

### 表单对象属性过滤选择器
```js
$("input:enabled") // 获取所有可用元素；
$("input:disabled") // 获取所有不可用元素。
$("input:checked")： // 获取所有被选中的元素（单选框、复选框）
$("select option:selected") // 获取所有被选中的元素（下拉列表）
//注意：选择器空格与不空格的区别
$("form:enabled") // 表示可用的form元素
$("form :enabled") // 表示form中可用的子元素
```

### 表单选择器

```js
$(":input") // 包括textarea，selection等元素
$(":text")、$(":radio")、$(":image")、$(":reset")、$(":button")、$(":file")
```

## 节点操作
### 删除节点

```js
remove() // 该节点包含的左右的后代节点也会被删除，$("#div").remove()返回的是被删除的该元素
detach() // 与remove不一样的是：所有绑定的事件，附加的数据都会被保存下来。
empty() // 清空该元素的所有后代节点。
```

### 复制节点

```js
clone() // 生成被选元素的副本，包含子节点、文本和属性。
clone(true) // 参数true的目的是为了在复制元素的同时也复制元素所绑定的事件，因此该元素的副本也有复制的功能。
```

### 替换节点

```js 
replaceWith()、replaceAll();      
注意：元素被替换元素绑定的事件也需要重新绑定。
```

### 包裹节点
```js
wrap():$("p").wrap("b") // 用b标签把p标签包裹起来。只包裹一个
wrapAll():$("p").wrapAll("b") // 包裹所有的p元素。
wrapInner():$("p").wrapInner("b")p // 标签里的内容被b标签包裹起来了。
```

### 遍历节点

```js
children() // 获取子节点（不包括空节点和注释和文本节点）
find("span") // 返回属后代的所有 <span> 元素 
parent() // 方法返回被选元素的直接父元素
parents() // 返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)
next() // 后面紧邻的同辈元素。
prev() // 前面紧邻的同辈元素。
siblings() // 前后所有的同辈元素。
closest() // 获取最近的匹配元素。
$("div").height()/width() // 获取的是高度值/宽度值，css("height")获取的是带有单位的数据。
```

## 属性和样式操作

```js
// 1、设置和删除属性：
$("div").attr(),$("div").removeAttr();
// 2、切换样式
toggleClass("class")://没有class类时则添加，有时则删除。
hasClass()，addClass(), removeClass()
```

## 设置和获取HTML、文本、值和宽高

```js
html()、text()、val()、width()、height()
```

## 元素定位

```js
offset():获取的是元素在当前视窗的相对偏移。返回的对象包含两个属性left和top属性。
position():获取的是元素相对最近一个position样式是relative或者absolute的祖父节点的偏移。将所有的祖先元素偏移加起来的值
scrollTop(),scrollLeft():获取元素距顶端和左边的距离。
```

## 合成事件

```js
hover():用于模拟光标悬停事件hover(mouseenter,mouseleave)
toggle():模拟鼠标连续单击事件。切换元素的可见状态。
```

## 事件冒泡

```js
停止事件冒泡：event.stopPropagation()
阻止默认行为：event.preventDefault()
return false;具有上面两种方法的功能。
```

## 事件对象属性

```js
event.typ
event.target
event.which(获取鼠标左中右键)
event.pageX
event.pageY
event.clientX
event.clientY
```

## 模拟操作

```js
$("#btn").trigger("click")=$("#btn").click() // 当页面加载完毕后，就会立即出发click事件。
// 触发自定义事件：
$("#btn").bind("myclick",function(event，msg1，msg2){}); //绑定事件
$("#btn").trigger("myclick",["s1","s2"]) //触发事件，还可以传递数据
```

## 动画animate

```js
show()、hide() // 先记住display的值，在改变display的值。改变元素的显示还是隐藏。
fadeIn() // 透明度渐渐变为1；
fadeOut() // 透明度渐渐变为0。
fadeToggle() 
slideUp()
slideDown() // 改变元素的高度。
slideToggle()
累加、累减动画：
$("panel").click(function(){
	$(this).animate({left:"+=500px"},300)
	$(this).animate({left:"100px",height:"200px"},3000)
})
停止动画：stop():停止正在进行的动画。
延迟动画：delay(1000)
```

## ajax

```js
load(url,data,callback):远程载入html代码并加载到dom中.$("#test").load("test.html"):将test.html加载到$("#test")中。
load("test.html .para"):加载text.html中class为para的内容
load(url,{"a":1,"b":2},function(){})//post请求方式
getScript(),getJson()//加载json文件
$.ajax()//是jquery最底层的Ajax实现
```

## 序列化元素

```js
1、serialize():作用于一个jquery对象，将dom元素内容序列化为字符串。$("#form1").serialize(),将表单中的单选框和复选框序列化时，
  只会将他们的值序列化。
2、serializeArray():作用于一个jquery对象，将dom元素内容序列化为json。
3、$.param():是serialize()的核心，将数组或对象按照key/value进行序列化。
     var obj={"a":1,"b":2};
     var k=$.param(obj);
     console.log(k)///输出："a=1&b=2"
```










### 简洁的jquery/zepto模板引擎

#### 开门见山
相信接触过handerbars、angular等的童鞋对于模板引擎都不再陌生。示例如下：
定义一个结构，通过{}标识引用动态字段
``` html
<div id="top">
  <img src='{avatar}' width='100' height='100' />
  <div id="hide">&nbsp;帐号:{帐号}</div>
  <div>&nbsp;姓名:{name}</div>
  <div>&nbsp;手机:{mobile}</div>
</div>
```

引用为
``` javascript
$("#top").tmeplate(data);
```

#### 实现原理:
运用JS的$.fn，定义一个template插件，传入json(可以是本地定义的一个对象，也可以为ajax动态请求的json数据)。
获取传入对象的attributes、tagName等，运用replace方法正则验证{}，返回新的数据，再替换原有结构。

### redux.branchNode里有冗余属性
### reducer方法解释 !important  
- branchNodeInit 
	- 在app.js里面loading已保存的数据时候
	- 连同choosed属性一起改变
- branchNodeDropdownChoose
	- 只更新选中项choosed
- branchNodeDataUpdate
	- 只更新options，不更新choosed

###每次重新计算选项数据
分支节点连线`实时变化`，所以  
- 每次切换到 分支节点，都会`重新计算`dropdown的option数据  
- 这个计算逻辑在 `globalEvent/index的一个selected事件中  

###比较混乱的数据格式（dropdown的optionsData）
redux里存的 dropdown选项数据key是`name`和`branchResourceId`
dropdown组件读取用的是text和value  
格式映射在container的react纯函数里，

###dropdown的选中值和默认值
- 通过redux的choosed选项获得选中值
- 所以设置默认值 只有通过改变 reduce来设置choosed属性  
- choosed的格式是 `text`和`value`，和options不同！！！  

###设置默认值的特殊性
因为加载多次数据   
所以不能在加载数据的时候设置默认值

使用单独的reducer方法来设置默认值

###潜在bug
如果选择之后，改变了流程结构，  
这时候更新options数据，选中项没变，
可能options里没有当前的选中项
>解决：暂时搁置

一旦设置了默认值，就无法设置为空了
>解决：暂时搁置

多次选择 默认分支，然后保存，会出现多个defaultflow = true  
>已解决：把所有的sequenceflow变成false


###dropdown是这个组件独立实现

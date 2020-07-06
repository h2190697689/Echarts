### echarts使用时的简单封装

## [Document](https://echarts.apache.org/zh/index.html)

#### Installation
##### npm
```angular2html
npm install draw-echart
```

##### yarn
```angular2html
yarn add draw-echart
```

#### Example
```angular2html
import React, { Component, Fragment} from "react";
import DrawChart from "draw-echart";  //引入组件

class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const option = {
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        const event = {
            "click": (params)=>{
                console.log(params)
            }
        };
        return (
            <Fragment>
                <div id="container" className="container">
                    <DrawChart option={option} event={event} />
                </div>
            </Fragment>
        )
    }
}

export default App;
```

#### Description
##### 接收参数
```
1. option:图表配置项,  (必传项)
2. event:事件对象, (非必传)
```

##### 改变
```
1. 修改option 内容会自动刷新
2. 图表大小由外部容器控制
3. 容器改变图表默认调整
```



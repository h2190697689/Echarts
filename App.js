import React, { Component, Fragment} from "react";
import DrawChart from "./echarts/draw";
// import "./App.css";

const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
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
class App extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className="container" style={{position: "absolute",top: 0,right: 0,left: 0,bottom: 0}}>
                    <DrawChart option={option}></DrawChart>
                </div>
            </Fragment>
        )
    }
}

export default App;
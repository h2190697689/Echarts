import React, { Component} from "react";
import echarts from "echarts";

class Draw extends Component{
    constructor(props){
        super(props)
        this.state = {},
        this.chart = null;
        this.resizeEvent = null;
    }

    componentDidMount() {
        const { option } = this.props;
        // 基于dom,初始化echarts实例
        this.chart = echarts.init(this.chartElement);
        // 绘制图表
        this.chart.clear();
        this.chart.setOption(option, true);
        this.chart.resize();

        // 监听resize事件
        this.resizeEvent = () => { this.chart.resize() };
        window.addEventListener("resize", this.resizeEvent, false);
    }

    componentWillMount() {
        if(this.chart) {
            this.chart.clear();
            this.chart.dispose();
        }
        window.removeEventListener("resize", this.resizeEvent, false);
    }

    render() {
        return (
            <div ref={(ref)=> this.chartElement = ref} style={{width: "100%", height: "100%", margin: "0 auto"}}></div>
        )
    }
}

export default Draw;
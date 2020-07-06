import React, { Component} from "react";
import echarts from "echarts";
import PropTypes from "prop-types";
import {is, fromJS} from "immutable";

class Draw extends Component{
    constructor(props){
        super(props);
        this.chart = null;
        this.resizeEvent = null;
    }

    static defaultProps = {
        option: {},
        event: {}
    };

    static propTypes = {
        option: PropTypes.object,
        event: PropTypes.object
    };


    componentDidMount() {
        const { option, event } = this.props;
        // 基于dom,初始化echarts实例
        this.chart = echarts.init(this.chartElement);
        // 绘制图表
        this.chart.clear();
        this.chart.setOption(option);
        this.chart.resize();

        // 监听resize事件
        this.resizeEvent = () => { this.chart.resize() };
        window.addEventListener("resize", this.resizeEvent, false);

        const eventList = Object.keys(event);
        if(eventList.length > 0){
            eventList.forEach((item)=>{
                this.chart.on(item,(params)=> {
                    event[item](params);
                })
            })
        }
    }

    componentWillMount() {
        const {event} = this.props;
        window.removeEventListener("resize", this.resizeEvent, false);
        // const eventList = Object.keys(event);
        // if(eventList.length){
        //     eventList.forEach((item)=>{
        //         this.chart.off(item,this[item+"Func"])
        //     })
        // }
        if(this.chart) {
            this.chart.clear();
            this.chart.dispose();
        }
    }

    /**
     * option改变时更新图表
     * @param prevProps
     */
    componentDidUpdate(prevProps){
        const { option } = this.props;
        console.log(is(fromJS(prevProps.option),fromJS(option)));
        if(!is(fromJS(prevProps.option),fromJS(option))) {
            this.chart.setOption(option);
            this.chart.resize();
        }
    }

    render() {
        return (
            <div ref={(ref)=> this.chartElement = ref} style={{width: "100%", height: "100%", margin: "0 auto"}} />
        )
    }
}

export default Draw;
import React, { Component, Fragment } from "react";
import DrawChart from "./echarts/draw.js";
import "./css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const option = {
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };
        const event = {
            click: (params) => {
                console.log(params);
            }
        };
        return (
            <Fragment>
                <div id="container" className="container">
                    <DrawChart option={option} event={event} />
                </div>
            </Fragment>
        );
    }
}

export default App;

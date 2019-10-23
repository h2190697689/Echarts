/**
 * 获取饼图的配置项
 */
export function getPieOption(data, legendData, optionName, color, orient) {
    let colorArr = color === 'one' ? ['#ed57a1', '#24b3ff'] : ['#52bdc3', '#24b3ff', '#247dff', '#7457ed', '#b656ed', '#ed57a1']
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
             orient: orient,
            // y: 'bottom',
            x: orient === 'horizontal' ? 'center': 'right',
            top: orient === 'horizontal' ? 'auto' : 20,
            bottom: orient === 'horizontal' ? 15 : 'auto',
            itemWidth: 20,
            itemheight: 12,
            borderRadius: 3,
            textStyle: {
                 color: orient === 'horizontal' ? '#00AFD7' : '#cee3ff'
            },
            data: legendData
        },
        color: colorArr,
        series: [
            {
                name: optionName,
                type:'pie',
                top: 0,
                x: 0,
                center: orient === 'horizontal' ? ['50%', '38%'] : ['40%', '38%'], //圆饼图的位置 左右 上下
                radius: ['57%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }
        ]
    };
}
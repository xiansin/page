/**
 * Created by JianJia.Zhou<jianjia.zhou@longmaster.com.cn> on 2017/11/30.
 */
console.log(point);
var myChart = echarts.init(document.getElementById("map_info"));
var styleJson = [
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": {
            "color": "#021019"
        }
    },
    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#147a92"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#0b3d51"
        }
    },
    {
        "featureType": "local",
        "elementType": "geometry",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "land",
        "elementType": "all",
        "stylers": {
            "color": "#08304b"
        }
    },
    {
        "featureType": "railway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "railway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#08304b"
        }
    },
    {
        "featureType": "subway",
        "elementType": "geometry",
        "stylers": {
            "lightness": -70
        }
    },
    {
        "featureType": "building",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#857f7f"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "building",
        "elementType": "geometry",
        "stylers": {
            "color": "#022338"
        }
    },
    {
        "featureType": "green",
        "elementType": "geometry",
        "stylers": {
            "color": "#062032"
        }
    },
    {
        "featureType": "boundary",
        "elementType": "all",
        "stylers": {
            "color": "#1e1c1c"
        }
    },
    {
        "featureType": "background",
        "elementType": "all",
        "stylers": {
            "color": "#021933ff"
        }
    }
];
point = point.split(",");
var option = {
    // 加载 bmap 组件
    bmap: {
        // 百度地图中心经纬度
        center: [point[0], point[1]],
        // 百度地图缩放
        zoom: 13,
        // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        roam: false,
        // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        mapStyle: {
            styleJson: styleJson
        }
    },
    series: [{
        type: 'effectScatter',
        // 使用百度地图坐标系
        coordinateSystem: 'bmap',
        // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
        data: [[point[0], point[1], 80]],
        symbolSize: function (val) {
            return val[2] / 5;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#f00',
                shadowBlur: 10,
                shadowColor: '#f00'
            }
        },
        zlevel: 1
    }]
};
myChart.setOption(option);

/*[
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "poilabel",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "manmade",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "building",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "boundary",
        "elementType": "all",
        "stylers": {
            "color": "#000000ff",
            "hue": "#cc0000",
            "lightness": 55,
            "saturation": 1,
            "visibility": "on"
        }
    }
]*/


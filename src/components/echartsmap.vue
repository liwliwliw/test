<template>
  <div class="echartsmap">
    <div ref="chinaMap" style="width: 500px; height: 300px"></div>
    <div ref="bejingMap" style="width: 500px; height: 300px"></div>
  </div>
</template>
<script>
import chinaJson from "../../node_modules/echarts/map/json/china.json";
const beijingJson = require("../assets/mapjson/beijing.json");

var ltopdata = [
  {
    name: "北京",
    value: 2,
  },
  {
    name: "天津",
    value: 1,
  },
  {
    name: "上海",
    value: 2,
  },
  {
    name: "重庆",
    value: 1,
  },
  {
    name: "河北",
    value: 1,
  },
  {
    name: "河南",
    value: 1,
  },
  {
    name: "云南",
    value: 1,
  },
  {
    name: "辽宁",
    value: 1,
  },
  {
    name: "黑龙江",
    value: 1,
  },
  {
    name: "湖南",
    value: 1,
  },
];
let ltopdataa = [
  {
    name: "东城区",
    value: 1,
  },
  {
    name: "西城区",
    value: 12,
  },
  {
    name: "昌平区",
    value: 13,
  },
];

export default {
  data() {
    return {
      mapOption: {
        title: {
          text: "beijing",
        },
        // 左下角显示内容高低
        visualMap: {
          min: 100,
          max: 5000,
          text: ["高", "抵"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        series: [
          {
            type: "map",
            mapType: "beijing",
            label: {
              show: false,
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: "#e1e1e1",
                color: "#90c31d",
                opacity: 1,
                // 用于修改鼠标移入时地图颜色边框等内容
                emphasis: {
                  areaColor: "#749f83",
                },
              },

              // data: [
              //   {
              //     name: "太原市",
              //     value: "",
              //   },
              //   {
              //     name: "大同市",
              //     value: "",
              //   },
              //   {
              //     name: "阳泉市",
              //     value: "",
              //   },
              //   {
              //     name: "长治市",
              //     value: "",
              //   },
              //   {
              //     name: "晋城市",
              //     value: "",
              //   },
              //   {
              //     name: "朔州市",
              //     value: "",
              //   },
              //   {
              //     name: "晋中市",
              //     value: "",
              //   },
              //   {
              //     name: "运城市",
              //     value: "",
              //   },
              //   {
              //     name: "忻州市",
              //     value: "",
              //   },
              //   {
              //     name: "临汾市",
              //     value: "",
              //   },
              //   {
              //     name: "吕梁市",
              //     value: "",
              //   },
              // ],
              data: ltopdataa,
            },
          },
        ],
      },
      oroptionmapjsonr: {
        // textStyle: {
        // 	color: "#9cbfde",
        // 	fontSize: 10.67,
        // },
        // color: ['#fff'], //手动设置每个图例的颜色
        // tooltip: {
        // 	// trigger: 'item',
        // 	formatter: function(params) {
        // 		var percent = 0;
        // 		var total = 0;
        // 		for (var i = 0; i < ltopdata.length; i++) {
        // 			if (params.name == ltopdata[i].name) {
        // 				if (params.name !== '') {
        // 					return params.name + '\n' + ltopdata[i].value;
        // 				} else {
        // 					return '';
        // 				}
        // 			}

        // 		}

        // 	},
        // },
        // legend: {
        // 	show: false
        // },
        // toolbox: {
        // 	show: true,
        // 	orient: 'vertical',
        // 	x: 'right',
        // 	y: 'center',
        // },
        // roamController: {
        // 	show: true,
        // 	x: 'right',
        // 	mapTypeControl: {
        // 		'china': true
        // 	}
        // },
        series: [
          {
            // name: 'iphoneX',
            type: "map",
            mapType: "china",
            // roam: false,
            // left: '25%',
            // top: '25%',
            // zoom: 1,
            // center: [115.97, 29.71],
            // aspectScale:1,
            // itemStyle: {
            // 	normal: {
            // 		label: {
            // 			show: false
            // 		},
            // 		areaColor: '#fff',
            // 		borderColor: '#41c7db ',
            // 		borderWidth: 1,
            // 	},
            // 	emphasis: {
            // 		areaColor: '#41c7db '
            // 	},

            // },
            // data: ltopdata
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    this.getChina();
  },
  methods: {
    getChina() {
      this.$echarts.registerMap("china", chinaJson);
      this.$echarts.init(this.$refs.chinaMap).setOption(this.oroptionmapjsonr);
      this.$echarts.registerMap("beijing", beijingJson);
      this.$echarts.init(this.$refs.bejingMap).setOption(this.mapOption);
    },
  },
};
</script>
<style lang="scss" scoped>
.echartsmap {
  width: 600px;
  height: 1000px;
  position: relative;
  border-radius: 3px;
  background: #fff;
  z-index: 1;
  box-shadow: 2px 2px 3px #ddd, -2px -2px 3px #ddd;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>


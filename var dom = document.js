var dom = document.getElementById('chart-nqh');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['种植牙', '全网分布', 'TGI']
  },
  xAxis: [
    {
      type: 'category',
      data: ['<=19', '20~29', '30~39', '40~49', '>=50'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 50,
      interval: 10,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      name: 'TGI',
      min: 0,
      max: 150,
      interval: 30,
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    {
      name: '种植牙',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [
        2.96, 7.98, 49.09, 23.36, 16.61
      ]
    },
    {
      name: '全网分布',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [
        8.13, 23.59, 36.42, 20.11, 11.76
      ]
    },
    {
      name: 'TGI',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      data: [36.39,33.83,134.75,116.11,141.25]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
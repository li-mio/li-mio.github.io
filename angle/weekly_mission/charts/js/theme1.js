/**
 * Created by Administrator on 2016/8/26.
 */
Highcharts.createElement('link', {
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ["#d847ec", "#d840e1", "#e13fea", "#e040ea", "#dc46e6", "#ff0066", "#eeaaee",
        "#d84be5", "#d652e3", "#cd60dd", "#c86cd9"],
    chart: {
        backgroundColor: '#c373d6',
        style: {
            fontFamily: "Signika, serif"
        }
    },
    tooltip: {
        borderWidth: 1
    },
    xAxis: {
        gridLineWidth: 1,
        labels: {
            style: {
                color: '#6e6e70'

            }
        }
    },
    yAxis: {
        gridLineWidth:1,
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        },

    },
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
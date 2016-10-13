/**
 * Created by Administrator on 2016/8/26.
 */
Highcharts.createElement('link', {
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ["#45e94a", "#4be640", "#50e543", "#5be24a", "#63df4d", "#6fda56", "#7bd65d",
        "#7fd45f", "#80d560", "#89d165", "#8cd167"],
    chart: {
        backgroundColor: '#96ce6d',
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
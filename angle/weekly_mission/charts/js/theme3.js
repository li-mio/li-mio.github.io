
Highcharts.createElement('link', {
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ["#55d9f0", "#50d8ee", "#4ddbef", "#4edcf0", "#4edbef", "#51d8ee", "#57d5ee",
        "#59d1ec", "#61ceeb", "#69caed", "#6cc9ea"],
    chart: {
        backgroundColor: '#6dc7ea',
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
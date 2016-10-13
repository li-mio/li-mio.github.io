/**
 * Created by Administrator on 2016/8/26.
 */
(function(){
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            $("#container").css("height","500px");

        }
    }

    browserRedirect()
})();
var url="../data.json";
function getDate(url,success){
    $.ajax({
        url:url,
        success:success
    });
}

$(function () {
    getDate(url,function (data) {
        console.log(111,data);
        var studentData=data.content[0].classIn.mission[0].studentData;
        console.log(studentData);

        var studentName=[];
        var opasRate=[];
        var liveRate=[];
        var readingRate=[];
        var avCorrectRate1=[];
        var avCorrectRate2=[];
        var avCorrectRate3=[];
        for(var i=0; i<studentData.length; i++){
            console.log(222,studentData[i].Quiz.correctRate);
            studentName.push(studentData[i].stdName);
            opasRate.push(parseFloat(studentData[i].oPas.correctRate));
            avCorrectRate1.push(parseFloat(studentData[i].oPas.avCorrectRate));
            liveRate.push(parseFloat(studentData[i].live.correctRate));
            avCorrectRate2.push(parseFloat(studentData[i].live.avCorrectRate));
            readingRate.push(parseFloat(studentData[0].Quiz.correctRate));
            avCorrectRate3.push(parseFloat(studentData[0].Quiz.avCorrectRate));
        }
        console.log(134411,opasRate,studentName);
        $('#container1').highcharts({
            chart: {
                type:'area',
                borderRadius:20
            },
            title: {
                margin: 60,
                text: '<a href="javascript:;"style="display:block; font-size:14px;width:100px;height:40px;line-height:20px;font-weight:bold;text-align:center;border-radius:20px;padding:6px;background:#ffffff;color:#c373d6;text-decoration:none;">' +
                'OPAS初次答题<br>' +
                '正确率</a>',
                align: 'left',
                x: 10,
                y: 20,
                useHTML: true
            },
            subtitle: {
                text:null
            },
            xAxis: {
                gridLineColor: '#ce85df',
                categories: studentName,
                tickmarkPlacement:'on',
               // tickPixelInterval:1,
               //minTickInterval:1,
                //tickInterval:1,
                    labels: {
                    style: {
                        color: '#ffffff',
                        fontSize:'8px'
                        //fontWeight: 'bold',

                    },
                    rotation: -45
                }
            },
            yAxis: {
                gridLineColor: '#e2beea',
                tickInterval: 20,
                min:0,
                max:100,
                title: {
                    text: null
                },
                labels:{
                    style: {
                        color: '#ffffff',
                        fontSize:'10px'
                    },
                    formatter:function(){
                        if(this.value ===0){
                            return this.value;
                        }else{
                            return this.value+"%";
                        }
                    }
                }
            },
            legend: {
                align: 'right',
                padding: 3,
                paddingLeft:30,
                itemMarginTop: 5,
                itemMarginBottom:8,
                verticalAlign: 'top',
                y:6,
                layout: 'vertical' ,
                floating:true,
                itemStyle:{
                    color:'#f5fffd',
                    fontSize:14
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 3,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    threshold: null
                }
            },

            series: [
                {
                    type: 'area',
                    color:'#f5c5ff',
                    data: opasRate,
                    name:'初次答题正确率'

                },
                {
                    type: 'line',
                    color:'yellow',
                    data: avCorrectRate1,
                    dashStyle: 'shortdot',
                    name:'全国平均正确率',
                    marker: {
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        enabled: false
                    }
                }],
            credits: {
                enabled: false
            }
        });
        $('#container2').highcharts({
            chart: {
                borderRadius:20
            },
            title: {
                margin: 60,
                text: '<a href="javascript:;"style="display:block;font-size:14px;width:100px;height:40px;line-height:20px;font-weight:bold;text-align:center;border-radius:20px;padding:6px;background:#ffffff;color:#9ecb6e;text-decoration:none;">' +
                'LIVE 初次答题<br>' +
                '正确率</a>',
                align: 'left',
                x: 10,
                y: 20,
                useHTML: true
            },
            subtitle: {
                text:null
            },
            xAxis: {
                gridLineColor: '#97cc72',
                categories: studentName,
                tickmarkPlacement:'on',
                labels: {
                    style: {
                        color: '#ffffff',
                        //fontWeight: 'bold',
                        fontSize: '8px',
                    },
                    rotation: -45
                }
            },
            yAxis: {
                gridLineColor: '#cde5b3',
                tickInterval: 20,
                min:0,
                max:100,
                title: {
                    text: null
                },
                labels:{
                    style: {
                        color: '#ffffff'
                    },
                    formatter:function(){
                        if(this.value ===0){
                            return this.value;
                        }else{
                            return this.value+"%";
                        }
                    }
                }
            },
            legend: {
                align: 'right',
                padding: 3,
                paddingLeft:30,
                itemMarginTop: 5,
                itemMarginBottom:8,
                verticalAlign: 'top',
                y:6,
                layout: 'vertical' ,
                floating:true,
                itemStyle:{
                    color:'#fbfffc',
                    fontSize:14
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 3,
                    lineColor:'#00fe20',
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    threshold: null
                }
            },

            series: [
                {
                    type: 'area',
                    color:'#00fe20',
                    data: readingRate,
                    name:'初次答题正确率'

                },
                {
                    type: 'line',
                    color:'yellow',
                    data: avCorrectRate3,
                    dashStyle: 'shortdot',
                    name:'全国平均分',
                    marker: {
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        enabled: false
                    }
                }],
            credits: {
                enabled: false
            }
        });
        $('#container3').highcharts({
            chart: {
                borderRadius:20
            },
            title: {
                margin: 60,
                text: '<a href="javascript:;"style="display:block;font-size:14px;width:100px;height:40px;line-height:20px;font-weight:bold;text-align:center;border-radius:20px;padding:6px;background:#ffffff;color:#6dc7ea;text-decoration:none;">' +
                'Quiz 初次答题<br>' +
                '正确率</a>',
                align: 'left',
                x: 10,
                y: 20,
                useHTML: true
            },
            subtitle: {
                text:null
            },
            xAxis: {
                gridLineColor: '#7dd2f1',
                categories: studentName,
                tickmarkPlacement:'on',
                labels: {
                    style: {
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '8px'
                    },
                    rotation: -45
                }
            },
            yAxis: {
                gridLineColor: '#b5e2f7',
                tickInterval: 20,
                min:0,
                max:100,
                title: {
                    text: null
                },
                labels:{
                    style: {
                        color: '#ffffff'
                    },
                    formatter:function(){
                        if(this.value ===0){
                            return this.value;
                        }else{
                            return this.value+"%";
                        }
                    }
                }
            },
            legend: {
                align: 'right',
                padding: 3,
                paddingLeft:30,
                itemMarginTop: 5,
                itemMarginBottom:8,
                verticalAlign: 'top',
                y:6,
                layout: 'vertical' ,
                floating:true,
                itemStyle:{
                    color:'#fbfffc',
                    fontSize:14
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 3,
                    lineColor:'#1df8f4',
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    threshold: null
                }
            },

            series: [
                {
                    type: 'area',
                    color:'#24f2f0',
                    data: liveRate,
                    name:'初次答题正确率'

                },
                {
                    type: 'line',
                    color:'yellow',
                    data: avCorrectRate2,
                    dashStyle: 'shortdot',
                    name:'全国平均分',
                    marker: {
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        enabled: false
                    }
                }],
            credits: {
                enabled: false
            }
        });
    });

});
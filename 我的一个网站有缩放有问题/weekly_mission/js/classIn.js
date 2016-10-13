/**
 * Created by James on 2016/8/24.
 */
console.log('478');
var url="data2.json";
$.ajax({
    url:"data2.json",
    success:function(data){
        console.log(data.content[0]);
        //绑定classname
        var main=new Vue({
            el:'#main',
            data:{
                'data':data,
                'sessionInName':data.content[0].classIn,
                'sessionOutName':data.content[0].classOut,
                "dataInStudent":data.content[0].classIn.mission[0],
                "dataOutStudent":data.content[0].classOut.mission[0],
                "clsss_id":0,
                "mission_id":0,
                "href":"student-year",
                "in_out":0,
                "opas_rate":"opas_rate",
                "reading_rate":"reading_rate",
                "live_rate":"live_rate"
            },
            methods:{
                choose1:getData1,
                choose2:getData2,
                change_inner:change_inner,
                change_out:change_out
            }
        });
        var index1,index2;
        function getData1(index){
            index1=index;//index1选择班级
            main.clsss_id=index1;
            main.mission_id=0;
            main.in_out=0;
            main.dataInStudent=data.content[index1].classIn.mission[0];
            main.dataOutStudent=data.content[index1].classOut.mission[0];
            var nameInMision=data.content[index1].classIn;
            main.sessionInName=nameInMision;
            //班外数据
            var nameOutMision=data.content[index1].classOut;
            main.sessionOutName=nameOutMision;
            //console.log('class2',nameInMision,data.content[index1].classOut);
            //绑定mission
        }
        function getData2(index){
            if(index==0) {
                main.href="student-year";
            }else{
                    main.href="student-mission";
                }
            if(index1== undefined){index1=0;}
            console.log('session',index1,index);
            //班内数据

            index2=index;//index1选择班级
            main.mission_id=index2;
            var dataInMision=data.content[index1].classIn.mission[index2];
            main.dataInStudent=dataInMision;
            //班外数据
            var dataOutMision=data.content[index1].classOut.mission[index2];
            main.dataOutStudent=dataOutMision;
           // console.log(12345,index2,dataInMision.studentData,dataOutMision);

        }
        function change_inner(){
            if(index1==undefined){index1=0;}
            main.in_out=0;
            //main.in_out_class="active";
            main.mission_id=0;
            main.dataInStudent=data.content[index1].classIn.mission[0];
        }
        function change_out(){
            if(index1==undefined){index1=0;}
            main.in_out=1;
            main.in_out_class="active";
            main.mission_id=0;
            main.dataOutStudent=data.content[index1].classOut.mission[0];
            console.log('1234',main.dataOutStudent);
        }
        //console.log('hehee', main.dataInStudent);
        var dataInMision=main.dataInStudent;
        for(var i=0;i<dataInMision.studentData.length;i++){
            var opas_rate=dataInMision.studentData[i].oPas.creditSelf/dataInMision.studentData[i].oPas.creditAll;
            var reading_rate=dataInMision.studentData[i].Reading.creditSelf/dataInMision.studentData[i].Reading.creditAll;
            var live_rate=dataInMision.studentData[i].live.creditSelf/dataInMision.studentData[i].live.creditAll;
            main.opas_rate=opas_rate;
            main.reading_rate=reading_rate;
            main.live_rate=live_rate;
        }
    }
});


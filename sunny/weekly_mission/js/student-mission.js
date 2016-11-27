/**
 * Created by James on 2016/8/24.
 */

var url="data2.json";
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var student_id=getQueryString('i_id');
var class_id=getQueryString('c_id');;
var mission_id=getQueryString('m_id');
var in_out=getQueryString('in_id');
console.log(1,student_id,class_id,mission_id,in_out);

$.ajax({
    url:url,
    success:function(data){
        if(in_out){
            var content_data=data.content[class_id].classIn.mission[mission_id].studentData[student_id];
            var mission_data=data.content[class_id].classIn.mission;
        }else{
            var content_data=data.content[class_id].classOut.mission[mission_id].studentData[student_id];
            var mission_data=data.content[class_id].classOut.mission;
        }

        console.log(123,content_data);
        var main=new Vue({
            el:'#content',
            data:{
                "content_data":content_data,
                "mission":mission_data,
                "mission_id":mission_id
            },
            methods:{
                choose1:getData1
            }
        });
        function getData1(index){
            main.mission_id=index;//index1Ñ¡Ôñ°à¼¶
        }
    }
});




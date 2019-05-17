function get(){
    var url ="https://api.kcg.gov.tw/api/service/get/4eba94e0-323c-4530-95a6-dd276bd8765d";
    $.get(url, function(rs){
        var name ='';
        if(rs.data.success === true){
            name += '<div>'
            for(var i=0; i < rs.data.data.length; i++){
                name += '<li>站序：'+ rs.data.data[i].站序 +'</li>'
                name += '<li>代碼：'+ rs.data.data[i].車站代碼 +'</li>'
                name += '<li>中文站名：'+ rs.data.data[i].車站中文站名 +'</li>'
                name += '<li>英文站名：'+ rs.data.data[i].車站英文站名 +'</li>'
                name += '<li>站位地點'+ rs.data.data[i].站位地點 +'</li>'
                name += '<br/>'
            }
            name += '</div>'
            $('#content').append(name);
        }else{
            $("#content").text("error");
        }
    });
}
function clear_data(){
    $("#content").html('');
  }
function red(){
    document.body.style.color = "red";
}
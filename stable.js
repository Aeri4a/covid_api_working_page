$(document).ready(function(){
    init();

    function init(){
        var url = "https://api.covid19api.com/world/total";
        var url2 = "https://api.covid19api.com/summary";
        
        var data1 = '';
        var data2 = '';
        var data3 = '';
        var data4 = '';

        $.get(url, function(data1){
            //console.log(data.TotalConfirmed);
            data1 = `<p><b>Total confirmed</b><br/>${data1.TotalConfirmed}<p/>`;
            $("#transf1").html(data1);
        });

        $.get(url, function(data2){
            data2 = `<p><b>Total deaths</b><br/>${data2.TotalDeaths}<p/>`;
            $("#transf2").html(data2);
        });

        $.get(url, function(data3){
            data3 = `<p><b>Total recovered</b><br/>${data3.TotalRecovered}<p/>`;
            $("#transf3").html(data3);
        });
        
        $.get(url2, function(data4){
            data4 = `<p><b>New confirmed</b><br/>${data4.Global.NewConfirmed}<p/>`;
            $("#transf4").html(data4);
        });

        setTimeout("init()",600000);
    };
});
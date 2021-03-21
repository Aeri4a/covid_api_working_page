function search(){
    event.preventDefault();

    if(document.getElementById("area").value.length != 0){
        //var today = new Date();
        //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
        var country = document.getElementById('area').value;

        var url_l = "https://api.covid19api.com/country/"+country;

        var dt1 = '';
        var dt2 = '';
        var dt3 = '';
        var dt4 = '';
        
        $.get(url_l, function(dt1){
            //console.log(cos1); //CHECK
            /*
            const html = cos1.map(idk => {
                return `${idk.Confirmed}`
            })
            */
            /* CUTTING ARRAYS - FOR NEXT TIME
            var i,j,temparray,chunk = 10;
            for (i=0,j=html.length; i<j; i+=chunk) {
            temparray = html.slice(i,i+chunk);
            
            }
            console.log(temparray[0]);
            */

            //console.log(cos1[cos1.length-1].Confirmed); //CHECK
            dt1 = `<p><b>CONFIRMED</b><br/>${dt1[dt1.length-1].Confirmed}<p/>`;
            $("#dt1").html(dt1);
        });

        $.get(url_l, function(dt2){
            dt2 = `<p><b>ACTIVE</b><br/>${dt2[dt2.length-1].Active}<p/>`;
            $("#dt2").html(dt2);
        });

        $.get(url_l, function(dt3){
            dt3 = `<p><b>RECOVERED</b><br/>${dt3[dt3.length-1].Recovered}<p/>`;
            $("#dt3").html(dt3);
        });

        $.get(url_l, function(dt4){
            dt4 = `<p><b>DEATHS</b><br/>${dt4[dt4.length-1].Deaths}<p/>`;
            $("#dt4").html(dt4);
        });
    }
}


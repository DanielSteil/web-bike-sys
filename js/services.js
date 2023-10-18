(function(){

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api-bike-sys.herokuapp.com/api/v1/services/lasts?limit=100",
        success: function(homeData) {
            
            homeData = homeData.map(data => {
                let servDate = new Date(data.serviceDate);
                let day = servDate.getDate().toString();
                if(day.length == 1)
                    day = "0"+day;
                let month = (servDate.getMonth()+1).toString();
                if(month.length == 1)
                    month = "0"+month;
                data.serviceDate = `${day}/${month}/${servDate.getFullYear()} - ${servDate.getHours()}:${servDate.getMinutes()}`
                return data
            })
            
            $("#serviceTable").DataTable({
                data: homeData,
                columns: [
                    { 'data' : 'clientName'},
                    { 'data' : 'clientBike'},
                    { 'data' : 'description'},
                    { 'data' : 'value'},
                    { 'data' : 'serviceDate'}
                ] 
            })

        }
    });

})();
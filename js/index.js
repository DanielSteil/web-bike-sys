(function() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api-bike-sys.herokuapp.com/api/v1/services/count",
        success: function(cardData) {  
            document.querySelector("#card-day").innerText = cardData.servicesDay.toString();
            document.querySelector("#card-week").innerText = cardData.servicesWeek.toString();
            document.querySelector("#card-month").innerText = cardData.servicesMonth.toString();
        }
    });


    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api-bike-sys.herokuapp.com/api/v1/services/lasts?limit=10",
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
            
            $("#homeTable").DataTable({
                data: homeData,
                columns: [
                    { 'data' : 'clientName'},
                    { 'data' : 'clientBike'},
                    { 'data' : 'description'},
                    { 'data' : 'serviceDate'}
                ] 
            })

        }
    });

})();
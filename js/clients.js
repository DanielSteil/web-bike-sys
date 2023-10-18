(function() {

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api-bike-sys.herokuapp.com/api/v1/clients",
        success: function(clientData) {
            clientData = clientData.map(data => {
                let creatAt = new Date(data.createdAt);
                let day = creatAt.getDate().toString();
                if(day.length == 1)
                    day = "0"+day;
                let month = (creatAt.getMonth()+1).toString();
                if(month.length == 1)
                    month = "0"+month;
                data.createdAt = `${day}/${month}/${creatAt.getFullYear()} - ${creatAt.getHours()}:${creatAt.getMinutes()}`
                return data
            })


            $("#clientTable").DataTable({
                data: clientData,
                columns: [
                    { 'data' : 'name'},
                    { 'data' : 'number'},
                    { 'data' : 'bikes'},
                    { 'data' : 'createdAt'}
                ] 
            })

        }
    });

})();

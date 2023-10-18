(function() {

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api-bike-sys.herokuapp.com/api/v1/stocks",
        success: function(clientData) {

            $("#stockTable").DataTable({
                data: clientData,
                columns: [
                    { 'data' : 'description'},
                    { 'data' : 'amount'}
                ] 
            })

        }
    });

})();

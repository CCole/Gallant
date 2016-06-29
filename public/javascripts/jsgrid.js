$(function() {

console.log('in jsgrid'); 
    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: false,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete client?",
        controller: {
            loadData: function() {
                    $.ajax({
            type: "GET",
            url: "/",
          
            dataType: "json"                     
                });
            }
        },
        fields: [
            { name: "Staff_ID", type: "text", width: 150 },
            { name: "Staff_Type", type: "text", width: 50},
            { name: "NPI_Number", type: "text", width: 200 },
            { name: "First_Name", type: "text", width: 100},
            { name: "Last_Name", type: "text", width: 100}
          
        ]
    });
    
});


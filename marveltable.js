$(document).ready(function(){

     $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appI7ru06MduSm8Ux/Films?api_key=key6NO7hKMS69ECMu&maxRecords=21&view=Marvel%20Firm%20Grid%20View";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Film_Name);
                      table1_items.push(value.fields.US_Release_Date);
                      table1_items.push(value.fields.Production_Company);
                      table1_items.push(value.fields.Distributed_by);
                      table1_items.push(value.fields.Budget);
                      table1_items.push(value.fields.Box_Office);
                      table1_items.push(value.fields.Accounting_Rate_of_Return);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Film Name",
                      defaultContent:""},
                    { title: "US Release Date",
                        defaultContent:"" },
                    { title: "Production Company",
                      defaultContent:"" },
                    { title: "Distributed by",
                      defaultContent:""},
                    { title: "Budget",
                        defaultContent:""},
                    { title: "Box Office",
                      defaultContent:""},
                    { title: "Accounting Rate of Return",
                        defaultContent:""},
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/appI7ru06MduSm8Ux/Films?api_key=key6NO7hKMS69ECMu&maxRecords=21&view=Marvel%20Firm%20Grid%20View";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Film_Name);
                        table2_items.push(value.fields.Box_Office);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "Film Name",
                          defaultContent:""},
                        { title: "Box Office",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready

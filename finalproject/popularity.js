$(document).ready(function(){

var table1_items = [];
var i = 0;
var airtable_read_endpoint =
"https://api.airtable.com/v0/app1AZzcTdNbjNBIM/Stores?api_key=key6NO7hKMS69ECMu&maxRecords=9&view=Grid%20view";
var table1_dataSet = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           table1_items = [];
               table1_items.push(value.fields.Name);
               table1_items.push(value.fields.Dianping);
               table1_items.push(value.fields.Red);
               table1_items.push(value.fields.Google_Map);
               table1_dataSet.push(table1_items);
               console.log(table1_items);
        }); // end .each
        console.log(table1_dataSet);
       $('#table1').DataTable( {
           data: table1_dataSet,
           retrieve: true,
           ordering: false,
           columns: [
               { title: "品牌",
                 defaultContent:""},
               { title: "大眾點評",
                 defaultContent:""},
               { title: "小紅書",
                   defaultContent:""},
               { title: "谷歌地圖",
                    defaultContent:""},
           ] // rmf columns
       } ); // end dataTable

       var chart = c3.generate({
            data: {
                columns: table1_dataSet,
                type : 'bar'
            },
            bar: {
                title: "品牌熱度",
            }
        });

 }); // end .getJSON

$(document).ready(function(){


    var address_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/app1AZzcTdNbjNBIM/map?api_key=key6NO7hKMS69ECMu&maxRecords=3&view=Grid%20view"
    var address_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         address_items = [];
       address_items.push(value.fields.brand);
       address_items.push(value.fields.name);
       address_items.push(value.fields.address);
       address_items.push(value.fields.open_daily);
       address_items.push(value.fields.contact);
         address_dataSet.push(address_items);
         console.log(address_items);
      });
         console.log(address_dataSet);
         $("#map").DataTable({
           data:address_dataSet,
           retrive:true,
           destroy:true,
           columns: [
                   { title: "品牌",
                     defaultContent:""},
                   { title: "地區",
                       defaultContent:"" },
                   { title: "地址",
                     defaultContent:"" },
                   { title: "營業時間",
                     defaultContent:""},
                   { title: "聯繫方式",
                       defaultContent:""},
                  ]
         });
    });
  });

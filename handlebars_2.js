


var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
var context = { 
    title: "Собаке Качалова" 
};
$('.main').append(template(context));
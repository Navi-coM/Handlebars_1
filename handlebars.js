
let mainBlock = document.querySelector(".main").innerHTML;
let template = Handlebars.compile(mainBlock);
let context = {
    title: 'HandleBars',
}

let html  = template(context);
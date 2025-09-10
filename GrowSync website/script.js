function overBackground(element) {
    element.style.backgroundColor = '#3b4598';
}

function outBackground(element) {
    element.style.backgroundColor = '#075af6';
}

var x = 0;
var text = document.querySelector("#text");
var img = document.querySelector(".About img");
function changSection() {
    x++;
    if (x % 2 == 0) {
        text.innerText = "We are a forward thinking company dedicated to providing innovatice solutions that fule bussineses grpwth with a focus on modern technologies and strategic insights, we help bussineses streamline their operations, enhance customers experiences, and sclae efficency.Wherther you are looking to improve  your   digital presence optimize processes or drive new revenue streams"
        img.src = "img/about.jpg";
    }
    else {
        text.innerText = "t our company innovative drives eveything we do, We spacilize in revelaging cutting-edge t our company innovative drives eveything we do, We spacilize in revelaging cutting-edge"
        img.src = "img/hero-img.png";
    }
}

var nav = document.querySelector('nav');
function fixedNav() {
    nav.style.position = 'fixed';

}

const services = document.querySelector('.All_services');
const servicearr = document.querySelectorAll('.service');
function addService() {
    var x =(Math.random()*(servicearr.length-1)).toFixed()

        var node = servicearr[x].cloneNode(true);
        var img = node.querySelector('img')
        img.src = "img/features.png"
        services.append(node)
        
    
}


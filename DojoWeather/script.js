function accept(classs) {
    var element = document.getElementsByClassName(classs)[0];
    element.remove()
}

function temp(select) {
    var option1 = document.querySelectorAll('.red');
    var option2 = document.querySelectorAll('.blue');
    var unit = select.value;
    
        for (var i = 0; i < option1.length; i++) {
            let tempVal1 = parseInt(option1[i].innerText);
            let tempVal2 = parseInt(option2[i].innerText);
            if (unit == "F") {
            option1[i].innerText = ((tempVal1 * 9 / 5) + 32).toFixed();
            option2[i].innerText = ((tempVal2 * 9 / 5) + 32).toFixed();
        }
            else {  
            option1[i].innerText = (((tempVal1 - 32) * 5 / 9)).toFixed();
            option2[i].innerText = (((tempVal2 - 32) * 5 / 9)).toFixed();
        }
        
    }
}
function logOut(element) {

    if(element.innerText=="log out"){
        element.innerText = "Login";
    }
    else{
            element.innerText = "log out";
    }
    
}

function deleteContent(element){
    element.remove();
}


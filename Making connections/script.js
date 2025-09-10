function changeName(){
    var element = document.getElementById('name');
    element.innerText = 'Tom Smith';
}

function removePic(){
    var user = document.getElementById(id1);
    user.remove();
    var requests =document.getElementById(id2);
    requests.innerText-=1;
}

function accept(id1 ,id2,id3){
    var user=document.getElementById(id1);
    user.remove();

    var connections = document.getElementById(id2);
    var x = parseInt(connections.innerText);
    x++;
    connections.innerText=x;

    var requests =document.getElementById(id3);
    requests.innerText-=1;

}
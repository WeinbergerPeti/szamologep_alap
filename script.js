window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

var txt="";
var db=1;
function init()
{
    for (let i = 1; i < 10; i++) 
    {
        $All(".szamok")[0].innerHTML+="<button>"+db+"</button>";
        db++;
        console.log(db);
    }
    $All(".szamok")[0].innerHTML+='<button>'+0+'</button>';

    $("footer").innerHTML="készítette: Weinberger Péter"

    
    for (let i = 0; i < 10; i++) 
    {
        $All("button")[0].addEventListener("click", gombErtek);
    }
}
    


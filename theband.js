function openmodel() {
    document.querySelector(".model").style.display="flex"
    document.querySelector(".container_model").addEventListener("click",function (params) {
        params.stopPropagation();
    })
}
function dongmodel(params) {
    document.querySelector(".model").style.display="none"
}
function dongmomenu(params) {
    var header=document.querySelector(".header");
    var menu=document.querySelector(".menu");
    var height=header.clientHeight;
    header.style.height="auto";
    menu.onclick=function (params) {
        var dk=header.clientHeight=== height;
        if(dk)
        {
            header.style.height="auto";
        }
        else
        {
            header.style.height=null;
        }
    }

}

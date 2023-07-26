
function visible(id,visibility){
    document.querySelector('#lsbox').style.display=visibility;
    document.querySelector('#sgbox').style.display="none";
}
function show(id,visibility){
    document.querySelector('#sgbox').style.display=visibility;
    document.querySelector('#lsbox').style.display="none";
}
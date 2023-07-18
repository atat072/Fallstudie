function switchDarkemode(){
    if(document.getElementById("DarkmodeSwitch").checked){
        document.getElementById("root").setAttribute("data-bs-theme","dark");
    }else{
        document.getElementById("root").setAttribute("data-bs-theme","light");
    }
}
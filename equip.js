function updateAll(){
    updateValues("head");
}

function updateValues(equip){
    document.getElementById(equip +"Name").value = getCookie(equip +"Name");
    document.getElementById(equip +"Desc").value = getCookie(equip +"Desc");
    
    document.getElementById(equip +"TypeMundane").checked = false;
    document.getElementById(equip +"TypeMasterwork").checked = false;
    document.getElementById(equip +"TypeMagic").checked = false;
    document.getElementById(equip +"TypeArtifact").checked = false;
    switch (getCookie(equip +"Type")){
        case "1":
            document.getElementById(equip +"TypeMasterwork").checked = true;
            break;
        case "2":
            document.getElementById(equip +"TypeMagic").checked = true;
            break;
        case "3":
            document.getElementById(equip +"TypeArtifact").checked = true;
            break;
        case "0":
        default:
            document.getElementById(equip +"TypeMundane").checked = true;
            break;
    }
    updateEquip(equip);
}

function updateEquip(equip){
    if (document.getElementById(equip+"Name").value != ""){
        document.getElementById(equip).style.display = "block";
        switch (document.querySelector("input[name='"+equip+"Type']:checked").value){
            case "0":
                document.getElementById(equip).style.filter="grayscale(95%) brightness(120%)";
                break;
            case "1":
                document.getElementById(equip).style.filter="hue-rotate(210deg) brightness(125%) contrast(120%)";
                break;
            case "2":
                document.getElementById(equip).style.filter="hue-rotate(0deg)";
                break;
            case "3":
                document.getElementById(equip).style.filter="hue-rotate(145deg) brightness(95%) contrast(120%)";
                break;
        }

    } else {
        document.getElementById(equip).style.display = "none";
    }
}



function setCookie(cookieName, radioId = cookieName){
    if (document.getElementById(cookieName).value != "" || radioId != cookieName){
        const expiry = new Date();
        expiry.setTime(expiry.getTime() + (3*365*30*24*60*60*1000));
        
        document.cookie = cookieName +"="+ document.getElementById(radioId).value +"; expires="+ expiry +"; path=/";
    } else {
        removeCookie(cookieName);
    }
}

function removeCookie(cookieName){
    document.cookie = cookieName +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}


function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
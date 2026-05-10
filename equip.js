function updateAll(){
    updateValues("head");
    updateValues("eyes");
    updateValues("neck");
    updateValues("cape");
    updateValues("armor");
    updateValues("shirt");
    updateValues("hands");
    updateValues("arms");
    updateValues("ring1");
    updateValues("ring2");
    updateValues("belt");
    updateValues("boots");
    skinColor(getCookie("skin"));
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

function skinColor(sColor){
    document.getElementById("baseBody").style.filter="brightness(100%)";
    switch (sColor){
        case 0:
        default:
            document.getElementById("baseBody").style.backgroundImage="url(images/body.png)";
            break;
        case 1:
            document.getElementById("baseBody").style.backgroundImage="url(images/body1.png)";
            break;
        case 2:
            document.getElementById("baseBody").style.backgroundImage="url(images/body2.png)";
            break;
        case 3:
            document.getElementById("baseBody").style.backgroundImage="url(images/body3.png)";
            break;
        case 4:
            document.getElementById("baseBody").style.backgroundImage="url(images/body4.png)";
            break;
        case 5:
            document.getElementById("baseBody").style.backgroundImage="url(images/body5.png)";
            break;
        case 6:
            document.getElementById("baseBody").style.backgroundImage="url(images/body6.png)";
            break;
        case 7:
            document.getElementById("baseBody").style.backgroundImage="url(images/body7.png)";
            break;
        case 8:
            document.getElementById("baseBody").style.backgroundImage="url(images/body8.png)";
            break;
        case 9:
            document.getElementById("baseBody").style.backgroundImage="url(images/body.png)";
            document.getElementById("baseBody").style.filter="brightness(15%)";
            break;
    }
    skinCookie(sColor);
}

//Cookie stuff
function setCookie(cookieName, radioId = cookieName){
    if (radioId != cookieName || document.getElementById(cookieName).value != ""){
        const expiry = new Date();
        expiry.setTime(expiry.getTime() + (3*365*30*24*60*60*1000));
        
        document.cookie = cookieName +"="+ document.getElementById(radioId).value +"; expires="+ expiry +"; path=/";
    } else {
        removeCookie(cookieName);
    }
}

function skinCookie(skin){
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + (3*365*30*24*60*60*1000));
    document.cookie = "skin="+ skin +"; expires="+ expiry +"; path=/";
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
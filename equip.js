function updateAll(){
    document.getElementById("headName").value = "headName";
    updateEquip("head");
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
        const expiry = new Date();
        expiry.setTime(expiry.getTime() + (3*365*30*24*60*60*1000));
        document.cookie = ""+ equip +"Name="+ document.getElementById(equip +"Name").value +"; expires="+ expiry +"; path=/";
    } else {
        document.getElementById(equip).style.display = "none";
        document.cookie = ""+ equip +"Name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    alert("En la cabeza llevas un " + getCookie(equip+"Name"));
}

function getCookie(cname) {
  let name = cname + "=";
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
function closeOverlay() {
    document.getElementById("skillOverlay").style.display = "none";
}


function skillPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.name;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>" + skill.description;
}

function ultPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.name;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: " 
    + skill.range + "<br>Cast Time: " + skill.speed + "<br>Cooldown: " + skill.cooldown + "<br><br>" + skill.description;
}

function selectSpec(active, inactive) {
    document.getElementById(active).style.display = "block"
    document.getElementById(inactive).style.display = "none"
}

function selectClass(active) {
overlayList = document.getElementsByClassName("talentTree"); 
for (i = 0; i < overlayList.length; i++) {
  overlayList[i].style.display = "none";}
  document.getElementById(active).style.display = "block"
}
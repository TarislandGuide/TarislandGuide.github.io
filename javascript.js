function closeOverlay() {
    document.getElementById("skillOverlay").style.display = "none";
}


function talentPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>" + skill.description;
}

function passivePopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>" + skill.description;
}

function skillPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'><b>" 
    + skill.range + " m</b></span><br>Cast Time: <span class = 'orange'><b>" + skill.speed + "</b></span><br>Cooldown: <span class = 'orange'><b>" + skill.cooldown + " sec</b></span><br><br>" + skill.description;
}

function skillCostPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'><b>" 
    + skill.range + " m</b></span><br>Resource: <span class = 'orange'><b>" + skill.cost + "</b></span><br>Cast Time: <span class = 'orange'><b>" + skill.speed + "</b></span><br>Cooldown: <span class = 'orange'><b>" + skill.cooldown + " sec</b></span><br><br>" + skill.description;
}

function ultPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'><b>" 
    + skill.range + " m</b></span><br>Cooldown: <span class = 'orange'><b>" + skill.cooldown + " sec</b></span><br><br>" + skill.description;
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
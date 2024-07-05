function closeOverlay() {
    document.getElementById("skillOverlay").style.display = "none";
}

const skillCode = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function talentPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img src='"+ skill.icon + "'><span> " + skillCode[pos] + "/" + skill.max + " </span><img src='./Icons/plus.png' onclick='plusSkill(\"" + skill.id + "\")'></span><img src='./Icons/minus.png' onclick='minusSkill(\"" + skill.id + "\")'><h2> " + skill.name + "</h2><br>" + skill.description;
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
    skillCode[0] = active
    for (i = 1; i < skillCode.length; i++) {
        skillCode[i] = 0;}
    console.log(skillCode)
    reset = document.getElementsByClassName("zero");
    for (i = 0; i < reset.length; i++) {
        reset[i].innerHTML = "0";}
}

function selectClass(active) {
overlayList = document.getElementsByClassName("talentTree"); 
for (i = 0; i < overlayList.length; i++) {
  overlayList[i].style.display = "none";}
  document.getElementById(active).style.display = "block"
}

function plusSkill(id) {
    pos = id.replace(/^[A-Z0]+/, '');
    function search(v){
        return id === v.id;
    }
    let skill = talents.find(search);
    if (skillTotal() < 32 && skillTotal() >= skill.min && skillCode[pos] < skill.max) {
        if (skillCode[skill.preq] === parseInt(skill.lvl) || skillCode[skill.preq] === undefined){
    skillCode[pos]++
    talentPopup(id);
    }
    }
    document.getElementById(id).innerHTML = skillCode[pos];
}

function minusSkill(id) {
    pos = id.replace(/^[A-Z0]+/, '');
    function search(v){
        return id === v.id;
    }
    if (skillCode[pos] >= 1){
        skillCode[pos]--
        talentPopup(id);
    }
    document.getElementById(id).innerHTML = skillCode[pos];
}

function skillTotal() {
    let sum = 0
    for (let i = 1; i < skillCode.length; i++) {
        sum += skillCode[i];
    }
    return sum;
}
 
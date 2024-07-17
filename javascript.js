function closeOverlay() {
    document.getElementById("skillOverlay").style.display = "none";
}

let skillCode = ['WAWS',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function test(value) { 
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    if (skillTotal() < 32 && skillTotal() >= skill.min && skillCode[pos] < skill.max) {
    if (skillCode[skill.preq] === parseInt(skill.lvl) || skillCode[skill.preq] === undefined){
    return true
}}
return false
}

function talentPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><span class='popSkillCalc'> " + skillCode[pos] + "/" + skill.max + " </span><img id='minus' src='./Icons/minus.png' onclick='minusSkill(\"" 
    + skill.id + "\")'>  </span><img id='plus' src='./Icons/plus.png' onclick='plusSkill(\"" + skill.id + "\")'><h2> " + skill.name + "</h2><br>" + skill.description;
    if (test(value) === true) {
        document.getElementById('plus').className = "colour";
    }
    else {document.getElementById('plus').className = "bright";        
    }
    if (skillCode[pos] === 0) {
        document.getElementById('minus').className = "bright";
    }
}

function passivePopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>" + skill.description;
}

function skillPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'><b>" 
    + skill.range + " m</b></span><br>Cast Time: <span class = 'orange'><b>" + skill.speed + "</b></span><br>Cooldown: <span class = 'orange'><b>" + skill.cooldown + " sec</b></span><br><br>" + skill.description;
}

function skillCostPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'><b>" 
    + skill.range + " m</b></span><br>Resource: <span class = 'orange'><b>" + skill.cost + "</b></span><br>Cast Time: <span class = 'orange'><b>" + skill.speed + "</b></span><br>Cooldown: <span class = 'orange'><b>" + skill.cooldown + " sec</b></span><br><br>" + skill.description;
}

function ultPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'><b>" 
    + skill.range + " m</b></span><br>Cooldown: <span class = 'orange'><b>" + skill.cooldown + " sec</b></span><br><br>" + skill.description;
}

function selectSpec(active) {
    var code = active + '000000000000000000000'
    reset(code);
    document.getElementById("codeBox").value = '';
}

function selectClass(active) {
    var code = active + '000000000000000000000'
    reset(code);
    document.getElementById("codeBox").value = '';
}

function plusSkill(id) {
    pos = id.replace(/^[A-Z0]+/, '');
    if (test(id) === true) {
    skillCode[pos]++
    talentPopup(id);
    }
    if (skillCode[pos] > 0){
        document.getElementById(id.substr(2)).className = "colour";
    }
    document.getElementById(id).innerHTML = skillCode[pos];
    document.getElementById("codeBox").value = skillCode.join('')
}

function minusSkill(id) {
    pos = id.replace(/^[A-Z0]+/, '');
    if (skillCode[pos] >= 1){
        skillCode[pos]--
        talentPopup(id);
        document.getElementById(id).innerHTML = skillCode[pos];
    }
    if (skillCode[pos] === 0){
        document.getElementById(id.substr(2)).className = "gray";
    }
    document.getElementById("codeBox").value = skillCode.join('')
    }

function copy() {
    var copyText = document.getElementById("codeBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function importCode() {
    var code = document.getElementById("codeBox").value
    reset(code);
}

function reset(code) {
    var num = code.replace(/[A-Z]/g, '');
    var numArray = num.split('').map(Number)
    var spec = code.replace(/[0-9]/g, '');
    var getClass = spec.slice(0, 2);
    skillCode = [spec, ...numArray];

    talentTree = document.getElementsByClassName("talentTree"); 
    for (i = 0; i < talentTree.length; i++) {
    talentTree[i].style.display = "none";}
    document.getElementById(getClass).style.display = "block"

    specList = document.getElementsByClassName("specList"); 
    for (i = 0; i < specList.length; i++) {
    specList[i].style.display = "none";}
    document.getElementById(spec).style.display = "block"

    for (let i = 1; i < skillCode.length; i++) {
        let id = skillCode[0] + 'T' + String(i).padStart(2, '0')
        document.getElementById(id).innerHTML = skillCode[i]
        if (skillCode[i] > 0){
            document.getElementById(id.substr(2)).className = "colour";
        }
        else document.getElementById(id.substr(2)).className = "gray";
    }
}

function resetBtn() {
    code = skillCode[0] + '000000000000000000000'
    reset(code);
}

function skillTotal() {
    let sum = 0
    for (let i = 1; i < skillCode.length; i++) {
        sum += skillCode[i];
    }
    return sum;
}

function raidBuilds(value) {
    function search(v){
        return value === v.Id;
    }
    let code = builds.find(search);
    reset(code.SkillCode);
}
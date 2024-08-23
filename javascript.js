function closeOverlay() {
    document.getElementById("skillOverlay").style.display = "none";
}

let skillCode = ['WAWS',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const y = "<span class='yellow'>"
const g = "<span class='green'>"
const b = "<span class='blue'>"
const s = "</span>"
const rn = "&nbsp;<span class = 'red notes'><b>&#9834;</b></span>&nbsp;"
const bn = "&nbsp;<span class = 'blue notes'><b>&#9835;</b></span>&nbsp;"
const pn = "&nbsp;<span class = 'purple notes'><b>&#9835;</b></span>&nbsp;"
var params = new URLSearchParams(location.search);

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
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><span class='popSkillCalc'> " + skillCode[pos] + "/" + skill.max + " </span><img id='minus' src='./Icons/minus.png' onclick='minusSkill(\"" 
    + skill.id + "\")'>  </span><img id='plus' src='./Icons/plus.png' onclick='plusSkill(\"" + skill.id + "\")'><h2> " + skill.name + "</h2><br>" + eval('`'+ skill.description +'`');
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
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>" + eval('`'+ skill.description +'`');
}

function skillPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + eval('`'+ skill.name +'`') + "</h2><br>Cast Range: <span class = 'orange'>" 
    + skill.range + " m</span><br>Cast Time: <span class = 'orange'>" + skill.speed + "</span><br>Cooldown: <span class = 'orange'>" + skill.cooldown + " sec</span><br><br>" + eval('`'+ skill.description +'`');
}

function skillCostPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'>" 
    + skill.range + " m</span><br>Resource: <span class = 'orange'>" + skill.cost + "</span><br>Cast Time: <span class = 'orange'>" + skill.speed + "</span><br>Cooldown: <span class = 'orange'>" + skill.cooldown + " sec</span><br><br>" + eval('`'+ skill.description +'`');
}

function ultPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + skill.name + "</h2><br>Cast Range: <span class = 'orange'>" 
    + skill.range + " m</span><br>Cooldown: <span class = 'orange'>" + skill.cooldown + " sec</span><br><br>" + eval('`'+ skill.description +'`');
}

function selectClass(active) {
    if(dragging) {
        dragging = false;
        return;
    } else
    var code = active + '000000000000000000000'
    location.assign("./" + active + ".html?skill=" + code);
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
    updateParams(skillCode.join(''));
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
    updateParams(skillCode.join(''));
    }

function reset(code) {
    setTalents(code);
    setParams(code);
}

function setTalents(code) {
    var num = code.replace(/[A-Z]/g, '');
    var numArray = num.split('').map(Number)
    var spec = code.replace(/[0-9]/g, '');
    skillCode = [spec, ...numArray];

    for (let i = 1; i < skillCode.length; i++) {
        let id = skillCode[0] + 'T' + String(i).padStart(2, '0')
        document.getElementById(id).innerHTML = skillCode[i]
        if (skillCode[i] > 0){
            document.getElementById(id.substr(2)).className = "colour";
        }
        else document.getElementById(id.substr(2)).className = "gray";
    }
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
    let buildCode = builds.find(search);
    setTalents(buildCode.SkillCode);
    setParams(buildCode.SkillCode);
}

function updateParams(code) {
    params.set('skill', code);
    history.replaceState({}, '', `${location.pathname}?${params}`);
}

function setParams(code) {
    params.set('skill', code);
    history.pushState({}, '', `${location.pathname}?${params}`);
}
let mouseDown = false;
let startX, scrollLeft;
var dragging = false;

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
  dragging = true;
}
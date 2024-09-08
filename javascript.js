function closeOverlay() {
    document.getElementById("skillOverlay").style.display = "none";
}

let skillCode = ['WAWS',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let stoneCode = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const u = {"y":"<span class='yellow'>","g":"<span class='green'>","b":"<span class='blue'>","s":"</span>","rn":"&nbsp;<span class = 'red notes'><b>&#9834;</b></span>&nbsp;","bn":"&nbsp;<span class = 'blue notes'><b>&#9835;</b></span>&nbsp;","pn":"&nbsp;<span class = 'purple notes'><b>&#9835;</b></span>&nbsp;"}
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

function testStone(value) { 
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    if (stoneTotal() < 100 && stoneTotal() >= skill.min && stoneCode[pos] < skill.max) {
    if (stoneCode[skill.preq] === parseInt(skill.lvl) || stoneCode[skill.preq] === undefined){
    return true
}}
return false
}

function encode(x) {
    return x.
    reduce((ac, cv, ix, arr) => ix % 2 ? ac.concat([[arr[ix - 1], arr[ix]]]) : ac, []).
    map( ([a,b]) => 4*a+b ).
    map( v => v.toString(16) ).
    join("")
}

function decode(x) {
    return x.
    split("").
    map(v => parseInt(v, 16)).
    map((v) =>  [Math.floor(v/4), v % 4]).
    reduce((a, c) => a.concat(c))
}

function selectTree(active, inactive1, ults) {
    document.getElementById(active).style.display = "block";
    document.getElementById(inactive1).style.display = "none";
    document.getElementById('icon' + active).className = "bground";
    document.getElementById('icon' + inactive1).className = "blah";
    document.getElementById('Ults').style.display = ults;
    if (active === 'Stone' && params.has('stone') === true) {
        setStone([1, ...decode(params.get('stone'))].join(''), skillCode[0]);       
    } else {
        let [a, ...rest] = stoneCode
        setParams(encode(rest), 'stone');
    }
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

function stonePopup(value, shape) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg " + shape + "' src='"+ skill.icon + "'><span class='popSkillCalc'> " + stoneCode[pos] + "/" + skill.max + " </span><img id='minus' src='./Icons/minus.png' onclick='minusStone(\"" 
    + skill.id + '\",\" ' + shape + "\")'>  </span><img id='plus' src='./Icons/plus.png' onclick='plusStone(\"" + skill.id + '\",\" ' + shape + "\")'><h2> " + skill.name + "</h2><br>" + eval('`'+ skill.description +'`');
    if (testStone(value) === true) {
        document.getElementById('plus').className = "colour";
    }
    else {document.getElementById('plus').className = "bright";        
    }
    if (stoneCode[pos] === 0) {
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
    } else if (active !== 'home') {
    var code = active + '000000000000000000000'
    location.assign("./" + active + ".html?skill=" + code);
    } else if (active === 'home'){
    location.assign("./index.html");
}
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
    updateParams(skillCode.join(''), 'skill');
}

function plusStone(id, shape) {
    pos = id.replace(/^[A-Z0]+/, '');
    if (testStone(id) === true) {
    stoneCode[pos]++
    stonePopup(id, shape);
    }
    if (stoneCode[pos] <= 1){
        document.getElementById(id.substr(2)).classList.add('colour');
        document.getElementById(id.substr(2)).classList.remove('gray');
    }
    document.getElementById(id).innerHTML = stoneCode[pos];
    let [a, ...rest] = stoneCode
    updateParams(encode(rest), 'stone');
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
    updateParams(skillCode.join(''), 'skill');
    }

function minusStone(id, shape) {
    pos = id.replace(/^[A-Z0]+/, '');
    if (stoneCode[pos] >= 1){
        stoneCode[pos]--
        stonePopup(id, shape);
        document.getElementById(id).innerHTML = stoneCode[pos];
    }
    if (stoneCode[pos] === 0){
        document.getElementById(id.substr(2)).classList.remove('colour');
        document.getElementById(id.substr(2)).classList.add('gray');
    }
    let [a, ...rest] = stoneCode
    updateParams(encode(rest), 'stone');
    }

function reset(code) {
    setTalents(code);
    setParams(code, 'skill');
}

function resetStone(code, classCode) {
    setStone(code, classCode);
    let [a, ...rest] = stoneCode
    setParams(encode(rest), 'stone');
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

function setStone(code, classCode) {
    var numArray = code.split('').map(Number)
    stoneCode = [ ...numArray];

    for (let i = 1; i < stoneCode.length; i++) {
        let id = classCode + 'I' + String(i).padStart(2, '0')
        document.getElementById(id).innerHTML = stoneCode[i]
        if (stoneCode[i] > 0){
            document.getElementById(id.substr(2)).classList.add('colour');
            document.getElementById(id.substr(2)).classList.remove('gray');
        }
        else document.getElementById(id.substr(2)).classList.add('gray');
        document.getElementById(id.substr(2)).classList.remove('colour');
    }
}

function skillTotal() {
    let sum = 0
    for (let i = 1; i < skillCode.length; i++) {
        sum += skillCode[i];
    }
    return sum;
}

function stoneTotal() {
    let sum = 0
    for (let i = 0; i < stoneCode.length; i++) {
        sum += stoneCode[i];
    }
    return sum;
}

function raidBuilds(value) {
    function search(v){
        return value === v.Id;
    }
    let buildCode = builds.find(search);
    setTalents(buildCode.Skill);
    setStone([1, ...decode(buildCode.Stone)].join(''), skillCode[0]);   
    setParams(buildCode.Skill, 'skill');
    setParams(buildCode.Stone, 'stone');
}

function updateParams(code, key) {
    params.set(key, code);
    history.replaceState({}, '', `${location.pathname}?${params}`);
}

function setParams(code, key) {
    params.set(key, code);
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
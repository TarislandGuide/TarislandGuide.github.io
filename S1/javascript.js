let skillCode = ['WAWS',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let stoneCode = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let s1Code = ['00','00','00','00']
const u = {"y":"<span class='yellow'>","g":"<span class='green'>","b":"<span class='blue'>","o":"<span class='orange'>","w":"<span class='white'>","r":"<span class='red'>","s":"</span>","rn":"&nbsp;<span class = 'red notes'><b>&#9834;</b></span>&nbsp;","bn":"&nbsp;<span class = 'blue notes'><b>&#9835;</b></span>&nbsp;","pn":"&nbsp;<span class = 'purple notes'><b>&#9835;</b></span>&nbsp;"}
var params = new URLSearchParams(location.search);
let usePopups = true

function closeOverlay(value) {
    document.getElementById(value).style.display = "none";
}

function closeBuildsOverlay(value) {
    document.getElementById(value).style.display = "none";
    document.getElementById("summary").remove();
    document.getElementById("macro").remove();
    document.getElementById("gear").remove();
    document.getElementById("buildsText").remove();
}
    
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
    const arr = skill.preq.split(',').map(Number);
    if (!(stoneTotal() < 100 && stoneTotal() >= skill.min && stoneCode[pos] < skill.max)) { 
        return false
    }
    let blah = (arr.filter(e=> stoneCode[e] >= parseInt(skill.lvl) || stoneCode[e] === undefined).length > 0)
        return blah
}

function togglePopups() {
    if (usePopups === true) {
        usePopups = false
        document.getElementById('onOffTalents').src="/Icons/off.png"
        document.getElementById('onOffStone').src="/Icons/off.png"
    } else { usePopups = true
    document.getElementById('onOffTalents').src="/Icons/on.png"
    document.getElementById('onOffStone').src="/Icons/on.png"
}}
        
// base of data = max num + 1
function encode(array, baseOfData, arraylength) {           
    if (array.forEach(e => { if (e >= baseOfData) console.log(e + " larger than " + baseOfData + " in encode") }))
    if (array.length !== arraylength){ console.log("length of array " + array.length + " != " + arraylength + " array length in encode") }
    let a = array.reduce((ac, cv, ix, ar) => (BigInt(cv) * BigInt(baseOfData) ** (BigInt(ar.length) - BigInt(ix) - 1n)) + ac, 0n).toString(16)
    return a
}

function decode(codeString, baseOfData, arraylength) {
    let a = BigInt("0x"+codeString).toString(baseOfData).padStart(arraylength, "0").split("").map(Number)
    return a
}

function selectTree(active, inactive1, inactive2) {
    document.getElementById('icon' + active).className = "bground";
    document.getElementById('icon' + inactive1).className = "blah";
    document.getElementById('icon' + inactive2).className = "blah";
    document.querySelectorAll('.' + active).forEach(item => item.style.display = "grid");
    document.querySelectorAll('.' + inactive1).forEach(item => item.style.display = "none");
    document.querySelectorAll('.' + inactive2).forEach(item => item.style.display = "none");
    if (active === 'Talents') {
        document.getElementById('Trees').style.gridTemplateAreas = '"talents" "builds"';
    } else if (active === 'Stone') {
        document.getElementById('Trees').style.gridTemplateAreas = '"stone"';
    } else if (active === 'Skills') {
        document.getElementById('Trees').style.gridTemplateAreas = '"skills" "ults" "pvp"';
    }
    if (active === 'Stone' && params.has('stone') === true) {
        setStone([1, ...decode(params.get('stone'), 6, 60)].join(''), skillCode[0]);       
    } else {
        let [a, ...rest] = stoneCode
        setParams(encode(rest, 6, 60), 'stone');
    }
}

function talentCheck(value) {
    if (usePopups === true) {
        talentPopup(value)
    } else talentCycle(value)
}

function stoneCheck(value) {
    if (usePopups === true) {
        stonePopup(value)
    } else stoneCycle(value)
}

function s1Check(value) {
    if (usePopups === true) {
        s1Popup(value)
    } else s1Cycle(value)
}

function talentPopup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><span class='popSkillCalc'> " + skillCode[pos] + "/" + skill.max + " </span><img id='minus' src='/Icons/minus.png' onclick='minusSkill(\"" 
    + skill.id + "\")'>  </span><img id='plus' src='/Icons/plus.png' onclick='plusSkill(\"" + skill.id + "\")'><h2> " + skill.name + "</h2><br>" + eval('`'+ skill.description +'`');
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
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><span class='popSkillCalc'> " + stoneCode[pos] + "/" + skill.max + " </span><img id='minus' src='/Icons/minus.png' onclick='minusStone(\"" 
    + skill.id + '\",\" ' + shape + "\")'>  </span><img id='plus' src='/Icons/plus.png' onclick='plusStone(\"" + skill.id + '\",\" ' + shape + "\")'><h2> " + skill.name + "</h2><br>" + eval('`'+ skill.description +'`');
    if (testStone(value) === true) {
        document.getElementById('plus').className = "colour";
    }
    else {document.getElementById('plus').className = "bright";        
    }
    if (stoneCode[pos] === 0) {
        document.getElementById('minus').className = "bright";
    }
}

function s1Popup(value) {
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = talents.find(search);
    const info = skill.variable.split(",");
    pos = value.replace(/^[A-Z]+/, '');
    function isActive() {
        if (s1Code[skill.lvl] === pos) {return 1}
        else return 0
    }
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><span class='popSkillCalc'> " + isActive() + "/" + 1 + " </span><img id='minus' src='/Icons/minus.png' onclick='minusS1(\"" 
    + skill.id + "\")'>  </span><img id='plus' src='/Icons/plus.png' onclick='plusS1(\"" + skill.id + "\")'><h2> " + skill.name + "</h2><br>" + eval('`'+ skill.description +'`');
    if (isActive() === 1) {
        document.getElementById('plus').className = "bright";
    } else {document.getElementById('plus').className = "colour";        
    }
    if (isActive() === 0) {
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

function buildsPopup(value, e) {
    const event = e || window.event;
    event.preventDefault();
    event.stopPropagation();
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = builds.find(search);
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

function buildsCostPopup(value, e) {
    const event = e || window.event;
    event.preventDefault();
    event.stopPropagation();
    document.getElementById("skillOverlay").style.display = "block";
    function search(v){
        return value === v.id;
    }
    let skill = builds.find(search);
    const info = skill.variable.split(",");
    document.getElementById("skillPopup").innerHTML = "<img class='popImg' src='"+ skill.icon + "'><h2> " + eval('`'+ skill.name +'`') + "</h2><br>Cast Range: <span class = 'orange'>" 
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

function buildsCreatePopup(value, e) {
    const event = e || window.event;
    event.preventDefault();
    event.stopPropagation();
    var tab1 = document.createElement("div");
    tab1.classList.add("tab1");
    tab1.id = "summary";
    tab1.setAttribute("onclick", "buildsInfo('" + value + "')");

    var tab2 = document.createElement("div");
    tab2.classList.add("tab2");
    tab2.id = "macro";
    tab2.setAttribute("onclick", "buildsMacro('" + value + "')");

    var tab3 = document.createElement("div");
    tab3.classList.add("tab3");
    tab3.id = "gear";
    tab3.setAttribute("onclick", "buildsGear('" + value + "')");

    var popupMain = document.createElement("div");
    popupMain.classList.add("popupMain");
    popupMain.id = "buildsText";

    document.getElementById("buildsOverlay").style.display = "block";
    document.getElementById("buildsPopup").appendChild(tab1);
    document.getElementById("buildsPopup").appendChild(tab2);
    document.getElementById("buildsPopup").appendChild(tab3);
    document.getElementById("buildsPopup").appendChild(popupMain);

    document.getElementById("summary").innerHTML = "<img class='tabItem' src='/Icons/summary.png'>";
    document.getElementById("macro").innerHTML = "<img class='tabItem' src='/Icons/macro.png'>";
    document.getElementById("gear").innerHTML = "<img class='tabItem' src='/Icons/gear.png'>";
    
    document.getElementById("buildsText").innerHTML = "<p>Error<br>try force refreshing the page (ctrl + shift + R) or clearing the cache<br>if error persists please report the bug on the <a href='https://discord.com/channels/1070905779370074153/1259420808116174864'>discord</a> thread</p>"; 
    buildsInfo(value);
}

function buildsInfo(value) {
    document.getElementById('macro').classList.add('inactive');
    document.getElementById('gear').classList.add('inactive');
    document.getElementById('summary').classList.remove('inactive');
    function search(v){
        return value === v.id;
    }
    let skill = builds.find(search);
    const info = skill.variable.split(",");
    document.getElementById("buildsText").innerHTML = "<img class='popImgBuild' src='"+ skill.summaryIcon + "'><img class='popImgBuild circle' src='"+ skill.icon + "'><h2> " + eval('`'+ skill.name +'`') + "<br><small>Build Overview</small></h2><br>" + eval('`'+ skill.summary +'`');
}

function buildsMacro(value) {
    document.getElementById('summary').classList.add('inactive');
    document.getElementById('gear').classList.add('inactive');
    document.getElementById('macro').classList.remove('inactive');
    function search(v){
        return value === v.id;
    }
    let skill = builds.find(search);
    const info = skill.variable.split(",");
    document.getElementById("buildsText").innerHTML = "<div><h2>" + skill.header + "</h2></div><div>" + skill.macro + "</div><div class='gear'><div class='popItem'>" + skill.skill1icon + "</div><div>" + skill.skill1 + "</div><div class='popItem'>" + skill.skill2icon + "</div><div>" + skill.skill2 + "</div><div class='popItem'>" + skill.skill3icon + "</div><div>" + skill.skill3 + "</div><div class='popItem'>" + skill.skill4icon + "</div><div>" + skill.skill4 + "</div><div class='popItem'>" + skill.skill5icon + "</div><div>" + skill.skill5 + "</div><div class='popItem'>" + skill.skill6icon + "</div><div>" + skill.skill6 + "</div><div class='popItem'>" + skill.skill7icon + "</div><div>" + skill.skill7 + "</div><div class='popItem'>" + skill.skill8icon + "</div><div>" + skill.skill8 + "</div><div class='popItem'>" + skill.skill9icon + "</div><div>" + skill.skill9 + "</div></div>";
}

function buildsGear(value) {
    document.getElementById('summary').classList.add('inactive');
    document.getElementById('macro').classList.add('inactive');
    document.getElementById('gear').classList.remove('inactive');
    function search(v){
        return value === v.id;
    }
    let skill = builds.find(search);
    const info = skill.variable.split(",");
    document.getElementById("buildsText").innerHTML = "<div><h2>Gearing</h2></div><div class='gear'><div><img src='/Icons/Gear/weapon.png'></div><div><b>Weapon</b><br><small class='beige'>" + skill.weapon + "</small></div><div><img src='/Icons/Gear/helmet.png'></div><div><b>Helmet</b><br><small class='beige'>" + skill.helmet + "</small></div><div><img src='/Icons/Gear/shoulder.png'></div><div><b>Shoulder</b><br><small class='beige'>" + skill.shoulder + "</small></div><div><img src='/Icons/Gear/chest.png'></div><div><b>Armor (Chest)</b><br><small class='beige'>" + skill.chest + "</small></div><div><img src='/Icons/Gear/belt.png'></div><div><b>Belt</b><br><small class='beige'>" + skill.belt + "</small></div><div><img src='/Icons/Gear/legs.png'></div><div><b>Greaves (Legs)</b><br><small class='beige'>" + skill.legs + "</small></div><div><img src='/Icons/Gear/wrist.png'></div><div><b>Gauntlets (Wrist)</b><br><small class='beige'>" + skill.wrist + "</small></div><div><img src='/Icons/Gear/gloves.png'></div><div><b>Leather Gauntlets (Gloves)</b><br><small class='beige'>" + skill.gloves + "</small></div><div><img src='/Icons/Gear/boots.png'></div><div><b>Boots</b><br><small class='beige'>" + skill.boots + "</small></div><div><img src='/Icons/Gear/ring.png'></div><div><b>Ring</b><br><small class='beige'>" + skill.ring + "</small></div><div><img src='/Icons/Gear/neck.png'></div><div><b>Necklace</b><br><small class='beige'>" + skill.neck + "</small></div><div><img src='/Icons/Gear/badge.png'></div><div><b>Badge</b><br><small class='beige'>" + skill.badge + "</small></div><div><img src='/Icons/Gear/accessories.png'></div><div><b>Accessory</b><br><small class='beige'>" + skill.accessories + "</small></div></div>";
}

function selectClass(active) {   
    if(dragging) {
        dragging = false;
        return;
    } else if (document.URL === 'https://tarislandbuilds.eu/') {
    var code = active + '000000000000000000000'
    location.assign("./S1/" + active + ".html?skill=" + code);
    } else if (document.URL.includes("index.html")) {
    var code = active + '000000000000000000000'
    location.assign("./S1/" + active + ".html?skill=" + code);
    } else if (active !== 'home') {
    var code = active + '000000000000000000000'
    location.assign("./" + active + ".html?skill=" + code);
    } else if (active === 'home'){
    location.assign("../index.html");
}
}

function talentCycle(value) {
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
    if (test(value) === true) {
    skillCode[pos]++
    } else if (test(value) === false) {
        skillCode[pos] = 0
    }
    if (skillCode[pos] > 0){
    document.getElementById(value.substr(2)).className = "colour";
    } else if (skillCode[pos] === 0){
        document.getElementById(value.substr(2)).className = "gray";
    }
    document.getElementById(value).innerHTML = skillCode[pos];
    updateParams(skillCode.join(''), 'skill');
    document.getElementById('talentNum').innerHTML = skillTotal();
}

function stoneCycle(value) {
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z0]+/, '');
    let skill = talents.find(search);
     if (testStone(value) === true) {
        stoneCode[pos]++
    } else if (testStone(value) === false) {
        stoneCode[pos] = 0
    }
    if (stoneCode[pos] > 0){
        document.getElementById(value.substr(2)).classList.add('colour');
        document.getElementById(value.substr(2)).classList.remove('gray');
    } else if (stoneCode[pos] === 0){
        document.getElementById(value.substr(2)).classList.remove('colour');
        document.getElementById(value.substr(2)).classList.add('gray');
    }
    document.getElementById(value).innerHTML = stoneCode[pos];
    let [a, ...rest] = stoneCode
    updateParams(encode(rest, 6, 60), 'stone');
    document.getElementById('stoneNum').innerHTML = stoneTotal();
}

function s1Cycle(value) {
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z]+/, '');
    let skill = talents.find(search);
    if (s1Code[skill.lvl] === pos) {
        s1Code[skill.lvl] = '00'
        document.getElementById(value).className = "gray";
    } else if (s1Code[skill.lvl] = '00') {
        s1Code[skill.lvl] = pos
        document.getElementById(value).className = "colour";
    }
    const arr = skill.preq.split(',');
    document.getElementById(skillCode[0] + 'B' + arr[0]).className = "gray";
    document.getElementById(skillCode[0] + 'B' + arr[1]).className = "gray";
    updateParams(s1Code.join(''), 'S1');
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
    document.getElementById('talentNum').innerHTML = skillTotal();
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
    updateParams(encode(rest, 6, 60), 'stone');
    document.getElementById('stoneNum').innerHTML = stoneTotal();
}

function plusS1(value) {
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z]+/, '');
    let skill = talents.find(search);
    s1Code[skill.lvl] = pos
    s1Popup(value);
    const arr = skill.preq.split(',');
    document.getElementById(value).className = "colour";
    document.getElementById(skillCode[0] + 'B' + arr[0]).className = "gray";
    document.getElementById(skillCode[0] + 'B' + arr[1]).className = "gray";
    updateParams(s1Code.join(''), 'S1');
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
    document.getElementById('talentNum').innerHTML = skillTotal();
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
    document.getElementById('stoneNum').innerHTML = stoneTotal();
    }

function minusS1(value) {
    function search(v){
        return value === v.id;
    }
    pos = value.replace(/^[A-Z]+/, '');
    let skill = talents.find(search);
    s1Code[skill.lvl] = '00'
    s1Popup(value);
    const arr = skill.preq.split(',');
    document.getElementById(value).className = "gray";
    updateParams(s1Code.join(''), 'S1');
}

function reset(code, s1) {
    setTalents(code);
    setS1(s1);
    setParams(code, 'skill');
    setParams(s1, 'S1');
}

function resetStone(code, classCode) {
    setStone(code, classCode);
    let [a, ...rest] = stoneCode
    setParams(encode(rest, 6, 60), 'stone');
}

function copy(value) {
    window.navigator.clipboard.writeText(value);
    document.getElementById("copy1").innerHTML = "Copied";
    document.getElementById("copy2").innerHTML = "Copied";
    setTimeout( function() {
        document.getElementById("copy1").innerHTML = "Copy";
        document.getElementById("copy2").innerHTML = "Copy";
    }, 1500);
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
    document.getElementById('talentNum').innerHTML = skillTotal();
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
    document.getElementById('stoneNum').innerHTML = stoneTotal();
}

function setS1(code) {
    s1Code = code.match(/.{1,2}/g)
    for (let i = 2; i < 14; i++) { 
        let id = skillCode[0] + 'B' + String(i).padStart(2, '0')
        document.getElementById(id).className = "gray";
    }
    for (let i = 0; i < s1Code.length; i++) {
        let id = skillCode[0] + 'B' + s1Code[i]
        if (s1Code[i] !== '00'){
            document.getElementById(id).className = "colour";
        }}
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
        return value === v.id;
    }
    let buildCode = builds.find(search);
    setTalents(buildCode.Skill);
    setStone([1, ...decode(buildCode.Stone, 6, 60)].join(''), skillCode[0]); 
    setS1(buildCode.S1);
    setParams(buildCode.Skill, 'skill');
    setParams(buildCode.Stone, 'stone');
    setParams(buildCode.S1, 'S1');
}

function linkBuilds(value) {
    function search(v){
        return value === v.id;
    }
    let buildCode = builds.find(search);
    window.location =  `./S1/${value.slice(0, 4)}.html?skill=${buildCode.Skill}&stone=${buildCode.Stone}&S1=${buildCode.S1}`;
}

function accordian(value) {
    var x = document.getElementById(value);
    if (x.style.display === "grid") {
        x.style.display = "none";
   } else {
        x.style.display = "grid";
   }
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
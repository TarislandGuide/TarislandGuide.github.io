

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

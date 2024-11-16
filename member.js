function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].text;
    document.getElementById("skills").innerHTML = memberValue + " - " + memberSkillsValue;
}
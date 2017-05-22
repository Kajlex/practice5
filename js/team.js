var quater = document.getElementsByClassName("team-pic");
var triangle_team = document.getElementsByClassName("point")[0].getElementsByClassName("quater");
var team_description = document.getElementsByClassName("single-team");

var active_triangle = triangle_team[0];
var active_description = team_description[0];

function addListTeam() {
    for (var i = 0; i < quater.length; i++) {
        quater[i].setAttribute("data", i);
        quater[i].addEventListener("click", change_member);
    }
}

function change_member(e) {
    var value = this.getAttribute("data");

    active_triangle.classList.remove("active");
    active_description.classList.remove("active");

    active_triangle = triangle_team[value];
    active_description = team_description[value];

    active_triangle.classList.add("active");
    active_description.classList.add("active");
}

addListTeam();
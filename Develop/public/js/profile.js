const teamBox = document.querySelectorAll(".select-team");
// const users = localStorage.getItem("Users");

 for (let i = 0; i < teamBox.length; i++) {
    teamBox[i].addEventListener("click", function() {
        const grabTeamName = this.querySelector('.team-name').textContent;
        localStorage.setItem('Team', grabTeamName);
     });
 }
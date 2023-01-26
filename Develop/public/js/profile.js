const cbox = document.querySelectorAll(".select-team");

 for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", function() {
        const grabTeamName = this.querySelector('.team-name').textContent;
        localStorage.setItem('Team', grabTeamName);
     });
 }
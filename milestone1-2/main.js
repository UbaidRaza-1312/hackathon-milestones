var showHideButton = document.getElementById("show-hide-skills-btn");
var skillsSection = document.getElementById("skills");
skillsSection.style.display = 'block';
showHideButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        showHideButton.innerHTML = "<b>Hide Skills</b>";
    }
    else {
        skillsSection.style.display = 'none';
        showHideButton.innerHTML = "<b>Show Skills</b>";
    }
});

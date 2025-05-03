const showHideButton = document.getElementById("show-hide-skills-btn") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

skillsSection.style.display = 'block';  
showHideButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        showHideButton.innerHTML = "<b>Hide Skills</b>";  
    } else {
      skillsSection.style.display = 'none';
      showHideButton.innerHTML = "<b>Show Skills</b>"; 
    }
});

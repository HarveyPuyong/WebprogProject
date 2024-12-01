export function SkillsFunctionality(){
  //---skill type button---//
  const techStackBtn = document.querySelector(".tech-stacks-btn");
  const toolsBtn = document.querySelector(".tools-btn");
  const techStackSkills = document.querySelectorAll(".skill-card.tech-stack");
  const toolsSkills = document.querySelectorAll(".skill-card.tool");

  toolsBtn.addEventListener("click", ()=>{
    toolsBtn.classList.add("selected");
    techStackBtn.classList.remove("selected");

    toolsSkills.forEach(skills => {
      skills.style.display = "flex";
    });
    techStackSkills.forEach(skill => {
      skill.style.display = "none";
    });
  });

  techStackBtn.addEventListener("click", ()=> {
    techStackBtn.classList.add("selected");
    toolsBtn.classList.remove("selected");
  
    techStackSkills.forEach(skill => {
      skill.style.display = "flex";
    });
    toolsSkills.forEach(skills => {
      skills.style.display = "none";
    });
  });

  
}
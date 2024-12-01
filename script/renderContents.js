
export function RenderContents(){
 //---------------------------RENDERING LANDING HOME CONTENTS----------------------//
  const homeDetails = {
    profilePhoto: 'profile pic (1).jpg',
    greetTxt:  `Hello visitor, I'm`,
    name: 'John Harvey Puyong',
    mainSkill: 'Web Developer',
    welcomeTxt: 'Welcome to my portfolio website',
    fbLink: 'https://www.facebook.com/johnharvey.luslos.1/',
    tiktokLink: 'https://www.tiktok.com/@meowish72?lang=en',
    ytLink: 'https://www.youtube.com/@zensei-xg4bw',
    instaLink: '',
  }

  const homeDetailsHTML = `
      <div>
        <div class="profile-pic">
          <img
            id="profile-img"
            src="images and icons/images/${homeDetails.profilePhoto}"
            alt="profile img" />
        </div>
      </div>
      <div>
        <p class="greet">${homeDetails.greetTxt}</p>
        <h3 class="name">${homeDetails.name}</h3>
        <h4 class="main-skills">${homeDetails.mainSkill}</h4>
        <p class="welcome-txt">${homeDetails.welcomeTxt}</p>
        <nav id="socmed-nav">
          <ul>
            <li><a href="${homeDetails.fbLink}" target="_blank"><img class="socmed-icon" src="images and icons/icons/facebook (1).png" alt="fb-icon"></a></li>
            <li><a href="${homeDetails.tiktokLink}" target="_blank"><img class="socmed-icon"  src="images and icons/icons/tik-tok.png" alt="tiktok-icon"></a></li>
            <li><a href="${homeDetails.ytLink}" target="_blank"><img class="socmed-icon"  src="images and icons/icons/youtube.png" alt="yt-icon"></a></li>
            <li><a href="" target="_blank"><img class="socmed-icon"  src="images and icons/icons/instagram (1).png" alt="insta-icon"></a></li>
          </ul>
        </nav>
      </div>  
      <button class="next-btn">Next</button>     
      <button class="more-detail-btn">More details</button>
  `
  const homeLandingContent = document.querySelector('#home').innerHTML = homeDetailsHTML;
  

  
  
  //---------------------------RENDERING HEADER CONTENTS----------------------//
  const headerDetails = {
    githubLink: '',
    linkOne: '#about-section',
    linkTwo: '#skills-section',
    linkThree: '#projects-section',
    linkFour: '#contact-section',
  }

  const headerDetailsHTML =  `
     <p onclick="location.reload()">Harvey.dev()</p>
      <nav class="top-nav">
      <ul>
        <li class="goto-home-btn">Home</li>
        <li><a class="section-nav about" href="${headerDetails.linkOne}">About</a></li>
        <li><a class="section-nav skills" href="${headerDetails.linkTwo}">Skills</a></li>
        <li><a class="section-nav projects" href="${headerDetails.linkThree}">Projects</a></li>
        <li><a class="section-nav contact" href="${headerDetails.linkFour}">Contact</a></li>
      </ul>
      </nav>
      <img src="images and icons/icons/white burger nav.png" alt="" class="hamburger-icon show-side-nav-btn">
      <a href="${headerDetails.githubLink}"><img class="github-icon" src="images and icons/icons/github (2).png" alt=""></a>
  `;

  const header = document.querySelector('header').innerHTML = headerDetailsHTML;



  //---------------------------RENDERING SideNav CONTENTS----------------------//
  const sidenavDetails = {
    githubLink: '',
    linkOne: '#about-section',
    linkTwo: '#skills-section',
    linkThree: '#projects-section',
    linkFour: '#contact-section',
  }

  const sidenavDetailsHTML = `
        <ul>
          <li>
            <div class="cross-icon">
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <a href="${sidenavDetails.githubLink}"><img class="github-icon" src="images and icons/icons/github (2).png" alt="">
            </a>

            <hr class="break-line">
          </li>
          
          <li class="goto-home-btn">Home</li>
          <li><a class="section-nav about" href="${sidenavDetails.linkOne}">About</a></li>
          <li><a class="section-nav skills" href="${sidenavDetails.linkTwo}">Skills</a></li>
          <li><a class="section-nav projects" href="${sidenavDetails.linkThree}">Projects</a></li>
          <li><a class="section-nav contact" href="${sidenavDetails.linkFour}">Contact</a></li>
        </ul>
  `;
  const sideNav = document.querySelector('nav.side-nav').innerHTML = sidenavDetailsHTML





  //---------------------------RENDERING ABOUT CONTENTS----------------------//
  const aboutContents = {
    heading: 'ABOUT ME',
    myPhoto: 'profile pic.jpg',
    aboutMeTxt: `I'm a programmer, passionate about creating websites and cool projects. I'm also a TikTok content creator, where I share my programming creations and showcase my code-based wallpapers. You can find me on TikTok as "Meowish." Oh, and I'm from Philippines`,
  }

  // display my about Contennt //
  const aboutContentHTML = `
    <h1 class="heading">${aboutContents.heading}<span class="line"></span></h1>
    <div class="content-container d-flex">
      <img class="profile-pic" src="images and icons/images/${aboutContents.myPhoto}" alt="myPhoto">
      <p class="about-me">${aboutContents.aboutMeTxt}</p>
    </div>
  `;

  const aboutSection = document.querySelector('section#about-section').innerHTML = aboutContentHTML;




  //---------------------------RENDERING SKILL CONTENTS----------------------//
  const skillSecDetails = {
    heading: 'SKILLS',
    buttonOne: 'Tech Stack',
    buttonTwo: 'Tools',
  }

  // display skillSection Details//
  const skillSecDetailHTML = `
     <h1 class="heading">${skillSecDetails.heading}<span class="line"></span></h1>
      <button class="tech-stacks-btn selected">${skillSecDetails.buttonOne}</button>
      <button class="tools-btn">${skillSecDetails.buttonTwo}</button>
      <div class="skills-container d-grid">
        <!--display skills cards here -->
      </div>
    `;
  const skillSection = document.querySelector('section#skills-section').innerHTML = skillSecDetailHTML;


  // skill cards//
  const skills = [
    {
      icon: 'html.png', 
      name: 'HTML',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'CSS (2).png', 
      name: 'CSS',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'js (1).png', 
      name: 'JavaScript',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'php.png', 
      name: 'PHP',
      mastery: 'Intermediate',
      type: 'tech-stack'
    },
    {
      icon: 'React (2).png', 
      name: 'React',
      mastery: 'Intermediate',
      type: 'tech-stack'
    },
    {
      icon: 'Git.png', 
      name: 'Git',
      mastery: 'Intermediate',
      type: 'tool'
    },
    {
      icon: 'github.png', 
      name: 'GitHub',
      mastery: 'Intermediate',
      type: 'tool'
    },
    {
      icon: 'visual-studio.png', 
      name: 'Visual Studio',
      mastery: 'Intermediate',
      type: 'tool'
    }
  ];

  // display skill cards//
  let skillsHTML = '';

  skills.forEach(skill => {
    skillsHTML += `
      <div class="skill-card ${skill.type}">
        <img src="images and icons/icons/${skill.icon}" alt="skill-icon" class="skill-icon">
        <div>
          <p class="skill-name">${skill.name}</p>
          <p class="mastery-level">${skill.mastery}</p>
        </div>
      </div>
    `
  });

  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillsHTML;



 //---------------------------RENDERING PROJECTS CONTENTS----------------------//
  const projects = [
    {
        image: 'image.png',
        title: 'Project Title 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
        role: 'Solo Developer',
        clientSatisfaction: '95%'
    },
    {
        image: 'image.png',
        title: 'Project Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
        role: 'Solo Developer',
        clientSatisfaction: '95%'
    },
    {
        image: 'image.png',
        title: 'Project Title 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
        role: 'Solo Developer',
        clientSatisfaction: '95%'
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Visit Site</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="./images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  Client satisfaction
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML;
}



//---------------------------RENDERING CONTACT CONTENTS----------------------//
const contactDetailsHTML = `
    <h1 class="heading">Contact Me<span class="line"></span></h1>   
    <form action="">
      <div class="input-container">
        <input type="text" placeholder="Enter your name">
        <input type="email" placeholder="Enter your email">
      </div>
      <textarea name="" id="" placeholder="Your message"></textarea>
      <button class="submit-btn">Submit</button>
    </form>
`;
const contactSection = document.querySelector('section#contact-section').innerHTML = contactDetailsHTML;






//---------------------------FOOTER CONTENTS----------------------//
const footerDetails = {
  fbLink: 'https://www.facebook.com/johnharvey.luslos.1/',
  tiktokLink: 'https://www.tiktok.com/@meowish72?lang=en',
  ytLink: 'https://www.youtube.com/@zensei-xg4bw',
  instaLink: '',
  email: 'puyongjohnharvey<wbr>@gmail.com'
}

const footerHTML = `
   <nav class="socmed-nav">
      <ul>
        <li><a href="${footerDetails.fbLink}" target="_blank"><img src="images and icons/icons/W-facebook.png" class="socmed-icon" alt="fb-icon"></a></li>
        <li><a href="${footerDetails.tiktokLink}" target="_blank"><img src="images and icons/icons/W-tiktok.png" class="socmed-icon" alt="tiktok-icon"></a></li>
        <li><a href="${footerDetails.ytLink}" target="_blank"><img src="images and icons/icons/W-youtube.png" class="socmed-icon" alt="yt-icon"></a></li>
        <li><a href="${footerDetails.instaLink}" target="_blank"><img src="images and icons/icons/W-instagram.png" class="socmed-icon" alt="insta-icon"></a></li>
      </ul>
    </nav>
    <p class="email"><span>email me at</span><br>${footerDetails.email}</p>
`;

const footer = document.querySelector('footer').innerHTML = footerHTML;
/* es-lint disable */

const HAMBURGER_BUTTON = document.querySelector(".nav-bar-burger");
const NAVBAR_LOGO = document.querySelector(".nav-bar-logo");
const MOBILE_MENU_SCREEN = document.querySelector(".mobile-menu-screen");

HAMBURGER_BUTTON.addEventListener('click', () => {
    HAMBURGER_BUTTON.classList.toggle('active');
    MOBILE_MENU_SCREEN.classList.toggle("active");
    NAVBAR_LOGO.classList.toggle("active");
});

const MOBILE_MENU_LINKS = document.querySelectorAll(".mobile-menu-links");

MOBILE_MENU_LINKS.forEach(element => {
    element.addEventListener('click', () => {
        HAMBURGER_BUTTON.classList.remove('active');
    MOBILE_MENU_SCREEN.classList.remove("active");
    NAVBAR_LOGO.classList.remove("active");
    });
});

const ViewHideProject = () => {
    const DETAILS_POPUP = document.querySelector('.project-details-popup-container');
    DETAILS_POPUP.classList.toggle('active');
};

const PROJECTS_INFO = [
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript']
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript']
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript']
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript']
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript']
    },
    {
        header: "Profesional Art Printing Data",
        paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        technologies: ['html', 'css', 'javascript']
    }
];

function CreateProjectCard(project_info) {
    /*
        <div class="project-card-template">
            <button class="project-card-template-hover"></button>
            <div class="project-card-template-info">
            <h2>Profesional Art Printing Data</h2>
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard
            </p>
            <ul class="project-card-template-technologies">
                <li class="card-technology first-technology">html</li>
                <li class="card-technology">bootstrap</li>
                <li class="card-technology">Ruby</li>
            </ul>          
            </div>
            <div class="see-project-container-card-template">
            <button class="see-project-card-template">See Project</button>
            </div> 
        </div>
    */
    const PROJECT_CARD = document.createElement('div');
    PROJECT_CARD.classList.add('project-card-template');
    document.querySelector('.works-section').appendChild(PROJECT_CARD);

    const PROJECT_BUTTON = document.createElement('button');
    PROJECT_BUTTON.classList.add('project-card-template-hover');
    PROJECT_BUTTON.addEventListener('click', ViewHideProject);
    PROJECT_CARD.appendChild(PROJECT_BUTTON);

    const PROJECT_INFO_DIV = document.createElement('div');
    PROJECT_INFO_DIV.classList.add('project-card-template-info');
    PROJECT_CARD.appendChild(PROJECT_INFO_DIV);

    const PROJECT_HEADER = document.createElement('h2');
    PROJECT_HEADER.textContent = project_info.header;
    PROJECT_INFO_DIV.appendChild(PROJECT_HEADER);

    const PROJECT_PARAGRAPH = document.createElement('p');
    PROJECT_PARAGRAPH.textContent = project_info.paragraph;
    PROJECT_INFO_DIV.appendChild(PROJECT_PARAGRAPH);

    const PROJECT_LIST = document.createElement('ul');
    PROJECT_LIST.classList.add('project-card-template-technologies');
    PROJECT_INFO_DIV.appendChild(PROJECT_LIST);

    for(let i = 0; i < 3; i++){
        const PROJECT_LIST_ITEM = document.createElement('li');
        PROJECT_LIST_ITEM.classList.add('card-technology')
        if(i === 0) {PROJECT_LIST_ITEM.classList.add('first-technology');}
        PROJECT_LIST_ITEM.textContent = project_info.technologies[i];
        PROJECT_LIST.appendChild(PROJECT_LIST_ITEM);
    }

    const SEE_PROJECT_DIV = document.createElement('div');
    SEE_PROJECT_DIV.classList.add('see-project-container-card-template');
    PROJECT_CARD.appendChild(SEE_PROJECT_DIV);

    const SEE_PROJECT_BUTTON = document.createElement('button');
    SEE_PROJECT_BUTTON.classList.add('see-project-card-template');
    SEE_PROJECT_BUTTON.textContent = 'See Project';
    SEE_PROJECT_BUTTON.addEventListener('click', ViewHideProject);
    SEE_PROJECT_DIV.appendChild(SEE_PROJECT_BUTTON);
}

for(let i = 0; i < PROJECTS_INFO.length; i++){

    CreateProjectCard(PROJECTS_INFO[0]);
}
    
document.querySelector('.project-details-popup-window-cancel').addEventListener('click', ViewHideProject);

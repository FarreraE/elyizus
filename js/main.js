// BOTONES SECTION A
var btnElyizus = document.getElementById("btnElyizus");
var btnSkills = document.getElementById("btnSkills");
var btnTime = document.getElementById("btnTime");
var btnContact = document.getElementById("btnContact");
var btnNext = document.getElementById("btnNext");
btnElyizus.style = "color: var(--colorVSQoutes);opacity: 1;"
// DIPLAYER ID
let sectionADisplayer = document.getElementById("sectionADisplayer");
let displayerAOption = 1;
// EVENT LISTENER SECTION A
btnElyizus.addEventListener('click', function () {
    displayerAOption = 1;
    displayerAselector(displayerAOption);
});
btnSkills.addEventListener('click', function () {
    displayerAOption = 2;
    displayerAselector(displayerAOption);
});
btnTime.addEventListener('click', function () {
    displayerAOption = 3;
    displayerAselector(displayerAOption);
});
btnContact.addEventListener('click', function () {
    displayerAOption = 4;
    displayerAselector(displayerAOption);
});
btnNext.addEventListener('click', function () {
    if (displayerAOption == 4) {
        displayerAOption = 1;
    } else {
        displayerAOption++;
    }
    displayerAselector(displayerAOption);
});
// DISPLAYER  SECTION A

function displayerAselector(option) {

    btnElyizus.style = "color: var(--colorSecondary);"
    btnSkills.style = "color: var(--colorSecondary);"
    btnTime.style = "color: var(--colorSecondary);"
    btnContact.style = "color: var(--colorSecondary);"

    switch (option) {
        case 1:
            sectionADisplayer.innerHTML = "<span class=codeVSQoutes> <h2>ABOUT IT!</h2>  </span> <p>Elyizus is the first project executed by Ely Jesus Farrera. The aim is to create a gallery of projects. A portfolio that will improve as I obtain knowledge and new skills. The most relevant characteristic of Elyizus personal project is to register development and personal growth. This website is the second version, the first version's catalog is available in the project section. The first release is dated July 2021 while studying the first level of Fullstack dedicated to HTML and CSS. Check on the timeline to see how far I am from that point and what I have achieved. <span class=codeVSQoutes>#Peace</span></p>";
            btnElyizus.style = "color: var(--colorVSQoutes);opacity: 1;"
            break;
        case 2:
            sectionADisplayer.innerHTML = "<span class=codeVSTag> <h2>ABOUT ME!</h2></span> <p>Computer technician with adaptability for teamwork, skills for research, analysis, and problem-solving. Knowledge of computer packages, programming languages, and basics of telematic networks. I aim to create or find a project to implement my knowledge assets and develop new skills.<br><span class=codeVSTag>TOOLS:</span> JS - HTML - CSS - VBA - Windows OS Office - Photoshop - Illustrator - VSC and more. </p>";
            btnSkills.style = "color: var(--colorVSTag);opacity: 1;"
            break;
            
        case 3:
            sectionADisplayer.innerHTML = "<span class=pComent> <h2>THE BIG TIME!</h2></span> <p><span class=pComent>- Fullstack program :</span> Coder House, In progress.<span class=pComent><br>- Technical Computer Engineering (2 years):</span> Seneca College, Canada 2016.<span class=pComent> <br>- Pathway Program (TOEFL):</span> ILAC, Canada 2014-2015. <span class=pComent> <br>- Diploma in Sound Engineering:</span> Audioplace, Venezuela 2014. <span class=pComent>  <br> - Systems Engineering (2 years): </span> Metropolitan University, Venezuela 2010</p>";
            btnTime.style = "color: var(--colorVSComment); opacity: 1;"
            break;
        case 4:
            sectionADisplayer.innerHTML = "<span class=codeVSClass> <h2>CALL ME MAYBE!</h2> </span> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>";
            btnContact.style = "color: var(--colorVSClass);opacity: 1;"
            break;
    }

}


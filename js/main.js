
// BOTONES SECTION A
var btnElyizus = document.getElementById("btnElyizus");
var btnSkills = document.getElementById("btnSkills");
var btnTime = document.getElementById("btnTime");
var btnContact = document.getElementById("btnContact");
var btnNext = document.getElementById("btnNext");
btnElyizus.style = "color: var(--colorVSQoutes);opacity: 1;"
// BOTONES SECTION B 
var sectionB__colB__BTN__elyizus = document.getElementById("sectionB__colB__BTN__elyizus");
var sectionB__colB__BTN__paf = document.getElementById("sectionB__colB__BTN__paf");
var sectionB__colB__BTN__puzku = document.getElementById("sectionB__colB__BTN__puzku");
var sectionB__colB__BTN__amagi = document.getElementById("sectionB__colB__BTN__amagi");
//CONTACT TO DISPLAY
var contactHeader = document.getElementById("contactHeader");
var contactFooter = document.getElementById("contactFooter");
var submit = document.getElementById("submit");
var modalClose = document.getElementById("modalClose");

contactHeader.addEventListener('click', function () {
    document.getElementById("body").style.backgroundColor = "blue";
    document.getElementById("internal").style.backgroundColor = "blue";
});
contactFooter.addEventListener('click', function () {
    document.getElementById("body").style.backgroundColor = "blue";
    document.getElementById("internal").style.backgroundColor = "blue";
});
submit.addEventListener('click', function () {
    document.getElementById("internal").style.backgroundColor = "var(--colorPrimary)";
    document.getElementById("body").style.backgroundColor = "var(--colorPrimary)";

});
modalClose.addEventListener('click', function () {
    document.getElementById("internal").style.backgroundColor = "var(--colorPrimary)";
    document.getElementById("body").style.backgroundColor = "var(--colorPrimary)";

});


contactHeader.addEventListener('click', function () {
    displayerAOption = 4;
    displayerAselector(displayerAOption);
});

contactFooter.addEventListener('click', function () {
    displayerAOption = 4;
    displayerAselector(displayerAOption);
});
// DIPLAYER ID A
let sectionADisplayer = document.getElementById("sectionADisplayer");
let displayerAOption = 1;
// DIPLAYER ID B
let sectionBDisplayer = document.getElementById("sectionBDisplayer");
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
/*btnContact.addEventListener('click', function () {
    displayerAOption = 4;
    displayerAselector(displayerAOption);
});*/
btnNext.addEventListener('click', function () {
    if (displayerAOption == 4) {
        displayerAOption = 1;
    } else {
        displayerAOption++;
    }
    displayerAselector(displayerAOption);
});
// EVENT LISTENER SECTION B
sectionB__colB__BTN__elyizus.addEventListener('click', function () {

    displayerBselector(1);
});
sectionB__colB__BTN__paf.addEventListener('click', function () {

    displayerBselector(2);
});
sectionB__colB__BTN__puzku.addEventListener('click', function () {

    displayerBselector(3);
});
sectionB__colB__BTN__amagi.addEventListener('click', function () {

    displayerBselector(4);
});
// DISPLAYER  SECTION B

function displayerBselector(option) {

    switch (option) {
        case 1:
            sectionBDisplayer.innerHTML = "<div class=container&#32;sectionB__mainDisplay data-aos=fade><div class=row&#32;mainDisplay__top><div class=col-12&#32;col-md-9&#32;col-lg-9&#32;justify-content-end data-aos=fade-right> <h2 class=desLogLink__title> <span class=codeVSChar>&#60;</span><span class=codeVSTag>title</span><span class=codeVSChar>></span>Elyizus Portfolio <span class=codeVSChar>&#60;/</span><span class=codeVSTag>title</span><span class=codeVSChar>></span> </h2></div><div class=col-md-2&#32;col-lg-3&#32;justify-content-end data-aos=fade-left><a href=pages/elyizus.html><button type=button class=btn&#32;btn-link buttonCatalog>CATALOG</button></a></div></div><div class=row&#32;sectionB__mainDisplay__bottom><p class=pComent data-aos=zoom-out>&#60;!-- The first version of this portfolio that I keep on my projects catalog because I believe that do not forget from where we come from is relevant.  WARNING: project no updated since August 2021.--></p><p class=pLinkP data-aos=fade-right> <span class=codeVSChar>&#60;</span><span class=codeVSTag>a</span><span class=codeVSClass>href</span><span class=codeVSWhite>=</span><span class=codeVSQoutes>“https://farrerae.github.io/portfolio20.7/” </span><span class=codeVSChar>></span><a class=pLinkPA href=https://farrerae.github.io/portfolio20.7/>GO TO THE WEBSITE </a><span class=codeVSChar>&#60;/</span><span class=codeVSTag>a</span><span class=codeVSChar>></span></p></div><!--                                                                 SECTION B FOOTER--><div class=row&#32;sectionB__mainDisplay__footer><div class=col-4&#32;offset-md-1&#32col-md-5&#32;col-lg-2&#32;col-xl-2&#32;sectionB__mainDisplay__footerA data-aos=fade-up><img class=sectionB__mainDisplay__footerA--img src=images/logo/logo-crema.svg alt=></div><div class=col-7&#32;col-md-5&#32;offset-lg-4&#32;col-lg-4&#32;offset-xl-5&#32;col-xl-3&#32;sectionB__mainDisplay__footerB data-aos=fade-down><img class=sectionB__mainDisplay__footer--img src=images/tools/html-blanco.svg alt=html><img class=sectionB__mainDisplay__footer--img src=images/tools/bootstrap-blanco.svg alt=bootstrap><img class=sectionB__mainDisplay__footer--img src=images/tools/js-blanco.svg alt=js><img class=sectionB__mainDisplay__footer--img src=images/tools/css-blanco.svg alt=css></div></div></div></div>";
            break;
        case 2:
            sectionBDisplayer.innerHTML = "<div class=container&#32;sectionB__mainDisplay data-aos=fade><div class=row&#32;mainDisplay__top><div class=col-12&#32;col-md-9&#32;col-lg-9&#32;justify-content-end data-aos=fade-right> <h2 class=desLogLink__title> <span class=codeVSChar>&#60;</span><span class=codeVSTag>title</span><span class=codeVSChar>></span>Post Activity Form<span class=codeVSChar>&#60;/</span><span class=codeVSTag>title</span><span class=codeVSChar>></span> </h2></div><div class=col-md-2&#32;col-lg-3&#32;justify-content-end data-aos=fade-left><a href=pages/paf.html><button type=button class=btn&#32;btn-link buttonCatalog>CATALOG</button></a></div></div><div class=row&#32;sectionB__mainDisplay__bottom><p class=pComent data-aos=zoom-out>&#60;!-- Website designed and thought to facilitate the documentation of technical activities. The PAF is interactive form that displays the necessary fields to create a report depending on the type of activity and result.--></p><p class=pLinkP data-aos=fade-right> <span class=codeVSChar>&#60;</span><span class=codeVSTag>a</span><span class=codeVSClass>href</span><span class=codeVSWhite>=</span><span class=codeVSQoutes>“https://farrerae.github.io/PAF/?”</span><span class=codeVSChar>></span><a class=pLinkPA href=https://farrerae.github.io/PAF/?>GO TO THE WEBSITE </a><span class=codeVSChar>&#60;/</span><span class=codeVSTag>a</span><span class=codeVSChar>></span></p></div><!--                                                                 SECTION B FOOTER--><div class=row&#32;sectionB__mainDisplay__footer><div class=col-4&#32;offset-md-1&#32col-md-5&#32;col-lg-2&#32;col-xl-2&#32;sectionB__mainDisplay__footerA data-aos=fade-up><img class=sectionB__mainDisplay__footerA--img src=images/logo/paf-white.svg alt=></div><div class=col-7&#32;col-md-5&#32;offset-lg-4&#32;col-lg-4&#32;offset-xl-5&#32;col-xl-3&#32;sectionB__mainDisplay__footerB data-aos=fade-down><img class=sectionB__mainDisplay__footer--img src=images/tools/html-blanco.svg alt=html><img class=sectionB__mainDisplay__footer--img src=images/tools/bootstrap-blanco.svg alt=bootstrap><img class=sectionB__mainDisplay__footer--img src=images/tools/js-blanco.svg alt=js><img class=sectionB__mainDisplay__footer--img src=images/tools/css-blanco.svg alt=css></div></div></div></div>";
            break;
        case 3:
            sectionBDisplayer.innerHTML = "<div class=container&#32;sectionB__mainDisplay data-aos=fade><div class=row&#32;mainDisplay__top><div class=col-12&#32;col-md-9&#32;col-lg-9&#32;justify-content-end data-aos=fade-right> <h2 class=desLogLink__title> <span class=codeVSChar>&#60;</span><span class=codeVSTag>title</span><span class=codeVSChar>></span> Puzku <span class=codeVSChar>&#60;/</span><span class=codeVSTag>title</span><span class=codeVSChar>></span> </h2></div><div class=col-md-2&#32;col-lg-3&#32;justify-content-end data-aos=fade-left><a href=pages/puzku.html><button type=button class=btn&#32;btn-link buttonCatalog>CATALOG</button></a></div></div><div class=row&#32;sectionB__mainDisplay__bottom><p class=pComent data-aos=zoom-out>&#60;!-- This project is a mathematical game that combined a sliding block puzzle and Sudoku on the same board. The objective is to organize the pieces along routes to establish an end-configuration where the numbers should not be repeated in the same row, column, or sub-grid.--></p><p class=pLinkP data-aos=fade-right> <span class=codeVSChar>&#60;</span><span class=codeVSTag>a</span><span class=codeVSClass>href</span><span class=codeVSWhite>=</span><span class=codeVSQoutes>“https://farrerae.github.io/PUZKU/”</span><span class=codeVSChar>></span><a class=pLinkPA href=https://farrerae.github.io/PUZKU/>GO TO THE WEBSITE </a><span class=codeVSChar>&#60;/</span><span class=codeVSTag>a</span><span class=codeVSChar>></span></p></div><!--                                                                 SECTION B FOOTER--><div class=row&#32;sectionB__mainDisplay__footer><div class=col-4&#32;offset-md-1&#32col-md-5&#32;col-lg-2&#32;col-xl-2&#32;sectionB__mainDisplay__footerA data-aos=fade-up><img class=sectionB__mainDisplay__footerA--img src=images/logo/logo-puzku.svg alt=></div><div class=col-7&#32;col-md-5&#32;offset-lg-4&#32;col-lg-4&#32;offset-xl-5&#32;col-xl-3&#32;sectionB__mainDisplay__footerB data-aos=fade-down><img class=sectionB__mainDisplay__footer--img src=images/tools/html-blanco.svg alt=html><img class=sectionB__mainDisplay__footer--img src=images/tools/bootstrap-blanco.svg alt=bootstrap><img class=sectionB__mainDisplay__footer--img src=images/tools/js-blanco.svg alt=js><img class=sectionB__mainDisplay__footer--img src=images/tools/css-blanco.svg alt=css></div></div></div></div>";
            break;
        case 4:
            sectionBDisplayer.innerHTML = "<div class=container&#32;sectionB__mainDisplay data-aos=fade><div class=row&#32;mainDisplay__top><div class=col-12&#32;col-md-9&#32;col-lg-9&#32;justify-content-end data-aos=fade-right> <h2 class=desLogLink__title> <span class=codeVSChar>&#60;</span><span class=codeVSTag>title</span><span class=codeVSChar>></span>Amagi<span class=codeVSChar>&#60;/</span><span class=codeVSTag>title</span><span class=codeVSChar>></span> </h2></div><div class=col-md-2&#32;col-lg-3&#32;justify-content-end data-aos=fade-left><a href=pages/amagi.html><button type=button class=btn&#32;btn-link buttonCatalog>CATALOG</button></a></div></div><div class=row&#32;sectionB__mainDisplay__bottom><p class=pComent data-aos=zoom-out>&#60;!-- Restaurant web site description --></p><p class=pLinkP data-aos=fade-right> <span class=codeVSChar>&#60;</span><span class=codeVSTag>a</span><span class=codeVSClass>href</span><span class=codeVSWhite>=</span><span class=codeVSQoutes>“Comming Soon”</span><span class=codeVSChar>></span><a class=pLinkPA href=#>GO TO THE WEBSITE </a><span class=codeVSChar>&#60;/</span><span class=codeVSTag>a</span><span class=codeVSChar>></span></p></div><!--                                                                 SECTION B FOOTER--><div class=row&#32;sectionB__mainDisplay__footer><div class=col-4&#32;offset-md-1&#32col-md-5&#32;col-lg-2&#32;col-xl-2&#32;sectionB__mainDisplay__footerA data-aos=fade-up><img class=sectionB__mainDisplay__footerA--img src=images/logo/logo-amagi.svg alt=></div><div class=col-7&#32;col-md-5&#32;offset-lg-4&#32;col-lg-4&#32;offset-xl-5&#32;col-xl-3&#32;sectionB__mainDisplay__footerB data-aos=fade-down><img class=sectionB__mainDisplay__footer--img src=images/tools/html-blanco.svg alt=html><img class=sectionB__mainDisplay__footer--img src=images/tools/bootstrap-blanco.svg alt=bootstrap><img class=sectionB__mainDisplay__footer--img src=images/tools/js-blanco.svg alt=js><img class=sectionB__mainDisplay__footer--img src=images/tools/css-blanco.svg alt=css></div></div></div></div>";
            break;
    }

}

// DISPLAYER  SECTION A

function displayerAselector(option) {
    btnElyizus.style = "color: var(--colorSecondary);"
    btnSkills.style = "color: var(--colorSecondary);"
    btnTime.style = "color: var(--colorSecondary);"
    // btnContact.style = "color: var(--colorSecondary);"

    switch (option) {
        case 1:
            sectionADisplayer.innerHTML = "<span class=codeVSQoutes> <h2 data-aos=flip-down>ABOUT IT!</h2>  </span> <p data-aos=flip-up>Elyizus is the first project executed by Ely Jesus Farrera. The aim is to create a gallery of projects. A portfolio that will improve as I obtain knowledge and new skills. The most relevant characteristic of Elyizus personal project is to register development and personal growth. This website is the second version, the first version's catalog is available in the project section. The first release is dated July 2021 while studying the first level of Fullstack dedicated to HTML and CSS. Check on the timeline to see how far I am from that point and what I have achieved. <span class=codeVSQoutes>#Peace</span></p>";
            btnElyizus.style = "color: var(--colorVSQoutes);opacity: 1;"
            break;
        case 2:
            sectionADisplayer.innerHTML = "<span class=codeVSTag> <h2 data-aos=flip-down>ABOUT ME!</h2></span> <p data-aos=flip-up>Computer technician with adaptability for teamwork, skills for research, analysis, and problem-solving. Knowledge of computer packages, programming languages, and basics of telematic networks. I aim to create or find a project to implement my knowledge assets and develop new skills.<br><span class=codeVSTag>TOOLS:</span> JS - HTML - CSS - VBA - Windows OS Office - Photoshop - Illustrator - VSC and more. </p>";
            btnSkills.style = "color: var(--colorVSTag);opacity: 1;"
            break;

        case 3:
            sectionADisplayer.innerHTML = "<iframe style= border:none  width= 100%  height= 100%  src= https://whimsical.com/embed/CJquBgRFxUxDYGEi6KDwQi@7YNFXnKbYj6915fhTLvEJ ></iframe>";
            btnTime.style = "color: var(--colorVSComment); opacity: 1;"
            break;
        /*  case 4:
              sectionADisplayer.innerHTML = "<span class=codeVSClass> <h2 data-aos=flip-down>CALL ME MAYBE!</h2> </span> <p data-aos=flip-up>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>";
              btnContact.style = "color: var(--colorVSClass);opacity: 1;"
              break;*/
    }

}


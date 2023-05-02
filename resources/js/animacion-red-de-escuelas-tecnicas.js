export default function animationRed(){
    // Knob
const dragKnob = document.getElementById("drag-knob-school");
if (!dragKnob) { return; }

// Hotspots
let hotSpots = document.getElementsByClassName("hotspot");
if (!hotSpots) { return; }

// Textos del círculo
let circleTexts = document.getElementsByClassName("circular-spinner-progress__label");
if (!circleTexts) { return; }

// Textos descriptivos
let infoTexts = document.getElementsByClassName("texts-list__item");
if (!infoTexts) { return; }

// Progress
const dragProgress = document.getElementById("drag-progress");
if (!dragProgress) { return; }

// Botones
const prevButton = document.getElementById("animatePrevButton");
if (!prevButton) { return; }
const nextButton = document.getElementById("animateNextButton");
if (!nextButton) { return; }

// Botones play y pause
const pauseBtn = document.getElementById("pause-button");
if (!pauseBtn) { return; }
const resumeBtn = document.getElementById("resume-button");
if (!resumeBtn) { return; }

// Timeline
let tl = gsap.timeline(
    {repeat: -1}
);

function clearFirst(){
    hotSpots[2].classList.add('is-active');
    circleTexts[1].classList.add('is-active');
    circleTexts[0].classList.remove('is-active');
    circleTexts[2].classList.remove('is-active');
    circleTexts[3].classList.remove('is-active');


    infoTexts[1].classList.add('is-active');
    infoTexts[0].classList.remove('is-active');
}
function clearSecond(){
    hotSpots[3].classList.add('is-active');
    circleTexts[2].classList.add('is-active');
    circleTexts[0].classList.remove('is-active');
    circleTexts[1].classList.remove('is-active');
    circleTexts[3].classList.remove('is-active');

    infoTexts[2].classList.add('is-active');
    infoTexts[0].classList.remove('is-active');
    infoTexts[1].classList.remove('is-active');
}
function clearThird(){
    hotSpots[4].classList.add('is-active');
    circleTexts[3].classList.add('is-active');
    circleTexts[0].classList.remove('is-active');
    circleTexts[1].classList.remove('is-active');
    circleTexts[2].classList.remove('is-active');

    infoTexts[3].classList.add('is-active');
    infoTexts[0].classList.remove('is-active');
    infoTexts[1].classList.remove('is-active');
    infoTexts[2].classList.remove('is-active');
}
/*function clearFourth(){
    hotSpots[5].classList.add('is-active');
    circleTexts[4].classList.add('is-active');
    circleTexts[0].classList.remove('is-active');
    circleTexts[1].classList.remove('is-active');
    circleTexts[2].classList.remove('is-active');
    circleTexts[3].classList.remove('is-active');
    circleTexts[5].classList.remove('is-active');
    infoTexts[0].classList.remove('is-active');
    infoTexts[1].classList.remove('is-active');
    infoTexts[2].classList.remove('is-active');
    infoTexts[3].classList.remove('is-active');
}*/
/*function clearFifth(){
    hotSpots[6].classList.add('is-active');
    circleTexts[5].classList.add('is-active');
    circleTexts[0].classList.remove('is-active');
    circleTexts[1].classList.remove('is-active');
    circleTexts[2].classList.remove('is-active');
    circleTexts[3].classList.remove('is-active');
    circleTexts[4].classList.remove('is-active');

    infoTexts[0].classList.remove('is-active');
    infoTexts[1].classList.remove('is-active');
    infoTexts[2].classList.remove('is-active');
    infoTexts[3].classList.remove('is-active');
    infoTexts[4].classList.remove('is-active');
}*/
function clearAll(){
    hotSpots[2].classList.remove('is-active');
    hotSpots[3].classList.remove('is-active');
    hotSpots[4].classList.remove('is-active');

    circleTexts[0].classList.add('is-active');
    circleTexts[1].classList.remove('is-active');
    circleTexts[2].classList.remove('is-active');
    circleTexts[3].classList.remove('is-active');

    infoTexts[0].classList.add('is-active');
    infoTexts[1].classList.remove('is-active');
    infoTexts[2].classList.remove('is-active');
    infoTexts[3].classList.remove('is-active');
}


tl.to("#drag-knob-school", {

    rotation: 360,
    duration: 36,
    ease: 'none',
        //overwrite: true,

        onUpdate() {

            // Obtengo la cantidad de grados de rotación
            let elem = this.targets()[0];
            let rotatedAmount = gsap.getProperty(elem, "rotation");

            // Agrego clase is-active acorde a la rotación
            if(rotatedAmount >= 120){
                clearFirst();
            }
            if(rotatedAmount >= 240){
                clearSecond();
            }
            if(rotatedAmount >= 300){
                clearThird()
            }
            if(rotatedAmount >= 360){
                clearAll()
            }

            /*if(rotatedAmount >= 300){
                clearFifth();
            }
            // Remuevo clase is-active luego de una vuelta entera
            if(rotatedAmount >= 360){
                clearAll()
            }*/

            //Línea que se pinta
            let minProgress = 2388.61;
            let maxProgress = 0;
            //console.log(this.totalProgress());

            let totalProgress = this.totalProgress();

            // Obtengo la cantidad de segundos de la animación      
            let currentTime = gsap.getProperty(tl, "time");

            if(currentTime < 13 ){
                nextButton.addEventListener("click", () => {
                    tl.seek(12);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                })
                prevButton.addEventListener("click", () => {
                    tl.seek(30);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                })
            }
            if(currentTime > 13 && currentTime < 24){
                nextButton.addEventListener("click", () => {
                    tl.seek(24);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                })
                prevButton.addEventListener("click", () => {
                    tl.seek(0);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                    hotSpots[2].classList.remove('is-active');
                    circleTexts[0].classList.add('is-active');
                    circleTexts[1].classList.remove('is-active');
                    infoTexts[0].classList.add('is-active');
                    infoTexts[1].classList.remove('is-active');
                    infoTexts[2].classList.remove('is-active');
                    infoTexts[3].classList.remove('is-active');
                })
            }
            if(currentTime > 24 && currentTime < 30){
                nextButton.addEventListener("click", () => {
                    tl.seek(30);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                })
                prevButton.addEventListener("click", () => {
                    tl.seek(12);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                    hotSpots[3].classList.remove('is-active');
                    circleTexts[0].classList.remove('is-active');
                    circleTexts[1].classList.remove('is-active');
                    infoTexts[1].classList.add('is-active');
                    infoTexts[0].classList.remove('is-active');
                    infoTexts[1].classList.remove('is-active');
                    infoTexts[2].classList.remove('is-active');
                    infoTexts[3].classList.remove('is-active');
                })
            }
            if(currentTime > 30 && currentTime < 36){
                nextButton.addEventListener("click", () => {
                    tl.seek(0);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                    hotSpots[2].classList.remove('is-active');
                    hotSpots[3].classList.remove('is-active');
                    hotSpots[4].classList.remove('is-active');
                    circleTexts[0].classList.add('is-active');
                    circleTexts[3].classList.remove('is-active');
                    infoTexts[0].classList.add('is-active');
                    infoTexts[1].classList.remove('is-active');
                    infoTexts[2].classList.remove('is-active');
                    infoTexts[3].classList.remove('is-active');
                })
                prevButton.addEventListener("click", () => {
                    tl.seek(24);
                    tl.resume();
                    resumeBtn.classList.add('button--is-hidden');
                    pauseBtn.classList.remove('button--is-hidden');
                    hotSpots[4].classList.remove('is-active');
                    circleTexts[0].classList.remove('is-active');
                    circleTexts[1].classList.remove('is-active');
                    circleTexts[2].classList.remove('is-active');
                    circleTexts[3].classList.remove('is-active');
                    infoTexts[2].classList.add('is-active');
                    infoTexts[0].classList.remove('is-active');
                    infoTexts[1].classList.remove('is-active');
                    infoTexts[3].classList.remove('is-active');
                })
            }
        }
    },

    circleTexts[0].addEventListener("click", () => {
        tl.seek(0);
        tl.resume();
        hotSpots[2].classList.remove('is-active');
        hotSpots[3].classList.remove('is-active');
        hotSpots[4].classList.remove('is-active');

        circleTexts[0].classList.add('is-active');
        circleTexts[1].classList.remove('is-active');
        circleTexts[2].classList.remove('is-active');
        circleTexts[3].classList.remove('is-active');

        infoTexts[0].classList.add('is-active');
        infoTexts[1].classList.remove('is-active');
        infoTexts[2].classList.remove('is-active');
        infoTexts[3].classList.remove('is-active');

        resumeBtn.classList.add('button--is-hidden');
        pauseBtn.classList.remove('button--is-hidden');
    }),
    circleTexts[1].addEventListener("click", () => {
        tl.seek(12);
        tl.resume();
        hotSpots[2].classList.add('is-active');
        hotSpots[1].classList.remove('is-active');
        hotSpots[3].classList.remove('is-active');
        hotSpots[4].classList.remove('is-active');


        circleTexts[0].classList.remove('is-active');
        circleTexts[2].classList.remove('is-active');
        circleTexts[3].classList.remove('is-active');

        infoTexts[1].classList.add('is-active');
        infoTexts[0].classList.remove('is-active');
        infoTexts[2].classList.remove('is-active');
        infoTexts[3].classList.remove('is-active');

        resumeBtn.classList.add('button--is-hidden');
        pauseBtn.classList.remove('button--is-hidden');
    }),
    circleTexts[2].addEventListener("click", () => {
        tl.seek(24);
        tl.resume();
        hotSpots[3].classList.add('is-active');
        hotSpots[4].classList.remove('is-active');

        infoTexts[2].classList.add('is-active');
        infoTexts[0].classList.remove('is-active');
        infoTexts[1].classList.remove('is-active');
        infoTexts[3].classList.remove('is-active');

        resumeBtn.classList.add('button--is-hidden');
        pauseBtn.classList.remove('button--is-hidden');
    }),
    circleTexts[3].addEventListener("click", () => {
        tl.seek(30);
        tl.resume();
        hotSpots[3].classList.remove('is-active');
        hotSpots[4].classList.remove('is-active');
        infoTexts[3].classList.add('is-active');
        infoTexts[0].classList.remove('is-active');
        infoTexts[1].classList.remove('is-active');
        infoTexts[2].classList.remove('is-active');

        resumeBtn.classList.add('button--is-hidden');
        pauseBtn.classList.remove('button--is-hidden');
    }),

);

// Play y stop en botones
pauseBtn.addEventListener("click", () => {
    tl.pause();
    pauseBtn.classList.add('button--is-hidden');
    resumeBtn.classList.remove('button--is-hidden');
})    
resumeBtn.addEventListener("click", () => {
    tl.resume();
    resumeBtn.classList.add('button--is-hidden');
    pauseBtn.classList.remove('button--is-hidden');
})
}
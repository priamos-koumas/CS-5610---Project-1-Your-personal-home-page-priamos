/*
Sources used:
https://getbootstrap.com/docs/5.0/components/collapse/
https://www.w3schools.com/html/html5_audio.asp
*/

const qaAccordion = document.querySelector("#collapseSix");
if (qaAccordion) {
  const qaMusic = new Audio("music/bouzouki.mp3");
  
  qaAccordion.addEventListener("show.bs.collapse", () => {
    qaMusic.play();
  });

  qaAccordion.addEventListener("hide.bs.collapse", () => {
    qaMusic.pause();
    qaMusic.currentTime = 0;
  });
}
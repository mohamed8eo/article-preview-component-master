let shareicon = document.getElementById("share");
let socailmedia = document.getElementsByClassName("socai-media")[0];

shareicon.addEventListener("click", () => {
    socailmedia.style.opacity = "1";
    shareicon.style.color = "var(--Light-Grayish-Blue)";
    shareicon.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
    shareicon.style.transition = ".1s"
})

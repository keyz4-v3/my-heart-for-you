
const hide = document.getElementsByClassName("note");

function show() {
    // Assuming you want to toggle the display for each element with the class "note"
    for (let i = 0; i < hide.length; i++) {
        if (hide[i].style.display === "none" || hide[i].style.display === "") {
            hide[i].style.display = "flex";
            hide[i].style.animationName = "easein";
            console.log("flex");
            return;
        } 
        else {
            hide[i].style.animationName = "easeout";
            hide[i].style.transitionDuration = "5s";
            setTimeout(()=>{hide[i].style.display = 'none';},2000)
            console.log("none");
        }
        
    }
}

const quote = document.getElementsByClassName("quote");
const img1 = document.getElementsByClassName("img1");

function showQuote() {
    // Assuming you want to toggle the display for each element with the class "note"
    for (let i = 0; i < quote.length; i++) {
        if (quote[i].style.opacity == 0) {
            quote[i].style.opacity = 1;
            quote[i].style.animationName = "fadein";
            img1[i].style.animationName = "fadeout";
            console.log("flex");
            return;
        } 
        else {
            quote[i].style.animationName = "fadeout";
            img1[i].style.animationName = "fadein";
            quote[i].style.transitionDuration = "3s";
            quote[i].style.opacity = 0;
            console.log("none");
        }
        
    }
}

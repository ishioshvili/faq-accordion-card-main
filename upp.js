const questions = document.querySelectorAll(".faq")
const answers = document.querySelectorAll(".answer")
const arrows = document.querySelectorAll(".iconArrow")

const open = function (x) {
    answers[x].style.display="inline" 
    questions[x].style.fontWeight="bold"    
    arrows[x].style.transform="rotate(180deg)"
}

const close = function (x) {
    answers[x].style.display="none" 
    questions[x].style.fontWeight = "normal"
    arrows[x].style.transform="rotate(0deg)"
}


for (let i=0; i<questions.length; i++) {
    questions[i].addEventListener("click", function() {
        if (questions[i].style.fontWeight == "bold") {
            close(i)
        } 
        else {
            open(i) 
            for(let n=0; n<questions.length; n++) {
                if (n != i) {close(n)}
            }
        }
    })    
}





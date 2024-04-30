let hatterOne = document.querySelector("#hatter-one");
let hatterTwo = document.querySelector("#hatter-two");
let hatterThree = document.querySelector("#hatter-three");
let hatterFour = document.querySelector("#hatter-four");
let hatter = document.querySelectorAll('input[name="hatter"]');
let textarea = document.querySelector(".textarea");
let button = document.querySelector(".textarea-button");
let send = document.querySelector(".send");
let sendButton = document.querySelector(".send-button");



for (which of hatter) {

    which.addEventListener("change", function () {


        switch (true) {

            case hatterOne.checked:

                textarea.style.backgroundImage = "url('../images/sergiu-gabriel-LIEmOHJOx_c-unsplash.jpg')";
                textarea.style.backgroundSize = "cover";
                textarea.style.backgroundPosition =  5 + "%" + " " + 95 + "%";
                textarea.style.opacity = 0.4;
                break
                
            case hatterTwo.checked:
                textarea.style.backgroundImage = "url('../images/nenad-radojcic-G2yQxpUGiaM-unsplash.jpg')";
                textarea.style.backgroundSize = "cover";
                textarea.style.backgroundPosition =  5 + "%" + " " + 75 + "%";
                textarea.style.opacity = 0.4;
                break

            case hatterThree.checked:
                textarea.style.backgroundImage = "url('../images/alana-harris-nxEQJzHQMJ0-unsplash\ \(1\).jpg')";
                textarea.style.backgroundSize = "cover";
                textarea.style.backgroundPosition =  5 + "%" + " " + 25 + "%";
                textarea.style.opacity = 0.4;
                break

            case hatterFour.checked:
                textarea.style.backgroundImage = "url('../images/ian-wagg-a6f968XpMRo-unsplash.jpg')";
                textarea.style.backgroundSize = "cover";
                textarea.style.backgroundPosition =  5 + "%" + " " + 85 + "%";
                textarea.style.opacity = 0.4;
    
                break

        }
    })
} 

button.addEventListener("click", function () {
    send.classList.add("sent");
})
sendButton.addEventListener("click", function(){
    send.classList.remove("sent");
})
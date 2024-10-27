
const $costumers = Array.from(document.querySelectorAll("[data-name='costumer']"));
const $reviews = Array.from(document.querySelectorAll("[data-name='review']"));
const $pointer = document.getElementById("pointer");
const $container_reviews = document.getElementById("container-reviews");

const $navBar = document.querySelector(".navbar");
const $navBarButton = document.getElementById("navButton");

let new_costumer;
let old_costumer;
let menushow = false;

const resetcostumers = () => {
    $costumers.forEach(item => {
        if(item.matches(".active-costumer")){
            item.classList.remove("active-costumer");
            if(window.innerWidth >= 992)
                item.addEventListener('transitionend', handleTransitionEnd2);
            else
                new_costumer.classList.add("active-costumer");
            old_costumer = item;
        }
    });
}

const changeReview = (num) => {
    let pos = num * 100 * -1;
    $reviews.forEach(element => element.style.translate = `${pos}% 0%`);
};

const handleTransitionEnd2 = (e) => {
    if(e.propertyName === "max-width"){
        new_costumer.classList.add("active-costumer");
        console.log(e)
        old_costumer.removeEventListener('transitionend', handleTransitionEnd2);
    }
};

const movePointer=()=>{
    let offsetpointer = $container_reviews.getBoundingClientRect().left;
    if(new_costumer==undefined){
        new_costumer = $costumers[0]
    }
    let imgRect = new_costumer.children[0].getBoundingClientRect();
    let pointerRect = $pointer.getBoundingClientRect();
    let pos = imgRect.right - (imgRect.width/2) - (pointerRect.width/2) - offsetpointer
    $pointer.style.left = pos;
}

const handleTransitionEnd = (e) => {
    if(e.propertyName === "max-width"){
        movePointer()
        new_costumer.removeEventListener('transitionend', handleTransitionEnd);
    }
};

document.addEventListener('click', (e) =>{
    if(e.target.matches("[data-name='costumer'] img") && !(e.target.matches(".active-costumer img"))){
        let num_review = Number(e.target.getAttribute("data-number"));
        new_costumer = e.target.parentElement;
        changeReview(num_review);
        resetcostumers();
        if(window.innerWidth >= 992)
            new_costumer.addEventListener('transitionend', handleTransitionEnd);
        else
            movePointer()
    }
    if (e.target.id == "navButton") {
        $navBar.classList.toggle("menuShow");
        $navBarButton.classList.toggle("active");
        menushow = !menushow;
    }
    if(e.target.getAttribute("data-name") == "acordeon-button"){
        e.target.parentElement.parentElement.classList.toggle("acordeon-active")
    }
});

movePointer()

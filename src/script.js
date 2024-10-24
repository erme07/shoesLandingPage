
const costumers = Array.from(document.querySelectorAll("[data-name='costumer']"));
const reviews = Array.from(document.querySelectorAll("[data-name='review']"));
const pointer = document.getElementById("pointer");
const container_reviews = document.getElementById("container-reviews");

let new_costumer;
let old_costumer;

const resetcostumers = () => {
    costumers.forEach(item => {
        if(item.matches(".active-costumer")){
            item.classList.remove("active-costumer");
            item.addEventListener('transitionend', handleTransitionEnd2);
            old_costumer = item;
        }
    });
}

const changeReview = (num) => {
    let pos = num * 100 * -1;
    reviews.forEach(element => element.style.translate = `${pos}% 0%`);
};

const handleTransitionEnd2 = (e) => {
    new_costumer.classList.add("active-costumer");
    old_costumer.removeEventListener('transitionend', handleTransitionEnd2);
};

const handleTransitionEnd = (e) => {
    let offsetpointer = container_reviews.getBoundingClientRect().left;
    let imgRect = new_costumer.children[0].getBoundingClientRect();
    let pointerRect = pointer.getBoundingClientRect();
    let pos = imgRect.left - offsetpointer + (imgRect.width/2) - (pointerRect.width/2);
    pointer.style.left = pos;
    new_costumer.removeEventListener('transitionend', handleTransitionEnd);
};

document.addEventListener('click', (e) =>{
    if(e.target.matches("[data-name='costumer'] img") && !(e.target.matches(".active-costumer img"))){
        let num_review = Number(e.target.getAttribute("data-number"));
        changeReview(num_review);
        resetcostumers();
        new_costumer = e.target.parentElement;
        new_costumer.addEventListener('transitionend', handleTransitionEnd);
    }
});
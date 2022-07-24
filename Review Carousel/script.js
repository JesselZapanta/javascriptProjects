const reviewList = [
    {
        id: 1,
        name:"Jane Doe",
        title:"The Secretary",
        img:"./images/avatar1.jpg",
        body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sit nisi accusantium expedita reprehenderit sapiente voluptatem sed error consectetur nobis dolore id facilis eum repellendus nulla voluptates, quaerat dicta, dolorum ratione praesentium? Suscipit, ducimus error sit accusamus nemo ad.",
    }, 
    {
        id: 2,
        name:"John Doe",
        title:"The Boss",
        img:"./images/avatar2.jpg",
        body:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It has survived not only five centuries, but also the leap into .",
    }, 
    {
        id: 3,
        name:"Adam Quest",
        title:"The Editor",
        img:"./images/avatar3.jpg",
        body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    }, 
    {
        id: 4,
        name:"Ernest Achiever",
        title:"The Manager",
        img:"./images/avatar4.jpg",
        body:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",
    }, 
    {
        id: 5,
        name:"Raiden Ei",
        title:"The Employer",
        img:"./images/avatar5.jpg",
        body:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham those interested. Sections 1.10.32.",
    }
]

const reviewImg = document.getElementById("review-img");
const name = document.getElementById("name");
const title = document.getElementById("title");
const body = document.getElementById("body");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.getElementById("random");


let curentReview = 0;

window.addEventListener("DOMContentLoaded", function(){
    showReview(curentReview);
})

function showReview(review){
    let person = reviewList[review];

    reviewImg.src = person.img;
    name.textContent = person.name;
    title.textContent = person.title;
    body.textContent = person.body;
}

nextBtn.addEventListener("click", function(){
    curentReview++;
    if(curentReview > reviewList.length -1){
        curentReview=0;
    }
    showReview(curentReview);
})
prevBtn.addEventListener("click", function(){
    curentReview--;
    if(curentReview < 0 ){
        curentReview = reviewList.length -1;
    }
    showReview(curentReview);
})

randomBtn.addEventListener("click", function(){
    rand = Math.floor(Math.random() * (reviewList.length - 1)) + 0;
    showReview(rand);
})
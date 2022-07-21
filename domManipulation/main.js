// // DOM MANIPULATION
// // single element selector

// // to get element by id
// document.getElementId("my-form")

// // this is most effective way of selecting in DOM
// document.querySelector('.container') //to select a class
// document.querySelector('#name') //to select an id
// document.querySelector('h1') //to select a tag


// // to target a single element
// let container = document.querySelector('.container') //to select a class
// let inputName = document.querySelector('#name') //to select an id
// let h1Tag = document.querySelector('h1') //to select a tag


// // multiple element selectors (use querySelectorAll) //used to selects more than one selectors
// document.querySelectorAll('item')
// document.querySelectorAll("li")
// document.querySelectorAll("div")

// // to target multiple elements
// document.getElementsByClassName("item")
// document.getElementsByTag("li")

// // Example (to remove the ul element inside the html document)
// let ulElements = document.querySelector(".items");
// // ulElements.remove();
// // ulElements.lastElementChild.remove();

// ulElements.firstElementChild.textContent = "Javascript";
// ulElements.children[1].innerText = "C#. Net";
// ulElements.lastElementChild.innerText = "<h1>Agile</h1>";

// EVENT MANAGEMENTS
// const btn = document.querySelector(".btn");

// btn.getElementsByClassName.background = "green"

// btn.style.background = "green";

// btn.addEventListener('click', e => {
//     console.log(e);
// });

// // to prevent the website from working
// btn.addEventListener("click", (e) => {
//     e.preventDefault(); //prevents the website to submit
//     console.log(e.target.className);
// });


// to bring in the id form by changing the form color
btn.addEventListener("click", (e) => {
    e.preventDefault(); //preventing the website to submit
    console.log(e.target.className);
    document.getElementById("my-form").style.background = "red" //to give the form a new color after submitting
    document.querySelector("header").style.background = "blue" //to give the header a new background color after submitting
    document.querySelector("body").classList.add("bg-dark") //to target the body and give a new background color after submitting
    ulElements.lastElementChild.innerHTML = "<h1>Design Thinking</>";
});

// to change the inputs
let inputName = document.querySelector("#name");
inputName.addEventListener('input', (e) => {
    document.querySelector('.container').append(inputName.value)
});

let inputEmail = document.querySelector("#email");
inputEmail.addEventListener('input', (e) => {
    document.querySelector('.container').append(inputEmail.value)
});

// get the DOM elements and assign them to variables
const myForm = document.querySelector("my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit (e) {
    e.preventDefault();
    if (nameInput.value === "" || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields"
        setTimeout (() => msg.remove(), 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = "fill name here";
        emailInput.value = "fill email here";
    }
}

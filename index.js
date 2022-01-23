
const container = document.querySelector(".container");

const inputName = document
.querySelector(".input-field");

const div= document.createElement("div");



const firstChip= document.getElementById("firstChip")

firstChip.addEventListener("click", (e)=> {
  container.removeChild(e.target.parentNode);
})



inputName.addEventListener("keyup", chipHandler)

function chipHandler(e){
  const chipsArray = [];
  const test = document.querySelectorAll("close-btn");

 if(e.key ==="Enter" && e.target.value !==""){
   const userInput = inputName.value;

   div.innerHTML = userInput;
   chipsArray.push(userInput);
   chipsArray.map((item) => {
     container.innerHTML+=`<div class="chips">
        <small class="chips-text">
         ${item}</small>

        <i class="fas fa-times-circle close-btn""></i>
        </div>`
   });
   


   const closeButton = document.querySelectorAll(".close-btn");

   for(i=0; i<closeButton.length; i++){
closeButton[i].addEventListener("click" , (e)=>{
  container.removeChild(e.target.parentNode);
});
   }
   e.target.value = null;
   
 }

}


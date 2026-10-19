function flipCard() {
    const card = document.getElementById("authcard");
    card.classList.toggle("flipped");
}

function togglePassword(id, button) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        document.getElementById("faIcon").classList.remove("fa-eye");
        document.getElementById("faIcon").classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        document.getElementById("faIcon").classList.remove("fa-eye-slash");
        document.getElementById("faIcon").classList.add("fa-eye");
    }
}


// document.querySelectorAll("form").forEach(form=>{
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault();
//         const button = this.querySelector(".main-btn");
//         const oldText = button.textContent; 
//         button.textContent = "SUCCESS";
//         setTimeout(()=>{
//             button.textContent = oldText;
//         },1800)
//     })
// })


























// let nam = document.querySelectorAll(".name");
// for ( let i = 0 ; i <100 ; i++){
//     console.log(nam[i].textContent);
// }



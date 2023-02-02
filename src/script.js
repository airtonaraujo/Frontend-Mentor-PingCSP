const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let notifyButton = document.querySelector("#notify-button");
notifyButton.addEventListener("click", error)
const resetInputValue = () => {document.querySelector("#email").value = ''}
function error() {

    const validateEmail = () => {
        const email = document.querySelector("#email").value;
        return regex.test(email);
};

    if (!validateEmail()) {
        document.getElementById('error-message').style.opacity = 1
        document.querySelector(".formulario input").classList.add("error")
        resetInputValue()
    } else {
        document.getElementById('error-message').style.opacity = 0
        document.querySelector(".formulario input").classList.remove("error")
        alert('Email Notified')
        resetInputValue()
        // window.location.reload()
    }
}
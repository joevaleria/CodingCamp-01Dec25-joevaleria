const nameInput = document.getElementById("name");
const welcome = document.getElementById("welcome");

nameInput.addEventListener("input", function () {
    welcome.textContent = `Hi ${nameInput.value}, Welcome To Website`;
});
function updateTime() {
    document.getElementById("currentTime").innerText = new Date().toString();
}
updateTime();

// FORM SUBMIT HANDLING
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("outName").innerText = nameInput.value;
    document.getElementById("outDate").innerText = document.getElementById("date").value;
    document.getElementById("outGender").innerText = document.getElementById("gender").value;
    document.getElementById("outPesan").innerText = document.getElementById("pesan").value;

    updateTime();
});
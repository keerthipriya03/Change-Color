console.log("Page Title:", document.title);
console.log("Page URL:", document.URL);
console.log("Document Type:", document.doctype.name);
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    console.log("Background Color Changed To:", randomColor);
}
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", changeBackgroundColor);

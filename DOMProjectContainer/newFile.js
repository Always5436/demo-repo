console.log("this is a message");

const addButton = document.querySelector(".addList");
const inputBox = document.querySelector(".inputBox");
const list = document.querySelector(".item-list"); 

addButton.addEventListener("click", (event) => {
    const inputValue = inputBox.value.trim();

    if (inputValue === "") {
        alert("Please enter a valid item!");
        return;
    }

    const dataHTML = `
    <li class="listElement">
        <div class="text">
            ${inputValue}
        </div>
        <button class="closeButton">close</button>
    </li>`;

    list.insertAdjacentHTML("beforeend", dataHTML);

    inputBox.value = "";

    const closeButtons = document.querySelectorAll(".closeButton");
    closeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.target.closest(".listElement").remove();
        });
    });
});

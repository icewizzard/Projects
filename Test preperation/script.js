const SELECTED_ROW_CLASS_NAME = "selected-row";

document.querySelector("#button-1").addEventListener("click", function () {
    var selectedRow = document.querySelector(".first-row");
    var selectedbutton = document.querySelector("#button-1");
    toggleButtonText(selectedbutton);
    selectedRow.classList.toggle("table-success");
    selectedRow.classList.toggle(SELECTED_ROW_CLASS_NAME);
});

document.querySelector("#button-2").addEventListener("click", function () {
    var selectedRow = document.querySelector(".second-row");
    var selectedbutton = document.querySelector("#button-2");
    toggleButtonText(selectedbutton);
    selectedRow.classList.toggle("table-success");
    selectedRow.classList.toggle(SELECTED_ROW_CLASS_NAME);

});


document.querySelector("#button-3").addEventListener("click", function () {
    var selectedRow = document.querySelector(".third-row");
    var selectedbutton = document.querySelector("#button-3");
    toggleButtonText(selectedbutton);
    selectedRow.classList.toggle("table-success");
    selectedRow.classList.toggle(SELECTED_ROW_CLASS_NAME);
});

document.querySelector("#order").addEventListener("click", function () {
    createOrderTable();
});

function toggleButtonText(button) {
    if (button.textContent == "unselect") {
        button.textContent = "select";
    } else {
        button.textContent = "unselect";
    }
}

function createOrderTable() {
    var totalprice = 0;
    var selectedRowsList = document.querySelectorAll("." + SELECTED_ROW_CLASS_NAME);
    if (selectedRowsList.length !== 0) {
        var tableBody = document.querySelector(".order-table-body");
        for (var i = 0; i < selectedRowsList.length; i++) {
            var createdRow = createTableRow(selectedRowsList[i], totalprice);
            tableBody.appendChild(createdRow);
            totalprice += Number(selectedRowsList[i].querySelector(".car-price").textContent.replace(/[^0-9.-]+/g, ""));
        }
        document.querySelector(".order-table").classList.remove("not-display-element");
        document.querySelector(".sum-price").classList.remove("not-display-element");
        document.querySelector(".sum-price").textContent = "Total Price: $" + totalprice.toFixed(2);
    }
}

function createTableRow(selectedRow, totalprice) {
    var selectedCarRow = document.createElement("tr");
    var selectedCarNumber = document.createElement("td");
    var selectedCarName = document.createElement("td");
    var selectedCarPrice = document.createElement("td");

    selectedCarNumber.textContent = selectedRow.querySelector(".car-number").textContent;
    selectedCarName.textContent = selectedRow.querySelector(".car-name").textContent;
    selectedCarPrice.textContent = selectedRow.querySelector(".car-price").textContent;

    selectedCarRow.appendChild(selectedCarNumber);
    selectedCarRow.appendChild(selectedCarName);
    selectedCarRow.appendChild(selectedCarPrice);
    return selectedCarRow;
}
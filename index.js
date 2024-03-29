// Generated by https://quicktype.io
var buttons = document.querySelectorAll('.btn');
var url = 'data.json';
// ...
// ...
var displayData = function (timeframe) {
    fetch(url)
        .then(function (response) {
        // Check if the response status is in the range 200-299 (success)
        if (!response.ok) {
            throw new Error("HTTP error! Status: ".concat(response.status));
        }
        // Parse the JSON in the response
        return response.json();
    })
        .then(function (data) {
        var newData = Object.values(data);
        // console.log(data);
        var cardsContainer = document.querySelector('.cards');
        cardsContainer.innerHTML = ''; // Clear previous content
        newData.forEach(function (element) {
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = "<div class=\"inner-card\">\n            <div class=\"status\">\n                <p>".concat(element.title, "</p>\n                <i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"time\">\n                <h2>").concat(element.timeframes[timeframe].current, "hrs</h2>\n                <p>").concat(element.timeframes[timeframe].previousTimeframe, " - ").concat(element.timeframes[timeframe].previous, "hrs</p>\n            </div>\n        </div>");
            cardsContainer.appendChild(card);
        });
    })["catch"](function (error) {
        // Handle errors during the fetch or JSON parsing
        console.error('Fetch error:', error);
    });
};
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        displayData(button.id.replace('-btn', ''));
        buttons.forEach(function (b) {
            b.classList.remove('active');
        });
        button.classList.add('active');
    });
});
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        displayData(button.id.replace('-btn', ''));
        buttons.forEach(function (b) {
            b.classList.remove('active');
        });
        button.classList.add('active');
    });
});
// const text: HTMLCollectionBase = document.querySelectorAll('h1');
// const newText: Element[] = Array.from(text);
// newText.forEach(element => {
//   element.innerHTML = '<h1>' + element.innerHTML + '</h1>';
// });
// console.log(text);
// const elements = document.querySelectorAll('.inner-card');
// const elementsArray = Array.from(elements);
// Using .map
// const elementsModifiedArray = elementsArray.map((element) => {
//   // Do something with each element
//   // console.log(`Element at index :`, element.innerHTML += `<h1>nice</h1>`);
//   return element; // You can modify the element or create a new array with modifications
// });

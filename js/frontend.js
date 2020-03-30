

//UI logic
$(document).ready(function () {
  cards.forEach(function (card) {
    $("#cards").append(`<li>${card}</li>`)
  })
})
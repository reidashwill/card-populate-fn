var cards = []
var suits = ['hearts', 'diamonds', 'clubs', 'spades']
suits.forEach(function (suit) {
  for (var i = 1; i <= 13; i++) {

    if (i === 1) {
      cards.push("ace of " + suit)
    } else if (i === 11) {
      cards.push("jack of " + suit)
    } else if (i === 12) {
      cards.push("queen of " + suit)
    } else if (i === 13) {
      cards.push("king of " + suit)
    } else {
      cards.push(i + " of " + suit)
    }
  }
})
console.log(cards)
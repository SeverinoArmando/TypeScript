var Card;
(function (Card) {
    Card[Card["clubs"] = 0] = "clubs";
    Card[Card["Hearts"] = 1] = "Hearts";
    Card[Card["Spades"] = 2] = "Spades";
    Card[Card["Diamonds"] = 3] = "Diamonds";
})(Card || (Card = {}));
// function cartao(){
//     console.log(Card[0]);
// }
function cartao() {
    var p = 0;
    if (p === Card.clubs) {
        alert("Valor Encontrado: " + Card[p]);
        console.log("O valor encontrado foi o :" + Card[p]);
    }
    else {
        alert('Valor não encontrado!');
    }
}
cartao();

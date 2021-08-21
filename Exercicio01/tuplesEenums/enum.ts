enum Card{clubs,Hearts,Spades,Diamonds}

// function cartao(){
//     console.log(Card[0]);
// }
function cartao(){
    let p = 0;
    if(p ===Card.clubs){
        alert(`Valor Encontrado: ${Card[p]}`)
        console.log(`O valor encontrado foi o :${Card[p]}`)
    }else{
        alert('Valor não encontrado!')
    }
}
cartao();
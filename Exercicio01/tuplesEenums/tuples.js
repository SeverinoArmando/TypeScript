var a = [
    ['url', 'http://localhost'],
    ['port', 8080]
];
function funcao() {
    a.forEach(function (elemento) {
        console.log(elemento[1]);
    });
}
funcao();

let a: [string,any] [] = [
    ['url','http://localhost'],
    ['port',8080]
];

function funcao(){
    a.forEach(elemento =>{
        console.log(elemento[1]);
    });
}
funcao();
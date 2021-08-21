    //  Quando colocamos o sinal de ? numa das variais criadas, estammos a dizer que não é obrigatório inserir o seu valor. Assim a IDE não mostra erro. Caso contrário mostraria um erro a dizer que temos que atribuir um valor a variavel criada
let object1: { name: string, age:number, active?:boolean}={
    name : "José de Alencar",
    age: 68,active: false
}

let obejct2:{[key:string]:any}={
    name:'Stan',
    advog:true
}

function view(){
    object1.name;
    object1.active;
}

view();
console.log(view);
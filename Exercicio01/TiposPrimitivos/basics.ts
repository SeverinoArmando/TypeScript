function test(n1:number, n2: number, mostrar:boolean,frase:string){
    const resp = n1 + n2;
    if(mostrar){
        console.log(frase + resp);
    }else{
        return resp;
    }
}

let lista:string,number=['Maura',]
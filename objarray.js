var boloDeCaneca = {
    titulo: "Bolo de Caneca de Microondas",
    porcao: 1,
    ingredientes: ["01 Caneca 300ml", "01 Ovo", "03 Colheres de Farinha de trigo", "05 Colheres de Leite", 
                    "03 Colheres de açúcar", "02 Colheres de Óleo"]

}
console.log(titulo);
console.log(porcao);
for (i=0; i<ingredientes.length; i++){
    console.log(boloDeCaneca.ingredientes[i])
}

var livro = [
    {
        id:1,
        title: "Harry Potter and the Philosopher’s Stone",
        Autor: "J. K. Rowling",
        lido: true
    },
    {
        id:1,
        title: "Harry Potter and the Chamber of Secrets",
        Autor: "J. K. Rowling",
        lido: true
    },
    {
        id:1,
        title: "Harry Potter and the Prisoner of Azkaban",
        Autor: "J. K. Rowling",
        lido: false
    },
    {
        id:1,
        title: "Harry Potter and the Goblet of Fire",
        Autor: "J. K. Rowling",
        lido: true
    },
    {
        id:1,
        title: "Harry Potter and the Order of Phoenix",
        Autor: "J. K. Rowling",
        lido: false
    },
    {
        id:1,
        title: "Harry Potter and the Half Blood Prince",
        Autor: "J. K. Rowling",
        lido: true
    },
    {
        id:1,
        title: "Harry Potter and the Deathly Hallows",
        Autor: "J. K. Rowling",
        lido: false
    }
];

for (i=0; i<livro.length; i++){
    if(livro[i].lido){
        console.log(livro[i].title);
        console.log(livro[i].Autor);
        console.log("Você já leu esse livro!");

    }else{
    console.log(livro[i].title);
    console.log(livro[i].Autor);
    console.log("Você ainda não leu esse livro!")
    }
}
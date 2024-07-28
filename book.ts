type Book = { title: string; author: string; yearPublished: number; genre: Genre; isAvailable: boolean; }; 

enum Genre {
    Fiction = "Fiction",
    NonFiction = "NonFiction",
    Fantasy = "Fantasy",
    Biography = "Biography",
    ScienceFiction = "ScienceFiction"
}

const library = [
    {
        title: "Najlepsze miasto świata. Warszawa w odbudowie 1944-1949",
        author: "Grzegorz Piątek",
        yearPublished: 2020,
        genre: Genre.NonFiction,
        isAvailable: true,
    },
    {
        title: "Dom. Krótka historia idei",
        author: "Witold Rybczyński",
        yearPublished: 2015,
        genre: Genre.NonFiction,
        isAvailable: true,
    },
    {
        title: "Zasady społeczne projektowania osiedli mieszkaniowych",
        author: "Barbara Brukalska",
        yearPublished: 1948,
        genre: Genre.NonFiction,
        isAvailable: false,
    },
    {
        title: "Zaczyn. O Zofii i Oskarze Hansenach",
        author: "Filip Springer",
        yearPublished: 2013,
        genre: Genre.Biography,
        isAvailable: true,
    },
    {
        title: "Ostatnie życzenie",
        author: "Andrzej Sapkowski",
        yearPublished: 2014,
        genre: Genre.Fantasy,
        isAvailable: true,
    },
    {
        title: "Czas pokaże",
        author: "Jeffrey Archer",
        yearPublished: 2014,
        genre: Genre.Fiction,
        isAvailable: true,
    },
    {
        title: "Paryż",
        author: "Edward Rutherfurd",
        yearPublished: 2014,
        genre: Genre.Fiction,
        isAvailable: true,
    }
]

console.log(library)
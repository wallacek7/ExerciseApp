
export class Game {
   
    Players: User[] = [];
    PlayedQuotes: Quote[] = [];
}
export class User {
    Name: string;
    MyQuotes: string[];
}
export class Quote {
    Text: string;
    PlayerId: string;

}
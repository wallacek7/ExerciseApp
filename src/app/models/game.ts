
export class Game {
   
    Players: User[] = [];
    PlayedQuotes: Quote[] = [];
}
export class User {
    Name: string;
    MyQuotes: string[];
   // MyLogs: string[];
}
export class Quote {
    Text: string;
    PlayerId: string;

}
export class Form {
    Text: string;
}
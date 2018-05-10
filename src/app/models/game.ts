
export class Game {
   
    Players: User[] = [];
    Workouts: Workout[] = [];
}
export class Workout {

    id: number;
    date: string;
    exercise: string;
    duration: string;
    notes: string;
}
export class User {
    Name: string;
    MyQuotes: string[];
   // MyLogs: string[];
}

export class Form {
    Text: string;
}
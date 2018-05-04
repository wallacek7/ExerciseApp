import { Component, OnInit } from '@angular/core';


var quotes = [

'Of course it’s hard. It’s supposed to be hard. It it were easy, everybody would do it. Hard is what makes it great.',
'No pain, no gain. Shut up and train.',
'Your body can stand almost anything. It’s your mind that you have to convince.',
'Success isn’t always about greatness. It’s about consistency. Consistent hard work gains success. Greatness will come.',
'Train insane or remain the same.',
'Definition of a really good workout: when you hate doing it, but you love finishing it.',
'Push yourself because no one else is going to do it for you.',
'Suck it up. And one day you won’t have to suck it in.',
'I will beat her. I will train harder. I will eat cleaner. I know her strengths. I’ve lost to her before but not this time. She is going down. I have the advantage because I know her well. She is the old me.',
'Success starts with self-discipline.',
'Good things come to those who sweat.',
'Motivation is what gets you started. Habit is what keeps you going.',
'A one hour workout is 4% of your day. No excuses.',
'The body achieves what the mind believes.',
'What seems impossible today will one day become your warm-up.',
'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.',
'Someone busier than you is working out right now.',
'Hustle for that muscle.',
'Work hard in silence. Let success be your noise.',
'The hardest lift of all is lifting your butt off the couch.',
'If you still look good at the end of your workout, you didn’t train hard enough.',
'When you feel like quitting think about why you started.',
'A good workout is when you make your dry fit shirt look like false advertising.',
'I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.',
'It comes down to one simple thing: how bad do you want it?',
'Making excuses burns zero calories per hour.',
'Obstacles can’t stop you. Problems can’t stop you. People can’t stop you. Only you can stop you.',
'The only bad workout is the one that didn’t happen.',
'Exercise is like telling your body: you’re gonna hate me for this, but you’ll thank me later.',
'The pain you feel today, will be the strength you feel tomorrow.',
'Don’t limit your challenges, challenge your limits.',
'It’s actually pretty simple. Either you do it, or you don’t.',
'Believe in yourself and all that you are. Know that there is something inside of you that is greater than any obstacle.',
'Nothing truly great ever came from a comfort zone.',
'You don’t have to be extreme, just consistent.',
'Less sugar, more fruit. Less soda, more water. Less driving, more walking. Less worry, more sleep. Less words, more action.',
'The difference between wanting and achieving is discipline.',
'The hard part isn’t getting your body in shape. The hard part is getting your mind in shape.',
'Remember, Rome wasn’t built in a day. Work hard, good results will come.',
'Sticks and stones may break my bones but squats will make me bada**.',
'Wake up. Work out. Look hot. Kick a**.',
'Go the extra mile. It’s never crowded.',
'I may not be there yet, but I’m closer than I was yesterday.',
'Don’t wish for a good body, work for it.',
'Don’t be afraid of being a beginner.',
'First they will laugh. Then they will copy. Don’t give up.',
'Sweat is magic. Cover yourself in it daily to grant your wishes.',
'Sore. The most satisfying pain.',
'70% of people that start a fitness plan quit. Except you. Not this time.'
];



@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {


  constructor() {
    
   }

  ngOnInit() {
  }
  
  newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }
}

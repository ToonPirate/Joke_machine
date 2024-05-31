import readline from 'node:readline/promises'

const programmingJokes = [
    {id: 0, question: "Why don't programmers like nature?", answer: "It has too many bugs."},
    {id: 1, question: "Why did the CSS developer go to therapy?", answer: "To get rid of his margins."},
    {id: 2, question: "How do you comfort a JavaScript developer?", answer: "You console them."},
    {id: 3, question: "Why did the CSS developer leave the restaurant?", answer: "Because it had no class."},
    {id: 4, question: "Why did the JavaScript developer go missing?", answer: "Because he didn't know when to return."},
    {id: 5, question: "Why did the HTML tag go to the party?", answer: "Because it wanted to break the line."},
    {id: 6, question: "Why do JavaScript developers wear glasses?", answer: "Because they don't C#."},
    {id: 7, question: "Why don't programmers like to use inline styles?", answer: "Because they want to be classy."},
    {id: 8, question: "Why did the CSS selector break up with the HTML element?", answer: "It found someone more specific."},
    {id: 9, question: "Why did the CSS developer apply for a job?", answer: "They wanted to get a position."}
];

//Tom array som håller framslumpade skämt
let jokes = []

//Slumpar skämt från programmingJokes och hindrar dubletter
function randomJoke() {
    let joke = programmingJokes[(Math.floor(Math.random() * programmingJokes.length))];
    if (!jokes.includes(joke)){
        jokes.push(joke)
    }
    else{
        randomJoke()
    }
}

//Lägger till och skriver ut antalet skämt som anges av användaren
function numberJokes(input){
    for (let i = 0; i < input; i++){
        randomJoke()
    }
    for (let i = 0; i < jokes.length; i++){
        console.log("\n"+ 'Joke #' + jokes[i].id + "\nQuestion: " + jokes[i].question + "\nAnswer: " + jokes[i].answer)
    }
}

//Davids kod
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = await rl.question('Do you want another joke? (Y/N)')

let input = await rl.question('How many jokes do you want?')
input = Number(input)
if( isNaN(input) ) {
    console.log('Please write a number, try again...')
}
//Kalla på input antal skämt
else{
    numberJokes(input)
}
rl.close()
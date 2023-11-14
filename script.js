const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
let displayResult = document.getElementById('result');
let randomNumber;
let userChoice;
let computerChoice;

function generateComputerChoice() {

	randomNumber = Math.random() * 3 + 1;
	randomNumber = Math.floor(randomNumber);

	if (randomNumber == 1)
	{
		computerChoice = 'Rock';
	}
	if (randomNumber == 2)
	{
		computerChoice = 'Paper';
	}
	if (randomNumber == 3)
	{
		computerChoice = 'Scissor';
	}

	computerChoiceDisplay.innerHTML = computerChoice;
}

function rock() {
	userChoiceDisplay.innerHTML = 'Rock';
	userChoice = 'Rock';
	generateComputerChoice();
	getResults();
}

function paper() {
	userChoiceDisplay.innerHTML = 'Paper';
	userChoice = 'Paper';
	generateComputerChoice();
	getResults();

}

function scissor() {
	userChoiceDisplay.innerHTML = 'Scissor';
	userChoice = 'Scissor';
	generateComputerChoice();
	getResults();
}

function getResults() {
	if (userChoice == 'Rock' && computerChoice == 'Paper')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoice == 'Rock' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoice == 'Rock' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'Draw!';
	}

	if (userChoice == 'Paper' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoice == 'Paper' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoice == 'Paper' && computerChoice == 'Paper')
	{
		displayResult.innerHTML = 'Draw';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Paper')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'Draw!';
	}
}
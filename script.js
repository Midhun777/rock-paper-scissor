const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
let displayResult = document.getElementById('result');
let randomNumber;
let userChoice;
let computerChoice;
var imageSrc = document.getElementsByClassName("userImage")[0];
var computerImageOut = document.getElementsByClassName("computerImage")[0];
var userImageOut = imageSrc;
var computerScore = document.getElementById('computer-score');
var userScore = document.getElementById('user-score');
var u=0;
var c=0;
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
	getImage();

	computerChoiceDisplay.innerHTML = computerChoice;
}

function rock() {
	userChoiceDisplay.innerHTML = 'Rock';
	userChoice = 'Rock';
	generateComputerChoice();
	getResults();
	getImage();

}

function paper() {
	userChoiceDisplay.innerHTML = 'Paper';
	userChoice = 'Paper';
	generateComputerChoice();
	getResults();
	getImage();

}

function scissor() {
	userChoiceDisplay.innerHTML = 'Scissor';
	userChoice = 'Scissor';
	generateComputerChoice();
	getResults();
	getImage();

}

function getResults() {
	if (userChoice == computerChoice)
	{
		displayResult.innerHTML = 'Draw!';
	}

	if (userChoice == 'Rock' && computerChoice == 'Paper')
	{
		displayResult.innerHTML = 'You Lose!';
		computerScore.innerHTML = c;
		c++;
	}

	if (userChoice == 'Rock' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'You Won!';
		userScore.innerHTML = u;
		u++;
	}

	if (userChoice == 'Paper' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'You Lose!';
		computerScore.innerHTML = c;
		c++;
	}

	if (userChoice == 'Paper' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'You Won!';
		userScore.innerHTML = u;
		u++;
	}

	if (userChoice == 'Scissor' && computerChoice == 'Paper')
	{
		displayResult.innerHTML = 'You Won!';
		userScore.innerHTML = u;
		u++;
	}

	if (userChoice == 'Scissor' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'You Lose!';
		computerScore.innerHTML = c;
		c++;
	}

}

function getImage() {
	let userSrc = `./imgs/${userChoice.toLowerCase()}.png`
	let compSrc = `./imgs/${computerChoice.toLowerCase()}.png`
	userImageOut.src = userSrc;
	computerImageOut.src = compSrc;
}

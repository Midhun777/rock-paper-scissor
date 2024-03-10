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
var userDiv = document.getElementById('user-div');
var computerDiv = document.getElementById('computer-div');
var u = 0;
var c = 0;

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
		userDiv.style.background = '#F2EBE1DE';
		computerDiv.style.background = '#F2EBE1DE';
	}

	if (userChoice == 'Rock' && computerChoice == 'Paper')
	{
		c++;
		computerScore.innerHTML = c;
		displayResult.innerHTML = 'You Lose!';
		userDiv.style.background = '#EF5350DE';
		computerDiv.style.background = '#26A69ADE';
	}

	if (userChoice == 'Rock' && computerChoice == 'Scissor')
	{
		userScore.innerHTML = u;
//		u++;
			u=u+7;

		displayResult.innerHTML = 'You Won!';
		userDiv.style.background = '#26A69ADE';
		computerDiv.style.background = '#EF5350DE';
	}

	if (userChoice == 'Paper' && computerChoice == 'Scissor')
	{
		c++;
		computerScore.innerHTML = c;
		displayResult.innerHTML = 'You Lose!';
		userDiv.style.background = '#EF5350DE';
		computerDiv.style.background = '#26A69ADE';
	}

	if (userChoice == 'Paper' && computerChoice == 'Rock')
	{
//		u++;
			u=u+7;
		userScore.innerHTML = u;
		displayResult.innerHTML = 'You Won!';
		userDiv.style.background = '#26A69ADE';
		computerDiv.style.background = '#EF5350DE';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Paper')
	{
		u=u+7;
		userScore.innerHTML = u;
		displayResult.innerHTML = 'You Won!';
		userDiv.style.background = '#26A69ADE';
		computerDiv.style.background = '#EF5350DE';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Rock')
	{
		c++;
		computerScore.innerHTML = c;
		displayResult.innerHTML = 'You Lose!';
		userDiv.style.background = '#EF5350DE';
		computerDiv.style.background = '#26A69ADE';
	}

}

function getImage() {
	let userSrc = `./imgs/${userChoice.toLowerCase()}.png`
	let compSrc = `./imgs/${computerChoice.toLowerCase()}.png`
	userImageOut.src = userSrc;
	computerImageOut.src = compSrc;
}


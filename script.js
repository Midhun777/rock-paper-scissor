const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
let displayResult = document.getElementById('result');
let randomNumber;
let userChoice;
let computerChoice;
var userImageOut = document.getElementById("userImage");
var computerImageOut = document.getElementById("computerImage");
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
	}

	if (userChoice == 'Rock' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoice == 'Paper' && computerChoice == 'Scissor')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoice == 'Paper' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Paper')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoice == 'Scissor' && computerChoice == 'Rock')
	{
		displayResult.innerHTML = 'You Lose!';
	}
}

function getImage() {

	if (userChoice == 'Rock' || computerChoice == 'Rock')
	{
		userImageOut.src = "/imgs/rock.png";
		computerImageOut.src = "/imgs/rock.png";

	}

	if (userChoice == 'Paper' || computerChoice == 'Paper')
	{
		userImageOut.src = "/imgs/paper.png";
		computerImageOut.src = "/imgs/paper.png";
	}

	if (userChoice == 'Scissor' || computerChoice == 'Scissor')
	{
		userImageOut.src = "/imgs/scissor.png";
		computerImageOut.src = "/imgs/scissor.png";
	}
}
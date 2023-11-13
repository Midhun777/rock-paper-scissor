const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const displayResult = document.getElementById('result');
let randomNumber;

function rock() {

	randomNumber = Math.random() * 3 + 1;
	randomNumber = Math.floor(randomNumber);

	if (randomNumber == 1)
	{
		computerChoiceDisplay.innerHTML = 'Rock';
	}
	if (randomNumber == 2)
	{
		computerChoiceDisplay.innerHTML = 'Paper';
	}
	if (randomNumber == 3)
	{
		computerChoiceDisplay.innerHTML = 'Scissor';
	}

	userChoiceDisplay.innerHTML = 'Rock';
}

function paper() {

	randomNumber = Math.random() * 3 + 1;
	randomNumber = Math.floor(randomNumber);

	if (randomNumber == 1)
	{
		computerChoiceDisplay.innerHTML = 'Rock';
	}
	if (randomNumber == 2)
	{
		computerChoiceDisplay.innerHTML = 'Paper';
	}
	if (randomNumber == 3)
	{
		computerChoiceDisplay.innerHTML = 'Scissor';
	}

	userChoiceDisplay.innerHTML = 'Paper';
}

function scissor() {

	randomNumber = Math.random() * 3 + 1;
	randomNumber = Math.floor(randomNumber);

	if (randomNumber == 1)
	{
		computerChoiceDisplay.innerHTML = 'Rock';
	}
	if (randomNumber == 2)
	{
		computerChoiceDisplay.innerHTML = 'Paper';
	}
	if (randomNumber == 3)
	{
		computerChoiceDisplay.innerHTML = 'Scissor';
	}

	userChoiceDisplay.innerHTML = 'Scissor';
}

function gameResult() {

	if (userChoiceDisplay == 'Rock' && computerChoiceDisplay == 'Paper')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoiceDisplay == 'Rock' && computerChoiceDisplay == 'Scissor')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoiceDisplay == 'Rock' && computerChoiceDisplay == 'Rock')
	{
		displayResult.innerHTML = 'Draw!';
	}

	if (userChoiceDisplay == 'Paper' && computerChoiceDisplay == 'Scissor')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoiceDisplay == 'Paper' && computerChoiceDisplay == 'Rock')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoiceDisplay == 'Paper' && computerChoiceDisplay == 'Paper')
	{
		displayResult.innerHTML = 'Draw';
	}

	if (userChoiceDisplay == 'Scissor' && computerChoiceDisplay == 'Paper')
	{
		displayResult.innerHTML = 'You Won!';
	}

	if (userChoiceDisplay == 'Scissor' && computerChoiceDisplay == 'Rock')
	{
		displayResult.innerHTML = 'You Lose!';
	}

	if (userChoiceDisplay == 'Scissor' && computerChoiceDisplay == 'Scissor')
	{
		displayResult.innerHTML = 'Draw!';
	}
}

//something wrong with the below code

/* function rock() {
	userChoiceDisplay.innerHTML = 'Rock';
	computerChoice();
	gameResult();
}

function paper() {
	userChoiceDisplay.innerHTML = 'Paper';
	computerChoice();
	gameResult();
}

function scissor() {
	userChoiceDisplay.innerHTML = 'Scissor';
	computerChoice();
	gameResult();
}

function computerChoice() {
	randomNumber = Math.random() * 3 + 1;
	randomNumber = Math.floor(randomNumber);

	if (randomNumber == 1)
	{
		computerChoiceDisplay.innerHTML = 'Rock';
	}
	if (randomNumber == 2)
	{
		computerChoiceDisplay.innerHTML = 'Paper';
	}
	if (randomNumber == 3)
	{
		computerChoiceDisplay.innerHTML = 'Scissor';
	}

}

*/
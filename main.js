const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const result = document.getElementById('result');
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


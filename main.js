const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const result = document.getElementById('result');
let randomNumber;

randomNumber = Math.random() * 3 + 1;
randomNumber = Math.floor(randomNumber);

if (randomNumber == 1)
{
	userChoiceDisplay.innerHTML = 'rock';
}
if (randomNumber == 2)
{
	userChoiceDisplay.innerHTML = 'paper';
}
if (randomNumber == 3)
{
	userChoiceDisplay.innerHTML = 'scissor';
}
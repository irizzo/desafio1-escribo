const { getDivisiblePredecessors, sumNumbersInArray } = require('./helpers');

function sumDivisiblePredecessors(startNumber) {
	// verificar se o número é um inteiro e positivo | check if number is an integer and positive 
	if (!Number.isInteger(startNumber) || startNumber < 0) {
		console.log('informed number is not an integer');
		return undefined
	}

	if (startNumber <= 3) {
		// se o número é menor ou igual a 3, não há antecessores divisíveis por 3 ou 5 |
		// if the number is less then or equal to 3, there are no predecessors divisible by 3 neither 5
		return 0;
	}

	if (startNumber <= 5) {
		// se o número é menor ou igual a 5, há apenas o número 3 que se satisfaz as condições |
		// if the number is less then or equal to 5, there's only the number 3 that satisfies the conditions
		return 3;
	}

	const divisiblePredecessors = getDivisiblePredecessors(startNumber);

	const divisiblePredecessorsSum = sumNumbersInArray(divisiblePredecessors);

	return divisiblePredecessorsSum;
}

const result = sumDivisiblePredecessors(5672);
console.log(`The sum of all divisible predecessors is = ${result}`);
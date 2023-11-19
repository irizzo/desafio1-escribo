// Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

// verificar se um número é divisível por 3
function isDivisibleByThree(number) {
	const result = number % 3;

	if (result === 0) {
		return true;
	}

	return false
}

// verificar se um número é divisível por 5
function isDivisibleByFive(number) {
	const result = number % 5;

	if (result === 0) {
		return true;
	}

	return false
}

// pergar todos os antecessores de um número, que sejam divisíveis por 3 ou 5
function getDivisiblePredecessors(number) {
	const divisiblePredecessors = [];
	let candidate = number - 1; // começar a verificar pelo primeiro antecessor

	for (candidate; candidate > 2; candidate--) { // é necessário verificar apenas se for maior que 2
		if(isDivisibleByThree(candidate) || isDivisibleByFive(candidate)) {
			divisiblePredecessors.push(candidate);
		}
	}

	return divisiblePredecessors;
}

function sumInArray(arr) {
	let sum = 0;

	arr.forEach(n => {
		sum += n;
	});

	return sum;
}

function mainFn(startNumber) {
	// verificar se o número é um inteiro
	if (!Number.isInteger(startNumber)) {
		return undefined
	}

	if (!(startNumber > 3)) {
		// se o número é menor ou igual a 3, não há antecessores divisíveis por 3 ou 5
		return 0;
	}

	const divisiblePredecessors = getDivisiblePredecessors(startNumber);
	console.log(`divisiblePredecessors = ${divisiblePredecessors}`);

	const divisiblePredecessorsSum = sumInArray(divisiblePredecessors);
	console.log(`divisiblePredecessorsSum = ${divisiblePredecessorsSum}`);
}

mainFn(10);
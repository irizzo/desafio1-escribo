// verificar se um número é divisível por 3 | verify if number is divisible by 3
function isDivisibleByThree(number) {
	const result = number % 3;

	if (result === 0) {
		return true;
	}

	return false
}

// verificar se um número é divisível por 5 | verify if number is divisible by 5
function isDivisibleByFive(number) {
	const result = number % 5;

	if (result === 0) {
		return true;
	}

	return false
}

// pergar todos os antecessores de um número, que sejam divisíveis por 3 ou 5 | get a number's predecessors that are divisible by 3 or 5
function getDivisiblePredecessors(number) {
	const divisiblePredecessors = [];
	let candidate = number - 1; // começar a verificar pelo primeiro antecessor | start from the first predecessor

	// é necessário verificar apenas até três pois 2 e 1 não são divisíveis por 3 nem 5, e 0 não acrescenta à soma | 
	// it's only necessary to check up until three, because 2 and 1 are not divisible by 3 neither 5, and 0 doesn't add up to the sum
	for (candidate; candidate > 2; candidate--) { 
		if (isDivisibleByThree(candidate) || isDivisibleByFive(candidate)) {
			divisiblePredecessors.push(candidate);
		}
	}

	return divisiblePredecessors;
}

function sumNumbersInArray(arr) {
	let sum = 0;

	arr.forEach(n => {
		sum += n;
	});

	return sum;
}

module.exports = {
	getDivisiblePredecessors,
	sumNumbersInArray
}
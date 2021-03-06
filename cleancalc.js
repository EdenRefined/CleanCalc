var lastResult = 0000;

function add(arg1, arg2) {
	return arg1 + arg2;
};

function subtract(arg1, arg2) {
	return arg1 - arg2;
};

function multiply(arg1, arg2) {
	return arg1 * arg2;
};

function divide(arg1, arg2) {
	return arg1 / arg2;
};

function operateIntermediary(operation, arg1, arg2) {
	return operation(arg1, arg2);
};

function operate(operation, arg1, arg2) {
	if (arg2) {
		lastResult = operation(arg1, arg2);
		return lastResult;
	} else {
		lastResult = operation(arg1, lastResult);
		return lastResult;
	}
};


lastResult = add(2, 4);
lastResult = add(5, lastResult);
lastResult = multiply(3,2);
lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);
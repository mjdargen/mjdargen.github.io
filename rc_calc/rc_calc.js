/* --------------------------------------------------------------- */
/*                   r/c calculator scripting                      */
/* ----------------------------------------------------------------*/
var closest_val; // closest value so far
var closest_diff = 1000000.00; // diff of val and target
var closest = []; // array detailing values of components
var ser_par_config = []; // array detailing serial/parallel

var outputStr = "";

function calculatorClick() {
	
	var target = 12345;
	var numComp = 3;

	var compVals = [];
	compVals[0] = "";
	var i = 0;

	/* add error checking */

	var compValsStr = "10,15,22,33,47,68,100,150,220,330,470,680,1000,1500,2200,3300,4700,6800,10000,15000,22000,33000,47000,68000,100000,150000,220000,330000,470000,680000";

	while (compValsStr.indexOf(",") != -1) {
		var comma = compValsStr.indexOf(",");
		var newInt = parseInt(compValsStr.substring(0,comma));
		compValsStr = compValsStr.substring(comma+1,compValsStr.length);
		compVals[i] = newInt;
		i++;
	}
	compVals[i] = parseInt(compValsStr);


	resistor(target, numComp, compVals);
		/*var mystring = compVals.toString();*/

	calcOutput.innerHTML = "hello <br>" + outputStr + "hello <br>" + compVals.toString();

}

// function that retrieves and prints the best resistor combination
// takes the target value and number of resistors allowed as an argument
function resistor(target, numComp, compVals) {
	// common resistance values
	var num_res = compVals.length;

	// run through all possible number of components
	for (var i=1; i<=numComp; i++) {
		var thing = [];
		resCombination(compVals, num_res, i, 0, thing, target);
	}

	// print results
	outputStr = "Closest Value: " + closest_val + " Ohms <br>";
	outputStr += "Difference: " + closest_diff + " Ohms <br>";
	outputStr += "Resistor Configuration: ";
	for (var i=0; i<numComp; i++) {
		if (closest[i] != 0) {
			outputStr += "R" + i + "=" + closest[i] + " Ohms ";
			if (closest[i+1] != 0) {
				if (ser_par_config[i+1]) outputStr += "|| ";
				else outputStr += "+ ";
			}
		}
		else break;
	}
}

/*
Calculates the best combination of resistors to achieve a target value.
Based on a given array of resistor values and a specified allowable # of resistors.

res[] - input array of resistor values
num_res	- size of input array of resistor values - num_res
r	- number of resistors allowed - num_comb
index - index of comb[]
comb[] - array of current combination
i - index of current element in res[]
target - the target value

No return value - passes current best combination to global values
*/
function resCombination(res, num_res, num_comb, index, comb, target) {
	// current combination is complete
	if (index == num_comb) {
		var ser_par_size = Math.pow(2,num_comb); // 2^(number of components)
		var ser_par = []; // bool array specifying serial or parallel for each component
		var calc; // calculated equivalent resistance value

		// step through every possible series/parallel config of current combination
		for (var j=0; j<ser_par_size; j++) {
			calc = 0.0;
			// creates a boolean array of 0s & 1s for all possible combinations
			for (var k=0; k<num_comb; k++) {
				ser_par[k] = (j >> k) & 1;
			}
			// do the calculations for the combination based on series/parallel combo
			for (var k=0; k<num_comb; k++) {
				// first number, just add
				if (k==0) calc = comb[k];
				// zero means series, add resistance values
				else if (!ser_par[k]) calc += comb[k];
				// one means parallel, inverse of the sum of reciprocals
				else if (ser_par[k]) calc = (calc*comb[k])/(calc+comb[k]);
			}

			// check to see if difference is less than previous best
			if (Math.abs(calc - target) < closest_diff) {
				// it is less, so update global values
				closest_val = calc;
				closest_diff = Math.abs(calc - target);
				// clear to zero
				for (var k=0; k<numComp; k++) {
					closest[k] = 0;
				}
				// update closest value & series/parallel arrays
				for (var k=0; k<num_comb; k++) {
					closest[k] = comb[k];
					ser_par_config[k] = ser_par[k];
				}
			}
		}
		return 0;
	}

	// replace index with all possible elements. The condition
	// "end-i+1 >= r-index" makes sure that including one element
	// at index will make a combination with remaining elements
	// at remaining positions
	for (var i=0; i<=num_res && num_res-i+1 >= num_comb-index; i++) {
		comb[index] = res[i];
		//combinationUtil(arr, data, i+1, end, index+1, r);
		resCombination(res, num_res, num_comb, index+1, comb, target);
	}
}

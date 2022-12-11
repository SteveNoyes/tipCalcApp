// Variable List
// - bill
let bill = 0;
// - selectedTipPercentage
let selectedTipPercentage = 0;
// - numberOfPeople
let numberOfPeople = 0;
// - tipPerPerson

// - totalPerPerson
function five() {
  let bill = document.getElementById('billTotal').value;
  document.getElementById('five').style.backgroundColor = 'red';

  let testResult = (5 / 100) * bill;
  let sum = Number(testResult) + Number(bill);

  // update tipPerPerson, default to one person
  document.getElementById('tipPerPerson').innerHTML = testResult;
  // update totalPerPerson, default to one person
  document.getElementById('totalPerPerson').innerHTML = sum;
  // check if number of people is 0

}

// Client enters bill total
  // Test for how many decimal places, round to two places

// Selects tip percentage 

// Enters number of people 

// bill x percentage = total tip amount

// bill + tip = total 

// tip / number of people = individual tip amount

// total / number of people = individual total amount (including tip)

// reset button sets bill and number of people to zero
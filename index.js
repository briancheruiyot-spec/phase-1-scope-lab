// Write your solution in this file!
// Global scope
var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone';
  leastFavoriteCustomer = 'new person'; // This will throw an error
}

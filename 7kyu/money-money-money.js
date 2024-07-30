// ❔DESCRIPTION

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// ☑️ SOLUTION

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  let profit = 0;
  let taxs = 0;
  let sum = 0;

  while (principal < desired) {
    profit = principal * interest;
    taxs = profit * tax;
    sum = principal + profit - taxs;
    principal = sum;

    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.01625, 0.18, 1200));

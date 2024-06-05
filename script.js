/**
 * Function name: multiplication
 * Parameters: num1, num2 (2 integers)
 * Return: the product of num1 and num2
 */

const multiplication = (num1, num2) => {
  return num1 * num2;
};

/**
 * Testing multiplication
 * What i expect:
 *  Pass 2 integers as Parameters
 *  Multiply the 2 integers and return the solution
 *  Return a single integer
 *
 */

// The expected input of 2 integers
console.log("Passing 2 and 3 as parameters:");
console.log(multiplication(2, 3));

// unexpected inputs:
// Testing 1 integer and 1 string parameter
console.log('Passing 2 and "a" as parameters:');
console.log(multiplication(2, "a"));

// only 1 integer input
console.log("Passing 2 as a parameter:");
console.log(multiplication(2));

// no input
console.log("Passing no parameters:");
console.log(multiplication());

// 3 inputs rather than the 2 inputs (i expect an error)
console.log("Passing 2, 3, and 4 as parameters:");
console.log(multiplication(2, 3, 4));

/**
 * Function name: concatOdds
 * Parameters: nums1, nums2 (2 integer arrays)
 * Return: a single array that only contains the odd numbers from both arrays sorted in ascending order
 */
const concatOdds = (nums1, nums2) => {
  let oddsArr = [];
    oddsArr = oddsArr.concat(
    nums1.filter((element) => element % 2 != 0),
    nums2.filter((element) => element % 2 != 0)
  );
  oddsArr.sort((a, b) => {
    if(a < b) {
      return -1;
    }
    if(a > b){
      return 1;
    }
    return 0;
  });
  return oddsArr;
};

/**
 * Testing concatOdds
 * What i expect:
 *  Pass 2 integer arrays as Parameters
 *  Return a sorted array of all the odd numbers from both arrays
 */

//the expected input of 2 integer arrays
console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]));

// unexpected inputs:
//unexpected input of 1 integer array and 1 string array
console.log(concatOdds([3, 2, 1], ["asdf", "adfs", "asdf"]));
//it can still combine and sort arrays

//unexpected input of only 1 integer array
//console.log(concatOdds([3, 2, 1]));
//throws an error of "num2 is undefined"

/**
 * A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest. 
 * When cart is empty:
 *  Show "empty cart screen" and not allow checkout
 * Each step of checkout:
 *  1. Show cart and two buttons "Continue Shopping" and "Go to checkout"
 *  2. If user clicks "Go to checkout" they get redirected to a page asking "Checkout as existing user" or "checkout as guest"
 *  3. If user clicks "Checkout as existing user", then they are asked to provide login details (username, password)
 *  4. Otherwise if user clicks "Checkout as guest", then they are asked to provide necessary information for the purchase
 *  
 * What behaviors does this prompt miss or gloss over?
 *  This prompt doesn't allow the user to register an account it only gives 2 options: existing user, or guest checkout
 */


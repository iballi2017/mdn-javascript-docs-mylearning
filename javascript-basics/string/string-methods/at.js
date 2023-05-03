import { displayContent } from "../../app-functions.js";

export const At = () => {
  /**The at() method takes an integer value and returns a new String consisting of the
   * single UTF-16 code unit located at the specified offset. This method allows for positive
   * and negative integers. Negative integers count back from the last string character.
   *
   *
   *
   * */
  const sentence = "The quick brown fox jumps over the lazy dog.";

  let index = 5;
  console.log(
    `Using an index of ${index} the character returned is ${sentence.at(index)}`
  );
  // Expected output: "Using an index of 5 the character returned is u"
  displayContent(
    "String.prototype.at",
    `Using an index of ${index} the character returned is ${sentence.at(
      index
    )}`,
    ""
  );

  index = -4;
  console.log(
    `Using an index of ${index} the character returned is ${sentence.at(index)}`
  );
  // Expected output: "Using an index of -4 the character returned is d"

  displayContent(
    "String.prototype.at",
    `Using an index of ${index} the character returned is ${sentence.at(
      index
    )}`,
    ""
  );

  /**
   * Syntax*
        at(index)

    *Parameters*
        index

        The index (position) of the string character to be returned. Supports relative indexing from the end 
        of the string when passed a negative index; i.e. if a negative number is used, the character returned 
        will be found by counting back from the end of the string.

    *Return value*
        A String consisting of the single UTF-16 code unit located at the specified position. Returns undefined 
        if the given index can not be found.

        
   */

  // Examples
  /**
    *Return the last character of a string*
    The following example provides a function which returns the last character found in a specified string. */
  // A function which returns the last character of a given string
  function returnLast(arr) {
    return arr.at(-1);
  }

  let invoiceRef = "myinvoice01";

  console.log(returnLast(invoiceRef)); // '1'

  invoiceRef = "myinvoice02";

  console.log(returnLast(invoiceRef)); // '2'

  /**
    *Comparing methods*
        Here we compare different ways to select the penultimate (last but one) character of a String. Whilst all 
        below methods are valid, it highlights the succinctness and readability of the at() method. */
  const myString = "Every green bus drives fast.";

  // Using length property and charAt() method
  const lengthWay = myString.charAt(myString.length - 2);
  console.log(lengthWay); // 't'
  displayContent("String.prototype.at", lengthWay, "lengthWay");

  // Using slice() method
  const sliceWay = myString.slice(-2, -1);
  console.log(sliceWay); // 't'
  displayContent("String.prototype.at", sliceWay, "sliceWay");

  // Using at() method
  const atWay = myString.at(-2);
  console.log(atWay); // 't'
  displayContent("String.prototype.at", atWay, "atWay");
};

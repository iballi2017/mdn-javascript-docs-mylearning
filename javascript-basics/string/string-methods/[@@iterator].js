import { displayContent } from "../../app-functions.js";

export const stringPrototypeInterator = () => {
  /**The [@@iterator]() method of String values implements the iterable protocol and allows strings to be consumed
   * by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a string iterator
   * object that yields the Unicode code points of the string value as individual strings.
   *
   * */

  const str = "The quick red fox jumped over the lazy dog's back.";

  const iterator = str[Symbol.iterator]();
  let theChar = iterator.next();

  while (!theChar.done && theChar.value !== " ") {
    console.log(theChar.value);

    displayContent(
      "String.prototype[@@iterator]()",
      theChar.value,
      "theChar.value"
    );

    theChar = iterator.next();
    // Expected output: "T"
    //                  "h"
    //                  "e"
  }

  /**Syntax: 
        string[Symbol.iterator]()
   * 
   * Return value:
        A new iterable iterator object that yields the Unicode code points of the string value as individual strings.

   **Description:
        Strings are iterated by Unicode code points. This means grapheme clusters will be split, but surrogate pairs will be preserved.

        // "Backhand Index Pointing Right: Dark Skin Tone"
        [..."👉🏿"]; // ['👉', '🏿']
        // splits into the basic "Backhand Index Pointing Right" emoji and
        // the "Dark skin tone" emoji

        // "Family: Man, Boy"
        [..."👨‍👦"]; // [ '👨', '‍', '👦' ]
        // splits into the "Man" and "Boy" emoji, joined by a ZWJ

   */

  /**Examples
    Iteration using for...of loop
    Note that you seldom need to call this method directly. The existence of the @@iterator method makes strings iterable,
    and iterating syntaxes like the for...of loop automatically calls this method to obtain the iterator to loop over.

    */
  //    Iteration using for...of loop
  const str2 = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";
  displayContent("String.prototype[@@iterator]()", "", ">>>Iteration using for...of loop");
  for (const v of str2) {
    console.log(v);
    displayContent("String.prototype[@@iterator]()", v);
  }
  // "A"
  // "\uD835\uDC68"
  // "B"
  // "\uD835\uDC69"
  // "C"
  // "\uD835\uDC6A"



//   Manually hand-rolling the iterator
  displayContent("String.prototype[@@iterator]()", "", ">>>Manually hand-rolling the iterator");

  const name = "Hello world!";
  let x = name[Symbol.iterator]();
//   console.log(x.next().value);
  displayContent(
    "String.prototype[@@iterator]()",
    x.next().value,
    "x.next().value"
  );
  displayContent(
    "String.prototype[@@iterator]()",
    x.next().value,
    "x.next().value"
  );
  displayContent(
    "String.prototype[@@iterator]()",
    x.next().value,
    "x.next().value"
  );
};

import { displayContent } from "../../app-functions.js";

export const CharAt = () => {
  /**The charAt() method of String values returns a new string consisting of the single
   * UTF-16 code unit located at the specified offset into the string. */

  const sentence = "The quick brown fox jumps over the lazy dog.";
  const index = 4;

  const result = `The character at index ${index} is ${sentence.charAt(index)}`;
  console.log(result);
  // Expected output: "The character at index 4 is q"
  displayContent("String.prototype.charAt", result, sentence);

  /**
   *Syntax*
        charAt(index)

    *Parameters*
        index

        An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index 
        is provided, the default is 0, so the first character of str is returned.

    *Return value*
        A string representing the character (exactly one UTF-16 code unit) at the specified index. If index 
        is out of range, charAt() returns an empty string.

        */

  /**Description
            Characters in a string are indexed from left to right. The index of the first character is 0, and 
            the index of the last character—in a string called stringName is stringName.length - 1. If the index 
            you supply is out of this range, JavaScript returns an empty string.

            If no index is provided to charAt(), the default is 0.
    */

  /**Examples */
  //##### Displaying characters at different locations in a string
  // The following example displays characters at different locations in the string "Brave new world":
  const anyString = "Brave new world";
  console.log(`The character at index 0   is '${anyString.charAt()}'`);
  // No index was provided, used 0 as default

  console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
  console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
  console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
  console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
  console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
  console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

  displayContent(
    "String.prototype.charAt",
    anyString.charAt(0),
    "The character at index 0   is "
  );
  displayContent(
    "String.prototype.charAt",
    anyString.charAt(1),
    "The character at index 1   is "
  );
  displayContent(
    "String.prototype.charAt",
    anyString.charAt(2),
    "The character at index 2   is "
  );
  displayContent(
    "String.prototype.charAt",
    anyString.charAt(3),
    "The character at index 3   is "
  );
  displayContent(
    "String.prototype.charAt",
    anyString.charAt(4),
    "The character at index 4   is "
  );
  displayContent(
    "String.prototype.charAt",
    anyString.charAt(999),
    "The character at index 999   is "
  );

  /**These lines display the following:

The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
 */

  //##### Getting whole characters
  /*The following provides a means of ensuring that going through a string loop always provides 
  a whole character, even if the string contains characters that are not in the Basic Multi-lingual Plane.
  */
  const str = "A\uD87E\uDC04Z"; // We could also use a non-BMP character directly
  for (let i = 0; i < str.length; i++) {
    let chr;
    [chr, i] = getWholeCharAndI(str, i);

    // Adapt this line at the top of each loop, passing in the whole string and
    // the current iteration and returning an array with the individual character
    // and 'i' value (only changed if a surrogate pair)

    console.log(chr);
  }

  function getWholeCharAndI(str, i) {
    const code = str.charCodeAt(i);

    if (Number.isNaN(code)) {
      return ""; // Position not found
    }
    if (code < 0xd800 || code > 0xdfff) {
      return [str.charAt(i), i]; // Normal character, keeping 'i' the same
    }

    // High surrogate (could change last hex to 0xDB7F to treat high private
    // surrogates as single characters)
    if (0xd800 <= code && code <= 0xdbff) {
      if (str.length <= i + 1) {
        throw new Error("High surrogate without following low surrogate");
      }
      const next = str.charCodeAt(i + 1);
      if (next < 0xdc00 || next > 0xdfff) {
        throw new Error("High surrogate without following low surrogate");
      }
      return [str.charAt(i) + str.charAt(i + 1), i + 1];
    }

    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
    if (i === 0) {
      throw new Error("Low surrogate without preceding high surrogate");
    }

    const prev = str.charCodeAt(i - 1);

    // (could change last hex to 0xDB7F to treat high private surrogates
    // as single characters)
    if (prev < 0xd800 || prev > 0xdbff) {
      throw new Error("Low surrogate without preceding high surrogate");
    }

    // Return the next character instead (and increment)
    return [str.charAt(i + 1), i + 1];
  }

  // ### Fixing charAt() to support non-Basic-Multilingual-Plane (BMP) characters
  /**While the previous example may be more useful for programs that must support non-BMP characters (since
   * it does not require the caller to know where any non-BMP character might appear), in the event that one
   * does wish, in choosing a character by index, to treat the surrogate pairs within a string as the single
   * characters they represent, one can use the following: */

  function fixedCharAt(str, idx) {
    str = String(str);

    const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while (surrogatePairs.exec(str) !== null) {
      const lastIdx = surrogatePairs.lastIndex;
      if (lastIdx - 2 < idx) {
        idx++;
      } else {
        break;
      }
    }

    if (idx >= str.length || idx < 0) {
      return "";
    }

    let ret = str.charAt(idx);

    if (
      /[\uD800-\uDBFF]/.test(ret) &&
      /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))
    ) {
      // Go one further, since one of the "characters" is part of a surrogate pair
      ret += str.charAt(idx + 1);
    }
    return ret;
  }
};

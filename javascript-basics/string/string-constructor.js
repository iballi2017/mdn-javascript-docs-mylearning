import { displayContent } from "../app-functions.js";

export const StringConstructor = () => {
  /**The String() constructor creates String objects. When called as a function, it returns primitive values of type String. 
   * 
    *Syntax*
    new String(thing)
        String(thing)

    *Note:*
    String() can be called with or without new, but with different effects. See Return value.

    *Parameters*
        thing
    i.e Anything to be converted to a string.

    *Return value*
    When String is called as a constructor (with new), it creates a String object, which is not a primitive.

    When String is called as a function, it coerces the parameter to a string primitive.
    Symbol values would be converted to "Symbol(description)", where description is the description of the Symbol,
    instead of throwing.

    *Warning*: You should rarely find yourself using String as a constructor.

  */

  /**Examples
   * String constructor and String function: String function and String constructor produce different results:*/
  const a = new String("Hello world"); // a === "Hello world" is false
  const b = String("Hello world"); // b === "Hello world" is true

  
  a instanceof String; // is true
  console.log(a instanceof String);
  displayContent(
    "string-constructor",
    a instanceof String,
    "a instanceof String"
  );
  b instanceof String; // is false
  console.log(b instanceof String);
  displayContent(
    "string-constructor",
    b instanceof String,
    "b instanceof String"
  );
  typeof a; // "object"
  console.log(typeof a);
  displayContent("string-constructor", typeof a, "typeof a");
  typeof b; // "string"
  console.log(typeof b);
  displayContent("string-constructor", typeof b, "typeof b");
};

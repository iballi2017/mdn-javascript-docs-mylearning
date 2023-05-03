import { displayContent } from "../app-functions.js";

export const StringProperties = () => {
  /**The length data property of a String value contains the length of the string in UTF-16 code units. */

  const str = "Life, the universe and everything. Answer:";

  console.log(`${str} ${str.length}`);
  // Expected output: "Life, the universe and everything. Answer: 42"

  displayContent(
    "string-properties",
    `${str} ${str.length}`,
    "`${str} ${str.length}`"
  );
};

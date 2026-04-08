/* Do not touch this file since it contains source files :(
   because... oh ok bruh */
const js2 = {
  set consider(text) {
    console.log("Considered: " + text);
  },
  set numberDouble(num) {
    console.log("Doubled Number" + num + "= " + (num + 10));
  },
  create(ii, text) {
    if (ii === "project") {
      console.log("Project created! Name: " + text)
    } else {
      null;
    }
  },
  set term(text) {
    console.log("Terminated process: " + text);
  if (text.toLowerCase() === "js2") {
    console.log("Failed to terminate process: js2.\nAn app, js2, is working on this file, so it's process cannot be terminated.");
  }
 }
};

js2.consider = "Ate a heavy plate of Makarana in 1 second";
js2.numberDouble = 456;
js2.create("project", "Huh");
js2.term = "js2";

// NEW: You can use the API now!
export default js2

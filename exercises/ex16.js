/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  function applyCasing(input, caze) {
    if (caze === "camel") {
      const arr = input.split(" ")
    
      for (let i = 1; i < arr.length; i++) {
        const [firstLetter, ...rest] = arr[i]
        arr[i] = firstLetter.toUpperCase() + rest.join("")
      }
    
      return arr.join("")
    } 
    
    else if (caze === "pascal") {
      let wordsArrayPascal = input.split(" ")
      for (let i = 0; i < wordsArrayPascal.length; i++) {
        const [firstLetter, ...rest] = wordsArrayPascal[i]
        wordsArrayPascal[i] = firstLetter.toUpperCase() + rest.join("")
      }
      return wordsArrayPascal.join("")
    } 
    
    else if (caze === "snake") {
      return input.split(" ").join("_");
    } 
    
    else if (caze === "kebab") {
      return input.split(" ").join("-");
    }
    
    else if (caze === "title") {
      let wordsArrayTitle = input.split(" ")
      for (let i = 0; i < wordsArrayTitle.length; i++) {
        const [firstLetter, ...rest] = wordsArrayTitle[i]
        wordsArrayTitle[i] = firstLetter.toUpperCase() + rest.join("")
      }
      return wordsArrayTitle.join(" ")
    }
    
    else if (caze === "vowel") {
      return input.toLowerCase().split("").map(char => "aeiou".includes(char) ? char.toUpperCase() : char).join("");
    }
    
    else if (caze === "consonant") {
      return input.toLowerCase().split("").map(char => !"aeiou".includes(char) ? char.toUpperCase() : char).join("");
    }
    
    else if (caze === "upper") {
      return input.toUpperCase();
    }
    
    else if (caze === "lower") {
      return input.toLowerCase();
    }
  } 

  if (Array.isArray(caze)) {
    for (const casing of caze) {
      console.log(`Applying ${casing} to ${input}`);
      input = applyCasing(input, casing);
    }
    return input;
  } else {
    return applyCasing(input, caze);
  }
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;

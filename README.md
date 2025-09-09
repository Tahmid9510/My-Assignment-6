

#### 1) What is the difference between var, let, and const?

**var:**Declares variable with function or global scope and it's allow re-declaration and update.

**let:**Declares variable with function block scope and allow updates but not allows  re-declaration within the same block.

**const:** Declares block-scoped and cannot be reassigned after their initial assignment.


#### 2) What is the difference between map(), forEach(), and filter()? 

**map():**The map() function receives a function as a parameter.It returns a new array with the transformed values, leaving the original array unchanged, and is commonly used for data manipulation and transformation.

**forEach():**The forEach() function receives a function as an argument and it applies the same code to every element. It will not return anything, it just applies the conditions to every element. It will not change the original array.he return value of forEach() method is undefined. 

**filter():**Returns a new array with only elements that pass the condition (true).Returns a new array with only elements that pass the condition (true)


#### 3) What are arrow functions in ES6?

 Arrow functions are anonymous functions.They are functions without a name and are not bound
 by an identifier. Arrow functions do not return any value and can be declared without the function
 keyword.

#### 4) How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a JavaScript expression that allows for the unpacking of values from arrays or properties from objects into distinct variables. This feature provides more concise and readable way to extract data compared to traditional methods.   
                                                                   
#### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals in ES6 are a new way to work with strings, written using backticks (``) instead of quotes. They allow us to insert variables or expressions directly inside a string using ${...}. We can also write multi-line strings easily without adding \n.

They are different from normal string concatenation because, with concatenation, we join strings and variables using the + operator, which can be messy. Template literals make the code cleaner, more readable, and flexible.


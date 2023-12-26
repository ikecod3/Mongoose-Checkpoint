import Person from "./models/Person.js";

// Note: As of Mongoose version 6.x, the exec() method no longer accepts a callback. Instead, it returns a Promise.

// Function to find people who like burritos
const findBurritoLovers = () => {
  // Use Mongoose query chaining to find, sort, limit, and select and then exec()
  return Person.find({ favoriteFoods: "Burritos" })
    .sort({ name: 1 }) // 1 for ascending order,
    .limit(2) //limit result to two documents.
    .select({ age: 0 }) // Exclude the 'age' field
    .exec()
    .then((data) => {
      console.log("Burrito lovers found:", data);
      return data; // Return the result
    })
    .catch((err) => {
      console.error("Error finding burrito lovers:", err);
    });
};

// Export the function so it can be used in other parts of the application
export default findBurritoLovers;

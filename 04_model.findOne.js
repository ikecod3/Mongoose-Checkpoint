import Person from "./models/Person.js";

// define the function for searching a person by favorite food
const findPersonByFavoriteFood = async (searchFood) => {
  try {
    // Using the  Model.findOne() to search for a person with the specified food in favorites
    const foundPerson = await Person.findOne({ favoriteFoods: searchFood });

    // Check if a person was found
    if (foundPerson) {
      console.log(`Person(s) with ${searchFood} in favorites food are
        ${foundPerson}`);
    } else {
      console.log("No person found with", searchFood, "in favorites food. ");
    }
  } catch (error) {
    // Handle any errors that may occur during the search
    console.error("Error searching for a person, please try again:", error);
  }
};

// Export the function so it can be used in other parts of the application
export default findPersonByFavoriteFood;

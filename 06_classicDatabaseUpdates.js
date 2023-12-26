import Person from "./models/Person.js";

// Define the function for searching a person by ID
const classicDatabaseUpdate = async (personId) => {
  try {
    // Use Model.findById() to search for a person by their ID
    const foundPerson = await Person.findById(personId);
    // Check if a person was found
    if (foundPerson) {
      // Add "hamburger" to the list of favorite foods
      foundPerson.favoriteFoods.push("hamburger");

      const updatedPerson = await foundPerson.save();
      console.log(
        "Person favoruite foods with id:",
        personId,
        "updated successfully",
        updatedPerson
      );
    } else {
      console.log("No person found with ID", personId);
    }
  } catch (error) {
    // console any errors that may occur during the search
    console.error(
      // console any errors that may occur during the search process
      "Error searching for a person by ID, please try again:",
      error
    );
  }
};

// Export the function so it can be used in other parts of the application
export default classicDatabaseUpdate;

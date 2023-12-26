import Person from "./models/Person.js";

// Define the function for searching a person by ID
const findPersonById = async (personId) => {
  try {
    // Use Model.findById() to search for a person by their ID
    const foundPerson = await Person.findById(personId);

    // Check if a person was found
    if (foundPerson) {
      console.log("Person with", personId, "found:", foundPerson);
    } else {
      console.log("No person found with ID", personId);
    }
  } catch (error) {
    // console any errors that may occur during the search
    console.error(
      "Error searching for a person by ID, please try again:",
      error
    );
  }
};

// Export the function so it can be used in other parts of the application
export default findPersonById;

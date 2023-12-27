import Person from "./models/Person.js";

// Function to find a person by Name, set their age to 20, and return the updated document
const findAndUpdatePersonAgeAndSetName = async (personName, age) => {
  try {
    // Using Model.findOneAndUpdate() to find a person by name and update age
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName }, // Search key
      { $set: { age: age } }, // Update operation
      { new: true } // Options to return the updated document
    );
    // Check if a person was found and updated
    if (updatedPerson) {
      console.log("Person's age updated successfully:", updatedPerson);
      return updatedPerson; // returned the updated person
    } else {
      console.log("No person found with name", personName);
    }
  } catch (error) {
    // console any errors that may occur during the search process
    console.error(
      "Error searching for a person by ID, please try again:",
      error
    );
  }
};

export default findAndUpdatePersonAgeAndSetName;

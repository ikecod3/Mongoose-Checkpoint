import Person from "./models/Person.js";

// Function to delete a person by _id and return the removed document
const findAndRemovePersonById = async (personId) => {
  try {
    // Use Model.findByIdAndRemove() to find and remove a person by _id
    const removedPerson = await Person.findByIdAndDelete(personId);

    // Check if a person was found and removed
    if (removedPerson) {
      console.log("Person deleted successfully:", removedPerson);
      return removedPerson; // Return the removed person for potential further use
    } else {
      console.log("No person found with _id", personId);
    }
  } catch (error) {
    // console any errors that may occur during the delete process
    console.error("Error deleting person:", error);
  }
};

// Export the function so it can be used in index.js
export default findAndRemovePersonById;

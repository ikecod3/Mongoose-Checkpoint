import { deleteModel } from "mongoose";
import Person from "./models/Person.js";

// NOTICE: Note that Model.remove() is deprecated in Mongoose version 6 and later, hence, Model.deleteMany() waas used instead.
// addtionally, call back function are no longer supported

// function to delete all people with the name "Mary" and pass the outcome to a callback
const deleteManyPeopleByName = async () => {
  try {
    // Use Model.deleteMany() to delete people with the name "Mary"
    const result = await Person.deleteMany({ name: "Mary" });
    // Check if the operation was successful
    console.log("People with name 'Mary' was deleted successfully:", result);
    return result;
  } catch (error) {
    // console any errors that may occur during the delete process
    console.error("Error deleting people with name 'Mary':", error);
  }
};

// Export the function so it can be used in other parts of the application
export default deleteManyPeopleByName;

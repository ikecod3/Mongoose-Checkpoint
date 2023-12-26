import Person from "./models/Person.js";
// CREATE AND SAVE A RECORD OF A MODEL

// function to create and save a person record
//  Model.prototype.save() no longer accepts a callback
const createAndSaveRecord = async (person) => {
  // Save the new person record to the database
  return person
    .save()
    .then((savedRecord) => {
      // Log a success message with the saved record details
      console.log("Document saved successfully:", savedRecord);
    })
    .catch((error) => {
      // Log an error message if there's an issue during the save operation
      console.error("Error saving document:", error);
    });
};

// Export the function so it can be used in index.js
export default createAndSaveRecord;

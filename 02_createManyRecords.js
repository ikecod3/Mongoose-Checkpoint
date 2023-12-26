import Person from "./models/Person.js";

// CREATE MANY RECORDS WITH MODEL.CREATE()
const createManyRecords = (arrayOfPeople) => {
  // Use the Mongoose Model.create() method to save the array of people to the database
  return Person.create(arrayOfPeople)
    .then((savedPeople) => {
      // Log success message if people are created successfully
      console.log("People created successfully:", savedPeople);
    })
    .catch((error) => {
      // Log an error message if there's an issue creating people
      console.error("Error creating people:", error);
    });
};
// Export the function for use in index.js
export default createManyRecords;

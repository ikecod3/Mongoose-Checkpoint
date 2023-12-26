import Person from "./models/Person.js";

// USE MODEL.FIND() TO SEARCH DATABASE FOR PEOPLE WITH GIVEN NAME

const findPeopleByName = (searchName) => {
  return Person.find({ name: searchName })
    .then((foundPeople) => {
      // Log the number of people found with the given name
      console.log(
        `"Number of people with the name ${searchName} is ${foundPeople.length}`
      );
      // Log the details of the found people
      console.log(foundPeople);
    })
    .catch((error) => {
      // Log an error message if there's an issue during the search
      console.error("Error searching for people:", error);
    });
};
// Export the function so it can be used in index.js
export default findPeopleByName;

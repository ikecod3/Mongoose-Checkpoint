// first, import the required modules
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

// import  model and functions
import Person from "./models/Person.js";
import createAndSaveRecord from "./01_createAndSaveRecord.js";
import createManyRecords from "./02_createManyRecords.js";
import findPeopleByName from "./03_model.find.js";
import findPersonByFavoriteFood from "./04_model.findOne.js";
import findPersonById from "./05_model.findById.js";
import classicDatabaseUpdate from "./06_classicDatabaseUpdates.js";
import findAndUpdatePersonAgeAndSetName from "./07_findOneAndUpdate.js";
import findAndRemovePersonById from "./08_findOneAndRemove.js";
import deleteManyPeopleByName from "./09_deleteManyDocumentsOrModel.remove.js";
import findBurritoLovers from "./10_chainSearchQuery.js";
// create an express instance
const app = express();
// load environment variables from a .env files
dotenv.config();

// set the port fro the express application, choose to 3000 if not specified
const port = process.env.PORT || 3000;
// Get the MongoDB URI from the environment variables
const uri = process.env.MONGO_URI;

// using  try and catch to connect to databse
/* Note that: useNewUrlParser and useUnifiedTopology are deprecated options: useNewUrlParser and useUnifiedTopology has no effect since Node.js Driver version 4.0.0
 */
try {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  });
  console.log("Database connected successfully ✅✅✅");

  app.listen(port, () => {
    console.log(`💨 Server running on port: ${port}`);
  });
} catch (error) {
  console.error(" ❌❌ Failed to connect to the database:", error);
  console.log("Please check your connection and try again");
}

//  NOTICE:  the checkpoint uses obsolete mogoose method:

// Create a new Person instance with specific properties
const person = new Person({
  name: "Mary",
  age: 37,
  favoriteFoods: ["Rice", "Beans", "African Salad", "Burritos"],
});
// Call the function that will create and save the record
createAndSaveRecord(person);

// ******************************************************
// defining the array of objects to insert into our database
const arrayOfPeople = [
  { name: "Collins", age: 35, favoriteFoods: ["Pizza", "Red Beef"] },
  { name: "Smith", age: 17, favoriteFoods: ["Pasta", "Noodles"] },
  { name: "Park", age: 40, favoriteFoods: ["Sharwama", "Beans"] },
  { name: "Bob", age: 28, favoriteFoods: ["Burritos", "Chicken"] },
  { name: "Johnson", age: 18, favoriteFoods: ["Pizza", "Burritos"] },
  { name: "Andrew", age: 25, favoriteFoods: ["Pasta", "Beans"] },
];
// call the function that will insert the array of object into database
createManyRecords(arrayOfPeople);

// ********************************************************
const searchName = "Andrew"; // define the searchName

//invoke the function that Find all the people having a given name
findPeopleByName(searchName);

// ********************************************************
const searchFood = "Rice";
// Call a fnction Find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument searchFood as a search key.
findPersonByFavoriteFood(searchFood);

// ********************************************************
// defined a variable for find parameter
const personId = "658b642222c82694ddaffbcc";
// call a function named findPersonById that Find one person having a given _id

findPersonById(personId);

// ********************************************************

// using thesame personId variable define above, call the function that find a person by _id with the parameter personId as a search key. Add "hamburger" to the list of the person's favoriteFoods .push()
classicDatabaseUpdate(personId);

// ********************************************************

//Invoke the function that Find a person by Name and set the person's age to 20. Use the function parameter personName as a search key.
const personName = "Mary"; // define a update variable
const age = 20;
findAndUpdatePersonAgeAndSetName(personName, age);

// ********************************************************
// use the personID already defined above,
// call the function that delete one person by the person's _id. using the function argument personId as the search key.

findAndRemovePersonById(personId);

// ********************************************************

// invoke the function to deletes all people with a specified name "Mary" from the database
deleteManyPeopleByName();

// ********************************************************
// invoke the function to perform chain search query to narrow search results
// for example, we Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age

findBurritoLovers();

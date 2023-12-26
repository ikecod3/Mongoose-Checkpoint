import mongoose from "mongoose";

// define a mongoose schema for the "Person" prototype/model
const personSchema = new mongoose.Schema({
  // Name of the person, a required field
  name: {
    type: String,
    required: true,
  },
  //   age - number
  age: {
    type: Number,
  },
  //   an array of strings of person's favourite foods
  favoriteFoods: {
    type: [String],
  },
});
// create a Mongoose prototype/model named Person based on the above defined schema
const Person = mongoose.model("Person", personSchema);

// export the Person prototype/model for use in the other parts of the application
export default Person;

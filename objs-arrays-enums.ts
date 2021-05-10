const person  = {
  name: 'John',
  age: 44  ,
  hobbies: [ 'Sports', 'Cooking'],
  role: [2, 'author']
};

let favouriteActivities: string[];



console.log(person)

for(const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
}
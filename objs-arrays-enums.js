"use strict";
var person = {
    name: 'John',
    age: 44,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favouriteActivities;
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}

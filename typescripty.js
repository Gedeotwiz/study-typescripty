//Types are used to define the shape of variables, functions, classes, etc. They provide a way to enforce what kind of values a variable can hold.
var User = {
    firstName: 'TWIZERIMANA',
    lastName: 'Gedeon',
    age: 20,
    mariage: false,
    Who: function () {
        console.log("The names of user is ".concat(this.firstName, " ").concat(this.lastName, " and age is ").concat(this.age, " and his mariage ").concat(this.mariage));
    },
};
User.Who();

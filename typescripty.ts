

//Types are used to define the shape of variables, functions, classes, etc. They provide a way to enforce what kind of values a variable can hold.

type john={
    name:string,
    age:number,
    player:boolean
}


// Interfaces are similar to types but are used specifically for defining the shape of objects and classes.

interface user{
    firstName:string,
    lastName:string
    age:number,
    mariage:boolean
    Who():void,
}

const userInterface:user={
    firstName:'TWIZERIMANA',
    lastName:'Gedeon',
    age:20,
    mariage:false,
    Who(){
      console.log(`The names of user is ${this.firstName} ${this.lastName} and age is ${this.age} and his mariage ${this.mariage}`)
    },
}
User.Who()
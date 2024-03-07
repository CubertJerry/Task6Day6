// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const Movie = {
    // Properties
    title: "",
    studio: "",
    rating: "",

    // Constructor with all properties
    init: function(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        return this;
    },

    // Constructor with default rating "PG"
    initWithoutRating: function(title, studio) {
        return this.init(title, studio, "PG");
    },

    // Getter for rating
    getRating: function() {
        return this.rating;
    },

    // Method to filter movies with rating "PG"
    getPG: function(movies) {
        return movies.filter(movie => movie.getRating() === "PG");
    }
};

// Creating an instance of Movie
const casinoRoyale = Object.create(Movie).init("Casino Royale", "Eon Productions", "PG-13");
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);

// https://github.com/rvsp/typescript-oops/blob/master/images/ExerciseOOP_Invoice.png

class Circle {
    // Constructor
    constructor(radius) {
        this.radius = radius;
    }

    // Getter for radius
    getRadius() {
        return this.radius;
    }

    // Setter for radius
    setRadius(radius) {
        this.radius = radius;
    }

    // Method to calculate area
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Method to calculate circumference
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}


//Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    introduce() {
        return `Hello, my name is ${this.name}, I'm ${this.age} years old, ${this.gender}, and I work as a ${this.occupation}.`;
    }
}

// Example usage:
const john = new Person("John", 30, "male", "software engineer");
console.log(john.introduce());

// //write a class to calculate the Uber price

class UberPriceCalculator {
    constructor(distance, duration) {
        this.distance = distance; // Distance in miles
        this.duration = duration; // Duration in minutes
        this.BASE_FARE = 2.0; // Base fare in dollars
        this.PER_MILE_RATE = 1.5; // Per mile rate in dollars
        this.PER_MINUTE_RATE = 0.2; // Per minute rate in dollars
    }

    calculatePrice() {
        const fare = this.BASE_FARE + (this.PER_MILE_RATE * this.distance) + (this.PER_MINUTE_RATE * this.duration);
        return fare;
    }
}

// Example usage:
const distance = 5; // 5 miles
const duration = 15; // 15 minutes
const calculator = new UberPriceCalculator(distance, duration);
console.log("Estimated Uber fare:", calculator.calculatePrice(), "dollars");

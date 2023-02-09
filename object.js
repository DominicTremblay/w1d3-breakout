// Object litteral

const movie = {
  title: 'John wick',
};

// what is an object
// a data structure to organize our data
// key value pairs => property and value

// add elements to an object
// add a title for movie
// add the year (relased) of the movie
// nameOfObject.property=value or nameOfObject['property']=value

movie.year = 2008;
movie['year'] = 2008;
console.log("movie:", movie);



// Read values from objects
// nameofObject.property or nameofObject['title']
console.log('title:', movie.title);
console.log('title:', movie['title']);

// read from an object with a property that does not exist? => undefine
console.log("rating:", movie.rating);


// update a value in a an object
// Reassign a value to an existing property

movie.year = 2009;
movie['year'] = 2009;
console.log("movie:", movie);


// delete a value from an object
delete movie.year
console.log("movie:", movie);

// Rule dotnotation vs square brackets

// you can always use one or the other EXCEPT WHEN
// the name of the key is stored in a variable

const property = 'title';

console.log("property:", movie[property]);

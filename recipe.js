const recipes = {
  1: {
    id: 1,
    name: 'Chocolate Fudge',
    prepTime: '15 mins',
    cookTime: '30 mins',
  },
  2: {
    id: 2,
    name: 'Caramels',
    prepTime: '10 mins',
    cookTime: '25 mins',
  },
};

// console.log the total time of both recipe
// declare an accumulator
// iterate over the object
// access the the preptime and add to accumulator
// access the cooktime and add to the accumalator
// print out the total time

let total = 0;

for (let recipeId in recipes) {
  console.log('key:', recipeId);
  console.log('preptime:', recipes[recipeId].prepTime);
  console.log('cooktime:', recipes[recipeId].cookTime);
  const prepTime = recipes[recipeId].prepTime;
  const cookTime = recipes[recipeId].cookTime;
  total += parseInt(prepTime);
  total += parseInt(cookTime);
}

console.log('Total time:', total);

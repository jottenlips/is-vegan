import veganSubs from '../util/vegansubstitutes.json';

// console.log(veganSubs)

// for (const i in veganSubs) {
// }


/**
 * This functions takes the given ingredient
 * and checks for a vegan substitute for the non vegan ingredient
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is not in nonVeganList
 */
export function veganSubstitute (ingredientToCheck) {
  // true if empty
  if (ingredientToCheck.length === 0) return "";

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase();



  return veganSubs[formattedIngredientToCheck];
}

// export function ingredientSubstituteList (ingredientsToCheck) {
//   return !ingredientsToCheck.some(ingredient => veganSubstitute(ingredient));
// }

console.log(veganSubstitute('butter'))

// const isVegan = require('./isVegan');

// const veg = isVegan.isVeganIngredientList([
//   'COCOA LIQUOR',
//   'SUGAR',
//   'COCOA BUTTER',
//   'ALKALIZED REDUCED FAT COCOA POWDER',
//   'SOY LECITHIN EMULSIFIER',
//   'GROUND VANILLA'
// ]);

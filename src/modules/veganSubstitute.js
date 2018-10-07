import veganSubs from '../util/vegansubstitutes.json';
import * as isVegan from './IsVegan';

/**
 * This functions takes the given ingredient
 * and checks for a vegan substitute for the non vegan ingredient
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>{ingredient:[substitutes]}</code> if ingredient has substitutes
 */
export function veganSubstitute (ingredientToSub) {

  if (ingredientToSub.length === 0) return "";
  if (isVegan.isVeganIngredient(ingredientToSub)) return ingredientToSub;

  const formattedIngredientToSub = ingredientToSub.trim().toLowerCase();
  const substitutes = {[formattedIngredientToSub]:veganSubs[formattedIngredientToSub]}
  return substitutes;
}

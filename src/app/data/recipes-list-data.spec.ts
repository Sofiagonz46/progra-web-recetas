import { RECIPES_LIST_DATA } from './recipes-list-data';

describe('RecipesListData', () => {

  it('should have recipes', () => {
    expect(RECIPES_LIST_DATA.recipes.length).toBeGreaterThan(0);
  });

});
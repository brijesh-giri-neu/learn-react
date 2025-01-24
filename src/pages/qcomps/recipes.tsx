export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function Recipes({ recipes }: { recipes: { id: string; name: string; ingredients: Set<string> }[] }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={Array.from(recipe.ingredients).join('-')}>
          <h2>{recipe.name}</h2>
          <ul>
            {Array.from(recipe.ingredients).map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <Recipes recipes={recipes} />
    </div>
  );
}
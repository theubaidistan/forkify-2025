import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable'; // PolyFiiling
import 'regenerator-runtime/runtime'; //Polyfilling(Async)
import { async } from 'regenerator-runtime';

// Hot Module
/*
if (module.hot) {
  module.hot.accept();
}
*/

// console.log(icons);

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// 289 - Rendering the Recipe

//////////////////////////////////////
// 288 - Loading a Recipe from API

console.log('TEST');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update Results View to Mark Selected Search Result
    resultsView.update(model.getSearchResultsPage());
    // resultsView.render(model.getSearchResultsPage());
    // 1) Updating Bookmarks View
    // debugger;
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading Recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 3) Rendering Recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);

    // 4) TEST
    // controlServings();
  } catch (err) {
    // console.log(err);
    // recipeView.renderError(`${err} 💥💥💥💥`);
    recipeView.renderError();
    console.error(err);
  }
};
// controlRecipes();

/*
window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);
*/

///////////////////////////////////////////////////////////////
// 292 - Refactoring for MVC

///////////////////////////////////////////////////////////////
// 296 - Implementing Search Results Part 1
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // console.log(resultsView);

    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load Search Results
    await model.loadSearchResults(query);

    // 3) Render Results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    // console.log(model.getSearchResultsPage(1));
    resultsView.render(model.getSearchResultsPage(1));

    // 4) Render Intial Pagination Buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
// controlSearchResults();

//////////////////////////////////////////////////////////////
// 299 - Implementing Pagination Part 2

const controlPagination = function (goToPage) {
  // console.log('Pag Controller ');
  // console.log(goToPage);

  // 1) Render NEW Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW Pagination Buttons
  paginationView.render(model.state.search);
};
////////////////////////////////////////////////////////////////
// 301 - Updating Recipe Servings
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the Recipe View
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // console.log(model.state.recipe.bookmarked);

  // 1) Add/remove Bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBoookmark(model.state.recipe.id);
  // console.log(model.state.recipe);

  // 2) Update Recipe View
  recipeView.update(model.state.recipe);

  // 3) Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

///////////////////////////////////////////////////////////////
// 307 - Uploading a New Recipe Part 1

const controlAddRecipe = async function (newRecipe) {
  // console.log(newRecipe);
  try {
    // Show Loading Spinner
    addRecipeView.renderSpinner();

    // Upload The new Recipe Data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render Recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render Bookmark View
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    window.history.back();

    // Close Form Window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC);
  } catch (err) {
    console.log('💥', err);
    addRecipeView.renderError(err.message);
  }
};

/*
const newFeature = function () {
  console.log('Welcome to the application!');
};
*/

//////////////////////////////////////////////////////////////
// 294 - Event Handlers in MVC PublisherSubscriber Pattern

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  // console.log('Welcome!');
  // controlServings();
  // newFeature();
};
init();

/*
import View from './View.js';
import previewView from './previewView.js';
// ✅ Correct (Parcel v1)
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  constructor() {
    this._parentElement = document.querySelector('.bookmarks__list');
    this._errorMessage =
      'No Bookmarks yet. Find a nice recipe and bookmark it ;)';
    this._message = '';
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
*/

import View from './View.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  constructor() {
    super(); // ✅ required
    this._parentElement = document.querySelector('.bookmarks__list');
    this._errorMessage =
      'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    this._message = '';
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();

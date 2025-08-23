import View from './View.js';
import previewView from './previewView.js';
// ✅ Correct (Parcel v1)
import icons from '../../img/icons.svg';

class ResultsView extends View {
  constructor() {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No Recipe Found For Your Query! Please Try Again ;)';
    _message = '';
  }
  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

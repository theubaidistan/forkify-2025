import View from './View.js';
import previewView from './previewView.js';
// ✅ Correct (Parcel v1)
import icons from '../../img/icons.svg';

class ResultsView extends View {
  constructor() {
    super();
    this._parentElement = document.querySelector('.results');
    this._errorMessage = 'No Recipe Found For Your Query! Please Try Again ;)';
    this._message = '';
  }
  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

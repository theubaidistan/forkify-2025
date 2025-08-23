/* import View from './View.js';
// ✅ Correct (Parcel v1)
import icons from '../../img/icons.svg';

class PaginationView extends View {
  constructor() {
    this._parentElement = document.querySelector('.pagination');
  }
  // Event Delegation
  addHandlerClick(hanler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      // console.log(btn);

      // Guard Clause
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      // console.log(goToPage);

      hanler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // console.log(numPages);
    // Page 1,and there are other pages
    if (curPage === 1 && numPages > 1) {
      // console.log('page 1, others');
      // return 'page 1, others';
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // Last Page
    if (curPage === numPages && numPages > 1) {
      // return 'last page';
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>`;
    }
    // Other Page
    if (curPage < numPages) {
      // return 'other page';
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // Page 1,and there are NO other pages
    // return 'only 1 page';
    return '';
  }
}

export default new PaginationView();
*/
import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  constructor() {
    super(); // ✅ must call before using this
    this._parentElement = document.querySelector('.pagination');
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, more pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use xlink:href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use xlink:href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>`;
    }

    // Other pages
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use xlink:href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use xlink:href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
    }

    // Only one page
    return '';
  }
}

export default new PaginationView();

const { SlugService } = require('../services');

class SlugController {
  constructor() {
    this._service = new SlugService();
  }

  /**
   * Slugify
   *
   * @param {string} string String
   *
   * @returns {Promise} Promise
   */
   slugify(string) {
    return this._service.slugify(string);
  }

  /**
   * Slugify Array
   *
   * @param {string[]} array String array
   *
   * @returns {Promise} Promise
   */
   slugifyArray(array) {
    return this._service.slugifyArray(array);
  }
}

module.exports = SlugController;

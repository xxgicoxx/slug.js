class SlugService {
  async slugify(string) {
    if (!string) {
      throw new Error("'string' cannot be empty");
    }

    const map = {
      a: /[\xE0-\xE6]/g,
      A: /[\xC0-\xC6]/g,
      e: /[\xE8-\xEB]/g,
      E: /[\xC8-\xCB]/g,
      i: /[\xEC-\xEF]/g,
      I: /[\xCC-\xCF]/g,
      o: /[\xF2-\xF6]/g,
      O: /[\xD2-\xD6]/g,
      u: /[\xF9-\xFC]/g,
      U: /[\xD9-\xDC]/g,
      c: /\xE7/g,
      C: /\xC7/g,
      n: /\xF1/g,
      N: /\xD1/g,
      '-': /\s/g,
    };

    Object.keys(map).forEach((letter) => {
      string = string.replace(map[letter], letter);
    });

    string = string.toLowerCase();
    string = string.replace(/[^a-z0-9-]/g, ' ');
    string = string.replace(/ {2,}/g, ' ');
    string = string.trim();
    string = string.replace(/\s/g, '-');
    string = string.replace(/-{2,}/g, '-');

    if (string.substring(0, 1) === '-') {
      string = string.substring(1, string.length);
    }

    if (string.substring(string.length - 1, string.length) === '-') {
      string = string.substring(0, string.length - 1);
    }

    return string;
  }

  async slugifyArray(array) {
    if (!array || array.length === 0) {
      throw new Error("'array' cannot be empty");
    }

    const slugs = array.map((e) => this.slugify(e.toString()));

    return Promise.all(slugs);
  }
}

module.exports = SlugService;

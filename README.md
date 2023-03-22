# slug.js
Node.js package for slug string.

<p align="center">
  <img src="assets/imgs/slug.png">
</p>

# Features
* Slug string
* Slug array

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install slug.js
````

# Example
```javascript
const Slug = require('slug.js');

const slug = new Slug();

(async () => {
  try {
    const slugify = await slug.slugify('asd 123 &@# abc');
    console.log(slugify);

    const slugifyArray = await slug.slugifyArray(['asdas @!# 123', '123 456 789 ABC DEF GHI']);
    console.log(slugifyArray);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)
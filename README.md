# slug.js
Node.js package to slug string.

<p align="center">
  <img src="https://i.imgur.com/YHCWihh.png">
</p>

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install slug.js
````

# Example
```javascript
const { slugify, slugifyArray } = require('slug.js');

(async () => {
  try {
    const slug = await slugify('asd 123 &@# abc');
    console.log(slug);

    const slugArray = await slugifyArray(['asdas @!# 123', '123 456 789 ABC DEF GHI']);
    console.log(slugArray);
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
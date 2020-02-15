# slug.js
Node package to slug string.

<p align="center">
  <img src="https://i.imgur.com/YHCWihh.png">
</p>

### Installation
````
npm install slug.js
````

### Example
```javascript
const { slugify, slugifyArray } = require('slug.js');

slugify('asd 123 &@# abc').then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

slugifyArray(['asdas @!# 123', '123 456 789 ABC DEF GHI']).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### Response example
````
asd-123-abc

[ 'asdas-123', '123-456-789-abc-def-ghi' ]
````

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon
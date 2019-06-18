# Email verification, One-time/Disposable/Temporary address detection

### Installation
```
npm i truemail
```

### Usage

```javascript
const truemail = require('truemail');

console.log(truemail('hello@gmail.com')); //=> true
console.log(truemail('fake-mail@.com')); //=> false
console.log(truemail('ter@daymail.life')); //=> false
```

###### 2019, botaniQQQ
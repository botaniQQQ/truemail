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

#### If you want to help collect new addresses
```bash
cd node_modules/truemail
node ./add.js
```

```
- 2emailock.com
- voemail.com
+ emailate.com
+ kikoxltd.com
- mailsoul.com
- eyeemail.com
- emailtex.com
- mailmetal.com
- email-24x7.com
+ emailay.com
The file was saved!
```

`+` - new addresses
`-` - old addresses

Open <a href="https://github.com/botaniQQQ/truemail/issues">issues</a> and send this addresses.

###### 2019, botaniQQQ
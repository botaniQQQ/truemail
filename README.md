# Email verification, One-time/Disposable/Temporary address detection

### Installation
```
npm i truemail
```

### Usage

```javascript
const truemail = require('truemail');

console.log(truemail('hello@gmail.com')); //=> true
console.log(truemail('bad-mail@%%.com')); //=> false
console.log(truemail('t@temp-mail.org')); //=> false
```

#### If you want to help collect new domains
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
Added 3 domains!
```

`+` - new domain
`-` - old domain

Open <a href="https://github.com/botaniQQQ/truemail/issues">issues</a> and send this addresses.

###### 2019, botaniQQQ
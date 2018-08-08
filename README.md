# local-email-sender

### Send html emails for testing locally (work only with js!!!)

## Current version : 1.0.0

## Credits

* Beautiful icon by [Smashicons](https://www.flaticon.com/authors/smashicons) from [Flaticon](https://www.flaticon.com/) licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/) without changes.
* jQuery 3.3.1
* Google Font (Raleway|Roboto+Slab)
* [SmtpJS](https://www.smtpjs.com/)

## How to use it

All you have to do is setup your own smtp parameters.

```js
// Change to your own parameters in js/params.js
var params = {
    'from': 'test@test.com', // emails will be sent from...
    'smtp': 'smtp.yourisp.com', // your own smtp address
    'username': 'username', // your own smtp username
    'password': 'password' // your own smtp password
};
```

That's it!

## No SMTP server?

Like SmtpJS advises, you can setup a free* and working smtp server with [Elastic Email](https://elasticemail.com/account#/create-account?r=20b444a2-b3af-4eb8-bae7-911f6097521c).
(*Free version has send limitations but it's totally enough for tests.)
All you have to do is create an account then go to "Settings" then "SMTP/API" to get correct parameters.


## Contribute

We're always looking for:

* Bug reports, especially those for aspects with a reduced test case
* Pull requests for features, spelling errors, clarifications, etc.
* Ideas for enhancements



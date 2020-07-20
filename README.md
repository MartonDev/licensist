# licensist
 A simple node package to get the license title and other info from a license string, using GitHub's license api

## How to use
 Add with yarn or npm
 ```sh
 yarn add licensist
 ```
 ```sh
 npm i licensist
 ```

 You can use it for both front-end and back-end, since we are using axios for requests

### Compare
First, create a new instance (you can use this instance for multiple compares) and initialize it, to request the available licenses from GitHub

```ts
import { LicenseComparer } from 'licensist'

...

const comparer = new LicenseComparer()
await comparer.init()
```
After this, you'll be able to input LICENSE texts for comparison

```ts
// let's get the nest.land license
// you don't need axios, just the license text
// this is to demonstrate how can you get the license with a license text
axios
  .get('https://raw.githubusercontent.com/nestdotland/nest.land/master/LICENSE')
  .then(response => {

    const license = comparer.compare(response.data) // returns the license or null

    if(license === null) return console.log('Could not identify LICENSE')

    console.log(`License is ${ license.name }. Full LICENSE data: \n${ license }`)

  })
```

## License
licenser is licensed under the MIT License. Funny right?
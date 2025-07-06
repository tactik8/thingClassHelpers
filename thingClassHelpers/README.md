# thingClassHelpers

JS library for thing classes

## Location

### Source code
https://github.com/tactik8/thingClassHelpers

### repl.it
https://replit.com/@tactik8/thingClassHelpers


## Install

### From github
```
git clone https://github.com/tactik8/jsonldHelpers ./utils/jsonldHelpers
git clone https://github.com/tactik8/dataHelpers ./utils/dataHelpers
git clone https://github.com/tactik8/thingClassHelpers ./utils/thingClassHelpers
```

## Test and publish

```
npm install --save-dev jest

npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev jest-environment-jsdom

node --experimental-vm-modules node_modules/.bin/jest

npx parcel build
npm adduser
npm publish

```



## How to use

### make available to import  
#### add in package.json 
``` 
imports: {
    "#jsonldHelpers": "./utils/jsonldHelpers/jsonldHelpers.js",
    "#dataHelpers": "./utils/dataHelpers/dataHelpers.js",
    "#thingClassHelpers": "./utils/thingClassHelpers/thingClassHelpers.js",
}
```

#### or in html file
```
<script type="importmap">
    {
      "imports": {
        "#jsonldHelpers": "/utils/jsonldHelpers/jsonldHelpers/jsonldHelpers.js",
        "#dataHelpers": "/utils/dataHelpers/dataHelpers/dataHelpers.js",
        "#thingClassHelpers": "/utils/thingClassHelpers/thingClassHelpers/thingClassHelpers.js"
      }
    }
  </script>


```

 ### in code

import { jsonldHelpers as jh } from '#jsonldHelpers'

let record = {
    "@context": "https://schema.org/",
    "@type": "Thing",
    "@id": "thing1",
    "name": "thing1"
}


let k = jh.value.get(record, '@type')


```


## Tests

Prompt:
```
please write unit tests for all functions in @jsonlsHelpers.js. The records used should be jsonld records (nested). Please separate the tests one directory by file and one file by function. Please consider edge cases (invalid, null, wrong type, etc.).
```


## Running tests
node --experimental-vm-modules node_modules/.bin/jest


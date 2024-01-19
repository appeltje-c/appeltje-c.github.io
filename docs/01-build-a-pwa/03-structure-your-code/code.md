---
sidebar_position: 2
---

# Code

:::info
The branch for this chapter can be found [here](https://github.com/appeltje-c/starter-app/tree/03-structure-your-code)
:::

## Create Folders

Let's start with creating the folders. Change into the src folder in your terminal and run this to create the folders

```shell
mkdir assets assets/fonts assets/images

mkdir components features language screens styles types utils 
```
(or create them in your IDE)

## Move Files

There are some files that were created initially that wil now find a new spot.

Make sure you update the import declarations or let your IDE do the heavy lifting with refactor functionality.

* Move the ```App.tsx``` that sits in the ```src``` folder file into the ```components``` folder. This file will stay at the root of our components.
* Move the ```App.css``` and ```index.css``` who also sit in the ```src``` folder
* Move the ```logo.svg``` from the ```src``` folder to the ```assets/images``` folder

## Assets index file 

As a first example on how we can cleanly organise our assets files we create an ```index.ts``` in the ```assets``` folder
and add the following lines

```typescript
import svgLogo from './images/logo.svg'

export const logo = svgLogo
```

We import the image file by path and create an export with the preferred name to use throughout the App.

This index file enables us to use our assets in the App by using this short and clean import statement

```typescript
import {logo} from "@assets"
```

Other than this being nice and short it is easy with refactors, you only have to change the file import in the index file.
This is on top of the advantages of packaging your assets files in your builds.   

For the alias
```typescript
"@assets"
```
to work we are not there yet! We will take care of that next.

## Create Aliases

Now we create an alias for each folder we know is going to be under heavy import use throughout your code.

Since we are using create-react-app and we do not want to eject, we are going to use some packages that will help us to 
override the create-react-app configuration so we can add the alias paths. This ensures that the build process can 
resolve these paths correctly and our code is found and transpiled.

The two packages we use for this are [react-app-rewired](https://github.com/timarney/react-app-rewired) and 
[react-app-rewire-alias](https://github.com/oklas/react-app-rewire-alias)

### Install the packages

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```bash
yarn add react-app-rewired  react-app-rewire-alias --dev
```

The ```--dev``` indicates we only want to add these packages to the development dependencies, the App build will not 
need them.

### Add configuration

After the packages are installed we have to add the config for both the build override and your IDE to be able to 
resolve the paths.

Create a file ```config-overrides.js``` in the root of your project so it sits next to the ```package.json``` and 
```.gitignore``` files. And add following contents to declare which aliases resolve to their respective source folders.

```typescript
const { alias } = require('react-app-rewire-alias')

module.exports = function override (config) {
    alias({
        '@assets': 'src/assets',
        '@components': 'src/components',
        '@features': 'src/features',
        '@language': 'src/language',
        '@screens': 'src/screens',
        '@styles': 'src/styles',
        '@types': 'src/types',
        '@utils': 'src/utils'
    })(config)

    return config
}
```

We add a similar configuration in the ```tsconfig.json``` file

```typescript
 "compilerOptions": {
    "baseUrl": ".",
    "paths": {
        "@assets": ["src/assets"],
        "@components": ["src/components"],
        "@features": ["src/features"],
        "@language": ["src/language"],
        "@screens": ["src/screens"],
        "@styles": ["src/styles"],
        "@types": ["src/types"],
        "@utils": ["src/utils"]
    }
    // ... other config 
}
```
After these steps your source tree should look like this

import FileStructure from '../../../static/img/03-structure-your-code/new-file-structure.png';

<img
src={FileStructure}
alt="file structure"
width="400"/>

Last change before we can test if our alias is working.

In the package.json find the scripts section 

```typescript
  // .... other config
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
 // .... other config
```

and replace on each line ```react-scripts``` with ```react-app-rewired```. The result should look like this

```typescript
  // .... other config
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
 // .... other config
```

restart the development server ```ctrl-c``` and ```yarn start```. The development server will now be started by the
rewired package first after which our create-react-app scripts are called.

Now we can try if our alias configuration works.

Go to the components/App.tsx file and replace

```typescript
import logo from '../assets/images/logo.svg'
```

with 

```typescript
import {logo} from '@assets'
```

The App should rebuild and display the spinning React image.

Awesome! This will contribute to a cleaner codebase.


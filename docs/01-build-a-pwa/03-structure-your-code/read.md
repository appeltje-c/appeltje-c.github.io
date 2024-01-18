---
sidebar_position: 1
---

# Read

> written by [Martijn Benjamin](https://www.linkedin.com/in/martijn-benjamin/) ([appeltje-c](https://github.com/appeltje-c))

Having a folder structure helping you to organise your code is a good idea, especially to **keep** it organised as your 
App grows in number of files when new features are being added. Same as with writing clean and understandable code, it 
mostly serves to refresh what was clear to you half a year ago and help those that might come in to work on the code 
after you. Whether these things are clean, simple, intuitive and using expected conventions can make or break someones 
day. Including yours!  

In the previous chapter we briefly examined the folder structure that was created for us by Create-React-App. This initial 
layout merely serves as a starting point and does not dictate any structure other than having your code in the ```src``` 
folder and some static assets in the ```public``` folder. 

The ```src``` and ```public``` folders are an established 'standard' in React projects. We keep them where they are and 
focus on the folders we need to organise our code inside the ```src``` folder.

There are many ways to go about this. There are no elements in a React project enforcing a specific layout or 
folder naming although there are some most used 'best practice' structures and naming conventions.

Below folder layout is a mixture of elements often seen in React and React Native (Native Mobile) Apps. By combining
best of both worlds we take ideas from each. Feel free to use any structure of your own, bear in mind to keep things 
self explanatory, intuitive and simple.

### Layout
```
public
src
 |- assets
 |    - fonts
 |    - images
 | 
 |- components
 |
 |- features
 |
 |- language
 |
 |- screens
 |
 |- styles
 |
 |- types
 |
 |- utils
```

With these folders we have a place for everything we need. Next we take a look at each folder and talk about what you 
keep in them.

## Aliases

To help us keep things even more tidy and clean we also setup path aliases in our configuration and use an example of 
import through an index file. 

This enables us to do this anywhere in our source tree

```typescript
import {logo} from '@assets'
```

instead of this

```typescript
import logo from '../../assets/images/logo.svg'
```

How to set this up is explained in the [Code](/build-a-pwa/structure-your-code/code) section.

## Folders explained

### assets

The ```assets``` folder contains static files your app uses, like images and font files. 

Although an option is to serve these files from the ```public``` folder and declare them where needed throughout
your code, there are some advantages when organising and importing them in one spot and reuse the same imports 
in your sources:

* Compile time errors of missing files. This avoids your users being confronted with any 404 (not found) errors.
* Optimizations. Your files are optimized by the build process.
* Less download round trips. The files are packaged into your main build file which avoids multiple network requests. 
(There is a lot to say about the sizes and amount of these assets to pack which we talk about later) 
* Refactor. Renaming and moving these files around is easier when declared in your code once.

### components

In the ```components``` folder we keep our reusable React components. Something to know about these components is that 
there are two component types in React: Functional components and Class components.

They do not differ in functionality and both are (still) supported although Class components are more or less the 
'old way' of writing components. 

Functional components are way cleaner and less complex than Class components. In short; we use Functional components.

The aim of these components is to be reusable throughout your App. In practice this means that when you e.g. define a 
button with a general use case, we add it to the components folder and import it throughout the code where needed. 

Focus on reuse of your code is an effort that brings major improvements towards consistency of interaction and 
look & feel of your App. It forces you to think well about the design of your components which helps you create more 
simplified and logical components which in turn helps maintainability and testability. The more you can reuse your code 
the more you downsize your codebase.

### features
    
In the ```features``` folder we add the features of our App organised in sub folders like for example ```user``` 
or ```profile```. In general these features will contain all functionality needed for the feature to work. 
Think of any secondary routing through pages/screens to collect input and state management, the fetching and processing 
of data.

Some examples of features you would find in the ```user``` features sub folder are 
```javascript
register, login, logout
```

The aim for each feature is to self-contain all elements needed for the feature to work without outside dependencies. 
Imagine in a scaled future you have multiple teams completely independent from each other work on their own feature. 
Later on we get into the details of this interesting approach and it's challenges.

### language

This is where we keep the ```language``` files and necessary supporting scaffolding for the [internationalization (i18n) 
that enables the easy localization (l10n)](https://en.wikipedia.org/wiki/Internationalization_and_localization) of your 
App.

In case you are absolutely sure your App will only be served to an audience from the same language, culture and region 
you can peacefully leave this out. Be reminded though that internationalization after having built many features in your 
App can be a major pain.

### screens

In the ```screens``` folder we organise the 'main' screens our users will request. These screens form the overall 
entry points and are navigated to directly from anywhere in the App. Examples of screens are e.g. a Settings 
or Profile screen. 

The ```screen``` naming is deliberate to make a difference in understanding with web pages since we
aim at developing a mobile application instead of a website.

Ideally these screens follow the same overall structure using header, content, side menu and footer components which 
provides a consistent layout and structured navigation. These screens give the user access to the features found 
in the ```features``` folder. 

An important part of your App is the base structure which the screens will adhere to. We discuss this Grid structure in 
the Design section.  

### styles

In the ```styles``` folder we will keep the stylesheets and related theming code. We discuss setting up the styles and 
theme in detail in the Design section.  

### types

Since we are working with Typescript we have to define all types in our data structure which we will keep in the 
```types``` folder.

### utils

In the good old ```utils``` folder we place the reusable code that does not belong to any of the designated folders. 
This is not a carte blanche for code dumping :D

Let's implement this!

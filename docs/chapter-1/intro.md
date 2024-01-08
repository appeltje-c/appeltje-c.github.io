---
sidebar_position: 1
---

# Create Your App

> written by [Martijn Benjamin](https://www.linkedin.com/in/martijn-benjamin/) ([appeltje-c](https://github.com/appeltje-c))

One of the many cool moments in a project is the start. The moment where you have in mind where you want to go, you have a vision, you can see it ready.

Creating your app materializes the begin of this future with all the awesome stuff you have in mind.

Having said that, the first fundamental questions will arise immediately; what language will I write my app in, where to store data, how do front and back interact, where do I want to deploy?

Before your App is loaded with awesome features you will have answered most if not all of these questions. Usually we can or do not want to answer all these questions upfront and because of that it is helpful to make technology choices that do not force us in any given direction. We want to avoid getting stuck in any way and potentially limit the future of our App. Keeping the freedom to choose has its trade-offs (we'll talk about them later) although I think it brings more rewards in the long run.

## Browser or Native?

One of the first questions developers look at when creating an app is where they want to make their App available. Do you want to offer it through the Browser or through downloads from the major App stores? Not long ago the answer to this question was mostly determined by the need of functionality that is only accessible when using mobile native frameworks available for platforms like Android or iOS.

When we look at the improvements of hardware API access in the browser together with Google's [Progressive Web App](https://web.dev/learn/pwa/welcome) (PWA) and [Trusted Web Activity](https://developer.chrome.com/docs/android/trusted-web-activity) (TWA) efforts past years we find there are virtually no missing native functionality concerns these days anymore. Which makes choosing for a Web App that can be served through any browser, **and** is deployable in the App stores as well, perfectly feasible.

Major advantage of these wrapped web apps is that development time is drastically decreased, you can have your App live at a fraction of the cost of native development. In terms of user experience the 'Appy' look & feel and screen performance is also closing in on native fast when done well.

In my experience Progressive Web Apps are doing a great job as Mobile App and as long as we are sure there are no unacceptable hardware API access limitations, we can create a PWA.

We will later on also cover what it takes to deploy a PWA in the major App stores.

## User Interface

With the choice for browser app development in our pocket we can advance to the question how we will be building our User Interface (UI). We will have to create page layouts with input fields, select boxes, sliders and many more controls for users to use your App.

There is a plethora of frameworks and libraries out there that will all more or less get the job done. Think of frameworks that use server side code to build and generate your App like [Vaadin](https://vaadin.com/), fully fledged Javascript frameworks like [Vue.js](https://vuejs.org) or light(er)weight solutions like [Preact](https://preactjs.com/) and [React](https://react.dev)

The debate on which is good, better, best is endless and the arguments vary widely from personal preference, learning curve concerns to market knowledge availability, community support and features. If you look at these arguments within the context of whoever raised them, they mostly make sense and make some understandable point with it.

### Why React?

Working with React on several projects since its earlier days I grew very fond of it. The way it lets you organize your code and the efficient and elegant way page updates are applied still comes to me as a joy after years of working with it. [The virtual DOM](https://www.codecademy.com/article/react-virtual-dom) is a great feature. And that's about it, React does not do much more. Which is great.

When you search the internet with the question if React is a Library or a Framework you can spend ages in the rabbit hole that opens up. After reading my fair share on the topic I realized it does not matter what we call it, it matters what we can do with it. So take your pick, call it "library" or "framework" and find out how it can help you create cool things.

React has a very intuitive and natural feel to it, no forcing or mind bending concepts. You can somewhat compare it to creating your own "tags" (called components in React lingo) similar as you would with html.  This is mostly due to the fact that browsers were designed to iterate over markup in the first place I suspect.

To add routing, make API calls or do some translating, you have to add a solution yourself. This might sound overwhelming and as a lot of work at first and it sounds tempting to go for a so called 'batteries included' framework where you get it all delivered in the box. Which I also did on projects in the past.

### Create-react-app

Same for the vast amount of build tools and it's configuration

### Typescript

### Material

https://m3.material.io/

https://github.com/material-components/material-web/blob/main/docs/quick-start.md



## Initialize Git Repo

To keep track of the changes to your app while you are adding new features it's common to use a source repository. We are going to make use of git, a powerful versioning tool created by Linus Torvalds the creator of Linux.

If you are not familiar with git I suggest to catch-up with it by reading the docs [here](https://git-scm.com/docs/gittutorial)


### TL;DR

https://create-react-app.dev/docs/getting-started



```bash
$ npx create-react-app starter-app --template typescript
```

```bash
$ cd start-app
$  
```

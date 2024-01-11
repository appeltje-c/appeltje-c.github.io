---
sidebar_position: 1
---

# Read

> written by [Martijn Benjamin](https://www.linkedin.com/in/martijn-benjamin/) ([appeltje-c](https://github.com/appeltje-c))

One of the many cool moments in a project is the start. The moment where you have
in mind where you want to go, you have a vision, you can see it ready.

Creating your app materializes the begin of this future with the awesome stuff
you have in mind.

Having said that, the first fundamental questions will arise immediately; what
language will I write my app in, where to store data, how do front and back
interact, where do I want to deploy?

By the time your App is shining with awesome features you will have answered most
if not all of these questions. Usually we can or do not want to answer all these
questions upfront and because of that it is helpful to make technology choices that
do not force us in any given direction. We want to avoid getting stuck in any way
and potentially limit the future of our App. Keeping the freedom to choose has its
trade-offs (we'll talk about them later) although I think it brings more rewards
in the long run.

We have got some choices to make!

## Browser or Native

One of the first questions you come across when creating an app is where you want
to make your App available. Do you want to offer it through the Browser or through
downloads from the major App stores? Or both.

Not long ago the answer to this question was mostly determined by the need of
functionality that is only accessible when using mobile native frameworks available
for platforms like Android or iOS and the concern of bringing a 'real' app look &
feel.

When we look at the improvements of hardware API access in the browser and Google's
[Progressive Web App](https://web.dev/learn/pwa/welcome) (PWA)
and [Trusted Web Activity](https://developer.chrome.com/docs/android/trusted-web-activity)
(TWA) efforts past years we see there are virtually no missing native functionality
concerns anymore. Which makes choosing for a Web App that can be served through any
browser, **and** is deployable in the App stores as well, a good option.

Major advantage of these wrapped web apps is that development time is drastically
decreased, you can have your App live at a fraction of the cost of native development.
In terms of user experience the 'Appy' look & feel and performance is also closing
in on native fast.

Progressive Web Apps are doing a great job as Mobile App and as long as you are sure
there are no unacceptable hardware API access limitations or pressing performance
reasons, you can create a PWA.

And that is what we will do, create a PWA and cover what it takes to deploy it to
the major App stores.

## User Interface

With the choice for browser app development in our pocket we can advance to the
question how we will be building our User Interface (UI). We will have to create
page layouts with input fields, select boxes, sliders and many more controls to
have a useful App.

There is a plethora of frameworks and libraries out there who more or less get
the job done. Think of frameworks that use server side code to build and generate
your App like [Vaadin](https://vaadin.com/), fully fledged Javascript frameworks
like [Vue.js](https://vuejs.org) or lightweight solutions like [Preact](https://preactjs.com/)
and [React](https://react.dev)

The debate on which is good, better, best is endless and the arguments vary widely
from personal preference, learning curve concerns to market knowledge availability,
community support and features. If you look at these arguments within the context
of whoever raised them, they mostly make sense and have some understandable point
to it. In other words, the technology choice you make in practice heavily depends
on the specifics of your situation and the goals you are trying to achieve.
Anyone selling you a one-solution-fits-all opinion did not get very dirty hands themselves.

In these docs we are working with React to create our user interface.
The next section talks about what makes React a good fit to build your apps.

### React

React has been released by Facebook in 2013 and went through some serious growth
since then. Many developers adopted the technology, large communities were formed
and the ecosystem grew steadily in size and maturity. Today there are millions of
React applications in use by a multitude of users.

The way React lets you organize your code and the efficient and elegant way page
updates are applied still comes to me as a joy after years of working with it.
[The virtual DOM](https://www.codecademy.com/article/react-virtual-dom) is a great
feature.

With an intuitive and natural feel to it, no forceful or mind bending concepts,
you can compare it to creating your own "tags" (called components in React lingo)
similar as you would with html. The ability to declare and organize your code into
reusable components that encapsulate their own responsibility and logic enables
you to make very complex layouts in a clean and maintainable way.

And that's about it, React renders your UI, it does not do much more. Which is great!

When it comes to for example routing, making API calls or localizing your App, React
does not provide any solutions. You have to add those solutions yourself. This might
be a bit overwhelming at first and it can sound tempting to go for a 'batteries included'
framework where you get it delivered in one box.

The upside of having to add those solutions yourself is that you are completely free
to use whatever you like. React is unobtrusive and has zero opinion on how you do
things in your App. You can even use it alongside other UI technology.

It is a good idea to choose technology that is useful while not dragging in
decisions you did not make yourself.

### Create React App

Your project, regardless of which framework or library you want to use, will commonly
use build tools to perform transpile, linting and minification optimizations on your
App before releasing it to your audience.
Most projects use tools like [babel](https://babeljs.io/), [webpack](https://webpack.js.org/)
and [eslint](https://eslint.org/) to get those jobs done.

These build tools are very powerful and do a great job while knowing the ins and
outs of these tools can take some time. They have vast configuration possibilities
which can be very overwhelming and much to take in at first. It can complicate
things pretty quickly and take the focus away from what we actually would like
to do, build an App.

There are many frameworks that provide those build tools included which gets you
ready and coding your App in no time. React does not provide any of these tools,
it has the focus only on rendering your UI, how you maintain your build process
is completely up to you.

While many frameworks include a build process, chances are that you get locked-in
with those tools and other framework goodies altogether.

Luckily we can avoid that!

While our choice for React does not bring us any build tools, it does not mean we
have to go through the pain of setting up our own build environment. We are going
to use [create-react-app](https://create-react-app.dev) which offers a modern web
app development setup with pre-configured tools ready to use.

It bundles a set of 'best practice' configured build tools nicely tucked away in
one package which means we have to do less initial learning and cut down
drastically on our project dependencies and setup of configuration files.

This might seem we can end up locked-in with this as well if it were not that we
can eject out from 'under-the-hood' with one command should we ever need to edit
the configuration files ourselves directly or replace any of the build tools.
Ejecting can only be done once, from that point forward you will have to maintain
the build tools yourself. Make sure you have strong arguments for ejecting, the
manual maintenance of the build process is a significant effort.

To get a feel for the difference you can compare this [freshly created](https://github.com/appeltje-c/starter-app/tree/02-starting-your-app)
app against [an ejected app](https://github.com/appeltje-c/starter-app/tree/02-starting-you-app-ejected).

In the ejected app a config and script folder are added containing the configuration
of the build tools and build scripts. The difference in the package.json will tell
you which dependencies were added that normally stay managed for you without ejecting.

We covered some fundamental initial questions and it is time for the fun part,
let's create our app.

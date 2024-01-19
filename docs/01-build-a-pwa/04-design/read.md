---
sidebar_position: 1
---

# Read

> written by [Martijn Benjamin](https://www.linkedin.com/in/martijn-benjamin/) ([appeltje-c](https://github.com/appeltje-c))

Having a consistent user interface design providing a good experience is essential
if you want your users to enjoy using your app. Making controls and layout intuitive,
attractive and predictable helps in the adoption of your app. A user does not
want to study your app, they want to use it.

We want to make our choice for this design early in our project, it helps to have
a clear and structured guide for building our screens from the start. And its a pain
to apply design changes later on when we are well on our way with building features.

To avoid having to reinvent the wheel we look for help in successful projects
where UX designers brought their user experience understanding in interface
improvements that lift the UX of your app to new heights.

Examples of these projects are [Apple Human Interface](https://developer.apple.com/design/)
Guidelines, [Microsoft fluent](https://fluent2.microsoft.design/),
[Atlassian](https://atlassian.design/) and [Google Material](https://m3.material.io/)
Design Systems.

As with most of our App development choices there is something to say for each of
these design systems and guidelines. At the end of the day we are the lucky ones
who get to choose from the best. There are no wrong choices from the list above as
each of them gives you a free box of knowledge delivered by the best UX designers
on the planet.

In our app we will be using the Google Design System.
Read [this to-the-point blog post](https://www.animaapp.com/blog/industry/what-is-material-design-and-why-should-you-use-it/)
for more context.

For ease of following the chapters and their code in these docs I recommend you to follow along
with this choice although you are absolutely free to choose any of the other
design systems!

## Material Design

[Material design](https://m3.material.io/) was released by Google in 2014 and has
been widely adopted by many successful companies and their apps since then.

What this open source project offers goes far beyond coloring your controls or theming
your App. With design principles developed over the years by experience and study
they offer guidelines for interaction, typography, grids, space, scale, color,
and imagery.

The design system provides the structure to create intentional designs with interaction
best practices, responsive layouts and an awesome look & feel.

## Material UI

As Google Material Design itself is not suitable to apply in a React app as-is,
we make use of a library that implements the Material design in React components
called [Material UI](https://mui.com/material-ui)

import MaterialUI from '../../../static/img/04-design/material-ui.png';

<img
 src={MaterialUI}
 alt="material ui"
 width="700"/>

<br/><br/>

Enough context, lets code!

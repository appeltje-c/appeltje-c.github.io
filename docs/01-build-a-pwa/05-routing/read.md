---
sidebar_position: 1
---

# Read

> written
> by [Martijn Benjamin](https://www.linkedin.com/in/martijn-benjamin/) ([appeltje-c](https://github.com/appeltje-c))

We have to provide a way for our users to move between the different parts of the App that serve the functionality we
want to offer. On a traditional website this is done by clicking a link on a webpage that resolves to a server where
the requested page is hosted and returned to the browser as a response.

This type of website navigation is a client/server 'round trip' where the url is the request and the page served is
the response. It's the fundament of how the web has been built.

Although this method works very well, proven by the vast amount of websites around on the web these days, we are using
client side routing to achieve the navigation between screens.

An App built with React is a so called Single Page Application (SPA) which, the name gives it away, has one page rather
than a page for each url. In practise this means you request the url, this loads the webpage with the App in (more or
less) one go. This page with App then sits in the browser and is not refreshed while the App is being used.

This means there is something else going on when navigating from one screen to the other in a React App. You are not
requesting pages, the App is updating the screen to present different content, fully taken care of by Javascript, in our
case, with the help of React.

## Routing

This client side navigation in React is what we call routing. Routing has many of the elements you find with traditional
urls with one big difference, there is not client/server round trip.

There are great routing packages available that do the heavy lifting for us with a lot of the behaviors as we would
expect with traditional use of urls such as deep linking, dynamic urls and sub urls. Those packages also provide you
with different router types to choose from depending on your use case.

## React Router

Although there are some more or less useful alternatives out there,
[React Router](https://github.com/remix-run/react-router) is the widely used and can be seen as the de-facto standard
for routing in React Apps.





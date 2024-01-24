"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9169],{6082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>h,metadata:()=>u,toc:()=>m});var o=n(5893),a=n(1151),s=n(3992),r=n(425);const i=n.p+"assets/images/text-field-6736b00d8b98ee431d34521e7be0e0a7.png",l=n.p+"assets/images/top-menu-a3abbc3b4331353c6f3f115a4d2b17bb.png",c=n.p+"assets/images/app-layout-a80059a5bfc0a862baa53cd932d32291.png",h={sidebar_position:2},d="Code",u={id:"build-a-pwa/design/code",title:"Code",description:"The branch for this chapter can be found here",source:"@site/docs/01-build-a-pwa/04-design/code.md",sourceDirName:"01-build-a-pwa/04-design",slug:"/build-a-pwa/design/code",permalink:"/build-a-pwa/design/code",draft:!1,unlisted:!1,editUrl:"https://github.com/appeltje-c/appeltje-c.github.io/tree/main/docs/01-build-a-pwa/04-design/code.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Read",permalink:"/build-a-pwa/design/read"},next:{title:"Routing",permalink:"/category/routing"}},p={},m=[{value:"Install",id:"install",level:2},{value:"Components",id:"components",level:2},{value:"Theme",id:"theme",level:2},{value:"Remove CSS",id:"remove-css",level:3},{value:"ThemeProvider",id:"themeprovider",level:3},{value:"Custom Font",id:"custom-font",level:3},{value:"Layout Components",id:"layout-components",level:3},{value:"<u>Top Bar</u>",id:"top-bar",level:4},{value:"<u>Bottom Menu</u>",id:"bottom-menu",level:4}];function f(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"code",children:"Code"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The branch for this chapter can be found ",(0,o.jsx)(t.a,{href:"https://github.com/appeltje-c/starter-app/tree/04-design",children:"here"})]})}),"\n",(0,o.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,o.jsx)(t.p,{children:"First of all we start with the installation of the packages we need."}),"\n","\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"yarn",label:"Yarn",default:!0,children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"  yarn add @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material\n"})})}),(0,o.jsx)(r.Z,{value:"npm",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"  npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material\n"})})})]}),"\n",(0,o.jsx)(t.p,{children:"We installed the Material UI base package and the icon package together with support packages for css and the default\nRoboto font."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Material, the material components for React"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://emotion.sh",children:"Emotion"}),", write css styles in Javascript"]}),"\n",(0,o.jsx)(t.li,{children:"Roboto, the default Material UI font"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://fonts.google.com/icons?icon.set=Material+Icons",children:"Material icons"}),", the official Material Icons"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,o.jsxs)(t.p,{children:["Material UI is providing us with a rich set of ",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/all-components/",children:"components"})," that have the\nMaterial Design guidelines applied to them and come with a clean Google like styling out-of-the-box. In other words, as\nsoon as installed you can start using these components."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's add a text (a.k.a. input) field of which you can find comprehensive documentation with examples\n",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/react-text-field/",children:"here"}),". At the bottom of each component documentation page you will find\nan API section which gives you a complete reference to all of the properties and classes available to the component\nmentioned on that page."]}),"\n",(0,o.jsxs)(t.p,{children:["Open ",(0,o.jsx)(t.code,{children:"App.tsx"})," in the components folder and add the TextField import at the top of the file and declare the\nTextField component in the body after the anchor (",(0,o.jsx)(t.code,{children:"</a>"}),") closing tag."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="@components/App.tsx"',children:'import React from \'react\';\nimport \'../styles/App.css\';\nimport { logo } from "@assets";\n// highlight-next-line\nimport { TextField } from "@mui/material";\n\nfunction App () {\n  return (\n    <div className="App">\n      <header className="App-header">\n        <img src={logo} className="App-logo" alt="logo"/>\n        <p>\n          Edit <code>src/App.tsx</code> and save to reload.\n        </p>\n        <a\n          className="App-link"\n          href="https://reactjs.org"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          Learn React\n        </a>\n        // highlight-next-line\n        <TextField label="Outlined" variant="outlined"/>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,o.jsx)(t.p,{children:"The page should refresh since we are running our development server with hot reload."}),"\n",(0,o.jsxs)(t.p,{children:["There you go. An outlined text field with the typical google style appeared ready for use. It has the typical smooth\n'googlish' label action when you click in the field. There is a lot more that has been taken care of than meets the eye,\napart from looking good and having nice interaction features it also works on\n",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/getting-started/supported-platforms/",children:"virtually every browser"}),". Awesome job."]}),"\n","\n",(0,o.jsx)("img",{src:i,alt:"file structure",width:"300"}),"\n",(0,o.jsx)(t.p,{children:"Although we got awesome components to use now, overall it does not look too shabby as the App is using the styling that\nwas created with using create-react-app. Our next job is to change that."}),"\n",(0,o.jsx)(t.h2,{id:"theme",children:"Theme"}),"\n",(0,o.jsx)(t.p,{children:"We could use the theme that comes with Material UI as-is although in reality you most often want to personalize or brand\nthe coloring of your App. Material UI is also supplied with a powerful and complete theming system. In the next steps we\nare going to rearrange things a bit so we can make optimal use of the components, branded theme and custom fonts. We\nalso\ntake our first steps in creating a standard layout which provides some consistency in our screens."}),"\n",(0,o.jsx)(t.p,{children:"Steps to take:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Rearrange files"}),"\n",(0,o.jsx)(t.li,{children:"Create and apply your theme file"}),"\n",(0,o.jsx)(t.li,{children:"Add a custom font"}),"\n",(0,o.jsx)(t.li,{children:"Create our first layout components"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's get to it."}),"\n",(0,o.jsx)(t.h3,{id:"remove-css",children:"Remove CSS"}),"\n",(0,o.jsx)(t.p,{children:"First we get rid of the css files that were created by the create-react-app. Go ahead and delete"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"@styles/App.css"})," and ",(0,o.jsx)(t.code,{children:"@styles/index.css"})]}),"\n",(0,o.jsx)(t.p,{children:"Also remove the css imports"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'title="@components/App.tsx"',children:"import '../styles/App.css';\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'title="src/index.tsx"',children:"import './styles/index.css';\n"})}),"\n",(0,o.jsx)(t.p,{children:"After this the app should be able to compile again without problems. You will notice the App is now without any styling."}),"\n",(0,o.jsx)(t.h3,{id:"themeprovider",children:"ThemeProvider"}),"\n",(0,o.jsx)(t.p,{children:"Next step is to create a theme configuration and add it to our App."}),"\n",(0,o.jsxs)(t.p,{children:["Create ",(0,o.jsx)(t.code,{children:"@styles/index.ts"})," and add our theme options, in this case we indicate to have a default dark mode and\ndefined the primary and secondary colors of our color scheme."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"import {createTheme, ThemeOptions, responsiveFontSizes} from '@mui/material/styles'\n\nconst options: ThemeOptions = {\n    palette: {\n        mode: 'dark',\n        primary: {\n            main: '#64b5f6',\n        },\n        secondary: {\n            main: '#76ff03',\n        },\n    },\n}\n\nexport default responsiveFontSizes(createTheme(options))\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In this theme configuration I chose two colors and opted for dark mode. These are only a few options you can configure\nfor your theme. Material UI provides a vast amount of overrides and configurations you can apply. To help you choose\ncolors and see what it will look like you can use the ",(0,o.jsx)(t.a,{href:"https://zenoo.github.io/mui-theme-creator",children:"Mui Theme Creator"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"To help with your color study here are some useful resources:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/customization/color/#color-palette",children:"Mui Color Palette"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://m3.material.io/styles/color/system/overview",children:"Google Material Design Color System"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"We will get into the different parts of theme options as we progress through building our App."}),"\n",(0,o.jsxs)(t.p,{children:["Now to apply our theme with chosen options in ",(0,o.jsx)(t.code,{children:"@components/App.tsx"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'jsx title="@components/App.tsx"',children:"import React from 'react';\nimport theme from \"@styles\";\nimport {ThemeProvider, TextField, CssBaseline} from \"@mui/material\";\n\nfunction App() {\n    return (\n        <ThemeProvider theme={theme}>\n            <CssBaseline>\n                <TextField variant={'outlined'} label={'Outlined'}/>\n            </CssBaseline>\n        </ThemeProvider>\n    );\n}\n\nexport default App;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We removed the example code that was created for us and replaced it with our ThemeProvider and the\n",(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/getting-started/usage/#cssbaseline",children:"CssBaseline component"})," which serves as a normalization\nof the styles by fixing some inconsistencies across browsers and devices and adds some resets that help a better styling\nfor our Material UI component styles."]}),"\n",(0,o.jsx)(t.p,{children:"Your App now renders with the dark theme and we can see the TextField we kept in the code to see some rendering."}),"\n",(0,o.jsx)(t.p,{children:"Awesome!"}),"\n",(0,o.jsx)(t.h3,{id:"custom-font",children:"Custom Font"}),"\n",(0,o.jsx)(t.p,{children:"We also want to use a font type that matches our theme or branding, at the moment we only have the default Roboto font\nthat is used by Material UI."}),"\n",(0,o.jsx)(t.p,{children:"There are various options to add fonts to your App:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Add CDN link in your html"}),"\n",(0,o.jsx)(t.li,{children:"Local hosting and declare in css"}),"\n",(0,o.jsx)(t.li,{children:"Local hosting and imported in your code"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Although all three options are valid and useful we are going to work with ",(0,o.jsx)(t.a,{href:"https://fontsource.org",children:"Fontsource"}),", an open\nsource project that simplifies self-hosting of fonts in your React project making use of the vast amount of high quality\nfonts Google offers. And with the availability of other open source fonts on top of that my bet is that in this vast\namount of fonts you will find the one you love to use for your App."]}),"\n",(0,o.jsx)(t.p,{children:"We want to self-host to improve performance, making sure which version of the font we are using and we can cache the\nfont for offline use."}),"\n",(0,o.jsxs)(t.p,{children:["So head over to ",(0,o.jsx)(t.a,{href:"https://fontsource.org",children:"https://fontsource.org"})," and choose any of the many fonts available. Remember,\nwe already install Roboto."]}),"\n",(0,o.jsxs)(t.p,{children:["I like the ",(0,o.jsx)(t.a,{href:"https://fontsource.org/fonts/outfit",children:"Outfit"})," font, it's a dynamic and a bit informal font."]}),"\n",(0,o.jsx)(t.p,{children:'We are going to add the "variable font" instead of the static version. These variable fonts allow designers and\ndevelopers\nto use a single font file that contains multiple variations of the same font with as different weights, widths, and\nstyles. This helps to get smaller file sizes and more flexible design options.'}),"\n",(0,o.jsx)(t.p,{children:"So we install the variable font of Outfit (or any of the fonts you may have chosen)."}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"yarn",label:"Yarn",default:!0,children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add @fontsource-variable/outfit\n"})})}),(0,o.jsx)(r.Z,{value:"npm",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install @fontsource-variable/outfit\n"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["To apply the font in our theme as the new default font we add the typography override to our ",(0,o.jsx)(t.code,{children:"@styles/index.ts"}),"\ntheme configuration."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'title="@styles/index.ts"',children:"palette: {\n    // ... palette options  \n}\n,\ntypography: {\n    fontFamily: ['Outfit Variable'].join(',')\n}\n// ... other options\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Where ",(0,o.jsx)(t.code,{children:"'Outfit Variable'"})," is the name of the font you have chosen. Check the TextField in the app and the\nplaceholder text should now be displayed in the font of your choice!"]}),"\n",(0,o.jsx)(t.h3,{id:"layout-components",children:"Layout Components"}),"\n",(0,o.jsx)(t.p,{children:"We are progressing nicely with the setup of the standard elements that we will be using throughout the lifecycle of our\nApp. Until now we only have a 'lost and lonely' TextField in our App which is not very useful and does not look that\ngood."}),"\n",(0,o.jsx)(t.p,{children:"Let's create our first custom components that can provide a 'default' layout we can build upon. You can choose this\nlayout as you see fit of course, to help you along we will create a Top and Bottom Menu similar as you might have seen\nin\nother Apps and serving as a starting point for the menu items that help users navigate our App."}),"\n",(0,o.jsx)(t.p,{children:"There are two main components we will create now, let's call them Top Bar and Bottom Menu."}),"\n",(0,o.jsxs)(t.p,{children:["Create a folder ",(0,o.jsx)(t.code,{children:"layout"})," in ",(0,o.jsx)(t.code,{children:"@components"}),". This folder serves as the grouping of all the reusable layout\nelements for our App. Go ahead and create two new files in this new folder, ",(0,o.jsx)(t.code,{children:"TopBar.tsx"})," and ",(0,o.jsx)(t.code,{children:"BottomMenu.tsx"})]}),"\n",(0,o.jsx)(t.h4,{id:"top-bar",children:(0,o.jsx)("u",{children:"Top Bar"})}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"TopBar.tsx"})," we add this code. Next we will walk through what we added in this file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'jsx title="@components/layout/TopBar.tsx"',children:'import React from \'react\'\nimport MenuIcon from \'@mui/icons-material/Menu\'\nimport AccountIcon from \'@mui/icons-material/AccountCircle\'\nimport {Box, AppBar, Toolbar, IconButton, Typography} from "@mui/material"\n\nfunction TopBar() {\n\n    return (\n        <Box sx={{flexGrow: 1}}>\n            <AppBar position="static">\n                <Toolbar>\n                    <IconButton sx={{mr: 2}}>\n                        <MenuIcon/>\n                    </IconButton>\n                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>\n                        Appeltje-C\n                    </Typography>\n                    <IconButton>\n                        <AccountIcon/>\n                    </IconButton>\n                </Toolbar>\n            </AppBar>\n        </Box>\n    )\n}\n\nexport default TopBar\n'})}),"\n",(0,o.jsx)(t.p,{children:"We created a simple App header with the help of some Material UI components:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("b",{children:(0,o.jsx)(t.a,{href:"https://mui.com/system/react-box/",children:"Box"})}),"\n",(0,o.jsx)(t.p,{children:"The Box component is an often used layout component. To make our screens we will most often use a Grid layout, which\nwe will discuss in detail later. Layout components like Box, Container and Grid help us to position things on screen.\nThey are of vital importance to be able to create a clean, solid and responsive layout."}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("b",{children:(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/react-app-bar",children:"AppBar"})}),"\n",(0,o.jsx)(t.p,{children:"The AppBar is a multi purpose component that usually sits at the top of the screen. It can provide content and actions\nrelated to the current screen, you can use it for branding, showing screen titles and navigation."}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("b",{children:(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/api/toolbar",children:"Toolbar"})}),"\n",(0,o.jsx)(t.p,{children:"The Toolbar is a helper component that aids in adding options in screen the AppBar such as buttons, menu's and\navatars. Here we added a menu, the App title and a user avatar in the Toolbar."}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("b",{children:(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/react-button/#icon-button",children:"IconButton"})}),"\n",(0,o.jsx)(t.p,{children:"As a variant to the standard button we can also use icon buttons which helps making cleaner menu's without labels\nwhere useful."}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("b",{children:(0,o.jsx)(t.a,{href:"https://mui.com/material-ui/react-typography",children:"Typography"})}),"\n",(0,o.jsx)(t.p,{children:"To have your content scale and look consistent it is a good idea to use the Typography component. I used it here to\nadd my github handle/nick in the title bar as App title."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Now go ahead and replace the contents in your ",(0,o.jsx)(t.code,{children:"@components/App.tsx"})," file with this code"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'jsx title="@components/App.tsx"',children:'import React from \'react\';\nimport theme from "@styles";\nimport {ThemeProvider, CssBaseline} from "@mui/material";\nimport TopBar from "@components/layout/TopBar";\n\nfunction App() {\n    return (\n        <ThemeProvider theme={theme}>\n            <CssBaseline>\n                <TopBar/>\n            </CssBaseline>\n        </ThemeProvider>\n    );\n}\n\nexport default App;\n'})}),"\n",(0,o.jsx)(t.p,{children:"And a hot reload brings us this beauty!"}),"\n","\n",(0,o.jsx)("img",{src:l,alt:"top menu",width:"400"}),"\n",(0,o.jsx)(t.p,{children:"Agreed, there is plenty of room for improvements \ud83d\ude01"}),"\n",(0,o.jsx)(t.p,{children:"Let's add the Bottom Menu as well."}),"\n",(0,o.jsx)(t.h4,{id:"bottom-menu",children:(0,o.jsx)("u",{children:"Bottom Menu"})}),"\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"BottomMenu.tsx"})," and add this code"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'jsx title="@components/layout/BottomMenu.tsx"',children:"import React, {useState} from 'react'\nimport HomeIcon from '@mui/icons-material/Home'\nimport PlaceIcon from '@mui/icons-material/Place'\nimport FavoriteIcon from '@mui/icons-material/Favorite'\nimport {BottomNavigation, BottomNavigationAction, Paper} from \"@mui/material\"\n\nfunction BottomMenu() {\n\n    const [value, setValue] = useState(0)\n\n    return (\n        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>\n            <BottomNavigation\n                showLabels\n                value={value}\n                onChange={(event, newValue) => {\n                    setValue(newValue);\n                }}>\n                <BottomNavigationAction label=\"Home\" icon={<HomeIcon/>}/>\n                <BottomNavigationAction label=\"Favorites\" icon={<FavoriteIcon/>}/>\n                <BottomNavigationAction label=\"Map\" icon={<PlaceIcon/>}/>\n            </BottomNavigation>\n        </Paper>\n    )\n}\n\nexport default BottomMenu\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And add it to our ",(0,o.jsx)(t.code,{children:"App.tsx"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'jsx title="@components/App.tsx"',children:'import React from \'react\';\nimport theme from "@styles";\nimport {ThemeProvider, CssBaseline} from "@mui/material";\nimport TopBar from "@components/layout/TopBar";\nimport BottomMenu from "@components/layout/BottomMenu";\n\nfunction App() {\n    return (\n        <ThemeProvider theme={theme}>\n            <CssBaseline>\n                <TopBar/>\n                <BottomMenu/>\n            </CssBaseline>\n        </ThemeProvider>\n    );\n}\n\nexport default App;\n'})}),"\n","\n","\n",(0,o.jsx)("img",{src:c,alt:"app layout",width:"400"}),"\n",(0,o.jsx)(t.p,{children:"Looking good! We now have a 'sticky' navigation menu sitting at the bottom of our App as well. It looks pretty\nclean and check out the transition animations on the buttons, look pretty 'Appy' I would say \ud83d\ude80"}),"\n",(0,o.jsx)(t.p,{children:"The buttons do not navigate anywhere yet, let's dive into that with adding Routing in the next chapter."})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var o=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,r),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7294),a=n(512),s=n(2957),r=n(6550),i=n(1270),l=n(5238),c=n(3609),h=n(2560);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,h.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function j(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==o&&(c(t),r(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:h,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(7294);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
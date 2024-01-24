"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4667],{350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=r(5893),s=r(1151),a=r(3992),i=r(425);const o=r.p+"assets/images/new-file-structure-3b854a9dfa30c8fc09335cc1542e7544.png",l={sidebar_position:2},c="Code",d={id:"build-a-pwa/structure-your-code/code",title:"Code",description:"The branch for this chapter can be found here",source:"@site/docs/01-build-a-pwa/03-structure-your-code/code.md",sourceDirName:"01-build-a-pwa/03-structure-your-code",slug:"/build-a-pwa/structure-your-code/code",permalink:"/build-a-pwa/structure-your-code/code",draft:!1,unlisted:!1,editUrl:"https://github.com/appeltje-c/appeltje-c.github.io/tree/main/docs/01-build-a-pwa/03-structure-your-code/code.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Read",permalink:"/build-a-pwa/structure-your-code/read"},next:{title:"Design",permalink:"/category/design"}},u={},h=[{value:"Create Folders",id:"create-folders",level:2},{value:"Move Files",id:"move-files",level:2},{value:"Assets index file",id:"assets-index-file",level:2},{value:"Create Aliases",id:"create-aliases",level:2},{value:"Install the packages",id:"install-the-packages",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"Test it",id:"test-it",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"code",children:"Code"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The branch for this chapter can be found ",(0,n.jsx)(t.a,{href:"https://github.com/appeltje-c/starter-app/tree/03-structure-your-code",children:"here"})]})}),"\n",(0,n.jsx)(t.h2,{id:"create-folders",children:"Create Folders"}),"\n",(0,n.jsx)(t.p,{children:"Let's start with creating the folders. Change into the src folder in your terminal and run this to create the folders"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"mkdir assets assets/images\n\nmkdir components features language screens styles types utils \n"})}),"\n",(0,n.jsx)(t.p,{children:"(or create them in your IDE)"}),"\n",(0,n.jsx)(t.h2,{id:"move-files",children:"Move Files"}),"\n",(0,n.jsx)(t.p,{children:"There are some files that were created initially that wil now find a new spot."}),"\n",(0,n.jsx)(t.p,{children:"Make sure you update the import declarations or let your IDE do the heavy lifting with refactor functionality."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Move the ",(0,n.jsx)(t.code,{children:"App.tsx"})," that sits in the ",(0,n.jsx)(t.code,{children:"src"})," folder file into the ",(0,n.jsx)(t.code,{children:"components"})," folder. This file will stay at the root of our components."]}),"\n",(0,n.jsxs)(t.li,{children:["Move the ",(0,n.jsx)(t.code,{children:"App.css"})," and ",(0,n.jsx)(t.code,{children:"index.css"})," who also sit in the ",(0,n.jsx)(t.code,{children:"src"})," folder"]}),"\n",(0,n.jsxs)(t.li,{children:["Move the ",(0,n.jsx)(t.code,{children:"logo.svg"})," from the ",(0,n.jsx)(t.code,{children:"src"})," folder to the ",(0,n.jsx)(t.code,{children:"assets/images"})," folder"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"assets-index-file",children:"Assets index file"}),"\n",(0,n.jsxs)(t.p,{children:["As a first example on how we can cleanly organise our assets files we create an ",(0,n.jsx)(t.code,{children:"index.ts"})," in the ",(0,n.jsx)(t.code,{children:"assets"})," folder\nand add the following lines"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import svgLogo from './images/logo.svg'\n\nexport const logo = svgLogo\n"})}),"\n",(0,n.jsx)(t.p,{children:"We import the image file by path and create an export with the preferred name to use throughout the App."}),"\n",(0,n.jsx)(t.p,{children:"This index file enables us to use our assets in the App by using this short and clean import statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'import {logo} from "@assets"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Other than this being nice and short it is easy with refactors, you only have to change the file import in the index file.\nThis is on top of the advantages of packaging your assets files in your builds."}),"\n",(0,n.jsx)(t.p,{children:"For the alias"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'"@assets"\n'})}),"\n",(0,n.jsx)(t.p,{children:"to work we are not there yet! We will take care of that next."}),"\n",(0,n.jsx)(t.h2,{id:"create-aliases",children:"Create Aliases"}),"\n",(0,n.jsx)(t.p,{children:"Now we create an alias for each folder we know is going to be under heavy import use throughout your code."}),"\n",(0,n.jsx)(t.p,{children:"Since we are using create-react-app and we do not want to eject, we are going to use some packages that will help us to\noverride the create-react-app configuration so we can add the alias paths. This ensures that the build process can\nresolve these paths correctly and our code is found and transpiled."}),"\n",(0,n.jsxs)(t.p,{children:["The two packages we use for this are ",(0,n.jsx)(t.a,{href:"https://github.com/timarney/react-app-rewired",children:"react-app-rewired"})," and\n",(0,n.jsx)(t.a,{href:"https://github.com/oklas/react-app-rewire-alias",children:"react-app-rewire-alias"})]}),"\n",(0,n.jsx)(t.h3,{id:"install-the-packages",children:"Install the packages"}),"\n","\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.Z,{value:"yarn",label:"Yarn",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"    yarn add --dev react-app-rewired  react-app-rewire-alias\n"})})}),(0,n.jsx)(i.Z,{value:"npm",label:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"  npm install --save-dev react-app-rewired  react-app-rewire-alias\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--dev"}),"/",(0,n.jsx)(t.code,{children:"--save-dev"})," indicates we only want to add these packages to the development dependencies, the App build will not\nneed them."]}),"\n",(0,n.jsx)(t.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,n.jsx)(t.p,{children:"After the packages are installed we have to add the config for both the build override and your IDE to be able to\nresolve the paths."}),"\n",(0,n.jsxs)(t.p,{children:["Create a file ",(0,n.jsx)(t.code,{children:"config-overrides.js"})," in the root of your project so it sits next to the ",(0,n.jsx)(t.code,{children:"package.json"})," and\n",(0,n.jsx)(t.code,{children:".gitignore"})," files. And add following contents to declare which aliases resolve to their respective source folders."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const { alias } = require('react-app-rewire-alias')\n\nmodule.exports = function override (config) {\n    alias({\n        '@assets': 'src/assets',\n        '@components': 'src/components',\n        '@features': 'src/features',\n        '@language': 'src/language',\n        '@screens': 'src/screens',\n        '@styles': 'src/styles',\n        '@types': 'src/types',\n        '@utils': 'src/utils'\n    })(config)\n\n    return config\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We add a similar configuration in the ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," file"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:' "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n        "@assets": ["src/assets"],\n        "@components": ["src/components"],\n        "@features": ["src/features"],\n        "@language": ["src/language"],\n        "@screens": ["src/screens"],\n        "@styles": ["src/styles"],\n        "@types": ["src/types"],\n        "@utils": ["src/utils"]\n    }\n    // ... other config \n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"After these steps your source tree should look like this"}),"\n","\n","\n",(0,n.jsx)("img",{src:o,alt:"file structure",width:"300"}),"\n",(0,n.jsx)(t.p,{children:"Last change before we can test if our alias is working."}),"\n",(0,n.jsx)(t.p,{children:"In the package.json find the scripts section"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'  // .... other config\n"scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n // .... other config\n'})}),"\n",(0,n.jsxs)(t.p,{children:["and replace on each line ",(0,n.jsx)(t.code,{children:"react-scripts"})," with ",(0,n.jsx)(t.code,{children:"react-app-rewired"}),". The result should look like this"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'  // .... other config\n"scripts": {\n    "start": "react-app-rewired start",\n    "build": "react-app-rewired build",\n    "test": "react-app-rewired test",\n    "eject": "react-app-rewired eject"\n  },\n // .... other config\n'})}),"\n",(0,n.jsxs)(t.p,{children:["restart the development server ",(0,n.jsx)(t.code,{children:"ctrl-c"})," and ",(0,n.jsx)(t.code,{children:"yarn start"}),". The development server will now be started by the\nrewired package first after which our create-react-app scripts are called."]}),"\n",(0,n.jsx)(t.h3,{id:"test-it",children:"Test it"}),"\n",(0,n.jsx)(t.p,{children:"Now we can try if our alias configuration works."}),"\n",(0,n.jsx)(t.p,{children:"Go to the components/App.tsx file and replace"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import logo from '../assets/images/logo.svg'\n"})}),"\n",(0,n.jsx)(t.p,{children:"with"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import {logo} from '@assets'\n"})}),"\n",(0,n.jsx)(t.p,{children:"The App should rebuild and display the spinning React image."}),"\n",(0,n.jsx)(t.p,{children:"Awesome! This will contribute to a cleaner codebase."})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},425:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(512);const s={tabItem:"tabItem_Ymn6"};var a=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},3992:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),s=r(512),a=r(2957),i=r(6550),o=r(1270),l=r(5238),c=r(3609),d=r(2560);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:r,groupId:s}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(1048);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(5893);function b(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(7294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
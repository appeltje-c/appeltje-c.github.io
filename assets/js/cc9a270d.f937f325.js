"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1566],{4596:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var l=i(5893),r=i(1151);const t={},d="Techniques",s={id:"blender/modeling/techniques",title:"Techniques",description:"General Modeling",source:"@site/docs/08-blender/02-modeling/techniques.md",sourceDirName:"08-blender/02-modeling",slug:"/blender/modeling/techniques",permalink:"/blender/modeling/techniques",draft:!1,unlisted:!1,editUrl:"https://github.com/appeltje-c/appeltje-c.github.io/tree/main/docs/08-blender/02-modeling/techniques.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modeling",permalink:"/category/modeling"},next:{title:"Colors",permalink:"/category/colors"}},a={},o=[{value:"General Modeling",id:"general-modeling",level:2},{value:"General Viewing",id:"general-viewing",level:2},{value:"General Tools",id:"general-tools",level:2},{value:"Selecting",id:"selecting",level:2},{value:"Making Pipes",id:"making-pipes",level:2},{value:"Make a hose",id:"make-a-hose",level:2},{value:"Make a hole in a mesh",id:"make-a-hole-in-a-mesh",level:2},{value:"Make a grid (diagonal)",id:"make-a-grid-diagonal",level:2},{value:"Make a grid (Straight)",id:"make-a-grid-straight",level:2},{value:"Cut parts of a mesh",id:"cut-parts-of-a-mesh",level:2},{value:"Using repeaters",id:"using-repeaters",level:2},{value:"Using curbs",id:"using-curbs",level:2},{value:"All 54 modifiers",id:"all-54-modifiers",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"techniques",children:"Techniques"}),"\n",(0,l.jsx)(n.h2,{id:"general-modeling",children:"General Modeling"}),"\n",(0,l.jsx)(n.p,{children:"G   : Move\nS   : Scale"}),"\n",(0,l.jsx)(n.p,{children:"Ctrl+R      : Loopcut\nCMD+SHIFT+B : Bevel"}),"\n",(0,l.jsx)(n.h2,{id:"general-viewing",children:"General Viewing"}),"\n",(0,l.jsx)(n.p,{children:"0       : Camera\n1       : Front\nCtrl+1  : Back\n7       : Top\nCtrl+7  : Bottom\n3       : Left\nCtrl+3  : Right"}),"\n",(0,l.jsx)(n.p,{children:"~3          : Focus selected\nCtrl+Space  : Full screen\n/           : Hide all except selected"}),"\n",(0,l.jsx)(n.h2,{id:"general-tools",children:"General Tools"}),"\n",(0,l.jsx)(n.p,{children:"N       : Tranform\nT       : Modeling tools\nAlt+E   : Extrude Menu\nShift+R : Repeat last action"}),"\n",(0,l.jsx)(n.h2,{id:"selecting",children:"Selecting"}),"\n",(0,l.jsx)(n.p,{children:"Ctrl+B      : Box select\nCrtl+Click  : Select all between selected and clicked\nCtrl+L      : Select all connected\nShift+S     : Cursor placement selection menu"}),"\n",(0,l.jsx)(n.h2,{id:"making-pipes",children:"Making Pipes"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Add a plane"}),"\n",(0,l.jsx)(n.li,{children:"In edit mode delete vertices and keep 1"}),"\n",(0,l.jsx)(n.li,{children:"Model the shape of your pipe by extruding"}),"\n",(0,l.jsx)(n.li,{children:"Select all vertices and choose CMD+SHIFT+B (Bevel)"}),"\n",(0,l.jsx)(n.li,{children:"Switch to Object Mode"}),"\n",(0,l.jsx)(n.li,{children:"Right Click and choose convert to curve"}),"\n",(0,l.jsx)(n.li,{children:"In the Object Data panel on the right, change the round - depth under Bevel"}),"\n",(0,l.jsx)(n.li,{children:"Increase resolution as needed"}),"\n",(0,l.jsx)(n.li,{children:"Convert back to mesh"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Voila, there you have your pipe"}),"\n",(0,l.jsx)(n.h2,{id:"make-a-hose",children:"Make a hose"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Add Curve -> Path"}),"\n",(0,l.jsx)(n.li,{children:"Go to Object Data tab -> Geometry"}),"\n",(0,l.jsx)(n.li,{children:"Add rounding Depth under Bevel"}),"\n",(0,l.jsx)(n.li,{children:"Go into edit mode and move the vertices to shape the hose"}),"\n",(0,l.jsx)(n.li,{children:"E to extrude longer hose"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"make-a-hole-in-a-mesh",children:"Make a hole in a mesh"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Add cylinder in the mesh where you want the hole"}),"\n",(0,l.jsx)(n.li,{children:"Select the mesh that needs to get the hole"}),"\n",(0,l.jsx)(n.li,{children:"Select Boolean from the modifiers menu"}),"\n",(0,l.jsx)(n.li,{children:"Select in the Boolean modifier the cylinder you placed"}),"\n",(0,l.jsx)(n.li,{children:"Apply the modifier and move the cylinder away"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"make-a-grid-diagonal",children:"Make a grid (diagonal)"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Add a plane"}),"\n",(0,l.jsx)(n.li,{children:"Go into edit mode"}),"\n",(0,l.jsx)(n.li,{children:"Subdivide into 10 cuts"}),"\n",(0,l.jsx)(n.li,{children:"Add a Subdivision Surface modifier and"}),"\n",(0,l.jsx)(n.li,{children:"Increase to 2 levels and choose Simple"}),"\n",(0,l.jsx)(n.li,{children:"Add a Decimate modifier"}),"\n",(0,l.jsx)(n.li,{children:"Choose Un-Subdivide and increase Iterations to 1"}),"\n",(0,l.jsx)(n.li,{children:"Add a Wireframe modifier"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"make-a-grid-straight",children:"Make a grid (Straight)"}),"\n",(0,l.jsx)(n.h2,{id:"cut-parts-of-a-mesh",children:"Cut parts of a mesh"}),"\n",(0,l.jsx)(n.h2,{id:"using-repeaters",children:"Using repeaters"}),"\n",(0,l.jsx)(n.h2,{id:"using-curbs",children:"Using curbs"}),"\n",(0,l.jsx)(n.h2,{id:"all-54-modifiers",children:"All 54 modifiers"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://www.youtube.com/watch?v=idcFMhoSdIc",children:"https://www.youtube.com/watch?v=idcFMhoSdIc"})}),"\n",(0,l.jsx)(n.p,{children:"-- Generate Modifiers --"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Array - 0:53"}),"\n",(0,l.jsx)(n.li,{children:"Bevel - 1:03"}),"\n",(0,l.jsx)(n.li,{children:"Boolean - 1:12"}),"\n",(0,l.jsx)(n.li,{children:"Build - 1:23"}),"\n",(0,l.jsx)(n.li,{children:"Decimate - 1:31"}),"\n",(0,l.jsx)(n.li,{children:"Edge Split - 1:39"}),"\n",(0,l.jsx)(n.li,{children:"Geometry Nodes - 1:51"}),"\n",(0,l.jsx)(n.li,{children:"Mask - 2:06"}),"\n",(0,l.jsx)(n.li,{children:"Mirror - 2:13"}),"\n",(0,l.jsx)(n.li,{children:"Subdivision Surface - 2:21"}),"\n",(0,l.jsx)(n.li,{children:"Multiresolution - 2:37"}),"\n",(0,l.jsx)(n.li,{children:"Remesh - 2:47"}),"\n",(0,l.jsx)(n.li,{children:"Screw - 2:58"}),"\n",(0,l.jsx)(n.li,{children:"Skin - 3:12"}),"\n",(0,l.jsx)(n.li,{children:"Solidfy - 3:29"}),"\n",(0,l.jsx)(n.li,{children:"Triangulate - 3:33"}),"\n",(0,l.jsx)(n.li,{children:"Volume to Mesh - 3:40"}),"\n",(0,l.jsx)(n.li,{children:"Weld - 3:49"}),"\n",(0,l.jsx)(n.li,{children:"Wireframe - 4:05"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"-- Deform Modifiers --\n20. Armature - 4:15\n21. Cast - 4:24\n22. Curve - 4:33\n23. Displace - 4:40\n24. Hook - 4:49\n25. Laplacian Deform - 4:58\n26. Lattice - 5:15\n27. Mesh Deform - 5:32\n28. Shrinkwrap - 5:42\n29. Simple Deform - 6:00\n30. Smooth - 6:11\n31. Smooth Corrective - 6:22\n32. Smooth Laplacian - 6:34\n33. Surface Deform - 6:47\n34. Warp - 6:57\n35. Wave - 7:12"}),"\n",(0,l.jsx)(n.p,{children:"-- Physics Modifiers --\n36. Cloth - 7:33\n37. Collision - 7:39\n38. Dynamic Paint - 7:49\n39. Explode - 8:04\n40. Fluid - 8:12\n41. Ocean - 8:18\n42. Particle System - 8:31\n43. Particle Instance - 8:43\n44. Soft Body - 8:58"}),"\n",(0,l.jsx)(n.p,{children:"-- Modify Modifiers --\n45. Data Transfer - 9:10\n46. Mesh Cache - 9:25\n47. Mesh Seq Cache - 9:41\n48. Normal Edit - 9:50\n49. Weighted Normal - 9:58\n50. UV Warp - 10:09\n51. UV Project - 10:23\n52. Vertex Weight Edit - 10:39\n53. Vertex Weight Mix - 10:47\n54. Vertex Weight Proximity - 10:58"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>d});var l=i(7294);const r={},t=l.createContext(r);function d(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);
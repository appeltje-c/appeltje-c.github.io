"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7911],{1989:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>k,contentTitle:()=>j,default:()=>V,frontMatter:()=>w,metadata:()=>y,toc:()=>T});var n=i(5893),a=i(1151);const s=i.p+"assets/images/image-1-879d2f28fb1122eac5c0d99c0d2aa271.png",o=i.p+"assets/images/image-2-3fc7a0461905debd6f32807bd12fc443.png",r=i.p+"assets/images/image-3-59e42a83e10f1f55ffef3dcc6251a6c2.png",c=i.p+"assets/images/image-4-fd28db57ec364c62d5a6bae72d32968d.png",d=i.p+"assets/images/image-5-47a85703e0748e69468df34b64539400.png",h=i.p+"assets/images/image-6-aabaf59175c2b5e7cd8b558b7affaecf.png",l=i.p+"assets/images/image-7-149921b7781d743c42e73eb49c5392d3.png",m=i.p+"assets/images/image-8-9e9221853d050245d7482164fb4ba88d.png",p=i.p+"assets/images/image-9-29cbd1ddd59a3e4be4517e42e6f83efd.png",g=i.p+"assets/images/image-10-2f8bdfead69241b98c980f6f624f6fec.png",b=i.p+"assets/images/image-11-fd8bcef17f8ef989d83189bbbdad91be.png",f=i.p+"assets/images/image-12-466e8c8d1952755038c02b647228b85e.png",u=i.p+"assets/images/image-13-cbde94dfed0e7e055f472e72eb42ca08.png",v=i.p+"assets/images/image-14-068c0cdd13b5da5a27e774bc40d21337.png",x=i.p+"assets/images/image-15-d54461db9b5b02470984e7ae84704c64.png",w={sidebar_position:1},j="Chapter 1 - Essence of linear algebra",y={id:"linear-algebra/intro",title:"Chapter 1 - Essence of linear algebra",description:"transcribed",source:"@site/docs/07-linear-algebra/01-intro.md",sourceDirName:"07-linear-algebra",slug:"/linear-algebra/intro",permalink:"/linear-algebra/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/appeltje-c/appeltje-c.github.io/tree/main/docs/07-linear-algebra/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linear Algebra",permalink:"/category/linear-algebra"},next:{title:"Blender",permalink:"/category/blender"}},k={},T=[{value:"Vector",id:"vector",level:2},{value:"What a Vector is",id:"what-a-vector-is",level:3},{value:"Coordinate System",id:"coordinate-system",level:2},{value:"Axis &amp; Grid",id:"axis--grid",level:3},{value:"Coordinate number pairs",id:"coordinate-number-pairs",level:3},{value:"3 Dimensions",id:"3-dimensions",level:3},{value:"Linear algebra operations",id:"linear-algebra-operations",level:2},{value:"Vector Addition",id:"vector-addition",level:3}];function C(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"chapter-1---essence-of-linear-algebra",children:"Chapter 1 - Essence of linear algebra"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["transcribed\nby ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/martijn-benjamin/",children:"Martijn Benjamin"})," (",(0,n.jsx)(t.a,{href:"https://github.com/appeltje-c",children:"appeltje-c"}),')\nfrom the "Essence of Algebra" ',(0,n.jsx)(t.a,{href:"https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",children:"Video Series"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=fNk_zzaMoSs",children:"Vectors | Chapter 1, Essence of linear algebra"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Working in 3D space involves understanding linear algebra:"}),"\n",(0,n.jsx)(t.p,{children:'"Linear algebra is the branch of mathematics concerning linear equations"'}),"\n",(0,n.jsx)(t.h2,{id:"vector",children:"Vector"}),"\n",(0,n.jsx)(t.p,{children:"The fundamental root-of-it-all building block in linear algebra is the Vector."}),"\n",(0,n.jsx)(t.h3,{id:"what-a-vector-is",children:"What a Vector is"}),"\n",(0,n.jsx)(t.p,{children:"There are three distinct ideas about what a vector is:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)("b",{children:"Physics perspective"}),"\n",(0,n.jsx)(t.p,{children:"Vectors are arrows pointing in space. The vector is defined by its length and the direction it is pointing. As long as\nthese two facts stay the same it is the same vector, wherever you move it around.\nVectors in the flat plane a two-dimensional and those sitting in broader space are three-dimensional."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)("b",{children:"Computer science perspective"}),"\n",(0,n.jsx)(t.p,{children:"Vectors are ordered lists of numbers. In other words, in this context, a vector is simply the name for list and the\nlength of the list gives it it's dimensions. A list of two numbers is a 2 dimensional vector."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)("b",{children:"Mathematical perspective"}),"\n",(0,n.jsx)(t.p,{children:"Generalizes both these physics and computer science views, basically saying that a vector can be anything where\nthere's a sensible notion of adding two vectors and multiplying a vector by a number."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"coordinate-system",children:"Coordinate System"}),"\n",(0,n.jsx)(t.p,{children:"In linear algebra with geometry in mind we can think of a vector as an arrow inside a coordinate system (an xy-plane)\nwith the start of the vector sitting at the origin (0,0). In linear algebra it is almost always the case that the\nvector will be rooted at the origin.\nTo translate these arrows in space to the list of numbers point of view we use the coordinates of the vector."}),"\n","\n",(0,n.jsx)("img",{src:s,alt:"image 1",width:"400"}),"\n",(0,n.jsx)(t.h3,{id:"axis--grid",children:"Axis & Grid"}),"\n",(0,n.jsx)(t.p,{children:"The coordinate system consists of a horizontal line called the x-axis and a vertical line called the y-axis. The place\nwhere they intersect is called the origin (the center of space, the root of all vectors. We add tick marks with the\nsame distance (of choice) on each axis. You can draw lines from these tick marks to create a 2D grid."}),"\n",(0,n.jsx)(t.p,{children:"Grid with tick marks of chosen distance"}),"\n","\n",(0,n.jsx)("img",{src:o,alt:"image 2",width:"400"}),"\n",(0,n.jsx)(t.p,{children:"Extended with gridlines"}),"\n","\n",(0,n.jsx)("img",{src:r,alt:"image 3",width:"400"}),"\n",(0,n.jsx)(t.h3,{id:"coordinate-number-pairs",children:"Coordinate number pairs"}),"\n",(0,n.jsx)(t.p,{children:"The coordinates of a vector is a pair of numbers that tell you how to get from the origin to the tip. The first number\ntells you how far to move on the x-axis with positive moving to the right and negative numbers moving to the left.\nThe second how far on the y-axis with positive numbers moving up and negative numbers moving down."}),"\n","\n",(0,n.jsx)("img",{src:c,alt:"image 4",width:"400"}),"\n",(0,n.jsx)(t.p,{children:"To distinguish vectors from points we write this pair of number vertically with square brackets around them. Every pair\nof numbers gives you one and only one vector and every vector is associated with one and only one pair of numbers."}),"\n",(0,n.jsx)(t.h3,{id:"3-dimensions",children:"3 Dimensions"}),"\n",(0,n.jsx)(t.p,{children:"With three dimensions you add a third axis called the z-axis which is perpendicular to both the x and y axis for which\nwe associate the vector with an ordered triplet of numbers. The first for the x-axis, the second the y-axis and the\nthird the z-axis. Also here, every triplet of numbers gives you one unique vector in space and every vector in space\ngives you exactly one triplet of numbers."}),"\n","\n",(0,n.jsx)("img",{src:d,alt:"image 5",width:"400"}),"\n",(0,n.jsx)(t.h2,{id:"linear-algebra-operations",children:"Linear algebra operations"}),"\n",(0,n.jsx)(t.p,{children:"Every topic in linear algebra centers around vector addition and multiplication by numbers"}),"\n",(0,n.jsx)(t.h3,{id:"vector-addition",children:"Vector Addition"}),"\n",(0,n.jsx)(t.p,{children:"In the next image you see two vectors, one pointing up and a little to the right and the other one pointing right and\ndown a bit."}),"\n",(0,n.jsx)(t.p,{children:"To add these two vectors, move one vector so that it's origin moves on to the tip of the other. Drawing a\nline from the origin to the new tip location of the vector you moved is the sum of the two vectors."}),"\n","\n",(0,n.jsx)("img",{src:h,alt:"image 6",width:"400"}),"\n",(0,n.jsx)(t.p,{children:"This definition of addition is to only time in linear algebra where we let vectors be moved away from their origin."}),"\n",(0,n.jsx)(t.p,{children:"Why do we define addition of vectors this way? Why do we not for example add the two tips of the vectors without\nmoving them?"}),"\n","\n",(0,n.jsx)("img",{src:l,alt:"image 7",width:"400"}),"\n",(0,n.jsx)(t.p,{children:"The way we can think about this is that each vector represents a certain movement in space, a step with a certain\ndistance and direction in space."}),"\n","\n",(0,n.jsx)("img",{src:m,alt:"image 8",width:"300"}),"\n",(0,n.jsx)("img",{src:p,alt:"image 9",width:"300"}),"\n",(0,n.jsx)("img",{src:g,alt:"image 10",width:"300"}),"\n",(0,n.jsx)(t.p,{children:"If you take a step along the first vector and then take a step in the direction and distance described by the\nsecond vector the overall effect is the same as if you moved along the sum of those two vectors."}),"\n","\n",(0,n.jsx)("img",{src:b,alt:"image 11",width:"300"}),"\n",(0,n.jsx)("img",{src:f,alt:"image 12",width:"300"}),"\n",(0,n.jsx)("img",{src:u,alt:"image 13",width:"300"}),"\n",(0,n.jsx)(t.p,{children:"You can think of this as an extension of how we think about adding numbers on a number line."}),"\n",(0,n.jsx)(t.p,{children:"One way we teach about this, say with 2 plus 5, is to think of moving two steps to the right followed by another five\nsteps to the right. The overall effect is the same if you took seven steps to the right."}),"\n","\n",(0,n.jsx)("img",{src:v,alt:"image 14",width:"500"}),"\n",(0,n.jsx)(t.p,{children:"Let's look at how vector addition looks numerically."}),"\n",(0,n.jsx)(t.p,{children:"The first vector has coordinates 1, 2\nThe second vector has coordinates 3, negative 1"}),"\n","\n","\n",(0,n.jsx)("img",{src:x,alt:"image 15",width:"500"}),"\n",(0,n.jsx)(t.p,{children:"When you take the vector sum using the tip to tail method you can think of a four-step path from the origin to the tip\nof the second vector."})]})}function V(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(C,{...e})}):C(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
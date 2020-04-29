(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(222)),a={id:"pMedium",title:"pMedium",sidebar_label:"pMedium"},c={id:"pMedium",title:"pMedium",description:"## 1. Overview",source:"@site/docs/PSQL - pMedium.md",permalink:"/docs/docs/pMedium",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/PSQL - pMedium.md",sidebar_label:"pMedium",sidebar:"someSidebar",previous:{title:"pSmall",permalink:"/docs/docs/pSmall"},next:{title:"pLarge",permalink:"/docs/docs/pLarge"}},l=[{value:"1. Overview",id:"1-overview",children:[{value:"1.1 Architecture",id:"11-architecture",children:[]},{value:"1.2 Assumptions",id:"12-assumptions",children:[]}]},{value:"2. Getting Started",id:"2-getting-started",children:[{value:"2.1 Prerequisites",id:"21-prerequisites",children:[]},{value:"2.2 Deploying",id:"22-deploying",children:[]},{value:"2.3 Testing the database",id:"23-testing-the-database",children:[]}]},{value:"3. Configuring the server",id:"3-configuring-the-server",children:[{value:"3.1 Tweaking Postgres.",id:"31-tweaking-postgres",children:[]},{value:"3.2 Tweaking Connection Pooler.",id:"32-tweaking-connection-pooler",children:[]}]},{value:"4. Keeping it up and running",id:"4-keeping-it-up-and-running",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-overview"},"1. Overview"),Object(i.b)("p",null,"Not all databases are meant to serve millions of customers. Some are for testing and POC. If you have requirement for a debugging database with a small load, you have come to the right place."),Object(i.b)("h3",{id:"11-architecture"},"1.1 Architecture"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.ibb.co/QrnyGtr/PSQL-Type3.jpg",alt:"enter image description here"}))),Object(i.b)("h3",{id:"12-assumptions"},"1.2 Assumptions"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Development with local database."),Object(i.b)("li",{parentName:"ol"},"Development with database on the server with database size less than 5GB or table rows less than a million."),Object(i.b)("li",{parentName:"ol"},"Max memory available is 1GB.")),Object(i.b)("h2",{id:"2-getting-started"},"2. Getting Started"),Object(i.b)("h3",{id:"21-prerequisites"},"2.1 Prerequisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Docker installed"),Object(i.b)("li",{parentName:"ol"},"Docker desktop installed on your local machine")),Object(i.b)("h3",{id:"22-deploying"},"2.2 Deploying"),Object(i.b)("p",null,"Just download the file ",Object(i.b)("inlineCode",{parentName:"p"},"curl -LJO https://https://raw.githubusercontent.com/Samagra-Development/psql-deployment/master/docker/docker-compose.pMedium.yml")," and then ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(i.b)("h3",{id:"23-testing-the-database"},"2.3 Testing the database"),Object(i.b)("p",null,"The simplest way to check if the database is running is,"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"docker ps")," and check if the docker is running ",Object(i.b)("inlineCode",{parentName:"li"},"postgres")," and get the container ID for it,"),Object(i.b)("li",{parentName:"ol"},"Login to your psql console using, ",Object(i.b)("inlineCode",{parentName:"li"},"psql -h localhost -d postgres -U postgres"))),Object(i.b)("p",null,"To connect is to any application, use the port ",Object(i.b)("inlineCode",{parentName:"p"},"6432")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"5432")," to use the connection pooler rather than actual PSQL server instance. This is help you not max out connection and save the database from shutting down due to too many connections. This will also pool the connections for you when you want 100s of running connections as PSQL is not capable of providing 100 connections on its own."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip")," - One more thing that would help is installing ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.pgadmin.org/download/"}),"pgAdmin4")," as and connecting the database to it. It will provide you with monitoring, query editor and GUI to manage your database."),Object(i.b)("h2",{id:"3-configuring-the-server"},"3. Configuring the server"),Object(i.b)("p",null,"Although the default config is good enough for a lot of people, you may want to tweak some of the things."),Object(i.b)("h3",{id:"31-tweaking-postgres"},"3.1 Tweaking Postgres."),Object(i.b)("p",null,"The complete list of options that can be tweaked can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/postgres"}),"here"),". Feel free to change anything."),Object(i.b)("h3",{id:"32-tweaking-connection-pooler"},"3.2 Tweaking Connection Pooler."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Danger")," - We wouldn't recommend you to change anything on this front, but if you feel confident, all the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.pgbouncer.org/config.html"}),"configs")," that are there for pgbouncer are accessible on the docker. You can take a look at the exact values ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/brainsam/pgbouncer/blob/master/entrypoint.sh"}),"here"),"."),Object(i.b)("h2",{id:"4-keeping-it-up-and-running"},"4. Keeping it up and running"),Object(i.b)("p",null,"Since this is local system solution, everytime the system is down, the database is down. Which is ideal while active development is going on. So checking if the docker is still on should be sufficient for this use case. When ever the server is down, ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose restart")," should do the trick."))}p.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(h,c({ref:t},s,{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
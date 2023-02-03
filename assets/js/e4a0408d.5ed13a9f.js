"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(_,l(l({ref:t},c),{},{components:n})):a.createElement(_,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={pagination_next:null,pagination_prev:null,toc_max_heading_level:2},l="Reference",s={unversionedId:"cypress/reference",id:"cypress/reference",title:"Reference",description:"Command-line arguments",source:"@site/docs/cypress/reference.md",sourceDirName:"cypress",slug:"/cypress/reference",permalink:"/cypress/reference",draft:!1,editUrl:"https://github.com/KnapsackPro/docs.knapsackpro.com/tree/main/docusaurus/docs/cypress/reference.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,toc_max_heading_level:2},sidebar:"sidebar"},i={},p=[{value:"Command-line arguments",id:"command-line-arguments",level:2},{value:"<code>KNAPSACK_PRO_LOG_LEVEL</code>",id:"knapsack_pro_log_level",level:2},{value:"Related FAQs",id:"related-faqs",level:3},{value:"<code>KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE</code>",id:"knapsack_pro_test_file_list_source_file",level:2},{value:"<code>KNAPSACK_PRO_TEST_FILE_PATTERN</code>",id:"knapsack_pro_test_file_pattern",level:2},{value:"Related FAQs",id:"related-faqs-1",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("h2",{id:"command-line-arguments"},"Command-line arguments"),(0,r.kt)("p",null,"You can pass all the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/module-api#Options"},"supported Cypress CLI options")," as command-line arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$(npm bin)/knapsack-pro-cypress --browser chrome\n")),(0,r.kt)("p",null,"You can also pass options to Node with environment variables (e.g., ",(0,r.kt)("a",{parentName:"p",href:"/javascript-typescript/troubleshooting/#javascript-heap-out-of-memory"},(0,r.kt)("inlineCode",{parentName:"a"},"--max_old_space_size")),")."),(0,r.kt)("h2",{id:"knapsack_pro_log_level"},(0,r.kt)("inlineCode",{parentName:"h2"},"KNAPSACK_PRO_LOG_LEVEL")),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"info")),(0,r.kt)("p",null,"Available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": critical errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warn"),": warnings (e.g. Fallback Mode has started)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info"),": Knapsack Pro API request response body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verbose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug"),": Knapsack Pro API request headers and body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"silly"))),(0,r.kt)("h3",{id:"related-faqs"},"Related FAQs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-change-log-level"},"How can I change log level?"))),(0,r.kt)("h2",{id:"knapsack_pro_test_file_list_source_file"},(0,r.kt)("inlineCode",{parentName:"h2"},"KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE")),(0,r.kt)("p",null,"File containing the list of tests to run. When ",(0,r.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE")," is set, both ",(0,r.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_PATTERN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_EXCLUDE_PATTERN")," are ignored."),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE=__tests__/fixtures/list.txt\n\n# list.txt\n__tests__/a.test.js\n__tests__/b.test.js\n__tests__/c.test.js\n")),(0,r.kt)("h2",{id:"knapsack_pro_test_file_pattern"},(0,r.kt)("inlineCode",{parentName:"h2"},"KNAPSACK_PRO_TEST_FILE_PATTERN")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to match individual files by adding the suffix (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},".js"),") so that Knapsack Pro can split by file and not by directory.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Knapsack Pro ignores patterns specified as Cypress CLI arguments or Cypress config files.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using Cypress < v10 use ",(0,r.kt)("inlineCode",{parentName:"p"},'"cypress/integration/**/*.{js,jsx,coffee,cjsx}"'),".")),(0,r.kt)("p",null,"Run tests matching a pattern. It can be used in tandem with ",(0,r.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_EXCLUDE_PATTERN"),"."),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},'"cypress/e2e/**/*.{js,jsx,coffee,cjsx}"')),(0,r.kt)("p",null,"Available: anything that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isaacs/node-glob#glob-primer"},"node-glob")," accepts"),(0,r.kt)("p",null,"Hint: you can debug in ",(0,r.kt)("inlineCode",{parentName:"p"},"node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var glob = require("glob")\nvar MY_GLOB="cypress/e2e/**/*.{js,jsx,coffee,cjsx}"\nglob(MY_GLOB, {}, function (err, files) { console.log(files) })\n')),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'KNAPSACK_PRO_TEST_FILE_PATTERN="cypress/e2e/**/*.{js,jsx,coffee,cjsx}"\n\nKNAPSACK_PRO_TEST_FILE_PATTERN="cypress/e2e/**/*.{js,jsx,coffee,cjsx}" \\\nKNAPSACK_PRO_TEST_FILE_EXCLUDE_PATTERN="cypress/e2e/admin/**/*.{js,jsx}"\n')),(0,r.kt)("h3",{id:"related-faqs-1"},"Related FAQs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://knapsackpro.com/faq/question/how-to-run-tests-only-from-specific-directory-in-cypress"},"How to run tests only from a specific directory in Cypress? Define your test files pattern with ",(0,r.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_TEST_FILE_PATTERN")))))}u.isMDXComponent=!0}}]);
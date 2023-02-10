"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),r=a(7294),o=a(3905);const i=e=>{let{src:t}=e;return r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",overflow:"hidden",maxWidth:"100%",height:"auto"}},r.createElement("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))},l={pagination_next:null,pagination_prev:null},s="Queue Mode",u={unversionedId:"ruby/queue-mode",id:"ruby/queue-mode",title:"Queue Mode",description:"Only RSpec >= 3.x, Minitest, and Cucumber are supported. Let us know if you use a different test runner.",source:"@site/docs/ruby/queue-mode.md",sourceDirName:"ruby",slug:"/ruby/queue-mode",permalink:"/ruby/queue-mode",draft:!1,editUrl:"https://github.com/KnapsackPro/docs.knapsackpro.com/tree/main/docusaurus/docs/ruby/queue-mode.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null},sidebar:"sidebar"},p={},c=[{value:"Use Queue Mode",id:"use-queue-mode",level:2},{value:"Dynamic Split vs Fixed Split",id:"dynamic-split-vs-fixed-split",level:2},{value:"Configuration and Troubleshooting",id:"configuration-and-troubleshooting",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queue-mode"},"Queue Mode"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only RSpec >= 3.x, Minitest, and Cucumber are supported. ",(0,o.kt)("a",{parentName:"p",href:"https://knapsackpro.com/contact"},"Let us know")," if you use a different test runner.")),(0,o.kt)("p",null,"Knapsack Pro splits your tests dynamically (Queue Mode) between parallel CI nodes."),(0,o.kt)("p",null,"Each Knapsack Pro Client (parallel CI node):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieves from the Knapsack Pro API a subset of tests to execute"),(0,o.kt)("li",{parentName:"ol"},"Runs those tests"),(0,o.kt)("li",{parentName:"ol"},"Repeats 1. and 2. as long as there are more tests in the API queue"),(0,o.kt)("li",{parentName:"ol"},"Sends the test execution times to the API for the subsequent CI runs")),(0,o.kt)("p",null,"With Queue Mode, Knapsack Pro distributes tests so that each CI node finishes at the same time. Thanks to that, your CI build time is as fast as possible."),(0,o.kt)("p",null,"Knapsack Pro allows distributing the tests in a static way (Regular Mode) too, but it\u2019s rarely a good solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tests themselves, especially end to end, have varying execution times"),(0,o.kt)("li",{parentName:"ul"},"Failing tests execute faster than green ones"),(0,o.kt)("li",{parentName:"ul"},"CI nodes may differ in hardware/performance"),(0,o.kt)("li",{parentName:"ul"},"CI nodes boot at different times"),(0,o.kt)("li",{parentName:"ul"},"CI nodes are more or less busy when the environment is shared/virtualized"),(0,o.kt)("li",{parentName:"ul"},"CI nodes may load their caches at dissimilar times"),(0,o.kt)("li",{parentName:"ul"},"Test execution starts at different times on different CI nodes"),(0,o.kt)("li",{parentName:"ul"},"Flaky tests are.. Well, flaky!")),(0,o.kt)(i,{src:"https://www.youtube.com/embed/hUEB1XDKEFY",mdxType:"YouTube"}),(0,o.kt)("h2",{id:"use-queue-mode"},"Use Queue Mode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new API token from your ",(0,o.kt)("a",{parentName:"p",href:"https://knapsackpro.com/dashboard"},"dashboard")," (to avoid mixing Regular Mode and Queue Mode runs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"RAILS_ENV=test")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"export RAILS_ENV=test"),") on your CI nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_ci_node_build_id"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_CI_NODE_BUILD_ID"))," is set")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configure ",(0,o.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_fixed_queue_split-queue-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FIXED_QUEUE_SPLIT"))," (read below for more details)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With ",(0,o.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_fixed_queue_split-queue-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FIXED_QUEUE_SPLIT=true"))," make sure you either"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Take care of ",(0,o.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_ci_node_retry_count"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_CI_NODE_RETRY_COUNT"))),(0,o.kt)("li",{parentName:"ul"},"Disable Fallback Mode with ",(0,o.kt)("a",{parentName:"li",href:"/ruby/reference/#knapsack_pro_fallback_mode_enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FALLBACK_MODE_ENABLED=false"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run Knapsack Pro in Queue Mode with:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# RSpec >= 3.x\nbundle exec rake knapsack_pro:queue:rspec\n\n# Minitest\nbundle exec rake knapsack_pro:queue:minitest\n\n# Cucumber\nbundle exec rake knapsack_pro:queue:cucumber\n")))),(0,o.kt)("p",null,"Note that Knapsack Pro returns single-file subsets when dealing with test files that haven't been recorded yet. This ensures your CI nodes complete at a similar time. However, if your test runner requires a long time to boot on each subset, it may take longer to run your tests. ",(0,o.kt)("strong",{parentName:"p"},"This applies only to the first Knapsack Pro run ever per API token.")),(0,o.kt)("h2",{id:"dynamic-split-vs-fixed-split"},"Dynamic Split vs Fixed Split"),(0,o.kt)("p",null,"By default, Knapsack Pro generates a Dynamic Split from scratch for each CI build (",(0,o.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_fixed_queue_split-queue-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FIXED_QUEUE_SPLIT=false")),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creates a new queue filled with all the tests to run"),(0,o.kt)("li",{parentName:"ul"},"Distributes the tests to each parallel CI node connected to the queue"),(0,o.kt)("li",{parentName:"ul"},"Removes from the queue the tests that have been run")),(0,o.kt)("p",null,"Parallel CI nodes connect to the same queue and run tests until it's consumed. If a CI node connects late and the queue is empty, it's given an empty list of tests."),(0,o.kt)("p",null,"The behavior described above guarantees the most performant split for each CI build, but it's problematic if your CI allows retrying single CI nodes/jobs. In this case, you want Knapsack Pro to return a Fixed Split (",(0,o.kt)("a",{parentName:"p",href:"/ruby/reference/#knapsack_pro_fixed_queue_split-queue-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"KNAPSACK_PRO_FIXED_QUEUE_SPLIT=true")),"): the retried node gets the same subset of tests that it run previously."),(0,o.kt)("p",null,"If you use spot/preemptible CI nodes like ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/preemptible-vms/"},"Google Cloud Preemptible VMs")," or ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/spot/"},"Amazon EC2 Spot Instances"),", you also want a Fixed Split so that, when a preempted CI node restarts, it re-runs all the previous subset of tests before connecting to the queue to continue with the remaining ones."),(0,o.kt)("p",null,"Altogether, when using Fixed Split, Knapsack Pro:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Checks if ",(0,o.kt)("inlineCode",{parentName:"li"},"(commit hash, branch name, number of nodes)")," was already split",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"YES: Returns to the CI node the subset of tests it run previously"),(0,o.kt)("li",{parentName:"ol"},"YES: Loads the queue with the remaining tests to run"),(0,o.kt)("li",{parentName:"ol"},"NO: Creates a new queue filled with all the tests to run (Dynamic Split)"))),(0,o.kt)("li",{parentName:"ol"},"Distributes the tests to each parallel CI node connected to the queue"),(0,o.kt)("li",{parentName:"ol"},"Removes from the queue the tests that have been run"),(0,o.kt)("li",{parentName:"ol"},"Caches the split for ",(0,o.kt)("inlineCode",{parentName:"li"},"(commit hash, branch name, number of nodes)"))),(0,o.kt)("p",null,"When the Knapsack Pro API finds a previous split (i.) but the queue was already consumed (ii.), it logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[knapsack_pro] {"queue_name"=>nil, "test_files"=>[{"path"=>"spec/previously_executed_spec.rb", "time_execution"=>1.23}]}\n')),(0,o.kt)("p",null,"When the Knapsack Pro API finds a previous split (i.) and remaining tests in the queue (ii.), it logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[knapsack_pro] {"queue_name"=>"retry-dead-ci-node:queue-id", "test_files"=>[{"path"=>"spec/previously_executed_spec.rb", "time_execution"=>1.23}]}\n')),(0,o.kt)("h2",{id:"configuration-and-troubleshooting"},"Configuration and Troubleshooting"),(0,o.kt)("p",null,"You can find additional configurations and troubleshooting on the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ruby/troubleshooting/#debug-knapsack-pro-on-your-development-environmentmachine"},"Knapsack Pro Ruby - Troubleshooting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ruby/rspec/"},"Use Knapsack Pro with RSpec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ruby/cucumber/"},"Use Knapsack Pro with Cucumber")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ruby/capybara/"},"Use Knapsack Pro with Capybara"))))}d.isMDXComponent=!0}}]);
(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[688],{688:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var i=n(791),a=n(87),r=n(187),s=n(184);const c=e=>{let{data:t}=e;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((e=>(0,s.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o,u=e=>{let{data:{name:t,summary:n}}=e;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsx)("header",{children:(0,s.jsx)("h4",{children:t})}),(0,s.jsx)("p",{children:n})]})},d=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Other Experience"})}),t.map((e=>(0,s.jsx)(u,{data:e},"".concat(e.name))))]})};d.defaultProps={data:[]};const m=d;var p=n(892),h=n.n(p),g=n(745);const y=e=>{let{data:{name:t,position:n,url:i,startDate:a,endDate:r,summary:c,highlights:o}}=e;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:i,children:t})," - ",n]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",h()(a).format("MMMM YYYY")," - ",r?h()(r).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,s.jsx)(g.ZP,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,s.jsx)("ul",{className:"points",children:o.map((e=>(0,s.jsx)("li",{children:e},e)))}):null]})},f=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Employment"})}),t.map((e=>(0,s.jsx)(y,{data:e},"".concat(e.name,"-").concat(e.position))))]})};f.defaultProps={data:[]};const v=f,D=e=>{let{handleClick:t,active:n,label:i}=e;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:()=>t(i),children:i})},b=e=>{let{data:t,categories:n}=e;const{category:i,competency:a,title:r}=t,c={background:n.filter((e=>i.includes(e.name))).map((e=>e.color))[0]},o={...c,width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")};return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:c,children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)("div",{className:"skillbar-bar",style:o}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};b.defaultProps={categories:[]};const M=b,S=e=>{let{skills:t,categories:n}=e;const a=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[r,c]=(0,i.useState)(a),o=e=>{const t=Object.keys(r).reduce(((t,n)=>({...t,[n]:e===n&&!r[n]})),{});t.All=!Object.keys(r).some((e=>t[e])),c(t)};return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Skills"})}),(0,s.jsx)("div",{className:"skill-button-container",children:Object.keys(r).map((e=>(0,s.jsx)(D,{label:e,active:r,handleClick:o},e)))}),(0,s.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(r).reduce(((e,t)=>r[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,s.jsx)(M,{categories:n,data:e},e.title)))})()})]})};S.defaultProps={skills:[],categories:[]};const $=S,x=[{school:"Universidad Nacional del Centro de la Provincia de Buenos Aires UNICEN",degree:"B.S. Computer Engineering",link:"https://www.unicen.edu.ar",year:2018}],j=[{name:"MACHINE LEARNING DEVELOPER & DEVOPS",position:"NetKEL Consulting & Grupo Kelsoft",url:"https://grupokelsoft.com/netkel_en/",startDate:"2023-01-15",endDate:"2024-01-21",highlights:["Machine Learning API in Python with NLP engine for entity extraction, sentimentanalysis and summarization.","Integration with Azure and Amazon with applications in Docker containers.","Management of audio streaming APIs and high load real-time processing."]},{name:"Full Stack Engineer",position:"Mercado Libre",url:"https://mercadolibre.com/",startDate:"2021-03-10",endDate:"2023-01-05",highlights:["Engineered AI-powered chatbots using Python and FastAPI, integrating OpenAI technologies tocreate personalized, engaging text and audio assistants for sales, marketing, and customer support.","Developed a security service for healthcare robots, integrating multiple authentication protocols,compliant with industry standards.","Designed a CI/CD pipeline using CircleCI for Google App Engine, boosting deployment reliability.","Demonstrated adaptability across diverse projects, leveraging Python, Django, Flask, AWS, andReact."]},{name:"Full Stack Developer",position:"Freelancer",url:"https://freelancer.com/",startDate:"2018-11-10",endDate:"2022-02-05",summary:"Engaged in diverse projects encompassing Web and Mobile development, Desktop Applications, Data Science, and Machine Learning initiatives.",highlights:["Frontend: HTML, CSS, JavaScript, React.js, Angular, Vue.js","Backend: Node.js, Express, Python, Django, Laravel","Databases: MySQL, MongoDB, PostgreSQL","DevOps: Docker, Kubernetes, Jenkins","Cloud Platforms: AWS, Google Cloud, Azure"]}],k=[{name:"Vehicle Monitoring and Tracking System",summary:"The project aims to provide monitoring and supervision capabilities for afleet of vehicles assigned to custodial functions. It was initiated in 2016and is currently deployed across Argentina, with over 80 mobile devicesactively utilizing the system.\n    As a Full Stack developer, my responsibilities center around themaintenance and updates of the application."},{name:"GPS tracking system - UBISat",summary:"Design user interfaces, develop and implement front-end/back-end systems, and integrating with third-party services. Development of a GPS tracking system for vehicles and assets. Website, Mobile App and Backend development. Development of custom reports for clients, related to different kind of events for vehicles and assets."},{name:"CMS Development",summary:"Responsible for backend and frontend development of theNolo.com portal. Building a custom CMS for the site. Creation andmaintaining of services, integration with 3rd party APIs."},{name:"Backend Developer",summary:"Managing backend development of the Autio.com. Creation andmaintaining of services, integration with 3rd party APIs."}],A=[{title:"Javascript",competency:5,category:["Web Development"]},{title:"Node.JS",competency:5,category:["Web Development"]},{title:"React",competency:5,category:["Web Development"]},{title:"Next.JS",competency:5,category:["Web Development"]},{title:"Bash",competency:4,category:["Tools"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:4,category:["Web Development","Tools"]},{title:"MongoDB",competency:5,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:4,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:5,category:["Web Development","Databases"]},{title:"Redis",competency:4,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Express.JS",competency:5,category:["Web Development"]},{title:"D3",competency:4,category:["Web Development"]},{title:"Flask",competency:4,category:["Web Development"]},{title:"FastAPI",competency:3,category:["Web Development"]},{title:"Git/Mercurial",competency:5,category:["Tools"]},{title:"Kubernetes",competency:4,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:5,category:["Tools","Web Development"]},{title:"Docker",competency:4,category:["Tools","Web Development","Data Engineering"]},{title:"AWS Lambda",competency:4,category:["Tools","Web Development"]},{title:"Numpy",competency:5,category:["Data Science","Data Engineering","ML Engineering"]},{title:"Numba",competency:3,category:["Data Science","Data Engineering"]},{title:"Tensorflow + Keras",competency:4,category:["ML Engineering"]},{title:"PyTorch",competency:4,category:["ML Engineering"]},{title:"Jupyter",competency:4,category:["Data Science"]},{title:"Typescript",competency:5,category:["Web Development"]},{title:"HTML + SASS/SCSS/CSS",competency:5,category:["Web Development"]},{title:"Python",competency:5,category:["ML Engineering"]},{title:"Ruby",competency:5,category:["Web Development"]},{title:"Ruby on Rails",competency:4,category:["Web Development"]},{title:"C++",competency:5,category:["Desktop Application"]},{title:"C#",competency:5,category:["Desktop Application"]},{title:"Electron",competency:5,category:["Desktop Application"]},{title:"MATLAB",competency:3,category:["Data Science","ML Engineering"]},{title:"R",competency:4,category:["Data Science","ML Engineering"]},{title:"Data Visualization",competency:4,category:["Data Science"]},{title:"GraphQL",competency:5,category:["Web Development"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering"]},{title:"Matplotlib",competency:4,category:["Data Engineering","ML Engineering"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering"]},{title:"Spark",competency:3,category:["Data Engineering","ML Engineering"]},{title:"Dagster",competency:3,category:["Data Engineering","ML Engineering"]},{title:"React Native",competency:5,category:["Mobile Application"]},{title:"Flutter",competency:5,category:["Mobile Application"]},{title:"Ionic",competency:5,category:["Mobile Application"]},{title:"Swift",competency:5,category:["Mobile Application"]},{title:"Java",competency:5,category:["Mobile Application"]},{title:"Kotlin",competency:5,category:["Mobile Application"]},{title:"Angular",competency:5,category:["Web Development"]},{title:"Vue",competency:5,category:["Web Development"]},{title:"Asp.net",competency:5,category:["Web Development"]}].map((e=>({...e,category:e.category.sort()}))),N=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],w=[...new Set(A.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:N[t]}))),E={Education:()=>(0,s.jsx)(l,{data:x}),Employment:()=>(0,s.jsx)(v,{data:j}),Experience:()=>(0,s.jsx)(m,{data:k}),Skills:()=>(0,s.jsx)($,{skills:A,categories:w})},L=()=>(0,s.jsx)(r.Z,{title:"Resume",description:"Joaquin Mesias's Resume",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h2",{children:(0,s.jsx)(a.rU,{to:"resume",children:"Resume"})})})}),Object.entries(E).map((e=>{let[t,n]=e;return(0,s.jsx)(n,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",a="second",r="minute",s="hour",c="day",o="week",l="month",u="quarter",d="year",m="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},f=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+f(i,2,"0")+":"+f(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,l),r=n-a<0,s=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-a)/(r?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:m,h:s,m:r,s:a,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},D="en",b={};b[D]=y;var M="$isDayjsObject",S=function(e){return e instanceof k||!(!e||!e[M])},$=function e(t,n,i){var a;if(!t)return D;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(a=r),n&&(b[r]=n,a=r);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var c=t.name;b[c]=t,a=c}return!i&&a&&(D=a),a||!i&&D},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},j=v;j.l=$,j.i=S,j.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[M]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var a=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!(this.$d.toString()===p)},f.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,n){return j.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var n=this,i=!!j.u(t)||t,u=j.p(e),p=function(e,t){var a=j.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?a:a.endOf(c)},h=function(e,t){return j.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,y=this.$M,f=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return i?p(1,0):p(31,11);case l:return i?p(1,y):p(0,y+1);case o:var D=this.$locale().weekStart||0,b=(g<D?g+7:g)-D;return p(i?f-b:f+(6-b),y);case c:case m:return h(v+"Hours",0);case s:return h(v+"Minutes",1);case r:return h(v+"Seconds",2);case a:return h(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var n,o=j.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[c]=u+"Date",n[m]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[s]=u+"Hours",n[r]=u+"Minutes",n[a]=u+"Seconds",n[i]=u+"Milliseconds",n)[o],h=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var g=this.clone().set(m,1);g.$d[p](h),g.init(),this.$d=g.set(m,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[j.p(e)]()},f.add=function(i,u){var m,p=this;i=Number(i);var h=j.p(u),g=function(e){var t=x(p);return j.w(t.date(t.date()+Math.round(e*i)),p)};if(h===l)return this.set(l,this.$M+i);if(h===d)return this.set(d,this.$y+i);if(h===c)return g(1);if(h===o)return g(7);var y=(m={},m[r]=t,m[s]=n,m[a]=e,m)[h]||1,f=this.$d.getTime()+i*y;return j.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=j.z(this),r=this.$H,s=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,a,r){return e&&(e[n]||e(t,i))||a[n].slice(0,r)},m=function(e){return j.s(r%12||12,e,"0")},h=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(g,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return c+1;case"MM":return j.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(r);case"HH":return j.s(r,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return h(r,s,!0);case"A":return h(r,s,!1);case"m":return String(s);case"mm":return j.s(s,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(i,m,p){var h,g=this,y=j.p(m),f=x(i),v=(f.utcOffset()-this.utcOffset())*t,D=this-f,b=function(){return j.m(g,f)};switch(y){case d:h=b()/12;break;case l:h=b();break;case u:h=b()/3;break;case o:h=(D-v)/6048e5;break;case c:h=(D-v)/864e5;break;case s:h=D/n;break;case r:h=D/t;break;case a:h=D/e;break;default:h=D}return p?h:j.a(h)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return b[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),A=k.prototype;return x.prototype=A,[["$ms",i],["$s",a],["$m",r],["$H",s],["$W",c],["$M",l],["$y",d],["$D",m]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,k,x),e.$i=!0),x},x.locale=$,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=b[D],x.Ls=b,x.p={},x}()}}]);
//# sourceMappingURL=688.fd1e8d23.chunk.js.map
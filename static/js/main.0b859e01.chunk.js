(this.webpackJsonpcryptov=this.webpackJsonpcryptov||[]).push([[0],{208:function(e,c,t){},339:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(26),n=t.n(s),r=t(37),i=t(30),l=(t(207),t(27)),j=t(342),o=t(344),d=t(351),h=(t(208),t(43)),b=t(346),u=t(90),x=t(52),O=t(347),p=t(343),m=t(348),v=t(178),g=t.n(v),y=t(109),f=t(40),N={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"d4b8ae53a3mshf13ca8cc610db23p1288c5jsn16f0d83cc581"},w=Object(y.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(f.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:N}}})}}}),C=w.useGetCryptoNewsQuery,k={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"d4b8ae53a3mshf13ca8cc610db23p1288c5jsn16f0d83cc581"},S=function(e){return{url:e,headers:k}},T=Object(y.a)({reducerPath:"cryptoApi",baseQuery:Object(f.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return S("/coins?limit=".concat(e))}}),getExchanges:e.query({query:function(){return S("/exchanges")}}),getCryptoDetails:e.query({query:function(e){return S("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return S("/coin/".concat(c,"/history/").concat(t))}})}}}),P=T.useGetCryptosQuery,E=T.useGetExchangesQuery,F=T.useGetCryptoDetailsQuery,q=T.useGetCryptoHistoryQuery,M=t(341),A=t(4),I=function(){return Object(A.jsx)("div",{className:"loader",children:Object(A.jsx)(M.a,{})})},D=b.a.Option,L=o.a.Text,U=o.a.Title,V="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",H=function(e){var c,t=e.simplified,s=P(100).data,n=Object(a.useState)("cryptocurrency"),r=Object(h.a)(n,2),i=r[0],l=r[1],j=C({newsCategory:i,count:t?6:12}).data;return(null===j||void 0===j?void 0:j.value)?Object(A.jsxs)(u.a,{gutter:[24,24],children:[!t&&Object(A.jsx)(x.a,{span:24,children:Object(A.jsxs)(b.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto Coin",optionFilterProp:"children",onChange:function(e){return l(e)},filterOption:(O.a,function(e){return e.children.toLowerCase().indexOf(O.a.toLowerCase())>=0}),children:[Object(A.jsx)(D,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===s||void 0===s||null===(c=s.data)||void 0===c?void 0:c.coins.map((function(e){return Object(A.jsx)(D,{value:e.name,children:e.name})}))]})}),j.value.map((function(e,c){var t,a,s,n,r,i;return Object(A.jsx)(x.a,{xs:24,sm:12,lg:8,children:Object(A.jsx)(p.a,{hoverable:!0,className:"news-card",children:Object(A.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(A.jsxs)("div",{className:"news-image-container",children:[Object(A.jsx)(U,{className:"news-title",level:4,children:e.name}),Object(A.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||V})]}),Object(A.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(A.jsxs)("div",{className:"provider-container",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)(m.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl)||V,alt:""}),Object(A.jsx)(L,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(A.jsx)(L,{children:g()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]}):Object(A.jsx)(I,{})},Q=t(194),$=t(350),G=t(352),z=t(353),W=t(354),R=t(355),_=t(356),J=t.p+"static/media/cryptocurrency.1548aced.png",Z=function(){var e=Object(a.useState)(!0),c=Object(h.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(null),r=Object(h.a)(n,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){s(!(l<768))}),[l]),Object(A.jsxs)("div",{className:"nav-container",children:[Object(A.jsxs)("div",{className:"logo-container",children:[Object(A.jsx)(m.a,{src:J,size:"large"}),Object(A.jsx)(o.a.Title,{level:1,className:"logo",children:Object(A.jsx)(i.b,{to:"/",children:"CrypTov"})}),Object(A.jsx)(Q.a,{className:"menu-control-container",onClick:function(){return s(!t)},children:Object(A.jsx)(G.a,{})})]}),t&&Object(A.jsxs)($.a,{theme:"dark",children:[Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(z.a,{}),children:Object(A.jsx)(i.b,{to:"/cryptov",children:"Home"})}),Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(W.a,{}),children:Object(A.jsx)(i.b,{to:"/cryptocurrencies",children:"Crypto Coins"})}),Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(R.a,{}),children:Object(A.jsx)(i.b,{to:"/exchanges",children:"Exchanges"})}),Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(_.a,{}),children:Object(A.jsx)(i.b,{to:"/news",children:"News"})})]})]})},B=t(28),Y=t.n(B),K=t(345),X=o.a.Title,ee=function(){var e,c=P(10),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(A.jsx)(I,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(X,{level:2,className:"heading",children:"Global Crypto Coins Stats"}),Object(A.jsxs)(u.a,{children:[Object(A.jsx)(x.a,{span:12,children:Object(A.jsx)(K.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(A.jsx)(x.a,{span:12,children:Object(A.jsx)(K.a,{title:"Total Exchanges",value:Y()(s.totalExchanges)})}),Object(A.jsx)(x.a,{span:12,children:Object(A.jsx)(K.a,{title:"Total Market Cap",value:Y()(s.totalMarketCap)})}),Object(A.jsx)(x.a,{span:12,children:Object(A.jsx)(K.a,{title:"Total 24h Volume",value:Y()(s.total24hVolume)})}),Object(A.jsx)(x.a,{span:12,children:Object(A.jsx)(K.a,{title:"Total Markets",value:Y()(s.totalMarkets)})})]}),Object(A.jsxs)("div",{className:"home-heading-container",children:[Object(A.jsx)(X,{level:2,className:"home-title",children:"Top 10 Crypto Coins in the World"}),Object(A.jsx)(X,{level:3,className:"show-more",children:Object(A.jsx)(i.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(A.jsx)(ge,{simplified:!0}),Object(A.jsxs)("div",{className:"home-heading-container",children:[Object(A.jsx)(X,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(A.jsx)(X,{level:3,className:"show-more",children:Object(A.jsx)(i.b,{to:"/news",children:"Show more"})})]}),Object(A.jsx)(H,{simplified:!0})]})},ce=t(191),te=o.a.Title,ae=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],r=[],i=0;i<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);i++){var l,j;n.push(t.data.history[i].price),r.push(new Date(t.data.history[i].timestamp).toLocaleDateString())}var o={labels:r,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(u.a,{className:"chart-header",children:[Object(A.jsxs)(te,{level:2,className:"chart-title",children:[s," Price Chart"]}),Object(A.jsxs)(x.a,{className:"price-container",children:[Object(A.jsxs)(te,{level:5,className:"price-change",children:[null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(A.jsxs)(te,{level:5,className:"current-price",children:["Current ",s," Price: $",a]})]})]}),Object(A.jsx)(ce.a,{data:o,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},se=t(123),ne=t(349),re=ne.a.Panel,ie=o.a.Text,le=function(){var e,c=E(),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return a?Object(A.jsx)(I,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(u.a,{children:[Object(A.jsx)(x.a,{span:6,children:"Exchanges"}),Object(A.jsx)(x.a,{span:6,children:"24h Trade Volume"}),Object(A.jsx)(x.a,{span:6,children:"Markets"}),Object(A.jsx)(x.a,{span:6,children:"Change"})]}),Object(A.jsx)(u.a,{children:s.map((function(e){return Object(A.jsx)(x.a,{span:24,children:Object(A.jsx)(ne.a,{children:Object(A.jsx)(re,{showArrow:!1,header:Object(A.jsxs)(u.a,{children:[Object(A.jsxs)(x.a,{span:6,children:[Object(A.jsx)(ie,{children:Object(A.jsxs)("strong",{children:[e.rank,"."]})}),Object(A.jsx)(m.a,{className:"exchange-image",src:e.iconUrl}),Object(A.jsx)(ie,{children:Object(A.jsx)("strong",{children:e.name})})]}),Object(A.jsxs)(x.a,{span:6,children:["$",Y()(e.volume)]}),Object(A.jsx)(x.a,{span:6,children:Y()(e.numberOfMarkets)}),Object(A.jsxs)(x.a,{span:6,children:[Y()(e.marketShare),"%"]})]},e.id),children:Object(se.a)(e.description||"")},e.id)})})}))})]})},je=t(357),oe=t(358),de=t(359),he=t(360),be=t(124),ue=t(361),xe=t(197),Oe=b.a.Option,pe=o.a.Title,me=o.a.Text,ve=function(){var e,c=Object(l.f)().coinId,t=Object(a.useState)("7d"),s=Object(h.a)(t,2),n=s[0],r=s[1],i=F(c),j=i.data,o=i.isFetching,d=q({coinId:c,timePeriod:n}).data,O=null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.coin;if(o)return Object(A.jsx)(I,{});var p=[{title:"Price to USD",value:"$ ".concat(O.price&&Y()(O.price)),icon:Object(A.jsx)(je.a,{})},{title:"Rank",value:O.rank,icon:Object(A.jsx)(oe.a,{})},{title:"24h Volume",value:"$ ".concat(O.volume&&Y()(O.volume)),icon:Object(A.jsx)(de.a,{})},{title:"Market Cap",value:"$ ".concat(O.marketCap&&Y()(O.marketCap)),icon:Object(A.jsx)(je.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(Y()(O.allTimeHigh.price)),icon:Object(A.jsx)(he.a,{})}],m=[{title:"Number Of Markets",value:O.numberOfMarkets,icon:Object(A.jsx)(W.a,{})},{title:"Number Of Exchanges",value:O.numberOfExchanges,icon:Object(A.jsx)(R.a,{})},{title:"Aprroved Supply",value:O.approvedSupply?Object(A.jsx)(be.a,{}):Object(A.jsx)(ue.a,{}),icon:Object(A.jsx)(xe.a,{})},{title:"Total Supply",value:"$ ".concat(Y()(O.totalSupply)),icon:Object(A.jsx)(xe.a,{})},{title:"Circulating Supply",value:"$ ".concat(Y()(O.circulatingSupply)),icon:Object(A.jsx)(xe.a,{})}];return Object(A.jsxs)(x.a,{className:"coin-detail-container",children:[Object(A.jsxs)(x.a,{className:"coin-heading-container",children:[Object(A.jsxs)(pe,{level:2,className:"coin-name",children:[O.name," (",O.slug,") Price"]}),Object(A.jsxs)("p",{children:[O.name," live price in US dollars. View value statistics, market cap and supply."]})]}),Object(A.jsx)(b.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(A.jsx)(Oe,{children:e},e)}))}),Object(A.jsx)(ae,{coinHistory:d,currentPrice:Y()(O.price),coinName:O.name}),Object(A.jsxs)(x.a,{className:"stats-container",children:[Object(A.jsxs)(x.a,{className:"coin-value-statistics",children:[Object(A.jsxs)(x.a,{className:"coin-value-statistics-heading",children:[Object(A.jsxs)(pe,{level:3,className:"coin-details-heading ",children:[O.name," Value Statistics"]}),Object(A.jsxs)("p",{children:["An overview showing the stats of ",O.name]})]}),p.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(A.jsxs)(x.a,{className:"coin-stats",children:[Object(A.jsxs)(x.a,{className:"coin-stats-name",children:[Object(A.jsx)(me,{children:c}),Object(A.jsx)(me,{children:t})]}),Object(A.jsx)(me,{className:"stats",children:a})]})}))]}),Object(A.jsxs)(x.a,{className:"other-stats-info",children:[Object(A.jsxs)(x.a,{className:"coin-value-statistics-heading",children:[Object(A.jsx)(pe,{level:3,className:"coin-details-heading ",children:"Other Statistics"}),Object(A.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),m.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(A.jsxs)(x.a,{className:"coin-stats",children:[Object(A.jsxs)(x.a,{className:"coin-stats-name",children:[Object(A.jsx)(me,{children:c}),Object(A.jsx)(me,{children:t})]}),Object(A.jsx)(me,{className:"stats",children:a})]})}))]})]}),Object(A.jsxs)(x.a,{className:"coin-desc-link",children:[Object(A.jsx)(u.a,{className:"coin-desc",children:Object(A.jsxs)(pe,{level:3,className:"coin-details-heading",children:["What is ",O.name,"?",Object(se.a)(O.description)]})}),Object(A.jsxs)(x.a,{className:"coin-links",children:[Object(A.jsxs)(pe,{level:3,className:"coin-details-heading",children:[O.name," Links"]}),O.links.map((function(e){return Object(A.jsxs)(u.a,{className:"coin-link",children:[Object(A.jsx)(pe,{level:5,className:"link-name",children:e.type}),Object(A.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},ge=function(e){var c=e.simplified,t=P(c?10:100),s=t.data,n=t.isFetching,r=Object(a.useState)([]),l=Object(h.a)(r,2),j=l[0],o=l[1],d=Object(a.useState)(""),b=Object(h.a)(d,2),m=b[0],v=b[1];return Object(a.useEffect)((function(){var e,c=null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));o(c)}),[s,m]),n?Object(A.jsx)(I,{}):Object(A.jsxs)(A.Fragment,{children:[!c&&Object(A.jsx)("div",{className:"search-crypto",children:Object(A.jsx)(O.a,{placeholder:"Search Crypto Coin",onChange:function(e){return v(e.target.value)}})}),Object(A.jsx)(u.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(A.jsx)(x.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(A.jsx)(i.b,{to:"/crypto/".concat(e.id),children:Object(A.jsxs)(p.a,{title:"".concat(e.rank," ").concat(e.name),extra:Object(A.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(A.jsxs)("p",{children:["Price: ",Y()(e.price)]}),Object(A.jsxs)("p",{children:["Market Cap: ",Y()(e.marketCap)]}),Object(A.jsxs)("p",{children:["Daily Change: ",Y()(e.change),"%"]})]})})},e.id)}))})]})};var ye,fe=function(){return Object(A.jsxs)("div",{className:"app",children:[Object(A.jsx)("div",{className:"navbar",children:Object(A.jsx)(Z,{})}),Object(A.jsxs)("div",{className:"main",children:[Object(A.jsx)(j.a,{children:Object(A.jsx)("div",{className:"routes",children:Object(A.jsxs)(l.c,{children:[Object(A.jsx)(l.a,{exact:!0,path:"/cryptov",children:Object(A.jsx)(ee,{})}),Object(A.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(A.jsx)(le,{})}),Object(A.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(A.jsx)(ge,{})}),Object(A.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(A.jsx)(ve,{})}),Object(A.jsx)(l.a,{exact:!0,path:"/news",children:Object(A.jsx)(H,{})})]})})}),Object(A.jsxs)("div",{className:"footer",children:[Object(A.jsx)(o.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:Object(A.jsxs)("a",{href:"https://www.linkedin.com/in/arik-alexandrov/",target:"_blank",rel:"noopener noreferrer",children:["\xa9arikxl ",(new Date).getFullYear()]})}),Object(A.jsxs)(d.b,{children:[Object(A.jsx)(i.b,{to:"/cryptov",children:"Home"}),Object(A.jsx)(i.b,{to:"/exchanges",children:"Exchanges"}),Object(A.jsx)(i.b,{to:"news",children:"News"})]})]})]})]})},Ne=t(29),we=t(11),Ce=Object(we.a)({reducer:(ye={},Object(Ne.a)(ye,T.reducerPath,T.reducer),Object(Ne.a)(ye,w.reducerPath,w.reducer),ye)});n.a.render(Object(A.jsx)(i.a,{children:Object(A.jsx)(r.a,{store:Ce,children:Object(A.jsx)(fe,{})})}),document.getElementById("root"))}},[[339,1,2]]]);
//# sourceMappingURL=main.0b859e01.chunk.js.map
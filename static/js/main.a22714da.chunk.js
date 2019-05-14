(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a(338)},146:function(e,t){e.exports={address:"0xa4f1032d9b1485b9384f7061d95c732edb9c1527",abi:[{constant:!0,inputs:[{name:"user",type:"address"}],name:"getCustomerLedgerLength",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"fee",type:"uint256"}],name:"setEscrowFee",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"TransactionLedger",outputs:[{name:"customer",type:"address"},{name:"merchant",type:"address"},{name:"escrowAgent",type:"address"},{name:"value",type:"uint256"},{name:"escrowFee",type:"uint256"},{name:"status",type:"uint8"},{name:"notes",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"EscrowFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"user",type:"address"}],name:"getEscrowLedgerLength",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"txid",type:"uint256"}],name:"getTransaction",outputs:[{name:"customer",type:"address"},{name:"merchant",type:"address"},{name:"escrow",type:"address"},{name:"escrowFee",type:"uint256"},{name:"value",type:"uint256"},{name:"status",type:"uint8"},{name:"notes",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"EscrowLedger",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"}],name:"releaseFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"}],name:"refundCustomer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"}],name:"raiseDispute",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"user",type:"address"}],name:"getMerchantLedgerLength",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"CustomerLedger",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_merchant",type:"address"},{name:"_escrowAgent",type:"address"},{name:"_notes",type:"string"}],name:"createPayment",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"Funds",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"MerchantLedger",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!0,name:"merchant",type:"address"},{indexed:!0,name:"escrowAgent",type:"address"},{indexed:!1,name:"id",type:"uint256"},{indexed:!1,name:"value",type:"uint256"}],name:"PaymentCreation",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!0,name:"merchant",type:"address"},{indexed:!0,name:"escrowAgent",type:"address"},{indexed:!1,name:"id",type:"uint256"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"status",type:"uint8"}],name:"PaymentCompletion",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!0,name:"merchant",type:"address"},{indexed:!0,name:"escrowAgent",type:"address"},{indexed:!1,name:"id",type:"uint256"},{indexed:!1,name:"value",type:"uint256"}],name:"PaymentDispute",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"user",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Withdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],escrowAddress:"0xa20b04647F5A0099E71Cf4AFE5c7eCFb2EA86f45",profile_abi:[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_info",type:"string"}],name:"SetProfile",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"user",type:"address"}],name:"getProfileLength",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"ProfileDB",outputs:[{name:"name",type:"string"},{name:"info",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],profile_address:"0xE54C0168D2e75c7F68fcf40b0aB5793115Dd2a92",page_size:5}},217:function(e,t){},219:function(e,t){},247:function(e,t){},249:function(e,t){},280:function(e,t){},281:function(e,t){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(137),r=a.n(l);a(82),a(145),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(15),c=a(31),m=a(5),o=a(6),u=a(8),d=a(7),p=a(9);a(50),a(146);var b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={modal:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("div",{className:"container box",style:{width:550}},s.a.createElement("p",null,"Set API Key"),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label has-text-left"},"Api Key"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"password",id:"key"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-key"}))),s.a.createElement("br",null)),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label has-text-left"},"Api Secret"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"password",id:"secret"}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-lock"}))),s.a.createElement("br",null)),s.a.createElement("div",{className:"buttons is-centered"},s.a.createElement("a",{className:"button is-primary is-info",onClick:function(){e.setState({modal:""})}},"Set Session API and Hide")),s.a.createElement("hr",null),s.a.createElement("p",{className:"is-size-7 has-text-left"},"Your API Key and secret is temporarily stored in the current browser session and is deleted once you close the tab",s.a.createElement("br",null),"It is only used to sign your orders for submission to Gemini's API and are not stored on our servers.",s.a.createElement("br",null),s.a.createElement("br",null),"Do not give your API keys withdrawl permissions."))),a=s.a.createElement("div",{className:"modal ".concat(this.state.modal)},s.a.createElement("div",{className:"modal-background",onClick:function(){return e.setState({modal:""})}}),s.a.createElement("div",{className:"modal-content"},t),s.a.createElement("button",{className:"modal-close is-large",onClick:function(){return e.setState({modal:""})}}));return s.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},a,s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement(i.b,{to:"/"},s.a.createElement("a",{className:"navbar-item"},"G-Interface"))),s.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement("a",{className:"navbar-link"},"Buy"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(i.b,{to:"/dashboard?side=buy&symbol=BTCUSD"},s.a.createElement("a",{className:"navbar-item"},"BTCUSD")),s.a.createElement(i.b,{to:"/dashboard?side=buy&symbol=ETHUSD"},s.a.createElement("a",{className:"navbar-item"},"ETHUSD")))),s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement("a",{className:"navbar-link"},"Sell"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(i.b,{to:"/dashboard?side=sell&symbol=BTCUSD"},s.a.createElement("a",{className:"navbar-item"},"BTCUSD")),s.a.createElement(i.b,{to:"/dashboard?side=sell&symbol=ETHUSD"},s.a.createElement("a",{className:"navbar-item"},"ETHUSD"))))),s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("a",{className:"buttons"},this.props.switch_mode_button,s.a.createElement("a",{className:"navbar-item button is-info",onClick:function(){return e.setState({modal:"is-active"})}},"Set API Key"))))))}}]),t}(n.Component),h=(a(155),a(237),a(238),["ETHUSD","BTCUSD"]),y=["buy","sell"],E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={display:0,tob_bid:"Loading",tob_ask:"Loading",ask_price:[],ask_size:[],bid_price:[],bid_size:[],side:"",symbol:"",api_txt:"",is_sandbox:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href,a=new URL(t),n=a.searchParams.get("symbol"),s=a.searchParams.get("side");-1!==h.indexOf(n)&&-1!==y.indexOf(s)||(window.location.href="/"),this.setState({side:s,symbol:n}),this.loadData(n,s),setInterval(function(){e.checkUrlChange()},800)}},{key:"loadData",value:function(e,t){var a=this,n="https://api.gemini.com/v1/book/".concat(e,"?limit_bids=10&limit_asks=10");fetch(n).then(function(e){return e.json()}).then(function(e){for(var t=[],n=[],s=0;s<e.asks.length;s++)t.push(e.asks[s].price),n.push(e.asks[s].amount);for(var l=[],r=[],i=0;i<e.bids.length;i++)l.push(e.bids[i].price),r.push(e.bids[i].amount);a.setState({tob_ask:e.asks[0].price,tob_bid:e.bids[0].price,ask_price:t,ask_size:n,bid_price:l,bid_size:r}),document.getElementById("price").value=e.bids[0].price})}},{key:"checkUrlChange",value:function(){var e=window.location.href,t=new URL(e),a=t.searchParams.get("symbol"),n=t.searchParams.get("side"),s=!1;null!==t.searchParams.get("test")&&(s=!0),-1!==h.indexOf(a)&&-1!==y.indexOf(n)||(window.location.href="/"),a===this.state.symbol&&n===this.state.side&&s===this.state.is_sandbox||(this.loadData(a,n),this.setState({side:n,symbol:a,is_sandbox:s}))}},{key:"render",value:function(){var e,t,a=this,n="/dashboard?side=".concat(this.state.side,"&symbol=").concat(this.state.symbol);return!0===this.state.is_sandbox?(t=s.a.createElement("a",{className:"button is-danger",href:n},"Switch to Live Exchange"),e=s.a.createElement("p",{className:"has-text-primary"},"Sandbox mode. Orders are sent to\xa0",s.a.createElement("a",{href:"https://exchange.sandbox.gemini.com/",target:"_blank"},"Gemini Sandbox"),". For issues/feedback, leave a message on ",s.a.createElement("a",{href:"https://www.reddit.com/r/Ginterface/",target:"_blank"},"Reddit")," or",s.a.createElement("a",{href:"https://discord.gg/PUhw59",target:"_blank"},"\xa0Discord"),".")):(n+="&test=true",t=s.a.createElement("a",{className:"button is-info",href:n},"Switch to Sandbox Exchange"),e=s.a.createElement("p",{className:"has-text-primary"},"Live Exchange. Please keep your API key secure, and ensure they do not have withdraw permissions.")),s.a.createElement("div",null,s.a.createElement(b,{switch_mode_button:t}),s.a.createElement("section",{className:"section"},e,s.a.createElement("br",null),s.a.createElement("div",{className:"container",style:{width:1500}},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-one-third"},s.a.createElement(f,{symbol:this.state.symbol,side:this.state.side,bid:this.state.tob_bid,ask:this.state.tob_ask,is_sandbox:this.state.is_sandbox})),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"box"},s.a.createElement(v,{symbol:this.state.symbol,tob_ask:this.state.tob_ask,tob_bid:this.state.tob_bid,ask_price:this.state.ask_price,ask_size:this.state.ask_size,bid_price:this.state.bid_price,bid_size:this.state.bid_size}),s.a.createElement("br",null),s.a.createElement("button",{className:"button is-info",onClick:function(){return a.loadData(a.state.symbol,a.state.side)}},"Reload Orderbook")))))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={total:"--"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"checkAmountInputText",value:function(){var e=document.getElementById("price").value;return String(parseFloat(e))===e&&String(parseFloat(e))>0}},{key:"onPriceChange",value:function(){document.getElementById("total").value=Math.trunc(parseFloat(document.getElementById("qty").value)*parseFloat(document.getElementById("price").value)*100)/100,this.setState({total:parseFloat(document.getElementById("total").value)})}},{key:"onQtyChange",value:function(){document.getElementById("total").value=Math.trunc(parseFloat(document.getElementById("qty").value)*parseFloat(document.getElementById("price").value)*100)/100,this.setState({total:parseFloat(document.getElementById("total").value)})}},{key:"onTotalChange",value:function(){document.getElementById("qty").value=Math.trunc(100*parseFloat(document.getElementById("total").value)/parseFloat(document.getElementById("price").value)),this.setState({total:parseFloat(document.getElementById("total").value)})}},{key:"onOrderSubmission",value:function(){var e=parseFloat(document.getElementById("qty").value),t=parseFloat(document.getElementById("price").value),a=document.getElementById("key").value,n=document.getElementById("secret").value;if(isNaN(e)||isNaN(t)||0===e||0===t)this.setState({api_txt:"Invalid amount or price"});else if(""!==a&&""!==n){this.setState({api_txt:""});var s={key:a,secret:n,symbol:this.props.symbol,amount:e,price:t,side:this.props.side,type:"exchange limit"};console.log(this.props.is_sandbox),!0===this.props.is_sandbox&&(s.test=0),fetch("http://127.0.0.1:2222/ordersubmit",{method:"POST",body:JSON.stringify(s),mode:"no-cors",cache:"no-cache",headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){return console.log("Success:",e)}).catch(function(e){return console.error("Error:",e)})}else this.setState({api_txt:"API Key is not set"})}},{key:"render",value:function(){var e,t=this;return e="ETHUSD"===this.props.symbol?"fab fa-ethereum":"fab fa-bitcoin",s.a.createElement("div",{className:"box"},s.a.createElement("p",{className:"is-size-4 has-text-weight-semibold"},this.props.side.charAt(0).toUpperCase()+this.props.side.slice(1)," ",this.props.symbol),s.a.createElement("br",null),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label has-text-left"},"Order Type"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select is-fullwidth"},s.a.createElement("select",null,s.a.createElement("option",null,"Limit"))))),s.a.createElement("br",null),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label has-text-left"},"Price"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"text",id:"price",onChange:function(){return t.onPriceChange()}}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-dollar-sign"}))),s.a.createElement("br",null)),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label has-text-left"},"Quantity"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"text",id:"qty",onChange:function(){return t.onQtyChange()}}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:e}))),s.a.createElement("br",null)),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label has-text-left"},"Total"),s.a.createElement("div",{className:"control has-icons-left has-icons-right"},s.a.createElement("input",{className:"input",type:"text",id:"total",onChange:function(){return t.onTotalChange()}}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-dollar-sign"}))),s.a.createElement("br",null)),s.a.createElement("table",{className:"is-fullwidth table"},s.a.createElement("tr",{className:"is-size-7"},s.a.createElement("td",null,"Order"),s.a.createElement("td",{className:"has-text-right"},"--"==this.state.total?"--":"$".concat(this.state.total))),s.a.createElement("tr",{className:"is-size-7"},s.a.createElement("td",null,"Fees"),s.a.createElement("td",{className:"has-text-right"},"--"==this.state.total?"--":"$".concat(Math.trunc(this.state.total)/1e3))),s.a.createElement("tr",{className:"is-size-7"},s.a.createElement("td",null,"Total"),s.a.createElement("td",{className:"has-text-right"},"--"==this.state.total?"--":"$".concat(Math.trunc(this.state.total)/1e3+this.state.total)))),s.a.createElement("button",{className:"button is-fullwidth is-medium is-primary",onClick:function(){return t.onOrderSubmission()}},this.props.side.charAt(0).toUpperCase()+this.props.side.slice(1)),s.a.createElement("p",{className:"help is-danger"},this.state.api_txt))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.ask_price.length;t++)e.push(s.a.createElement("tr",{key:"".concat(this.props.bid_price[t]).concat(this.props.ask_price[t])},s.a.createElement("td",null,this.props.bid_size[t]),s.a.createElement("td",null,this.props.bid_price[t]),s.a.createElement("td",null,this.props.ask_price[t]),s.a.createElement("td",null,this.props.ask_size[t])));return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("nav",{className:"level"},s.a.createElement("div",{className:"level-left"},s.a.createElement("div",{className:"level-item"},s.a.createElement("p",{className:"is-size-5"},this.props.symbol," Orderbook"))),s.a.createElement("div",{className:"level-right"},s.a.createElement("div",{className:"level-item"},s.a.createElement("p",{className:"is-size-7"},"Top Bid: ",this.props.tob_bid,s.a.createElement("br",null),"Top Ask: ",this.props.tob_ask,s.a.createElement("br",null),"Showing 10 levels")))),s.a.createElement("table",{className:"table is-fullwidth"},s.a.createElement("thead",null,s.a.createElement("th",null,"Bid ",this.props.symbol.slice(0,3)," Amount"),s.a.createElement("th",null,"Bid Price"),s.a.createElement("th",null,"Ask Price"),s.a.createElement("th",null,"Ask ",this.props.symbol.slice(0,3)," Amount")),s.a.createElement("tbody",null,e))),s.a.createElement("br",null),s.a.createElement("p",{className:"is-size-7"},"Data from:",s.a.createElement("a",{href:"https://api.gemini.com/v1/book/".concat(this.props.symbol),target:"_blank",className:"is-size-7"},"\xa0https://api.gemini.com/v1/book/",this.props.symbol)))}}]),t}(n.Component),g=E,N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).handleAddress=function(e){a.setState({address:e})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,null))}}]),t}(n.Component),w=(n.Component,function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"hero is-fullheight is-default is-bold"},s.a.createElement("div",{className:"hero-head"},s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("p",{className:"navbar-item"},"G-Interface"),s.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenu"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{id:"navbarMenu",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"tabs is-right"},s.a.createElement("ul",null,s.a.createElement("li",{className:"is-active"},s.a.createElement(i.b,{to:"/dashboard?side=buy&symbol=ETHUSD"},"Trading Dashboard"))))))))),s.a.createElement(k,null),s.a.createElement(O,null),s.a.createElement(x,null),s.a.createElement(_,null))}}]),t}(n.Component)),k=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("div",{className:"columns is-vcentered"},s.a.createElement("div",{className:"column is-5"},s.a.createElement("figure",{className:"image"},s.a.createElement("img",{src:"https://user-images.githubusercontent.com/24837709/57173766-65caff00-6e67-11e9-9060-52b7a65e5dce.jpg",alt:"Description"}))),s.a.createElement("div",{className:"column is-6 is-offset-1"},s.a.createElement("h1",{className:"subtitle is-3"},"Trade on Gemini with 0.1% Fees"),s.a.createElement("p",null,"A web dashboard that links to ",s.a.createElement("a",{href:"https://gemini.com/fix-api-trading-fee-schedule/#fix--api-trading-fee-schedule"},"Gemini's API interface"),".",s.a.createElement("br",null),"Instead of 2% fees (1% for ActiveTrader accounts), trades via Gemini API are charged just ",s.a.createElement("br",null)," 0.1%/0.35% for Maker/Taker fee"),s.a.createElement("br",null),s.a.createElement("p",{className:"has-text-centered"},s.a.createElement(i.b,{to:"/dashboard?side=buy&symbol=ETHUSD"},s.a.createElement("p",{className:"button is-medium is-info is-outlined"},"Enter Trading Dashboard")))))))}}]),t}(n.Component),x=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"container"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("h1",null,"Benefits of Gemini Interface")),s.a.createElement("div",{className:"columns features"},s.a.createElement("div",{className:"column is-4"},s.a.createElement("div",{className:"card is-shady"},s.a.createElement("div",{className:"card-image has-text-centered"}),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"content"},s.a.createElement("h4",null,"20x Lower Fees"),s.a.createElement("p",null,"Pay the standard API fee rate of 0.1%/0.35% for maker/taker orders, instead of 1% for ActiveTrader accounts, 2% for standard accounts",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null)))))),s.a.createElement("div",{className:"column is-4"},s.a.createElement("div",{className:"card is-shady"},s.a.createElement("div",{className:"card-image has-text-centered"}),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"content"},s.a.createElement("h4",null,"Freely place small orders"),s.a.createElement("p",null,"Orders less than $10 are charged a fix $0.99 fee on Gemini's website.",s.a.createElement("br",null),s.a.createElement("br",null),"With our dashboard, the fees are just 0.1%, or $0.01, a 99x saving. It allows you to freely scale in and out of orders in small quantities and DCA more effectively.",s.a.createElement("br",null),s.a.createElement("br",null)))))),s.a.createElement("div",{className:"column is-4"},s.a.createElement("div",{className:"card is-shady"},s.a.createElement("div",{className:"card-image has-text-centered"}),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"content"},s.a.createElement("h4",null,"Secure web interface"),s.a.createElement("p",null,"This website is simply a static user interface that passes on your inputs to Gemini's API, and display data from",s.a.createElement("a",{href:"https://api.gemini.com/v1/book/ethusd"}," Gemini's price feeds")," to you. Similar to MyEtherWallet, we do not store your API and private keys.",s.a.createElement("br",null),s.a.createElement("br",null),"You can also download a copy of our dashboard to run on your computer.")))))),s.a.createElement("br",null))}}]),t}(n.Component),O=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("div",{className:"columns is-vcentered is-centered"},s.a.createElement("div",{className:"column is-7"},s.a.createElement("h1",{className:"title is-3"},"About Gemini Interface"),s.a.createElement("h2",{className:"subtitle is-5"}),s.a.createElement("p",null,"Gemini Interface is a web dashboard that links to Gemini exchange's API. It supports standard features you are familar with, like Market/Limit Orders, but with fees of just 0.1%/0.35% for liquidity making/taking orders.",s.a.createElement("br",null),s.a.createElement("br",null),"Gemini Interface is free to use."),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Gemini API fees"),s.a.createElement("br",null),s.a.createElement("a",{href:"https://gemini.com/fix-api-trading-fee-schedule/#fix--api-trading-fee-schedule",target:"_blank"},"https://gemini.com/fix-api-trading-fee-schedule/#fix--api-trading-fee-schedule"),s.a.createElement("img",{src:"https://user-images.githubusercontent.com/24837709/57578906-0acc8400-74c7-11e9-9d0c-80abb06544f4.png"})))))}}]),t}(n.Component),_=(n.Component,function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hero-body bg-lb"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("h1",{className:"title is-3"},"Contact Us"),s.a.createElement("p",null,"Feel free to reach out if you have any questions, feedback or suggestion. Reach us at: "),s.a.createElement("br",null),s.a.createElement("a",{href:"https://www.reddit.com/r/Ginterface/",target:"_blank"},s.a.createElement("b",null,"Reddit")),s.a.createElement("br",null),s.a.createElement("a",{href:"https://discord.gg/PUhw59",target:"_blank"},s.a.createElement("b",null,"Discord"))))}}]),t}(n.Component)),j=(n.Component,n.Component,function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"hero is-fullheight is-default is-bold"},s.a.createElement("div",{className:"hero-head"},s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("p",{className:"navbar-item"},"ERCPAY"))))),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("div",{className:"columns is-vcentered"},s.a.createElement("div",{className:"column is-5"},s.a.createElement("figure",{className:"image"},s.a.createElement("img",{src:"https://user-images.githubusercontent.com/24837709/57173766-65caff00-6e67-11e9-9060-52b7a65e5dce.jpg",alt:"Description"}))),s.a.createElement("div",{className:"column is-6 is-offset-1"},s.a.createElement("h1",{className:"subtitle is-3"},"404"))))))}}]),t}(n.Component));r.a.render(s.a.createElement(i.a,null,s.a.createElement(c.c,null,s.a.createElement(c.a,{path:"/",exact:!0,component:w}),s.a.createElement(c.a,{path:"/dashboard",exact:!0,component:N}),s.a.createElement(c.a,{component:j}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,a){},82:function(e,t,a){}},[[140,1,2]]]);
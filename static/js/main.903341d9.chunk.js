(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(16),n(1)),u=n(2),s=n(4),i=n(3),m=n(5),h=(n(18),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.onIncClick=function(){n.setState({count:n.state.count+1})},n.onSubClick=function(){n.setState({count:n.state.count-1})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.count;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onSubClick},"Minus (-) "),r.a.createElement("h4",null,e),r.a.createElement("button",{onClick:this.onIncClick},"Plus (+) "))}}]),t}(a.Component)),p=n(8),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={status:""},n.handleOnSubmit=function(e){e.preventDefault(),n.state.userName===n.state.password?n.setState({status:"Success"}):n.setState({status:"Fail"})},n.handleOnChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("h5",null,"User Name"),r.a.createElement("input",{type:"text",name:"userName",onChange:this.handleOnChange}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleOnChange})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Login"),this.state.status)}}]),t}(a.Component);var f=function(e){var t=e.src;return r.a.createElement("img",{src:t,style:{width:40}})},d=n(9),E=n.n(d);function v(e){return r.a.createElement("div",{className:"center"},r.a.createElement("span",null,"My Profile"),r.a.createElement(f,{src:E.a}))}v.defaultProps={};var O=v,w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h3",null,"Counter"),r.a.createElement(h,null),r.a.createElement("hr",null),r.a.createElement(O,null),r.a.createElement("hr",null),r.a.createElement("h3",null,"Login Form"),r.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/react.8e26f220.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.903341d9.chunk.js.map
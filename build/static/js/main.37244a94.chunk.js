(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(14),n(3)),i=n(4),s=n(6),u=n(5),h=n(7),m=(n(15),function(e){var t=e.name,n=e.email,a=e.id,o=e.company;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement("p",{className:"f4 bb"},o)))}),d=function(e){var t=e.robots,n=t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email,company:t[n].company.name})});return r.a.createElement("div",null,n)},b=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid white",height:"100%"}},e.children)},p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{id:"robofriends"},"RoboFriends "),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:a}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.37244a94.chunk.js.map
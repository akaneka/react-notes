(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(4),s=n.n(c),r=(n(13),n(5)),o=n(6),d=n(2),h=n(8),l=n(7),u=n(0),b=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).data=[],a.area={width:"500px",height:"500px",border:"1px solid blue"},a.rectangle={position:"absolute",width:"50px",height:"50px",backgroundColor:"#f603"},a.state={list:a.data},a.doAction=a.doAction.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"doAction",value:function(t){this.data.push({x:t.pageX,y:t.pageY}),this.setState({list:this.data})}},{key:"draw",value:function(t){var e={left:t.x-25+"px",top:t.y-25+"px"};return Object(u.jsx)("div",{style:(this.rectangle,e)})}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"bg-primary text-white display-4",children:"React"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("p",{children:["\u3053\u306e\u30a8\u30ea\u30a2\u306fReact\u3001JSX\u3092\u7528\u3044\u3066\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002",Object(u.jsx)("br",{}),"\u56db\u89d2\u306e\u30a8\u30ea\u30a2\u5185\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u5c0f\u3055\u306a\u56db\u89d2\u5f62\u3092\u63cf\u753b\u3057\u307e\u3059\u3002"]}),Object(u.jsx)("div",{style:this.area,onClick:this.doAction,children:this.data.map((function(e){return t.draw(e)}))})]})]})}}]),n}(a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.f68051a7.chunk.js.map
(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(4),s=n.n(c),r=(n(13),n(5)),o=n(6),d=n(2),h=n(8),u=n(7),l=(n(14),n(0)),b=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).data=[],i.area={width:"500px",height:"500px",border:"1px solid blue"},i.state={list:i.data},i.doAction=i.doAction.bind(Object(d.a)(i)),i}return Object(o.a)(n,[{key:"doAction",value:function(t){this.data.push({x:t.pageX,y:t.pageY}),this.setState({list:this.data})}},{key:"draw",value:function(t){var e={position:"absolute",left:t.x-25+"px",top:t.y-25+"px",width:"50px",height:"50px",backgroundColor:"#f603"};return Object(l.jsx)("div",{style:e})}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"bg-primary text-white display-4",children:"React"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("p",{children:["\u3053\u306e\u30a8\u30ea\u30a2\u306fReact\u3001JSX\u3092\u7528\u3044\u3066\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002",Object(l.jsx)("br",{}),"\u56db\u89d2\u306e\u30a8\u30ea\u30a2\u5185\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u5c0f\u3055\u306a\u56db\u89d2\u5f62\u3092\u63cf\u753b\u3057\u307e\u3059\u3002"]}),Object(l.jsx)("div",{style:this.area,onClick:this.doAction,children:this.data.map((function(e){return t.draw(e)}))})]})]})}}]),n}(i.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),c(t),s(t)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.f105c860.chunk.js.map
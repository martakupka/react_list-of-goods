(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var s=o(0),n=o.n(s),a=o(7),r=o.n(a),c=o(1),i=o(2),l=o(4),u=o(3),d=(o(13),o(5)),g=[1,2,3,4,5,6,7,8,9,10],h=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={goodLength:1},t.filterMinLengthGoods=function(e){var o=e.target.value,s=t.props,n=s.changeGoodsList,a=s.initialGoods;t.setState({goodLength:o}),n(a.filter((function(t){return t.length>=o})))},t.reverseGoods=function(){var e=t.props,o=e.changeGoodsList,s=e.currentGoods;o(Object(d.a)(s).reverse())},t.sortGoods=function(){var e=t.props,o=e.changeGoodsList,s=e.currentGoods;o(Object(d.a)(s).sort((function(t,e){return t.localeCompare(e)})))},t.resetGoods=function(){var e=t.props,o=e.changeGoodsList,s=e.initialGoods;t.setState({goodLength:1}),o(s)},t.sortGoodsByLength=function(){var e=t.props,o=e.changeGoodsList,s=e.currentGoods;o(Object(d.a)(s).sort((function(t,e){return t.length-e.length})))},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this.state.goodLength;return n.a.createElement("div",{className:"goods__sort-buttons"},n.a.createElement("button",{type:"button",className:"goods__buttons-item",onClick:this.reverseGoods},"reverse"),n.a.createElement("button",{type:"button",className:"goods__buttons-item",onClick:this.sortGoods},"sort"),n.a.createElement("button",{type:"button",className:"goods__buttons-item",onClick:this.resetGoods},"reset"),n.a.createElement("button",{type:"button",className:"goods__buttons-item",onClick:this.sortGoodsByLength},"sort by length"),n.a.createElement("select",{value:t,className:"goods__select",onChange:this.filterMinLengthGoods},g.map((function(t){return n.a.createElement("option",{key:t,value:t},t)}))))}}]),o}(n.a.Component),m=function(t){var e=t.goods;return n.a.createElement("ul",{className:"goods__list"},e.map((function(t){return n.a.createElement("li",{key:t,className:"goods__item"},t)})))},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],G=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(c.a)(this,o);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={shouldShowGoods:!1,goods:p},t.changeGoodsList=function(e){t.setState({goods:e})},t.showGoods=function(){t.setState({shouldShowGoods:!0})},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this.state,e=t.shouldShowGoods,o=t.goods;return n.a.createElement("div",{className:"app"},e?n.a.createElement("div",{className:"goods"},n.a.createElement("h1",{className:"goods__title"},"Goods"),n.a.createElement(h,{changeGoodsList:this.changeGoodsList,initialGoods:p,currentGoods:o}),n.a.createElement(m,{goods:o})):n.a.createElement("button",{type:"button",className:"app__start-button",onClick:this.showGoods},"start"))}}]),o}(n.a.Component);r.a.render(n.a.createElement(G,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d42e05e8.chunk.js.map
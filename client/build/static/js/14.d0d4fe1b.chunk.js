(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{247:function(e,t,n){"use strict";n.r(t);var c=n(64),r=n.n(c),s=n(65),i=n(30),a=n(33),o=n(32),l=n(31),d=n(1),j=n(61),h=n.n(j),u=n(29),b=n(4),p=n(116),x=n(3),O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).toggle=function(){return c.setState({modalEdit:!c.state.modalEdit})},c.onSubmit=function(e,t,n,r,s,i,a,o){h.a.post("/api/update/item",{id:e,title:t,price:n,color:(r.slice(0)+"").replace(/\s/g,"").split(","),size:(s.slice(0)+"").replace(/\s/g,"").split(","),tags:(i.slice(0)+"").replace(/\s/g,"").split(","),images:(a.slice(0)+"").replace(/\s/g,"").split(","),description:o}).then((function(e){c.setState({modalEdit:!c.state.modalEdit}),console.log(e)})).then((function(){window.location.reload(!0)})).catch((function(e){console.log(e)}))},c.onChangeTitle=function(e){return c.setState({title:e.target.value})},c.onChangePrice=function(e){return c.setState({price:e.target.value})},c.onChangeColor=function(e){return c.setState({colors:e.target.value})},c.onChangeSizes=function(e){return c.setState({sizes:e.target.value})},c.onChangeTags=function(e){return c.setState({tags:e.target.value})},c.onChangeImages=function(e){return c.setState({images:e.target.value})},c.onChangeDescription=function(e){return c.setState({description:e.target.value})},c.state={modalEdit:!1,title:c.props.infos.title,colors:c.props.infos.color,sizes:c.props.infos.size,tags:c.props.infos.tags,images:c.props.infos.images,description:c.props.infos.description,price:c.props.infos.price},c}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.title,c=t.colors,r=t.sizes,s=t.tags,i=t.images,a=t.description,o=t.price,l=this.props.infos._id;return Object(x.jsxs)("div",{children:[Object(x.jsx)(b.c,{outline:!0,color:"primary",size:"sm",onClick:this.toggle,children:Object(x.jsx)(p.a,{})}),Object(x.jsxs)(b.D,{isOpen:this.state.modalEdit,toggle:this.toggle,className:this.props.className,children:[Object(x.jsxs)(b.G,{toggle:this.toggle,children:[this.props.infos.title," - (id: ",l,")"]}),Object(x.jsx)(b.E,{children:Object(x.jsxs)(b.B,{children:[Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"Name"})}),Object(x.jsx)(b.v,{placeholder:"default: "+this.props.infos.title,value:n,onChange:this.onChangeTitle})]}),Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"Price $"})}),Object(x.jsx)(b.v,{placeholder:"default: "+this.props.infos.price,value:o,onChange:this.onChangePrice})]}),Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"Colors"})}),Object(x.jsx)(b.v,{placeholder:"default: "+this.props.infos.color.map((function(e){return" "+e})),value:c,onChange:this.onChangeColor})]}),Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"Sizes"})}),Object(x.jsx)(b.v,{placeholder:"default: "+this.props.infos.size.map((function(e){return e+" "+e})),value:r,onChange:this.onChangeSizes})]}),Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"Category"})}),Object(x.jsx)(b.v,{placeholder:"default: "+this.props.infos.tags,value:s,onChange:this.onChangeTags})]}),Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"Images"})}),Object(x.jsx)(b.v,{type:"textarea",placeholder:"default: "+this.props.infos.images.map((function(e){return e+" "+e})),value:i,onChange:this.onChangeImages})]}),Object(x.jsxs)(b.w,{children:[Object(x.jsx)(b.x,{addonType:"prepend",children:Object(x.jsx)(b.y,{children:"description"})}),Object(x.jsx)(b.v,{type:"textarea",placeholder:"default: "+this.props.infos.description,value:a,onChange:this.onChangeDescription})]})]})}),Object(x.jsxs)(b.F,{children:[Object(x.jsx)(b.c,{color:"primary",onClick:function(){return e.onSubmit(l,n,o,c,r,s,i,a)},children:"Confirm the changes?"})," ",Object(x.jsx)(b.c,{color:"secondary",onClick:this.toggle,children:"Cancel"})]})]})]})}}]),n}(d.Component),g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).handleDelete=function(e){h.a.delete("/api/delete/item/",{params:{id:e}}).then((function(e){console.log(e),c.setState({modalEdit:!c.state.modalEdit})})).then((function(){window.location.reload(!0)})).catch((function(e){console.log(e)}))},c.toggle=function(){return c.setState({modalEdit:!c.state.modalEdit})},c.state={modalEdit:!1},c}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,c=t.id;return Object(x.jsxs)("div",{children:[Object(x.jsx)(b.c,{color:"danger",size:"sm",onClick:this.toggle,children:Object(x.jsx)(p.b,{})}),Object(x.jsxs)(b.D,{isOpen:this.state.modalEdit,toggle:this.toggle,className:this.props.className,children:[Object(x.jsx)(b.G,{toggle:this.toggle,children:n}),Object(x.jsxs)(b.E,{children:["You confirm deleting item ID: ",c,"?"]}),Object(x.jsxs)(b.F,{children:[Object(x.jsx)(b.c,{color:"danger",onClick:function(){return e.handleDelete(c,n)},children:"Confirm"})," ",Object(x.jsx)(b.c,{color:"secondary",onClick:this.toggle,children:"Cancel"})]})]})]})}}]),n}(d.Component),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={apiList:[]},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/productsdata");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,this.setState({apiList:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.stylesTab2,t=this.state.apiList;return Object(x.jsxs)(b.T,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(x.jsx)("thead",{style:e,children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Title"}),Object(x.jsx)("th",{children:"Id"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"Colors"}),Object(x.jsx)("th",{children:"Sizes"}),Object(x.jsx)("th",{children:"Tags"}),Object(x.jsx)("th",{children:"Images"}),Object(x.jsx)("th",{children:"Description"}),Object(x.jsx)("th",{children:"Edit"}),Object(x.jsx)("th",{children:"Delete"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"row",children:t+1}),Object(x.jsx)("td",{children:e.title}),Object(x.jsx)("td",{children:e._id}),Object(x.jsxs)("td",{children:[e.price,"$"]}),Object(x.jsx)("td",{children:e.color.map((function(e){return Object(x.jsxs)("span",{children:[Object(x.jsx)("span",{style:(t=e,{textDecoration:"underline",textDecorationColor:t}),children:e})," / "]});var t}))}),Object(x.jsx)("td",{children:e.size.map((function(e){return e+" / "}))}),Object(x.jsx)("td",{children:e.tags}),Object(x.jsx)("td",{children:e.images.length}),Object(x.jsx)("td",{children:e.description.substring(0,30)+"... "}),Object(x.jsx)("td",{children:Object(x.jsx)(O,{infos:e})}),Object(x.jsx)("td",{children:Object(x.jsx)(g,{id:e._id,title:e.title})})]},e._id)}))})]})}}]),n}(d.Component),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).toggle=function(){c.setState({modalEdit:!c.state.modalEdit})},c.onSubmit=function(e,t,n,c,r,s,i){h.a.post("/api/add/item",{title:e,price:t,color:(n.slice(0)+"").replace(/\s/g,"").split(","),size:(c.slice(0)+"").replace(/\s/g,"").split(","),tags:(r.slice(0)+"").replace(/\s/g,"").split(","),images:(s.slice(0)+"").replace(/\s/g,"").split(","),description:i}).then((function(){window.location.reload(!0)})).catch((function(e){console.log(e)}))},c.onChangeTitle=function(e){return c.setState({title:e.target.value})},c.onChangePrice=function(e){return c.setState({price:e.target.value})},c.onChangeColor=function(e){return c.setState({color:[e.target.value]})},c.onChangesize=function(e){return c.setState({size:e.target.value})},c.onChangeTags=function(e){return c.setState({tags:[e.target.value]})},c.onChangeImages=function(e){return c.setState({images:[e.target.value]})},c.onChangeDescription=function(e){return c.setState({description:e.target.value})},c.state={modalEdit:!1,title:"tteeest",color:"blue, red",size:"XS, L",tags:"Polos",images:"https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg, https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg",description:"",price:0,success:!1},c}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.title,c=t.price,r=t.color,s=t.size,i=t.tags,a=t.images,o=t.description;return Object(x.jsxs)(b.m,{style:{paddingTop:"50px",paddingBottom:"50px"},children:[Object(x.jsx)("h1",{children:"Add new item"}),Object(x.jsxs)(b.s,{children:[Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"exampleEmail",children:"Item's name"}),Object(x.jsx)(b.v,{placeholder:"example: cool polo",value:this.state.title,onChange:this.onChangeTitle})]}),Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"exampleEmail",children:"Price"}),Object(x.jsx)(b.v,{placeholder:"example: 43",value:this.state.price,onChange:this.onChangePrice})]}),Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"exampleEmail",children:"color available"}),Object(x.jsx)(b.v,{placeholder:"example: color1, color2, color3",value:this.state.color,onChange:this.onChangeColor})]}),Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"exampleEmail",children:"size available"}),Object(x.jsx)(b.v,{placeholder:"example: XS, L, XL",value:this.state.size,onChange:this.onChangesize})]}),Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"exampleEmail",children:"Category"}),Object(x.jsx)(b.v,{placeholder:"example: Polo",value:this.state.tags,onChange:this.onChangeTags})]}),Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"exampleEmail",children:"Images"}),Object(x.jsx)(b.v,{placeholder:"example: http://link1.jpg, http://link2.jpg",value:this.state.images,onChange:this.onChangeImages})]}),Object(x.jsxs)(b.u,{children:[Object(x.jsx)(b.A,{for:"examplePassword",children:"Description"}),Object(x.jsx)(b.v,{type:"textarea",value:this.state.description,onChange:this.onChangeDescription})]})]}),Object(x.jsx)(b.c,{onClick:function(){return e.onSubmit(n,c,r,s,i,a,o)},children:"Submit"})]})}}]),n}(d.Component),v=n(148),C=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/log");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,c.setState({logData:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),c.state={logData:[]},c}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.stylesTab4,t={labels:["Delete","Create","Update"],datasets:[{data:[this.state.logData.filter((function(e){return"Delete"===e.type})).length,this.state.logData.filter((function(e){return"Create"===e.type})).length,this.state.logData.filter((function(e){return"Update"===e.type})).length],backgroundColor:["#FF6384","#072a48","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},n={labels:this.state.logData.map((function(e){return new Date(e.time).toLocaleDateString("en-TH",{year:"numeric",month:"long",day:"numeric",hour:"2-digit"})})),datasets:[{label:"Dashboard activity",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.logData.map((function(e,t){return t}))}]},c=this.state.logData.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"row",children:t+1}),Object(x.jsx)("td",{children:e.itemid}),Object(x.jsx)("td",{children:e.itemtitle}),Object(x.jsx)("td",{children:e.type}),Object(x.jsx)("td",{children:new Date(e.time).toLocaleDateString("en-TH",{year:"numeric",month:"long",day:"numeric",hour:"2-digit"})})]})}));return Object(x.jsx)("div",{children:Object(x.jsxs)(b.Q,{children:[Object(x.jsx)(b.k,{md:"6",children:Object(x.jsxs)(b.T,{dark:!0,borderless:!0,hover:!0,size:"sm",responsive:!0,children:[Object(x.jsx)("thead",{style:e,children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Product ID"}),Object(x.jsx)("th",{children:"Product title"}),Object(x.jsx)("th",{children:"Type"}),Object(x.jsx)("th",{children:"Time stamp"})]})}),Object(x.jsx)("tbody",{children:c})]})}),Object(x.jsxs)(b.k,{md:"5",children:[Object(x.jsx)("div",{style:{paddingTop:"20px"},children:Object(x.jsx)(v.Doughnut,{data:t})}),Object(x.jsx)("div",{style:{paddingTop:"20px"},children:Object(x.jsx)(v.Line,{data:n,style:{paddingTop:"50px"}})})]})]})})}}]),n}(d.Component),y=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={apiList:[]},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/orders");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,this.setState({apiList:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.stylesTab1,t=this.state.apiList;return Object(x.jsxs)(b.T,{responsive:!0,striped:!0,hover:!0,size:"sm",children:[Object(x.jsx)("thead",{style:e,children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Id"}),Object(x.jsx)("th",{children:"Ref"}),Object(x.jsx)("th",{children:"Date"}),Object(x.jsx)("th",{children:"Order"}),Object(x.jsx)("th",{children:"Order Amount"}),Object(x.jsx)("th",{children:"Delivery Amount"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Last Name"}),Object(x.jsx)("th",{children:"First Name"}),Object(x.jsx)("th",{children:"Country"}),Object(x.jsx)("th",{children:"City"}),Object(x.jsx)("th",{children:"Province"}),Object(x.jsx)("th",{children:"Postal Code"}),Object(x.jsx)("th",{children:"Phone Number"}),Object(x.jsx)("th",{children:"Address"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"row",children:t+1}),Object(x.jsx)("td",{children:e._id}),Object(x.jsx)("td",{children:e.ref}),Object(x.jsx)("td",{children:e.createdAt}),Object(x.jsx)("td",{children:e.order.map((function(e){return Object(x.jsx)("div",{children:"x".concat(e.quantity," ").concat(e.idItem,"(").concat(e.titleItem,"[").concat(e.selectedSize,", ").concat(e.selectedColor,"] ").concat(e.price,"$) ")})}))}),Object(x.jsx)("td",{children:e.totalAmount+" $"}),Object(x.jsx)("td",{children:e.totalDelivery+" $"}),Object(x.jsx)("td",{children:e.customerinfo.email}),Object(x.jsx)("td",{children:e.customerinfo.lastName}),Object(x.jsx)("td",{children:e.customerinfo.firstName}),Object(x.jsx)("td",{children:e.customerinfo.country}),Object(x.jsx)("td",{children:e.customerinfo.city}),Object(x.jsx)("td",{children:e.customerinfo.province}),Object(x.jsx)("td",{children:e.customerinfo.postalCode}),Object(x.jsx)("td",{children:e.customerinfo.phoneNumber}),Object(x.jsx)("td",{children:e.customerinfo.address1+" "+e.customerinfo.address2})]},e._id)}))})]})}}]),n}(d.Component),k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/productsdata");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,c.setState({apiList:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),c.toggle=function(e){return c.state.activeTab!==e&&c.setState({activeTab:e})},c.state={apiList:[],activeTab:"2"},c}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t={tab1:{cursor:"pointer",backgroundColor:"#cd5957",color:"white"},tab2:{cursor:"pointer",backgroundColor:"#78a4a2",color:"white"},tab3:{cursor:"pointer",backgroundColor:"#66bceb",color:"white"},tab4:{cursor:"pointer",backgroundColor:"#ffce56",color:"white"}};return Object(x.jsxs)("div",{children:[Object(x.jsxs)(b.H,{tabs:!0,children:[Object(x.jsx)(b.I,{children:Object(x.jsx)(b.J,{style:t.tab1,onClick:function(){e.toggle("1")},children:Object(x.jsx)("b",{children:"Orders"})})}),Object(x.jsx)(b.I,{children:Object(x.jsx)(b.J,{style:t.tab2,onClick:function(){e.toggle("2")},children:Object(x.jsx)("b",{children:"Update/delete items"})})}),Object(x.jsx)(b.I,{children:Object(x.jsx)(b.J,{style:t.tab3,onClick:function(){e.toggle("3")},children:Object(x.jsx)("b",{children:"Add new item"})})}),Object(x.jsx)(b.I,{children:Object(x.jsx)(b.J,{style:t.tab4,onClick:function(){e.toggle("4")},children:Object(x.jsx)("b",{children:"History log"})})})]}),Object(x.jsxs)(b.R,{activeTab:this.state.activeTab,children:[Object(x.jsx)(b.S,{tabId:"1",children:Object(x.jsx)(y,{stylesTab1:t.tab1})}),Object(x.jsx)(b.S,{tabId:"2",children:Object(x.jsx)(m,{stylesTab2:t.tab2})}),Object(x.jsx)(b.S,{tabId:"3",style:t.tab3,children:Object(x.jsx)(f,{})}),Object(x.jsx)(b.S,{tabId:"4",children:Object(x.jsx)(C,{stylesTab4:t.tab4})})]})]})}}]),n}(d.Component),S=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={authorization:!1,apiAuth:!1},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({method:"get",url:"/api/secret",headers:{Authorization:localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.data.authorization;case 6:n=e.sent,this.setState({apiAuth:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.apiAuth?Object(x.jsx)(k,{}):Object(x.jsxs)("p",{children:["Authorization is required, please login here: ",Object(x.jsx)(u.a,{to:"/admin",children:"login"})]});return Object(x.jsx)("div",{children:e})}}]),n}(d.Component);t.default=S}}]);
//# sourceMappingURL=14.d0d4fe1b.chunk.js.map
(this["webpackJsonpcowin-slot-checker"]=this["webpackJsonpcowin-slot-checker"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),s=(n(79),n(80),n(46)),o=n.n(s),l=n(57),d=n(32),j=n(65),b=n(161),p=n(160),x=n(164),f=n(162),u=n(58),h=n.n(u),O=n(148),g=Object(O.a)((function(e){return{container:{display:"flex",flexDirection:"column"},header:{backgroundColor:"#6EC177",fontSize:36,fontWeight:600,height:"60px",paddingTop:"20px",width:"100%"},footer:{backgroundColor:"#6EC177",bottom:0,position:"fixed",width:"100%"},textfield:{alignSelf:"center"},btn:{padding:6,marginLeft:"20px"},feeType:{backgroundColor:"#20065f",color:"#ffffff",width:"120px",borderRadius:"60px",textAlign:"center",fontSize:"20px",letterSpacing:"4px",marginLeft:"auto",alignSelf:"center"},centerName:{backgroundColor:"#14948b",color:"#ffffff",display:"flex",fontSize:"20px",textAlign:"center"},available:{color:"white",backgroundColor:"#ff6f62",padding:"10px",borderRadius:"10px",fontSize:"16px"},age:{color:"white",backgroundColor:"#14948b",padding:"10px",borderRadius:"10px",fontSize:"16px"},address:{textAlign:"start",marginTop:"16px",display:"flex"}}})),m=n(151),v=n(153),C=n(64),y=n.n(C),S=n(155),k=n(159),w=n(158),N=n(154),A=n(156),D=n(157),T=n(109),P=n(6),z=function(e){var t=e.Centers,n=g();return Object(P.jsx)("div",{style:{marginBottom:"40px"},children:t&&t.map((function(e,t){return Object(P.jsxs)(m.a,{style:{marginBottom:"20px"},children:[Object(P.jsxs)(v.a,{children:[Object(P.jsxs)("div",{className:n.centerName,children:[Object(P.jsx)("span",{children:Object(P.jsx)(y.a,{})}),e.name]}),Object(P.jsxs)("div",{className:n.address,children:["Address: ",e.address,", ",e.pincode,Object(P.jsx)("div",{className:n.feeType,children:e.fee_type})]})]}),Object(P.jsx)(N.a,{component:T.a,children:Object(P.jsxs)(S.a,{"aria-label":"simple table",children:[Object(P.jsx)(A.a,{children:Object(P.jsxs)(D.a,{children:[Object(P.jsx)(w.a,{children:"Date"}),Object(P.jsx)(w.a,{children:"Available Capacity"}),Object(P.jsx)(w.a,{children:"Age"})]})}),Object(P.jsx)(k.a,{children:e.sessions.map((function(e){return Object(P.jsxs)(D.a,{children:[Object(P.jsxs)(w.a,{component:"th",scope:"row",children:[e.date," "]}),Object(P.jsx)(w.a,{align:"left",children:Object(P.jsx)("span",{className:n.available,children:e.available_capacity})}),Object(P.jsx)(w.a,{align:"left",children:Object(P.jsxs)("span",{className:n.age,children:[e.min_age_limit,"+"]})})]},e.date)}))})]})})]})}))})};function F(e){return Object(P.jsx)(f.a,Object(j.a)({elevation:6,variant:"filled"},e))}var B=function(){var e=g(),t=Object(a.useState)(0),n=Object(d.a)(t,2),i=n[0],r=n[1],s=c.a.useState(!1),j=Object(d.a)(s,2),f=j[0],u=j[1],O=Object(a.useState)(""),m=Object(d.a)(O,2),v=m[0],C=m[1],y=Object(a.useState)(""),S=Object(d.a)(y,2),k=S[0],w=S[1],N=Object(a.useState)(),A=Object(d.a)(N,2),D=A[0],T=A[1],B=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.prev=1,e.next=4,h.a.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(i,"&date=").concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear()));case 4:(n=e.sent).data.centers.length>0?(u(!0),C("success"),w("Data Found")):(u(!0),C("info"),w("Cowin data not available for this ".concat(i))),T(n.data.centers),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),u(!0),C("error"),w("Invalid Pincode");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){u(!1),C(""),w("")};return Object(P.jsxs)("div",{className:e.container,children:[Object(P.jsx)("div",{className:e.header,children:"Cowin Slot Checker"}),Object(P.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:[Object(P.jsx)("div",{className:e.textfield,children:Object(P.jsx)(b.a,{id:"outlined-helperText",label:"Enter Pincode",variant:"outlined",fullWidth:!0,size:"medium",onChange:function(e){return r(e.target.value)}})}),Object(P.jsx)("div",{className:e.btn,children:Object(P.jsx)(p.a,{variant:"contained",color:"secondary",onClick:B,children:"Get Slots"})})]}),Object(P.jsx)(z,{Centers:D}),Object(P.jsxs)("div",{className:e.footer,children:["Data served from ",Object(P.jsx)("a",{href:"https://apisetu.gov.in/public/marketplace/api/cowin",target:"_blank",rel:"noopener noreferrer",children:"CoWIN Portal API"})]}),Object(P.jsx)(x.a,{open:f,autoHideDuration:6e3,onClose:I,children:Object(P.jsx)(F,{onClose:I,severity:v,children:k})})]})};var I=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(B,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(I,{})}),document.getElementById("root")),_()},79:function(e,t,n){},80:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.7daefd7e.chunk.js.map
(this.webpackJsonprobstore=this.webpackJsonprobstore||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(1),a=c.n(s),r=c(18),n=c.n(r),j=(c(37),c(12)),l=c(3),d=(c(38),c(4)),o=(c(39),c(40),Object(s.createContext)()),b=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(i.jsx)(o.Provider,{value:Object(s.useReducer)(t,c),children:a})},u=function(){return Object(s.useContext)(o)},m=function(e){var t=e.id,c=e.title,s=e.price,a=e.rating,r=e.image,n=e.size,j=u(),l=Object(d.a)(j,2),o=(l[0].basket,l[1]);return Object(i.jsxs)("div",{className:"cart-product-container",children:[Object(i.jsx)("img",{src:r,alt:"cart-image",className:"cart-image"}),Object(i.jsxs)("div",{className:"cart-product-info",children:[Object(i.jsx)("p",{className:"cart-product-title",children:c}),Object(i.jsxs)("div",{className:"size-price-container-cart",children:[Object(i.jsxs)("p",{className:"cart-product-price",children:[Object(i.jsx)("small",{children:"$"}),Object(i.jsx)("strong",{children:s})]}),Object(i.jsxs)("p",{className:"cart-product-price",children:[Object(i.jsx)("small",{children:"size:"}),Object(i.jsx)("strong",{children:n})]})]}),Object(i.jsx)("div",{className:"cart-product-rating",children:Array(a).fill().map((function(e,t){return Object(i.jsx)("p",{children:"\u2b50"})}))}),Object(i.jsx)("button",{className:"remove-cart-button",onClick:function(){o({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Cart"})]})]})},O=(c(41),c(20)),p=c.n(O),h=c(25),x=c(14),g=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},v=function(){var e=u(),t=Object(d.a)(e,2),c=t[0].basket;t[1];return Object(i.jsxs)("div",{className:"subtotal-container",children:[Object(i.jsx)(p.a,{renderText:function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:["Total (",null===c||void 0===c?void 0:c.length," items): ",Object(i.jsx)("strong",{children:e})]})})},decimalScale:2,value:g(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(i.jsx)(j.b,{to:"/checkout",children:Object(i.jsx)("button",{className:"checkout-button",children:"Proceed to Checkout"})})]})},N=c.p+"static/media/grailify-wzgqLjz09jA-unsplash.7aba0a18.jpg",f=function(){var e=u(),t=Object(d.a)(e,2),c=t[0].basket;t[1];return Object(i.jsxs)("div",{className:"cart-container",children:[Object(i.jsxs)("div",{className:"cart-left",children:[Object(i.jsx)("img",{src:N,alt:"cart header image",className:"cart-header-img"}),Object(i.jsx)("h2",{className:"cart-title",children:"Your Shopping Cart"}),Object(i.jsx)("div",{className:"cart-left-products",children:c.map((function(e){return Object(i.jsx)(m,{id:e.id,title:e.title,image:e.image,price:e.price,size:e.size,rating:e.rating})}))})]}),Object(i.jsx)("div",{className:"cart-right",children:Object(i.jsx)(v,{})})]})},k=(c(48),c(49),c(27)),_=c.n(k),S=function(e){var t=e.id,c=e.title,s=e.price,a=(e.rating,e.image),r=e.size,n=u(),j=Object(d.a)(n,2),l=(j[0].basket,j[1]);return Object(i.jsxs)("div",{className:"checkout-product-container",children:[Object(i.jsx)("img",{src:a,alt:"cart image",className:"checkoutImage"}),Object(i.jsxs)("div",{className:"checkout-product-info",children:[Object(i.jsx)("p",{className:"cart-product-title",children:c}),Object(i.jsxs)("div",{className:"size-price-container-cart",children:[Object(i.jsxs)("p",{className:"cart-product-price",children:[Object(i.jsx)("small",{children:"$"}),Object(i.jsx)("strong",{children:s})]}),Object(i.jsxs)("p",{className:"cart-product-price",children:[Object(i.jsx)("small",{children:"size:"}),Object(i.jsx)("strong",{children:r})]})]})]}),Object(i.jsx)(_.a,{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})}})]})},z=c(29),A=c.n(z),C=(c(51),function(){var e=u(),t=Object(d.a)(e,2),c=t[0].basket;t[1];return Object(i.jsx)("div",{className:"checkoutTotal",children:Object(i.jsx)(p.a,{renderText:function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:["Total (",null===c||void 0===c?void 0:c.length," items): ",Object(i.jsx)("strong",{children:e})]})})},decimalScale:2,value:g(c),displayType:"text",thousandSeparator:!0,prefix:"$"})})}),E=c(28),T=c.n(E),y=function(){var e=u(),t=Object(d.a)(e,2),c=t[0].basket,s=t[1];return Object(i.jsxs)("div",{className:"checkout-container",children:[Object(i.jsx)("h2",{children:"Checkout"}),Object(i.jsx)(C,{}),Object(i.jsx)("div",{className:"checkoutProducts",children:Object(i.jsx)("div",{className:"allCheckoutProducts",children:c.map((function(e){return Object(i.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,size:e.size})}))})}),Object(i.jsxs)("button",{onClick:function(){s({type:"CLEAR_BASKET"})},className:"payButton",children:[Object(i.jsx)(T.a,{}),"Order"]}),Object(i.jsx)(j.b,{className:"linkToShop",to:"/",children:Object(i.jsxs)("button",{children:[Object(i.jsx)(A.a,{}),"Continue Shopping"]})})]})},B=c(30),R=c.n(B),w=(c(52),function(){var e=u(),t=Object(d.a)(e,2),c=t[0].basket;t[1];return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)(j.b,{to:"/",children:Object(i.jsx)("h1",{className:"logo",children:"Rob Store"})}),Object(i.jsx)("div",{className:"header-boxes",children:Object(i.jsx)(j.b,{to:"/cart",children:Object(i.jsxs)("div",{className:"header-box",children:[Object(i.jsx)("div",{children:Object(i.jsx)("small",{children:"Cart"})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"carticon",children:[Object(i.jsx)(R.a,{}),Object(i.jsx)("span",{className:"header-cart-count",children:null===c||void 0===c?void 0:c.length})]})})]})})})]})}),D=(c(53),c(54),function(e){var t=e.id,c=e.title,s=e.price,a=e.rating,r=e.image,n=e.size,j=(e.stock,u()),l=Object(d.a)(j,2),o=(l[0].basket,l[1]);return Object(i.jsxs)("div",{className:"product-container",children:[Object(i.jsxs)("div",{className:"product-info",children:[Object(i.jsx)("p",{children:c}),Object(i.jsxs)("div",{className:"price-size-container",children:[Object(i.jsxs)("p",{className:"product-price",children:[Object(i.jsx)("small",{children:"$"}),Object(i.jsx)("strong",{children:s})]}),Object(i.jsxs)("p",{className:"product-price",children:[Object(i.jsx)("small",{children:"size:"}),Object(i.jsx)("strong",{className:"sizenumber",children:n})]})]}),Object(i.jsxs)("div",{className:"product-rating",children:[Object(i.jsx)("p",{children:"quality:"}),Array(a).fill().map((function(e,t){return Object(i.jsx)("p",{children:"\u2b50"})}))]})]}),Object(i.jsx)("img",{src:r,alt:"product image",className:"product-image"}),Object(i.jsx)("button",{onClick:function(){document.querySelector(".product-container");o({type:"ADD_TO_BASKET",item:{id:t,title:c,image:r,price:s,rating:a,size:n}})},className:"cart-button-add",children:"Add to Cart"})]})}),F=c.p+"static/media/homeheaderimgcomerce.d9247084.jpg",M=c.p+"static/media/FW6690_53be.c6e48656.jpg",K=c.p+"static/media/Tonik+Sneakers.137ca5fa.jpg",L=c.p+"static/media/vans-UA_Old_Skool-Nautical_Blue-1.455ad002.jpg",U=function(){return Object(i.jsx)("div",{className:"home",children:Object(i.jsxs)("div",{className:"home-container",children:[Object(i.jsx)("img",{src:F,alt:"homeimage",className:"home-background-image"}),Object(i.jsx)("h2",{children:"Used Clothes"}),Object(i.jsxs)("div",{className:"product-row",children:[Object(i.jsx)(D,{id:"346463646",title:"DC TONIK SNEAKERS",price:11.99,size:43,rating:4,image:K,stock:1}),Object(i.jsx)(D,{id:"64436564",title:"ADIDAS GRAND COURT SE",price:19.99,size:44,rating:3,image:M,stock:1}),Object(i.jsx)(D,{id:"2733786438",title:"BLUE OLD SCHOOL VANS",price:5,size:43,rating:1,image:L,stock:1})]}),Object(i.jsx)("h2",{children:"Brand New"}),Object(i.jsxs)("div",{className:"product-row",children:[Object(i.jsx)(D,{id:"67463795439",title:"Adidas Originals",price:100,size:44,rating:5,image:"https://picture.bestsecret.com/static/images/1307/image_31698055_10_352x429_3.jpg",stock:2}),Object(i.jsx)(D,{id:"6748979876595439",title:"Adidas Originals",price:100,size:44,rating:5,image:"https://picture.bestsecret.com/static/images/1280/image_31751991_10_620x757_0.jpg",stock:2}),Object(i.jsx)(D,{id:"671235439",title:"Adidas Originals",price:120,size:45,rating:5,image:"https://picture.bestsecret.com/static/images/1301/image_31722854_10_352x429_3.jpg",stock:2})]}),Object(i.jsxs)("div",{className:"product-row",children:[Object(i.jsx)(D,{id:"875487695",title:"Brave Soul",price:20.99,size:"M",rating:5,image:"https://picture.bestsecret.com/static/images/1424/image_31903989_29_620x757_0.jpg",stock:10}),Object(i.jsx)(D,{id:"239643454",title:"Brave Soul",price:20.99,size:"M",rating:4,image:"https://picture.bestsecret.com/static/images/1425/image_31903989_81_620x757_0.jpg",stock:10}),Object(i.jsx)(D,{id:"12094365",title:"Ellesse",price:20,size:"M",rating:4,image:"https://picture.bestsecret.com/static/images/1417/image_31904350_20_620x757_0.jpg",stock:10})]}),Object(i.jsxs)("div",{className:"product-row",children:[Object(i.jsx)(D,{id:"956403457",title:"Happy Socks",price:15.99,size:"EU 41-46",rating:5,image:"https://picture.bestsecret.com/static/images/1424/image_31892839_10_620x757_0.jpg",stock:10}),Object(i.jsx)(D,{id:"0978372455320",title:"Happy Socks",price:15.99,size:"EU 36-40",rating:5,image:"https://picture.bestsecret.com/static/images/1415/image_31106883_40_620x757_0.jpg",stock:10}),Object(i.jsx)(D,{id:"00000002783284",title:"Happy Socks",price:15.99,size:"EU 36-40",rating:5,image:"https://picture.bestsecret.com/static/images/679/image_30966566_30_620x757_0.jpg",stock:10})]})]})})},I=function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(w,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,children:Object(i.jsx)(U,{})}),Object(i.jsx)(l.a,{path:"/cart",exact:!0,children:Object(i.jsx)(f,{})}),Object(i.jsx)(l.a,{path:"/checkout",children:Object(i.jsx)(y,{})})]})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),s(e),a(e),r(e)}))};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b,{initialState:{basket:[]},reducer:function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(x.a)(Object(x.a)({},e),{},{basket:[].concat(Object(h.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),i=Object(h.a)(e.basket);return c>=0?i.splice(c,1):console.warn("Can't remove product (id: ".concat(t.id,") as it's not in basket!")),Object(x.a)(Object(x.a)({},e),{},{basket:i});case"CLEAR_BASKET":return{basket:[]};default:return e}},children:Object(i.jsx)(I,{})})}),document.getElementById("root")),P()}},[[56,1,2]]]);
//# sourceMappingURL=main.3ac88175.chunk.js.map
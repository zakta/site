(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{8054:function(e,n,r){"use strict";r.d(n,{Z:function(){return Q}});var o,i,a,t,s,d,l,c,u,m,h=r(266),A=r(809),p=r.n(A),g=r(2175),f=r(4231),x=r(2209),b=r(7379),j=(0,b.F4)(o||(o=(0,x.Z)(["\n  0%{width: 5%;}\n  100%{width: 100%;}\n"]))),v=b.ZP.div(i||(i=(0,x.Z)(["\n  display: ",";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n\n  .progress-bar{\n    height: 7px;\n    transition-property: width, background-color;\n  }\n  .progress-moved .progress-bar{\n      width: 100%;\n      background-color: #33afad;\n      animation: "," 2s infinite;\n    }\n"])),(function(e){return e.loader?"unset":"none"}),j),w=r(5893),Z=function(e){var n=e.loader;return(0,w.jsx)(v,{loader:n,children:(0,w.jsx)("div",{className:"progress-moved",children:(0,w.jsx)("div",{className:"progress-bar"})})})},P=b.ZP.form(a||(a=(0,x.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px){\n    margin: 0;\n    justify-content: center;\n  }\n"])));function y(e){var n=e.touched,r=e.error;return n&&r?"#e92929":function(e){return e?"#33afad":"#ccc"}(n)}var C=b.ZP.input(t||(t=(0,x.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  border-radius: none;\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  padding: .75rem;\n  margin: 1.2rem 0 1.7rem;\n  width: 100%;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),y,(function(e){var n=e.touched,r=e.error;return n&&r?"#e92929":"#1a3968"})),B=b.ZP.textarea(s||(s=(0,x.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  min-height: 280px;\n  padding: .75rem;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 1.2rem 0 1.7rem;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),y,(function(e){var n=e.touched,r=e.error;return n&&r?"#e92929":"#1a3968"})),E=b.ZP.div(d||(d=(0,x.Z)(["\n  position: relative;\n"]))),k=b.ZP.div(l||(l=(0,x.Z)(["\n  color: #e92929;\n  font-size: 13px;\n  font-weight: 600;\n  position: absolute;\n  bottom: 0;\n\n  @media (min-width: 480px) {\n    font-size: 14px;\n  }\n"]))),_=b.ZP.button(c||(c=(0,x.Z)(["\n  align-self: end;\n  animation-duration: 20s;\n  background-color: #1a3968;\n  border: 1px solid #1a3968;\n  color: white;\n  cursor: ",";\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  padding: 1rem;\n  position: relative;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  transition: all .15s ease;\n  user-select: none;\n\n  :active{\n    background-color: #122746;\n    border: 1px solid #f7f7f7;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.25rem;\n    font-size: 16px;\n    width: 257px;\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n\n  @media (min-width: 870px) {\n    :hover {\n      background-color:  #26508f;\n      border-color: #26508f;\n    }\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n"])),(function(e){return e.loader?"not-allowed":"pointer"})),S=b.ZP.div(u||(u=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n  }\n"]))),z=b.ZP.div(m||(m=(0,x.Z)(["\n  width: 100%;\n\n  @media (min-width: 1000px) {\n    width: 49%;\n  }\n"]))),Q=function(e){var n=e.setFormStatus;function r(e){var n={service_id:"service_mpjyx3g",template_id:"template_w8vin3g",user_id:"user_rizvggYkHJhDIQF4MJsbR",template_params:e},r={method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-type":"application/json"})};return fetch("https://api.emailjs.com/api/v1.0/email/send",r)}var o=(0,g.TA)({initialValues:{name:"",phone:"",email:"",subject:"",message:""},validationSchema:f.Ry({name:f.Z_().min(3,"M\xednimo 3 letras").required("Preencha o nome"),phone:f.Z_().min(15,"No m\xednimo 11 n\xfameros").required("Preencha o n\xfamero"),email:f.Z_().email("E-mail inv\xe1lido").required("Preencha o e-mail"),subject:f.Z_().required("Preencha o assunto"),message:f.Z_().required("Preencha a mensagem")}),onSubmit:function(){var e=(0,h.Z)(p().mark((function e(i){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(i);case 2:a=e.sent,n(a.ok?"success":"error"),a.ok&&o.resetForm();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});return(0,w.jsxs)(P,{onSubmit:o.handleSubmit,"data-aos":"fade-up",children:[(0,w.jsxs)(S,{children:[(0,w.jsxs)(z,{children:[(0,w.jsx)(C,{name:"name",type:"text",placeholder:"Nome",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.name,error:o.errors.name,touched:o.touched.name,readOnly:o.isSubmitting}),o.touched.name&&o.errors.name&&(0,w.jsx)(E,{children:(0,w.jsx)(k,{children:o.errors.name})})]}),(0,w.jsxs)(z,{children:[(0,w.jsx)(C,{name:"phone",type:"text",maxLength:15,placeholder:"Telefone",onChange:function(e){return o.setFieldValue("phone",e.target.value.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"))},onBlur:o.handleBlur,value:o.values.phone,error:o.errors.phone,touched:o.touched.phone,readOnly:o.isSubmitting}),o.touched.phone&&o.errors.phone&&(0,w.jsx)(E,{children:(0,w.jsx)(k,{children:o.errors.phone})})]})]}),(0,w.jsxs)(S,{children:[(0,w.jsxs)(z,{children:[(0,w.jsx)(C,{name:"email",type:"text",placeholder:"E-mail",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email,error:o.errors.email,touched:o.touched.email,readOnly:o.isSubmitting}),o.touched.email&&o.errors.email&&(0,w.jsx)(E,{children:(0,w.jsx)(k,{children:o.errors.email})})]}),(0,w.jsxs)(z,{children:[(0,w.jsx)(C,{name:"subject",type:"text",placeholder:"Assunto",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.subject,error:o.errors.subject,touched:o.touched.subject,readOnly:o.isSubmitting}),o.touched.subject&&o.errors.subject&&(0,w.jsx)(E,{children:(0,w.jsx)(k,{children:o.errors.subject})})]})]}),(0,w.jsx)(B,{name:"message",type:"submit",placeholder:"Mensagem",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.message,error:o.errors.message,touched:o.touched.message,readOnly:o.isSubmitting}),o.touched.message&&o.errors.message&&(0,w.jsx)(E,{children:(0,w.jsx)(k,{children:o.errors.message})}),(0,w.jsxs)(_,{disabled:o.isSubmitting,type:"submit",loader:o.isSubmitting,className:"loader",children:["Enviar Mensagem",(0,w.jsx)(Z,{loader:o.isSubmitting})]})]})}},4399:function(e,n,r){"use strict";var o=r(1237),i=r(9878),a=r(8054),t=r(14),s=r(5893);n.Z=function(e){var n=e.children;return(0,s.jsxs)(t.W2,{children:[(0,s.jsx)(o.Z,{stat:!0}),(0,s.jsxs)(t.CL,{children:[n,(0,s.jsx)(t.kI,{children:"Ficou Interessado? Entre em contato e solicite um or\xe7amento."}),(0,s.jsx)(a.Z,{setFormStatus:function(){}})]}),(0,s.jsx)(i.Z,{})]})}},14:function(e,n,r){"use strict";r.d(n,{W2:function(){return l},CL:function(){return c},kI:function(){return u},gO:function(){return m}});var o,i,a,t,s=r(2209),d=r(7379),l=d.ZP.section(o||(o=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #f7f7f7;\n  "]))),c=d.ZP.div(i||(i=(0,s.Z)(["\n  border-bottom: 1px solid #b3b3b3;\n  box-sizing: border-box;\n  margin: auto;\n  max-width: 1400px;\n  padding: 1.25rem;\n\n  @media (min-width: 980px){\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  @media (min-width: 980px){\n    padding: 0 2rem;\n  }\n  h1{\n    color: #1a3968;\n    font-weight: 800;\n    font-size: 30px;\n    margin: 0;\n  }\n  p{\n    margin: .3rem 0;\n    font-size: 16px;\n    line-height: 2;\n    font-weight: 400;\n  }\n\n\n"]))),u=d.ZP.h3(a||(a=(0,s.Z)(["\n    color: #1a3968;\n    font-size: 19px;\n"]))),m=d.ZP.div(t||(t=(0,s.Z)(["\n  background: white;\n  padding: 1rem;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n\n  @media (min-width: 980px){\n    margin-top: 5rem;\n  }\n"])))},4460:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var o=r(5675),i={src:"/site/hml//_next/static/media/credit-card.663fab99.jpg",height:3651,width:5477,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAoM//xAAeEAAABAcAAAAAAAAAAAAAAAABAgMEAAUGEhMhQv/aAAgBAQABPwCoJO1XSa2BjMZA+wDqP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAwEBPwCI/9k="},a=r(4399),t=r(14),s=r(5893),d=function(){return(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(t.gO,{children:[(0,s.jsx)("h1",{children:"Lojas Virtuais"}),(0,s.jsx)("p",{children:"Para quem comercializa produtos, ter uma loja virtual \xe9 essencial para aumentar as suas vendas!"}),(0,s.jsx)("p",{children:"As lojas virtuais funcionam como uma vitrine online dos seus produtos e permitem que os seus clientes realizem compras de forma r\xe1pida, pr\xe1tica e segura."}),(0,s.jsx)("p",{children:"A Zakta desenvolve diferentes tipos de lojas virtuais e tem a expertise necess\xe1ria para propor e criar a loja que mais seja apropriada ao seu neg\xf3cio."}),(0,s.jsx)("p",{children:"Criamos lojas virtuais com a identidade visual da sua empresa, design moderno, excelente usabilidade e totalmente adaptadas \xe0 celulares e demais dispositivos m\xf3veis."}),(0,s.jsx)("p",{children:"Nossas lojas virtuais s\xe3o integradas a gateways de pagamentos como Mercado Pago, Paypal, PagSeguro, al\xe9m de terem integra\xe7\xe3o de frete com os principais servi\xe7os tais como Correios, Melhor Envio, Jadlog, entre outros. Tamb\xe9m trabalhamos com outras diferentes ferramentas e plataformas de lojas virtual."}),(0,s.jsx)("p",{children:"Somos capazes de criar a loja virtual ideal para o seu com\xe9rcio. Entre em contato e nos diga o que precisa."})]}),(0,s.jsx)(o.default,{"data-aos":"fade-up",src:i,alt:"Mulher utilizando cart\xe3o de cr\xe9dito"})]})}},1414:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/o-que-oferecemos/lojas-virtuais-em-santos",function(){return r(4460)}])}},function(e){e.O(0,[355,675,821,774,888,179],(function(){return n=1414,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
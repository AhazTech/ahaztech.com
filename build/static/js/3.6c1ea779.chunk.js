(this.webpackJsonpzairo=this.webpackJsonpzairo||[]).push([[3],{36:function(e,t,a){},44:function(e,t,a){"use strict";var l=a(8),n=a(9),c=a(12),s=a(10),r=a(11),m=a(0),i=a.n(m),o=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).props=e,a.scrollTargetIds=a.props.scrollTargetIds,a.activeNavClass=a.props.activeNavClass,a.scrollDuration=Number(a.props.scrollDuration)||1e3,a.headerBackground="true"===a.props.headerBackground,a.props.router&&"HashRouter"===a.props.router?(a.homeDefaultLink="#/",a.hashIdentifier="#/#"):(a.homeDefaultLink="/",a.hashIdentifier="#"),a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"easeInOutQuad",value:function(e,t,a,l){return(e/=l/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,a){var l=this,n=t-e,c=0;!function t(){c+=10;var s=l.easeInOutQuad(c,e,n,a);window.scrollTo(0,s),c<a&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(a){a.preventDefault();var l=e.getNavToSectionID(t.getAttribute("href"));if(l){var n=document.getElementById(l).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,n,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",(function(){var t;e.scrollTargetIds.map((function(a,l){t=document.getElementById(a).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=t&&window.pageYOffset<t+document.getElementById(a).scrollHeight?(e.getNavLinkElement(a).classList.add(e.activeNavClass),e.getNavLinkElement(a).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(a)):(e.getNavLinkElement(a).classList.remove(e.activeNavClass),e.getNavLinkElement(a).parentNode.classList.remove(e.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&l===e.scrollTargetIds.length-1&&(e.getNavLinkElement(a).classList.add(e.activeNavClass),e.getNavLinkElement(a).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(a))}))}))}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.map((function(a,l){a!==e&&(t.getNavLinkElement(a).classList.remove(t.activeNavClass),t.getNavLinkElement(a).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return i.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),t}(m.Component);t.a=o},45:function(e,t){e.exports="data:image/png;base64,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"},46:function(e,t){e.exports="data:image/png;base64,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"},53:function(e,t,a){"use strict";var l=a(8),n=a(9),c=a(12),s=a(10),r=a(11),m=a(0),i=a.n(m),o=a(13),u=a(130),d=a(131),E=a(48),v=a.n(E),f=(a(36),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"bg-footer"},i.a.createElement("div",{className:"container"},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"3"},i.a.createElement("div",{className:"text-white"},i.a.createElement("h3",{className:"mb-4 footer-list-title f-17"},"Zairo"),i.a.createElement("ul",{className:"footer-icons list-inline mb-4"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(o.b,{to:"#",className:""},i.a.createElement("i",{className:"mdi mdi-facebook"}))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(o.b,{to:"#",className:""},i.a.createElement("i",{className:"mdi mdi-twitter"}))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(o.b,{to:"#",className:""},i.a.createElement("i",{className:"mdi mdi-instagram"}))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(o.b,{to:"#",className:""},i.a.createElement("i",{className:"mdi mdi-google"})))),i.a.createElement("p",{className:"copyright mt-3"},(new Date).getFullYear()," \xa9 Zairo."))),i.a.createElement(d.a,{lg:"9"},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"3"},i.a.createElement("div",null,i.a.createElement("p",{className:"text-white mb-4 footer-list-title f-17"},"Company"),i.a.createElement("ul",{className:"list-unstyled footer-list-menu"},i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"About Us")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Media & Press")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Career")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Blog"))))),i.a.createElement(d.a,{lg:"3"},i.a.createElement("div",null,i.a.createElement("p",{className:"text-white mb-4 footer-list-title f-17"},"Resources"),i.a.createElement("ul",{className:"list-unstyled footer-list-menu"},i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Help & Support")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Privacy Policy")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Terms & Conditions"))))),i.a.createElement(d.a,{lg:"3"},i.a.createElement("div",null,i.a.createElement("p",{className:"text-white mb-4 footer-list-title f-17"},"More Info"),i.a.createElement("ul",{className:"list-unstyled footer-list-menu"},i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Pricing")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"For Marketing")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"For CEOs ")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"For Agencies")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Our Apps"))))),i.a.createElement(d.a,{lg:"3"},i.a.createElement("div",null,i.a.createElement("p",{className:"text-white mb-4 footer-list-title f-17"},"Help center"),i.a.createElement("ul",{className:"list-unstyled footer-list-menu"},i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Accounting ")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"Billing")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"#"},"General Question")))))))))),i.a.createElement(v.a,{style:{width:"30px",height:"30px",position:"fixed",bottom:"10px",right:"20px",padding:"5px",textAlign:"center",zIndex:"10000",borderRadius:"3px",backgroundColor:"rgba(19, 206, 103, 0.7)"}}))}}]),t}(m.Component));t.a=f},64:function(e,t,a){"use strict";var l=a(8),n=a(9),c=a(12),s=a(10),r=a(17),m=a(11),i=a(0),o=a.n(i),u=a(13),d=a(44),E=a(138),v=a(128),f=a(129),g=a(45),k=a.n(g),S=a(46),p=a.n(S),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).toggleHeader=function(){a.setState({isOpenMenu:!a.state.isOpenMenu})},a.toggleMenu=function(){a.setState({isOpen:!a.state.isOpen})},a.state={Tab:"",isOpen:!1,modal:!1,isOpenMenu:!1},a.toggleMenu=a.toggleMenu.bind(Object(r.a)(a)),a.toggleModal=a.toggleModal.bind(Object(r.a)(a)),a.toggleHeader=a.toggleHeader.bind(Object(r.a)(a)),a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"toggleModal",value:function(){this.setState((function(e){return{modal:!e.modal}}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:this.props.className},o.a.createElement(v.a,{toggle:this.toggleModal},o.a.createElement("h5",{id:"exampleModalLongTitle"},"Get in touch")),o.a.createElement(f.a,{className:"p-4"},o.a.createElement("div",{className:"custom-form"},o.a.createElement("div",{id:"message"}),o.a.createElement("form",{method:"post",action:"php/contact.php",name:"contact-form",id:"contact-form"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"form-group mb-4"},o.a.createElement("input",{name:"name",id:"name",type:"text",className:"form-control",placeholder:"Your Name..."})),o.a.createElement("div",{className:"form-group mb-4"},o.a.createElement("input",{name:"email",id:"email",type:"email",className:"form-control",placeholder:"Your Email..."})),o.a.createElement("div",{className:"form-group mb-4"},o.a.createElement("input",{name:"subject",id:"subject",type:"text",className:"form-control",placeholder:"Your Subject..."})),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control",placeholder:"Your Message..."})))),o.a.createElement("div",{className:"row mt-3"},o.a.createElement("div",{className:"col-sm-12 text-right"},o.a.createElement("input",{type:"submit",id:"submit",name:"send",className:"submitBnt btn btn-custom",value:"Send Message"}),o.a.createElement("div",{id:"simple-msg"}))))))),o.a.createElement("div",{id:"is-sticky"},o.a.createElement("nav",{id:"nav-bar",className:"navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"},o.a.createElement("div",{className:"container"},o.a.createElement(u.b,{className:"logo text-uppercase",to:"/"},o.a.createElement("img",{src:k.a,alt:"",className:"logo-light",height:"14"}),o.a.createElement("img",{src:p.a,alt:"",className:"logo-dark",height:"14"})),o.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleHeader},o.a.createElement("i",{className:"mdi mdi-menu"})),o.a.createElement("div",{className:this.state.isOpenMenu?"collapse navbar-collapse show":"collapse navbar-collapse",id:"navbarCollapse"},o.a.createElement(d.a,{scrollTargetIds:["home","about","services","portfolio","testimonial","pricing"],activeNavClass:"active",scrollDuration:"800",headerBackground:"true",className:this.state.isOpenMenu?"navbar-nav ml-0 float-left":"navbar-nav   ml-auto navbar-center"},o.a.createElement("ul",{className:"navbar-nav ml-auto navbar-center",id:"mySidenav"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{href:"#home",className:"nav-link"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"#about",className:"nav-link"},"About")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"#services",className:"nav-link"},"Services")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"#portfolio",className:"nav-link"},"Portfolio")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"#testimonial",className:"nav-link"},"Testimonial")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"#pricing",className:"nav-link"},"Pricing")),o.a.createElement("li",null,o.a.createElement(u.b,{onClick:this.toggleModal,to:"#",className:"nav-link"},"Contact"))),o.a.createElement("button",{className:"btn btn-sm navbar-btn float-left"},"Sign up")))))))}}]),t}(i.Component);t.a=J},69:function(e,t,a){e.exports=a.p+"static/media/img-1.b021cb93.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/img-2.7875e036.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/img-3.a6289d7f.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/img-4.cd2063a3.jpg"}}]);
//# sourceMappingURL=3.6c1ea779.chunk.js.map
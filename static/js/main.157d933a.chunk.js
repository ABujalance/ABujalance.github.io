(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"header.subtitle":"hola"}')},27:function(e){e.exports=JSON.parse('{"header.subtitle":"hello"}')},29:function(e,a,t){e.exports=t(73)},42:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t(2),c=t(3),r=t(4),i=t(5),s=t(0),o=t.n(s),m=t(13),d=t.n(m),u=t(17),E=t(11),p=t(26),b=t(27);u.a.use(E.a).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},resources:{en:{translation:b},es:{translation:p}},react:{wait:!0},keySeparator:"-"});u.a,t(42),t(43),t(44),t(45),t(46),t(47),t(48),t(49),t(50);var h=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).state={sidebarOpen:!1},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=Object(E.b)();a.t,a.i18n;return[o.a.createElement("a",{key:"nav-menu-button",className:"menu-toggle rounded",onClick:function(){return e.onMenuClick()}},o.a.createElement("i",{className:"fas ".concat(this.state.sidebarOpen?"fa-times":"fa-bars")})),o.a.createElement("nav",{key:"nav-menu",id:"sidebar-wrapper",className:this.state.sidebarOpen?"active":""},o.a.createElement("ul",{className:"sidebar-nav"},o.a.createElement("li",{className:"sidebar-brand"},o.a.createElement("a",{className:"js-scroll-trigger",href:"#top"},"Alberto Bujalance")),[{title:"Home",url:"#top"},{title:"Portfolio",url:"#portfolio"},{title:"About",url:"#about"},{title:"Skills",url:"#skills"},{title:"CV",url:"#cv"}].map((function(a){return o.a.createElement("li",{key:a.url,className:"sidebar-nav-item",onClick:function(){return e.onMenuItemClick()}},o.a.createElement("a",{className:"js-scroll-trigger",href:a.url},a.title))}))))]}},{key:"onMenuItemClick",value:function(){this.setState({sidebarOpen:!1})}},{key:"onMenuClick",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen})}}]),a}(o.a.Component),f=Object(E.b)()(h),N=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement("header",{className:"masthead d-flex"},o.a.createElement("div",{className:"container text-center my-auto"},o.a.createElement("h1",{className:"mb-1"},"Alberto Bujalance"),o.a.createElement("h3",{className:"mb-5"},o.a.createElement("em",null," ",e("header.subtitle"))),o.a.createElement("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#portfolio"},"Find Out More")),o.a.createElement("div",{className:"overlay"}))}}]),a}(s.Component),v=Object(E.b)()(N),g=t(9),y=t.n(g),j=function(){return o.a.createElement(y.a,{id:"about"},o.a.createElement("section",{className:"content-section bg-foto-yo"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"}),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("h2",{style:{fontSize:40,textShadow:"2px 2px black"},className:"text-light big-text"},"I'm a Software Engineer, and I need a new Picture!"),o.a.createElement("p",{style:{fontSize:30,textShadow:"2px 2px black"},className:"text-light lead mb-5"},o.a.createElement("b",null,"I won't write any further description until I get a decent picture. This text will later be dark since I want the photo to have a clear background. White if possible but we'll see. Fernando pls help")))))))},w=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.techList.map((function(e){return o.a.createElement("span",{className:"btn btn-sm btn-info m-1"},e)}));return o.a.createElement("div",{className:"card shadow rounded mb-5"},o.a.createElement("img",{src:this.props.image,className:"card-img-top",alt:"Project"}),o.a.createElement("div",{className:"card-header text-center p-0"},o.a.createElement("h3",{className:"card-title h3 m-2"},this.props.title)),o.a.createElement("div",{className:"card-footer"},e),o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"text"},o.a.createElement("p",{className:" overflow-auto"},this.props.bodyText),o.a.createElement("br",null),null!=this.props.link&&o.a.createElement("a",{href:this.props.link,className:"btn btn-outline-light"},"Check this project!"))))}}]),a}(s.Component);w.defaultProps={techList:[]};var x=t(28),k=t.n(x),O=[{title:"Buscador de agentes Caser",bodyText:"Proyecto realizado para la web p\xfablica de Caser que permite buscar los agentes de seguros m\xe1s cercanos, distinguiendo entre varios tipos de agentes cada uno con su l\xf3gica de b\xfasqueda.",link:"https://www.caser.es/conocenos/buscador-agentes",image:"./img/caser_mapa_agentes.jpg",techList:["Java","Liferay","Javascript","Maps"]}],S={accesibility:!0,slidesToShow:3.1,centerPadding:"60px",focusOnSelect:!0,infinite:!1,responsive:[{breakpoint:1024,settings:{arrows:!1,centerMode:!0,slidesToShow:2.6,centerPadding:"50px"}},{breakpoint:768,settings:{arrows:!1,centerMode:!0,slidesToShow:1.7,centerPadding:"40px"}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,slidesToShow:1,centerPadding:"30px"}}]},I=function(){return o.a.createElement(y.a,{id:"portfolio"},o.a.createElement("section",{className:"content-section bg-light"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"content-section-heading text-center"},o.a.createElement("h3",{className:"text-secondary mb-0"},"Portfolio"),o.a.createElement("h2",{className:"mb-5"},"Recent Projects")),o.a.createElement("div",{className:"projects"},o.a.createElement(k.a,S,O.map((function(e,a){return o.a.createElement(w,{title:e.title,bodyText:e.bodyText,link:e.link,image:e.image,techList:e.techList})})))))))},C=[{link:"https://www.linkedin.com/in/alberto-bujalance-178062144/",icon:"icon-social-linkedin"},{link:"https://twitter.com/DeadpixelG",icon:"icon-social-twitter"},{link:"https://github.com/ABujalance",icon:"icon-social-github"}],L=function(){return o.a.createElement("footer",{className:"footer text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list-inline mb-5"},C.map((function(e,a){return o.a.createElement("li",{className:"list-inline-item",key:"social_".concat(a)},o.a.createElement("a",{className:"social-link rounded-circle text-white mr-3",href:e.link},o.a.createElement("i",{className:e.icon})))}))),o.a.createElement("p",null,"Contacto: mail@abujalance.com \xa0",o.a.createElement("i",{className:"icon-envelope"})),o.a.createElement("p",{className:"text-muted small mb-0"},"Copyright \xa9 Abujalance 2020")))},T=t(6),M=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).handleScroll=t.handleScroll.bind(Object(T.a)(t)),t.state={isScrolled:!1},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("a",{className:"".concat(this.state.isScrolled?"fadeIn":""," scroll-to-top rounded"),href:"#top"},o.a.createElement("i",{className:"fas fa-angle-up"}))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.debounceScroll)}},{key:"debounceScroll",value:function(e){var a=this;setTimeout((function(){return a.handleScroll(e)}),300)}},{key:"handleScroll",value:function(e){var a=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||""),n=(a?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,a?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop);this.setState({isScrolled:n>0})}}]),a}(o.a.Component),P=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(y.a,{id:"skills"},o.a.createElement("section",{className:"content-section"},o.a.createElement("div",{className:"container-fluid text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},o.a.createElement("span",{className:"heading-meta"},"What I do?"),o.a.createElement("h2",{className:"colorlib-heading"},"Here are some of my expertise"))),o.a.createElement("br",null)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("div",{className:"row row-pt-md"},o.a.createElement("div",{className:"col-md-4 text-center animate-box"},o.a.createElement("div",{className:"services color-1"},o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"icon-globe"})),o.a.createElement("div",{className:"desc"},o.a.createElement("h3",null,"Web Development "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis quis lorem et tempor.")))),o.a.createElement("div",{className:"col-md-4 text-center animate-box"},o.a.createElement("div",{className:"services color-3"},o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"icon-bulb"})),o.a.createElement("div",{className:"desc"},o.a.createElement("h3",null,"Data Structures & Algorithms"),o.a.createElement("p",null,"As I studied Computer Engineering, the main focus was in Algorithms, Design and Project management.")))),o.a.createElement("div",{className:"col-md-4 text-center animate-box"},o.a.createElement("div",{className:"services color-5"},o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"icon-equalizer"})),o.a.createElement("div",{className:"desc"},o.a.createElement("h3",null,"Dev Ops"),o.a.createElement("p",null,"I can work with tools like Jenkins and Dockers and am used to michroservices architectures")))),o.a.createElement("div",{className:"col-md-4 text-center animate-box"},o.a.createElement("div",{className:"services color-2"},o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"icon-rocket"})),o.a.createElement("div",{className:"desc"},o.a.createElement("h3",null,"This box can move"),o.a.createElement("p",null,"I was actually just testing stuff ")))),o.a.createElement("div",{className:"col-md-4 text-center animate-box"},o.a.createElement("div",{className:"services color-4"},o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"icon-magic-wand"})),o.a.createElement("div",{className:"desc"},o.a.createElement("h3",null,"Graphic Design"),o.a.createElement("p",null,"I'll ask my friend U\xf1u\xf1u's Art"))))))))}}]),a}(s.Component),A=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(y.a,{id:"timeline"},o.a.createElement("section",{className:"content-section"},o.a.createElement("div",{className:"container-fluid text-center"},o.a.createElement("section",{className:"colorlib-experience","data-section":"timeline"},o.a.createElement("div",{className:"colorlib-narrow-content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},o.a.createElement("span",{className:"heading-meta"},"highlights"),o.a.createElement("h2",{className:"colorlib-heading animate-box"},"Timeline"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"timeline-centered"},o.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},o.a.createElement("div",{className:"timeline-entry-inner"},o.a.createElement("div",{className:"timeline-icon color-3"},o.a.createElement("i",{className:"icon-note"})),o.a.createElement("div",{className:"timeline-label"},o.a.createElement("h2",null,"Babel Sistemas de Informaci\xf3n",o.a.createElement("span",null,"2019-present")),o.a.createElement("p",null,"I joined Babel on May, and since then I've been learning new ways to do projects")))),o.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInTop"},o.a.createElement("div",{className:"timeline-entry-inner"},o.a.createElement("div",{className:"timeline-icon color-4"},o.a.createElement("i",{className:"icon-note"})),o.a.createElement("div",{className:"timeline-label"},o.a.createElement("h2",null,"Master in Data Science and Software Engineering",o.a.createElement("span",null,"2018-2019")),o.a.createElement("p",null,"Ya no me apetece inventarme m\xe1s texto")))),o.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},o.a.createElement("div",{className:"timeline-entry-inner"},o.a.createElement("div",{className:"timeline-icon color-5"},o.a.createElement("i",{className:"icon-note"})),o.a.createElement("div",{className:"timeline-label"},o.a.createElement("h2",null,"Tier 1 S.A. ",o.a.createElement("span",null,"2017-2019")),o.a.createElement("p",null,"Regular la cosa")))),o.a.createElement("article",{className:"timeline-entry animate-box","data-animate-effect":"fadeInLeft"},o.a.createElement("div",{className:"timeline-entry-inner"},o.a.createElement("div",{className:"timeline-icon color-6"},o.a.createElement("i",{className:"icon-note"})),o.a.createElement("div",{className:"timeline-label"},o.a.createElement("h2",null,"Computer Engineering Degree",o.a.createElement("span",null,"2013-2018")),o.a.createElement("p",null,"Ha costao")))),o.a.createElement("article",{className:"timeline-entry begin animate-box","data-animate-effect":"fadeInBottom"},o.a.createElement("div",{className:"timeline-entry-inner"},o.a.createElement("div",{className:"timeline-icon color-none"})))))))))))}}]),a}(s.Component),D=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(v,null),o.a.createElement(I,null),o.a.createElement(j,null),o.a.createElement(P,null),o.a.createElement(A,null),o.a.createElement(L,null),o.a.createElement(M,null))}}]),a}(o.a.Component),B=document.getElementById("root");d.a.render(o.a.createElement(D,null),B)}},[[29,1,2]]]);
//# sourceMappingURL=main.157d933a.chunk.js.map
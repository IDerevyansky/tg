(this["webpackJsonpkinesio-app"]=this["webpackJsonpkinesio-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),i=a.n(r),c=(a(29),a(11)),o=a.n(c),l=a(13),m=a(1),p=a(2),u=a(14),d=a(4),h=a(3),b=a(7),E=(a(31),a(32),a(33),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.view;return s.a.createElement("div",{className:"callBackConteiner"},s.a.createElement("div",{className:"leftSide"},s.a.createElement("p",{className:"styleText-"+e},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a"),s.a.createElement("div",{className:"massagerIcon"},s.a.createElement("a",{href:"https://wa.me/"+this.props.whatsApp.id+"?text="+this.props.whatsApp.text,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"whatsapp-"+e})),s.a.createElement("a",{href:"tg://resolve?domain="+this.props.telegram.id,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"telegram-"+e+" m24-l"})),s.a.createElement("a",{href:"viber://chat?number="+this.props.viber.id,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"viber-"+e+" m24-l"})))),s.a.createElement("div",{className:"seporator-"+e}),s.a.createElement("div",{className:"rightSide"},s.a.createElement("p",{className:"styleText-"+e},"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 Email"),s.a.createElement("div",{className:""},s.a.createElement("a",{href:"mailto:"+this.props.email.id+"?subject="+this.props.email.title+"&body="+this.props.email.text,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"btnSingUp-"+e})))))}}]),a}(n.Component)),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=window.pageYOffset||document.documentElement.scrollTop,a=window.innerHeight/100*20;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{onClick:function(){e.props.statusPopUp(!1)},style:{top:t},className:"bgPopUp"}),s.a.createElement("div",{style:{top:t+a},className:"popUpContainer"},s.a.createElement("div",{className:"popUpBlock"},s.a.createElement("div",{onClick:function(){e.props.statusPopUp(!1)},className:"crossClosed"}),s.a.createElement("div",{className:"popUpContent"},s.a.createElement("p",{className:"textCenter m24-b f-22 f-w-600"},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"),s.a.createElement(E,Object.assign({},this.props,{view:"dark"})),s.a.createElement("div",null,s.a.createElement("p",{className:"textCenter m24-t f-16"},"\u0438\u043b\u0438"),s.a.createElement("a",{href:"tel:"+this.props.phone,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("p",{className:"textCenter m24-t f-22 f-w-600"},this.props.phone)))))))}}]),a}(n.Component),f=(a(34),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(l.a)(o.a.mark((function e(){var t,a,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(e,t){n.setState({visibleItemMain:t,visibleMobMenu:e,isOpen:!1})},s=document.getElementsByClassName("logoBox"),r=0,i=function(){var e=window.pageYOffset||document.documentElement.scrollTop;document.documentElement.clientWidth>630?r<e?e>=56&&n.setState({menuSticky:"fixed",visibleMenuSticky:!0}):n.setState({menuSticky:"absolute",visibleMenuSticky:!1}):n.setState({visibleMenuSticky:!1}),r=e},(t=function(){var e=document.documentElement.clientWidth,t=e>n.state.sizeMax,r=e>n.state.sizeMin;t?(s[0].style.width="216px",s[0].style.margin="",a(!1,!0)):r?(s[0].style.width="216px",s[0].style.margin="",a(!0,!1)):(s[0].style.width="130px",s[0].style.margin="auto",a(!1,!1))})(),window.addEventListener("resize",(function(){t(),i(),n.setState({isOpen:!1,iconMenu:"iconMenuOpen"})})),window.addEventListener("scroll",(function(){i(),n.setState({isOpen:!1,iconMenu:"iconMenuOpen"})}));case 8:case"end":return e.stop()}}),e)}))),n.isOpen=function(){n.setState({isOpen:!n.state.isOpen,iconMenu:"iconMenuOpen"===n.state.iconMenu?"iconMenuClose":"iconMenuOpen"})},n.isOpen=n.isOpen.bind(Object(u.a)(n)),n.state={sizeMax:768,sizeMin:425,visibleMobMenu:!1,visibleItemMain:!0,isOpen:!1,iconMenu:"iconMenuOpen",menuSticky:"absolute",visibleMenuSticky:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=window.pageYOffset||document.documentElement.scrollTop,a=this.props.listItem.map((function(e,t){return s.a.createElement(b.b,{key:t,to:e.url,rel:"noopener noreferrer"},s.a.createElement("li",{key:t},e.name))})),n="mobileMenu "+this.state.iconMenu,r=s.a.createElement("div",{onClick:this.isOpen,className:n}),i=s.a.createElement("div",{onClick:function(){e.props.statusPopUp(!0)},className:"downBtnMenu f-w-600"},"\u0417\u0410\u041f\u0418\u0421\u0410\u0422\u042c\u0421\u042f"),c=s.a.createElement("div",{onClick:function(){e.setState({isOpen:!1,iconMenu:"iconMenuOpen"})},style:{top:t},className:"bgMobileMenu"},this.state.sizeMin>=document.documentElement.clientWidth?i:"",s.a.createElement("div",{className:"popUpMenuContainer"},s.a.createElement("ul",{className:"f-w-600 ul"},a))),o=s.a.createElement("div",{onClick:this.isOpen,className:this.state.iconMenu+" downMobileMenu "}),l=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"stickyMessageBox"},s.a.createElement("a",{href:"https://wa.me/"+this.props.whatsApp.id+"?text="+this.props.whatsApp.text,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"stickyWhatsapp"})),s.a.createElement("a",{href:"tg://resolve?domain="+this.props.telegram.id,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"stickyTelegram m24-l"})),s.a.createElement("a",{href:"viber://chat?number="+this.props.viber.id,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"stickyViber m24-l"}))),s.a.createElement("a",{href:"mailto:"+this.props.email.id+"?subject="+this.props.email.title+"&body="+this.props.email.text,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"btnSticky"}))),m=s.a.createElement("div",{onClick:function(){e.props.statusPopUp(!0)},className:"btnSticky"}),p=s.a.createElement("div",{className:"menuContainer menuContainerAnimation",style:{position:this.state.menuSticky,zIndex:"1"}},s.a.createElement("div",{className:"menuContent"},s.a.createElement(b.b,{to:"/"}," ",s.a.createElement("div",{className:"logoBox"})),s.a.createElement("div",{className:"stickyBox"},document.documentElement.clientWidth<this.state.sizeMax?l:m)));return s.a.createElement(s.a.Fragment,null,this.state.visibleMenuSticky?p:"",s.a.createElement("div",{className:"menuContainer"},s.a.createElement("div",{className:"menuContent"},s.a.createElement(b.b,{className:"logoBox",to:"/"}),s.a.createElement("div",{className:"itemBox"},s.a.createElement("ul",{className:"f-w-600 ul f-16"},this.state.visibleItemMain?a:""),this.state.visibleMobMenu?r:""))),this.state.isOpen?c:"",this.state.sizeMin>=document.documentElement.clientWidth?o:"")}}]),a}(n.Component)),_=(a(40),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.listItem.map((function(e,t){return s.a.createElement("li",{key:t}," ",s.a.createElement(b.b,{key:t,to:e.url,rel:"noopener noreferrer"},e.name)," ")}));return s.a.createElement("div",{className:"footerContainer"},s.a.createElement("div",{className:"contentBox"},s.a.createElement("div",{className:"flex"},s.a.createElement(b.b,{to:"/"},s.a.createElement("div",{className:"LogoFooterBox"})),s.a.createElement("div",{className:"itemBoxFooter f-w-600 f-16"},e)),s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"containerButtonFooter"},s.a.createElement(E,Object.assign({},this.props,{view:"gray"}))),s.a.createElement("div",{className:"socialContainer"},s.a.createElement("p",{className:"socialContainerText f-16"},"\u042f \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445"),s.a.createElement("div",{className:"socialIcon"},s.a.createElement("a",{href:this.props.facebook,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"faceBookIcon"})),s.a.createElement("a",{href:this.props.instagram,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"instagramIcon m24-l"})),s.a.createElement("a",{href:this.props.vk,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"vkontacteIcon m24-l"}))))),s.a.createElement("div",{className:"disclamer"},s.a.createElement("p",{className:"f-12"},"\xa9 1998-2020  Derevyanskaya "),s.a.createElement("p",{className:"f-12"},"This site is operated techically by AI Accept Solutions Limited (registered at 17 Ensign House, Admirals Way, Canary Wharf, London) a subsidiary of Alpari Limited."))))}}]),a}(n.Component)),g=a(5),y=(a(41),a(42),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"discription_card"},s.a.createElement("div",{className:"m24-b"},s.a.createElement("h3",null,this.props.title)),s.a.createElement("div",{className:"text_card"},s.a.createElement("p",null,this.props.text_body))),s.a.createElement("div",{className:"card_more"},s.a.createElement("p",{onClick:function(){e.props.statusPopUp(!0)},className:"more"},this.props.appointment))))}}]),a}(n.Component)),N=(a(43),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e={background:"url("+this.props.bg+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"auto 200%"};return s.a.createElement("div",{className:"CardNews",style:e},s.a.createElement("div",{className:"Gradient-card-news"},s.a.createElement("div",{className:"text-content"},s.a.createElement("h3",null,this.props.title),s.a.createElement("p",null,this.props.text_body))))}}]),a}(n.Component)),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://iderevyansky.github.io/kinesio/back/pageStorage.json").then((function(e){return e.json()}));case 2:t=e.sent,n.setState({dataMainBanner:t.pages.main.section.MainBanner,section_one_title:t.pages.main.section.Body.section_one.section_one_title,section_one_body_text:t.pages.main.section.Body.section_one.section_one_body_text,section_two_title:t.pages.main.section.Body.section_two.section_two_title,section_two_body_text:t.pages.main.section.Body.section_two.section_two_body_text,section_three_title:t.pages.main.section.Body.section_three.section_three_title,section_three_content:t.pages.main.section.Body.section_three.content,link_more_ru:t.pages.main.section.options.link_more_ru,appointment:t.pages.main.section.options.appointment});case 4:case"end":return e.stop()}}),e)}))),n.state={dataMainBanner:"",section_one_title:"",section_one_body_text:"",section_two_title:"",section_two_body_text:"",section_three_title:"",section_three_content:[],link_more_ru:"",appointment:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state.section_three_content.map((function(t,a){return s.a.createElement(y,{key:a,title:t.title,text_body:t.text_body,statusPopUp:e.props.statusPopUp,appointment:e.state.appointment})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"contentBanner"},s.a.createElement("div",{className:"bannerMainBox"}),s.a.createElement("div",{className:"textBannerContainer"},s.a.createElement("div",{className:"textMainBanner"},s.a.createElement("h1",null,this.state.dataMainBanner.h1),s.a.createElement("p",null,this.state.dataMainBanner.p)),s.a.createElement("div",{onClick:function(){e.props.statusPopUp(!0)},className:"btnSingUpMainBanner"}))),s.a.createElement("div",{className:"bodyMainContent"},s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"section-content"},s.a.createElement("div",{className:"section-title textRight m24-b"},s.a.createElement("h2",null,this.state.section_one_title)),s.a.createElement("div",{className:"section-one__body-text"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.section_one_body_text}}),s.a.createElement(b.b,{to:"/whatIs",rel:"noopener noreferrer"},s.a.createElement("p",{className:"more"},this.state.link_more_ru))))),s.a.createElement("div",{className:"section two"},s.a.createElement("div",{className:"section-content revers center"},s.a.createElement("div",{className:"section-two__text"},s.a.createElement("div",{className:"section-title m24-b"},s.a.createElement("h2",null,this.state.section_two_title)),s.a.createElement("div",{className:"section-two__body-text"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.section_two_body_text}}),s.a.createElement(b.b,{to:"/about",rel:"noopener noreferrer"},s.a.createElement("p",{className:"more"},this.state.link_more_ru)))),s.a.createElement("div",{className:"section-two__img"}))),s.a.createElement("div",{className:"section three"},s.a.createElement("div",{className:"section-content three"},s.a.createElement("div",{className:"section-title m24-b",dangerouslySetInnerHTML:{__html:this.state.section_three_title}}),s.a.createElement("div",{className:"section-three__card"},t),s.a.createElement("div",{className:"center-text-in-block"},s.a.createElement(b.b,{to:"/product",rel:"noopener noreferrer"},s.a.createElement("p",{className:"more"},this.state.link_more_ru))))),s.a.createElement("div",{className:"section four"},s.a.createElement("div",{className:"section-content four"},s.a.createElement("div",{className:"section-title m24-b"},s.a.createElement("h2",null,"\u041c\u043e\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438")),s.a.createElement("div",{className:"section-news-card"},s.a.createElement("div",{className:"one-card-template"},s.a.createElement(N,{bg:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u0442\u043e\u0439 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",text_body:"\u041e\u043d \u0437\u043d\u0430\u043b \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u2013 \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e \u0438\u043c\u0435\u043d\u0438, \u0442\u043e \u0445\u043e\u0442\u044f \u0431\u044b \u0432 \u043b\u0438\u0446\u043e. \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u044d\u0442\u0430 \u0434\u0435\u0432\u0443\u0448\u043a\u0430 \u0431\u044b\u043b\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0433\u043b\u044f\u043d\u0443\u043b\u0430 \u0441\u044e\u0434\u0430? "})),s.a.createElement("div",{className:"two-card-template"},s.a.createElement(N,{bg:"https://images.unsplash.com/photo-1454496522488-7a8e488e8606",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u0442\u043e\u0439 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",text_body:"\u041e\u043d \u0437\u043d\u0430\u043b \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u2013 \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e \u0438\u043c\u0435\u043d\u0438, \u0442\u043e \u0445\u043e\u0442\u044f \u0431\u044b \u0432 \u043b\u0438\u0446\u043e. \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u044d\u0442\u0430 \u0434\u0435\u0432\u0443\u0448\u043a\u0430 \u0431\u044b\u043b\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0433\u043b\u044f\u043d\u0443\u043b\u0430 \u0441\u044e\u0434\u0430? "})),s.a.createElement("div",{className:"three-card-template"},s.a.createElement(N,{bg:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u0442\u043e\u0439 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0432 \u0434\u0432\u0435 \u0441\u0442\u0440\u043e\u0447\u043a\u0438",text_body:"\u041e\u043d \u0437\u043d\u0430\u043b \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u2013 \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e \u0438\u043c\u0435\u043d\u0438, \u0442\u043e \u0445\u043e\u0442\u044f \u0431\u044b \u0432 \u043b\u0438\u0446\u043e. \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u044d\u0442\u0430 \u0434\u0435\u0432\u0443\u0448\u043a\u0430 \u0431\u044b\u043b\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0433\u043b\u044f\u043d\u0443\u043b\u0430 \u0441\u044e\u0434\u0430? "})),s.a.createElement("div",{className:"four-card-template"},s.a.createElement(N,{bg:"https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u0442\u043e\u0439 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",text_body:"\u041e\u043d \u0437\u043d\u0430\u043b \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u2013 \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e \u0438\u043c\u0435\u043d\u0438, \u0442\u043e \u0445\u043e\u0442\u044f \u0431\u044b \u0432 \u043b\u0438\u0446\u043e. \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u044d\u0442\u0430 \u0434\u0435\u0432\u0443\u0448\u043a\u0430 \u0431\u044b\u043b\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0433\u043b\u044f\u043d\u0443\u043b\u0430 \u0441\u044e\u0434\u0430? "})),s.a.createElement("div",{className:"five-card-template"},s.a.createElement(N,{bg:"https://images.unsplash.com/photo-1434394354979-a235cd36269d",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u0442\u043e\u0439 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0432 \u0434\u0432\u0435 \u0441\u0442\u0440\u043e\u0447\u043a\u0438 ",text_body:"\u041e\u043d \u0437\u043d\u0430\u043b \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0438\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u2013 \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e \u0438\u043c\u0435\u043d\u0438, \u0442\u043e \u0445\u043e\u0442\u044f \u0431\u044b \u0432 \u043b\u0438\u0446\u043e. \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u044d\u0442\u0430 \u0434\u0435\u0432\u0443\u0448\u043a\u0430 \u0431\u044b\u043b\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0433\u043b\u044f\u043d\u0443\u043b\u0430 \u0441\u044e\u0434\u0430? "}))),s.a.createElement("div",{className:"center-text-in-block"},s.a.createElement(b.b,{to:"/news",rel:"noopener noreferrer"},s.a.createElement("p",{className:"more"},this.state.link_more_ru)))))))}}]),a}(n.Component),O=(a(44),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("p",null,this.props.text)}}]),a}(n.Component)),w=(a(45),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("p",null,this.props.text)}}]),a}(n.Component)),x=(a(46),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("p",null,this.props.text)}}]),a}(n.Component)),j=(a(47),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("p",null,this.props.text)}}]),a}(n.Component)),M=(a(48),function(e){var t=Object(g.f)().id;return s.a.createElement("p",null,e.text+" "+t)}),C=(a(49),function(e){return s.a.createElement("p",null,"\u0422\u0430\u043a\u043e\u0433\u043e \u0442\u0443\u0442 \u043d\u0435\u043c\u0430")}),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement(g.c,null,s.a.createElement(g.a,{exact:!0,path:"/"},s.a.createElement(k,{statusPopUp:this.props.statusPopUp})),s.a.createElement(g.a,{path:"/whatIs"},s.a.createElement(O,{text:"WhatIsKineziology"})),s.a.createElement(g.a,{path:"/about"},s.a.createElement(w,{text:"About"})),s.a.createElement(g.a,{path:"/product"},s.a.createElement(x,{text:"Product"})),s.a.createElement(g.a,{exact:!0,path:"/news"},s.a.createElement(j,{text:"News"})),s.a.createElement(g.a,{strict:!0,path:"/news/:id"},s.a.createElement(M,{text:"NewsView"})),s.a.createElement(g.a,{path:"*"},s.a.createElement(C,null)))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://iderevyansky.github.io/kinesio/back/storage.json").then((function(e){return e.json()}));case 2:t=e.sent,n.setState({listItem:t.listItem,phone:t.massagerContent.phone,email:t.massagerContent.email,telegram:t.massagerContent.telegram,viber:t.massagerContent.viber,whatsApp:t.massagerContent.whatsApp,facebook:t.socialAccount.facebook.linkAccount,instagram:t.socialAccount.instagram.linkAccount,vk:t.socialAccount.vk.linkAccount});case 4:case"end":return e.stop()}}),e)}))),n.statusPopUp=function(e){n.setState({statusPopUp:e}),document.body.style.overflowY=e?"hidden":"auto"},n.statusPopUp=n.statusPopUp.bind(Object(u.a)(n)),n.state={statusPopUp:!1,listItem:[],email:"",telegram:"",viber:"",whatsApp:"",facebook:"",instagram:"",vk:""},n}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,null,s.a.createElement(f,{statusPopUp:this.statusPopUp,listItem:this.state.listItem,email:this.state.email,telegram:this.state.telegram,viber:this.state.viber,whatsApp:this.state.whatsApp}),this.state.statusPopUp?s.a.createElement(v,Object.assign({},this.state,{statusPopUp:this.statusPopUp})):"",s.a.createElement("div",{className:"App-body"},s.a.createElement(B,{statusPopUp:this.statusPopUp})),s.a.createElement(_,{email:this.state.email,telegram:this.state.telegram,viber:this.state.viber,whatsApp:this.state.whatsApp,listItem:this.state.listItem,facebook:this.state.facebook,instagram:this.state.instagram,vk:this.state.vk})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.799f04c8.chunk.js.map
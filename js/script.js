!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24);const i={};var s;(s=n(1)).keys().forEach(t=>i[t]=s(t))},function(t,e,n){var i={"./cv-logo.svg":2,"./english.svg":3,"./favicon.svg":4,"./flag.svg":5,"./france.svg":6,"./img.jpg":7,"./information.svg":8,"./logo.svg":9,"./spain.svg":10,"./worldwide.svg":11};function s(t){var e=_(t);return n(e)}function _(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=_,t.exports=s,s.id=1},function(t,e,n){t.exports=n.p+"static/content/svg/cv-logo.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/english.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/favicon.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/flag.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/france.svg"},function(t,e,n){t.exports=n.p+"static/content/img/img.jpg"},function(t,e,n){t.exports=n.p+"static/content/svg/information.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/logo.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/spain.svg"},function(t,e,n){t.exports=n.p+"static/content/svg/worldwide.svg"},function(t,e,n){},function(t,e,n){t.exports=n.p+"static/css/font-Confortaa.css"},function(t,e,n){t.exports=n.p+"static/css/font-Montserrat.css"},function(t,e,n){t.exports=n.p+"static/css/normalize.css"},function(t,e,n){t.exports=n.p+"static/fonts/Comfortaa[wght].ttf"},function(t,e,n){t.exports=n.p+"static/fonts/Montserrat-Regular.ttf"},function(t,e,n){t.exports=n.p+"static/fonts/Montserrat-Medium.ttf"},function(t,e,n){t.exports=n.p+"static/fonts/Montserrat-SemiBold.ttf"},function(t,e){let n=document.getElementById("main_menu_toggle"),i=document.getElementById("span_menu_toggle");n.addEventListener("click",()=>{main_menu.classList.toggle("show_menu"),i.classList.toggle("span-menu-toggle-show"),_.classList.remove("show_list-settings"),a.classList.remove("show_info_span")});let s=document.getElementById("settings_icon"),_=document.getElementById("list_settings");s.addEventListener("click",()=>{_.classList.toggle("show_list-settings"),a.classList.remove("show_info_span")});let o=document.getElementById("info_icon"),a=document.getElementById("info_span");o.addEventListener("click",()=>{a.classList.toggle("show_info_span"),setTimeout(function(){a.classList.remove("show_info_span")},5e3)})},function(t,e){document.querySelector("input[name=theme]").addEventListener("change",function(){this.checked?(n(),document.documentElement.setAttribute("data-theme","dark")):(n(),document.documentElement.setAttribute("data-theme","light"))});let n=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},1e3)}},function(t,e){var n={es:{menu__item_link_3:"Iconos SVG",menu__item_link_1:"Botones",menu__item_link_2:"Ckeckbox's",menu__item_link_4:"Galeria de fotos",menu__item_link_5:"GitHub",text_settings_1:"Ajustes",text_settings_2:"Tema oscuro",text_settings_3:"Cambiar idioma",title_primary:"Tecnico en sistemas microinformáticos y redes",pi_subtitle_1:"Datos personales",pi_subtitle_2:"Contacto",pi_p__b_1:"Nombre: ",pi_p__i_1:"Javier",pi_p__b_2:"Apellidos: ",pi_p__i_2:"Delgado Rodriguez",pi_p__b_3:"Edad: ",pi_p__i_3:"22 años",pi_p__b_4:"Nacionalidad: ",pi_p__i_4:"Española",pi_subtitle_2:"Contacto",pi_p__b_5:"Direccion: ",pi_p__i_5:"Leganes (Madrid)",pi_p__b_6:"Telefono: ",pi_p__i_6:"(+34) 646 65 81 65",pi_p__b_7:"E-Mail: ",pi_p__i_7:"javidel96@hotmail.es"},en:{menu__item_link_3:"SVG icons",menu__item_link_1:"Buttons",menu__item_link_2:"Ckeckbox's",menu__item_link_4:"Gallery photos",menu__item_link_5:"GitHub",text_settings_1:"Settings",text_settings_2:"Dark theme",text_settings_3:"Change language",title_primary:"Technician in microcomputer systems and networks",pi_subtitle_1:"Personal information",pi_subtitle_2:"Contact",pi_p__b_1:"Name: ",pi_p__i_1:"Javier",pi_p__b_2:"Last name: ",pi_p__i_2:"Delgado Rodriguez",pi_p__b_3:"Age: ",pi_p__i_3:"22 years",pi_p__b_4:"Nationality: ",pi_p__i_4:"Spanish",pi_subtitle_2:"Contact",pi_p__b_5:"Address: ",pi_p__i_5:"Leganes (Madrid)",pi_p__b_6:"Phone: ",pi_p__i_6:"(+34) 646 65 81 65",pi_p__b_7:"E-Mail: ",pi_p__i_7:"javidel96@hotmail.es"},fr:{menu__item_link_3:"icônes SVG",menu__item_link_1:"Boutons",menu__item_link_2:"Ckeckbox's",menu__item_link_4:"Galerie de photos",menu__item_link_5:"GitHub",text_settings_1:"Paramètres",text_settings_2:"thème sombre",text_settings_3:"Changer de langue",title_primary:"Technicien en systèmes et réseaux de micro-ordinateurs",pi_subtitle_1:"Informations personnelles",pi_subtitle_2:"Contact",pi_p__b_1:"Prénom: ",pi_p__i_1:"Javier",pi_p__b_2:"Nom: ",pi_p__i_2:"Delgado Rodriguez",pi_p__b_3:"Age: ",pi_p__i_3:"22 ans",pi_p__b_4:"Nationalité: ",pi_p__i_4:"Espagnol",pi_subtitle_2:"Contact",pi_p__b_5:"Adresse: ",pi_p__i_5:"Leganes (Madrid)",pi_p__b_6:"Téléphone: ",pi_p__i_6:"(+34) 646 65 81 65",pi_p__b_7:"E-Mail: ",pi_p__i_7:"javidel96@hotmail.es"}};$(function(){$(".translate").click(function(){var t=$(this).attr("id");$("p, a, h1, h2, b, i").each(function(e,i){$(this).text(n[t][$(this).attr("key")])})})})},function(t,e){const n=document.querySelector("#back-to-top-btn");window.addEventListener("scroll",function(){window.pageYOffset>90?n.classList.contains("btnEntrance")||(n.classList.remove("btnExit"),n.classList.add("btnEntrance"),n.style.display="block"):n.classList.contains("btnEntrance")&&(n.classList.remove("btnEntrance"),n.classList.add("btnExit"),setTimeout(function(){n.style.display="none"},250))}),n.addEventListener("click",function(){const t=window.pageYOffset,e=0-t,n=500;let i=null;window.requestAnimationFrame(function s(_){i||(i=_);const o=_-i;window.scrollTo(0,(a=o,c=t,r=e,p=n,(a/=p/2)<1?r/2*a*a*a+c:r/2*((a-=2)*a*a+2)+c));var a,c,r,p;o<n&&window.requestAnimationFrame(s)})})},function(t,e){let n=(new Date).getFullYear();document.getElementById("textFooter").innerHTML="Copyright &copy; 1996-"+n+" JD"}]);
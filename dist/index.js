!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BootstrapChatUI=t():e.BootstrapChatUI=t()}(self,(()=>(()=>{"use strict";var e={52:(e,t,r)=>{r.r(t)},566:(e,t,r)=>{r.r(t)},864:(e,t,r)=>{r.r(t)},892:(e,t,r)=>{r.r(t)},846:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(892);var u=o(r(689)),i=l(r(511)),c=l(r(907)),s=l(r(119)),f=l(r(9)),d=l(r(401)),m=l(r(428)),p=l(r(261)),v=r(444);t.default=function(e){var t=e.originUserId,r=e.allMessages,a=e.onMessageCreate,n=e.activeRoom,o=e.onRoomChange,l=e.getContactAvatar,_=e.getContactName,h=e.isContactOnline,b=(0,u.useMemo)((function(){return(0,v.getLastMessages)(r)}),[r]),g=(0,u.useMemo)((function(){return r.filter((function(e){return e.roomId===n&&"dummy"!==e.status}))}),[r,n]);return u.default.createElement(p.default.Provider,{value:{getContactAvatar:l,getContactName:_,isContactOnline:h}},u.default.createElement(c.default,{className:"h-100 gx-2"},u.default.createElement(i.default,{md:5,lg:4,xxl:3,className:"h-100 d-none d-md-block"},u.default.createElement("div",{className:"h-100 d-flex flex-column"},u.default.createElement(m.default,{onContactCreate:function(e){return a(e,"",!0)}}),u.default.createElement(s.default,{lastMessages:b,activeRoom:n,activateRoom:o}))),u.default.createElement(i.default,{className:"h-100"},u.default.createElement("div",{className:"h-100 d-flex flex-column gap-3"},u.default.createElement(d.default,{originUserId:t,collection:g}),n&&u.default.createElement(f.default,{submit:function(e){return a(n,e,!1)}})))))}},733:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(52);var u=o(r(689)),i=l(r(810)),c=l(r(301)),s=l(r(423)),f=l(r(261));t.default=function(e){var t=e.lastMessage,r=e.active,a=e.activate,n=(0,u.useContext)(f.default).getContactName;return u.default.createElement(i.default,{className:"mb-3 contact",body:!0,bg:r?"success":void 0,onClick:function(){return a(t.roomId)}},u.default.createElement(s.default,{timestamp:t.timestamp,className:"contact__time"}),u.default.createElement("div",{className:"w-100 d-flex align-items-center gap-3"},u.default.createElement("div",null,u.default.createElement(c.default,{size:"4rem",id:t.roomId})),u.default.createElement("div",{style:{minWidth:"0"}},u.default.createElement(i.default.Title,{className:"mb-0 text-truncate"},n(t.roomId)),u.default.createElement(i.default.Text,{className:"text-truncate"},function(e){var t=e.status,r=e.content;if("dummy"===t)return" ";var a=r.match(/^data:(.*?);base64,/);return a&&a[1]?"File (".concat(a[1],")"):r}(t)))))}},301:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(566);var u=l(r(3)),i=o(r(689)),c=l(r(261));t.default=function(e){var t=e.size,r=e.id,a=e.className,n=(0,i.useContext)(c.default),o=n.getContactAvatar,l=n.getContactName,s=(0,n.isContactOnline)(r);return i.default.createElement("div",{className:(0,u.default)("contact-avatar",a),style:{width:t,height:t}},i.default.createElement("img",{src:o(r),alt:l(r),className:(0,u.default)("contact-avatar__image",s&&"contact-avatar__image--online")}))}},119:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(689)),o=a(r(733));t.default=function(e){var t=e.lastMessages,r=e.activeRoom,a=e.activateRoom;return n.default.createElement("div",{className:"pe-3 h-100 overflow-y-scroll cool-scrollbar"},t.map((function(e){return n.default.createElement(o.default,{key:e.id,lastMessage:e,active:r===e.roomId,activate:a})})))}},9:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{i(a.next(e))}catch(e){o(e)}}function u(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,u)}i((a=a.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(l=0)),l;)try{if(r=1,a&&(n=2&u[0]?a.return:u[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,u[1])).done)return n;switch(a=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,a=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==u[0]&&2!==u[0])){l=0;continue}if(3===u[0]&&(!n||u[1]>n[0]&&u[1]<n[3])){l.label=u[1];break}if(6===u[0]&&l.label<n[1]){l.label=n[1],n=u;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(u);break}n[2]&&l.ops.pop(),l.trys.pop();continue}u=t.call(e,l)}catch(e){u=[6,e],a=0}finally{r=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(26),s=r(144),f=r(197),d=o(r(689)),m=i(r(937)),p=r(985),v=i(r(637));t.default=function(e){var t=e.submit,r=(0,d.useState)(""),a=r[0],n=r[1],o=(0,d.useRef)(null),i=function(){a&&(t(a),n(""))};return d.default.createElement("div",{className:"flex-shrink-0"},d.default.createElement("div",{className:"d-flex align-items-end gap-3"},d.default.createElement(v.default,{value:a,onChange:n,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),e.ctrlKey||e.shiftKey?n((function(e){return e+"\n"})):i())}}),d.default.createElement(m.default,{variant:"primary",onClick:i,disabled:!a.length},d.default.createElement(f.FontAwesomeIcon,{icon:c.faPaperPlane,size:"lg",className:"fa-fw"})),d.default.createElement(m.default,{variant:"secondary",onClick:function(){var e;return null===(e=o.current)||void 0===e?void 0:e.click()}},d.default.createElement("input",{ref:o,type:"file",className:"d-none",multiple:!0,accept:"image/*,application/pdf",onChange:function(e){return l(void 0,void 0,void 0,(function(){var r,a,n,o,l;return u(this,(function(u){switch(u.label){case 0:if(!e.target.files)return[2];r=Array.from(e.target.files),a=0,n=r,u.label=1;case 1:return a<n.length?(o=n[a],[4,(0,p.convertFileToBase64)(o)]):[3,4];case 2:l=u.sent(),t(l),u.label=3;case 3:return a++,[3,1];case 4:return[2]}}))}))}}),d.default.createElement(f.FontAwesomeIcon,{icon:s.faPaperclip,size:"lg",className:"fa-fw"}))))}},917:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(864);var n=a(r(3)),o=a(r(689)),l=a(r(810)),u=a(r(511)),i=a(r(907)),c=a(r(301)),s=a(r(969)),f=a(r(423)),d=a(r(466));t.default=function(e){var t=e.content,r=e.roomId,a=e.authorId,m=e.timestamp,p=e.status,v=e.original,_=e.prevDifferent,h=e.nextDifferent;return o.default.createElement(i.default,null,o.default.createElement(u.default,{xs:8,className:(0,n.default)("mb-1 d-flex",v?"ms-auto flex-row-reverse":"me-auto flex-row",{"pt-2":_,"pb-2":h})},o.default.createElement(l.default,{className:"message",bg:v?void 0:"success"},!v&&_&&a!==r&&o.default.createElement(c.default,{size:"2rem",id:a,className:"message__author"}),o.default.createElement(f.default,{timestamp:m,className:"message__time"}),v&&o.default.createElement("div",{className:"message__status"},o.default.createElement(s.default,{current:p})),_&&o.default.createElement("svg",{className:(0,n.default)("message__tail","message__tail--".concat(v?"original":"stranger")),viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},o.default.createElement("polygon",{points:"0,0 32,0 16,16"})),o.default.createElement(l.default.Body,null,o.default.createElement(l.default.Text,{className:"message__content"},o.default.createElement(d.default,{content:t}))))))}},466:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(346),o=r(197),l=a(r(689));t.default=function(e){var t=e.content,r=/^data:image\/(png|jpg|jpeg|gif);base64,/.test(t),a=/^data:application\/pdf;base64,/.test(t);return r?l.default.createElement("img",{className:"mb-1",src:t}):a?l.default.createElement("a",{href:t,download:"document.pdf"},l.default.createElement(o.FontAwesomeIcon,{icon:n.faFilePdf,size:"5x",className:"fa-fw mb-2"})):l.default.createElement("span",null,t)}},401:function(e,t,r){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=l(r(689)),c=u(r(917));t.default=function(e){var t=e.originUserId,r=e.collection,n=(0,i.useRef)(null);return(0,i.useEffect)((function(){n.current&&(n.current.scrollTop=n.current.scrollHeight)}),[r.length]),i.default.createElement("div",{ref:n,className:"h-100 bg-primary-subtle px-4 py-1 overflow-y-scroll cool-scrollbar"},r.map((function(e,n){return i.default.createElement(c.default,a({key:e.id},e,{original:e.authorId===t,prevDifferent:e.authorId!==(r[n-1]||{}).authorId,nextDifferent:e.authorId!==(r[n+1]||{}).authorId}))})))}},969:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(790),o=r(530),l=r(197),u=a(r(3)),i=a(r(689));t.default=function(e){var t=e.current;return"new"===t?null:i.default.createElement(l.FontAwesomeIcon,{icon:["delivered","read"].includes(t)?o.faCheckDouble:n.faCheck,size:"sm",className:(0,u.default)("fa-fw","read"===t?"text-primary":"text-secondary")})}},423:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=l(r(3)),i=o(r(689));t.default=function(e){var t=e.timestamp,r=e.className,a=(0,i.useMemo)((function(){var e=new Date(t);return e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")}),[t]);return i.default.createElement("small",{className:(0,u.default)(r,"text-muted lh-1")},a)}},428:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(338),o=r(197),l=a(r(689)),u=a(r(937));t.default=function(e){var t=e.onContactCreate;return l.default.createElement("div",{className:"mb-3 me-3 pe-1 d-flex flex-row justify-content-between"},l.default.createElement("div",null),l.default.createElement(u.default,{onClick:function(){var e=prompt("Please enter contact id to start a conversation:","");e&&t(e)}},l.default.createElement(o.FontAwesomeIcon,{icon:n.faUserPlus,size:"lg",className:"fa-fw"})))}},637:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(r(689)),i=l(r(226));t.default=function(e){var t=e.value,r=e.onChange,a=e.onKeyDown,n=(0,u.useRef)(null);return(0,u.useEffect)((function(){n.current&&t.endsWith("\n")&&(n.current.scrollTop=n.current.scrollHeight)}),[t]),u.default.createElement(i.default.Control,{ref:n,as:"textarea",rows:Math.min(3,t.split("\n").length),className:"w-100",style:{resize:"none"},value:t,onChange:function(e){return r(e.target.value)},onKeyDown:a})}},985:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.convertFileToBase64=void 0,t.convertFileToBase64=function(e){return new Promise((function(t,r){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)},a.onerror=function(e){r(e)}}))}},261:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=(0,r(689).createContext)({getContactAvatar:function(){return""},getContactName:function(){return""},isContactOnline:function(){return!1}});t.default=a},444:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getLastMessages=void 0,t.getLastMessages=function(e){for(var t,r,a={},n=0,o=e;n<o.length;n++){var l=o[n];(null!==(r=null===(t=a[l.roomId])||void 0===t?void 0:t.timestamp)&&void 0!==r?r:0)<l.timestamp&&(a[l.roomId]=l)}return Object.values(a)}},790:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faCheck")},530:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faCheckDouble")},346:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faFilePdf")},26:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faPaperPlane")},144:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faPaperclip")},338:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faUserPlus")},197:e=>{e.exports=require("@fortawesome/react-fontawesome")},3:e=>{e.exports=require("classnames")},689:e=>{e.exports=require("react")},937:e=>{e.exports=require("react-bootstrap/Button")},810:e=>{e.exports=require("react-bootstrap/Card")},511:e=>{e.exports=require("react-bootstrap/Col")},226:e=>{e.exports=require("react-bootstrap/Form")},907:e=>{e.exports=require("react-bootstrap/Row")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,r),o.exports}return r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(846)})()));
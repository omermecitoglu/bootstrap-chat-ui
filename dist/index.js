!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BootstrapChatUI=t():e.BootstrapChatUI=t()}(self,(()=>(()=>{"use strict";var e={52:(e,t,r)=>{r.r(t)},864:(e,t,r)=>{r.r(t)},892:(e,t,r)=>{r.r(t)},846:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(892);var l=o(r(689)),i=u(r(511)),c=u(r(907)),s=u(r(119)),f=u(r(9)),d=u(r(401)),m=u(r(261)),p=r(444);t.default=function(e){var t=e.originUserId,r=e.allMessages,a=e.addMessage,n=e.getContactAvatar,o=e.getContactName,u=(0,l.useState)(null),v=u[0],_=u[1],b=(0,l.useMemo)((function(){return(0,p.getLastMessages)(r)}),[r]),g=(0,l.useMemo)((function(){return r.filter((function(e){return e.roomId===v}))}),[r,v]);return l.default.createElement(m.default.Provider,{value:{getContactAvatar:n,getContactName:o}},l.default.createElement(c.default,{className:"h-100 gx-2"},l.default.createElement(i.default,{md:5,lg:4,xxl:3,className:"h-100 d-none d-md-block"},l.default.createElement(s.default,{lastMessages:b,activeRoom:v,activateRoom:_})),l.default.createElement(i.default,{className:"h-100"},l.default.createElement("div",{className:"h-100 d-flex flex-column gap-3"},l.default.createElement(d.default,{originUserId:t,collection:g}),v&&l.default.createElement(f.default,{submit:function(e){return a(e,v)}})))))}},733:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(52);var l=o(r(689)),i=u(r(810)),c=u(r(464)),s=u(r(423)),f=u(r(261));t.default=function(e){var t=e.lastMessage,r=e.active,a=e.activate,n=(0,l.useContext)(f.default).getContactName;return l.default.createElement(i.default,{className:"mb-3 contact",body:!0,bg:r?"success":void 0,onClick:function(){return a(t.roomId)}},l.default.createElement(s.default,{timestamp:t.timestamp,className:"contact__time"}),l.default.createElement("div",{className:"w-100 d-flex align-items-center gap-3"},l.default.createElement("div",null,l.default.createElement(c.default,{size:"4rem",id:t.roomId})),l.default.createElement("div",{style:{minWidth:"0"}},l.default.createElement(i.default.Title,{className:"mb-0 text-truncate"},n(t.roomId)),l.default.createElement(i.default.Text,{className:"text-truncate"},t.content))))}},464:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(r(689)),i=u(r(261));t.default=function(e){var t=e.size,r=e.id,a=e.className,n=(0,l.useContext)(i.default),o=n.getContactAvatar,u=n.getContactName;return l.default.createElement("div",{className:a,style:{width:t,height:t}},l.default.createElement("img",{src:o(r),alt:u(r),className:"rounded-circle w-100 h-100 object-fit-cover"}))}},119:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(689)),o=a(r(733));t.default=function(e){var t=e.lastMessages,r=e.activeRoom,a=e.activateRoom;return n.default.createElement("div",{className:"pe-3 h-100 overflow-y-scroll cool-scrollbar"},t.map((function(e){return n.default.createElement(o.default,{key:e.id,lastMessage:e,active:r===e.roomId,activate:a})})))}},9:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(26),i=r(144),c=r(197),s=o(r(689)),f=u(r(937)),d=u(r(637));t.default=function(e){var t=e.submit,r=(0,s.useState)(""),a=r[0],n=r[1],o=(0,s.useRef)(null),u=function(){a&&(t(a),n(""))};return s.default.createElement("div",{className:"flex-shrink-0"},s.default.createElement("div",{className:"d-flex align-items-end gap-3"},s.default.createElement(d.default,{value:a,onChange:n,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),e.ctrlKey?n((function(e){return e+"\n"})):u())}}),s.default.createElement(f.default,{variant:"primary",onClick:u,disabled:!a.length},s.default.createElement(c.FontAwesomeIcon,{icon:l.faPaperPlane,size:"lg",className:"fa-fw"})),s.default.createElement(f.default,{variant:"secondary",onClick:function(){var e;return null===(e=o.current)||void 0===e?void 0:e.click()}},s.default.createElement("input",{ref:o,type:"file",className:"d-none",multiple:!0,accept:"image/*"}),s.default.createElement(c.FontAwesomeIcon,{icon:i.faPaperclip,size:"lg",className:"fa-fw"}))))}},917:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(864);var n=a(r(3)),o=a(r(689)),u=a(r(810)),l=a(r(511)),i=a(r(907)),c=a(r(464)),s=a(r(969)),f=a(r(423));t.default=function(e){var t=e.content,r=e.roomId,a=e.authorId,d=e.timestamp,m=e.status,p=e.original,v=e.prevDifferent,_=e.nextDifferent;return o.default.createElement(i.default,null,o.default.createElement(l.default,{xs:8,className:(0,n.default)("mb-1 d-flex",p?"ms-auto flex-row-reverse":"me-auto flex-row",{"pt-2":v,"pb-2":_})},o.default.createElement(u.default,{className:"message",bg:p?void 0:"success"},!p&&v&&a!==r&&o.default.createElement(c.default,{size:"2rem",id:a,className:"message__author"}),o.default.createElement(f.default,{timestamp:d,className:"message__time"}),p&&o.default.createElement("div",{className:"message__status"},o.default.createElement(s.default,{current:m})),v&&o.default.createElement("svg",{className:(0,n.default)("message__tail","message__tail--".concat(p?"original":"stranger")),viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},o.default.createElement("polygon",{points:"0,0 32,0 16,16"})),o.default.createElement(u.default.Body,null,o.default.createElement(u.default.Text,null,t)))))}},401:function(e,t,r){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(689)),c=l(r(917));t.default=function(e){var t=e.originUserId,r=e.collection,n=(0,i.useRef)(null);return(0,i.useEffect)((function(){n.current&&(n.current.scrollTop=n.current.scrollHeight)}),[r.length]),i.default.createElement("div",{ref:n,className:"h-100 bg-primary-subtle px-4 py-1 overflow-y-scroll cool-scrollbar"},r.map((function(e,n){return i.default.createElement(c.default,a({key:e.id},e,{original:e.authorId===t,prevDifferent:e.authorId!==(r[n-1]||{}).authorId,nextDifferent:e.authorId!==(r[n+1]||{}).authorId}))})))}},969:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(790),o=r(530),u=r(197),l=a(r(3)),i=a(r(689));t.default=function(e){var t=e.current;return"new"===t?null:i.default.createElement(u.FontAwesomeIcon,{icon:["delivered","read"].includes(t)?o.faCheckDouble:n.faCheck,size:"sm",className:(0,l.default)("fa-fw","read"===t?"text-primary":"text-secondary")})}},423:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(r(3)),i=o(r(689));t.default=function(e){var t=e.timestamp,r=e.className,a=(0,i.useMemo)((function(){var e=new Date(t);return e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")}),[t]);return i.default.createElement("small",{className:(0,l.default)(r,"text-muted lh-1")},a)}},637:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(r(689)),i=u(r(226));t.default=function(e){var t=e.value,r=e.onChange,a=e.onKeyDown,n=(0,l.useRef)(null);return(0,l.useEffect)((function(){n.current&&t.endsWith("\n")&&(n.current.scrollTop=n.current.scrollHeight)}),[t]),l.default.createElement(i.default.Control,{ref:n,as:"textarea",rows:Math.min(3,t.split("\n").length),className:"w-100",style:{resize:"none"},value:t,onChange:function(e){return r(e.target.value)},onKeyDown:a})}},261:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=(0,r(689).createContext)({getContactAvatar:function(){return""},getContactName:function(){return""}});t.default=a},444:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getLastMessages=void 0,t.getLastMessages=function(e){for(var t,r,a={},n=0,o=e;n<o.length;n++){var u=o[n];(null!==(r=null===(t=a[u.roomId])||void 0===t?void 0:t.timestamp)&&void 0!==r?r:0)<u.timestamp&&(a[u.roomId]=u)}return Object.values(a)}},790:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faCheck")},530:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faCheckDouble")},26:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faPaperPlane")},144:e=>{e.exports=require("@fortawesome/free-solid-svg-icons/faPaperclip")},197:e=>{e.exports=require("@fortawesome/react-fontawesome")},3:e=>{e.exports=require("classnames")},689:e=>{e.exports=require("react")},937:e=>{e.exports=require("react-bootstrap/Button")},810:e=>{e.exports=require("react-bootstrap/Card")},511:e=>{e.exports=require("react-bootstrap/Col")},226:e=>{e.exports=require("react-bootstrap/Form")},907:e=>{e.exports=require("react-bootstrap/Row")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,r),o.exports}return r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(846)})()));
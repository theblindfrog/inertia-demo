(self.webpackChunk=self.webpackChunk||[]).push([[248,984],{1248:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var o=n(984),i=void 0;const s={components:{Layout:o.default},methods:{submitForm:function(){i.$inertia.post("/contact-us",{name:i.name,email:i.email,_token:i.$page.props.csrf_token})}}};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{title:"Contact Us"}},[n("h1",[t._v("Contact Us")]),t._v(" "),n("p",[t._v("Hello!")])])}),[],!1,null,null,null).exports},984:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});const o={props:{title:String},watch:{title:{immediate:!0,handler:function(t){document.title=t}}}};const i=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[n("header",[n("inertia-link",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{href:"/"}},[t._v("Home")]),t._v(" "),n("inertia-link",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{href:"/inertia"}},[t._v("Inertia")]),t._v(" "),n("inertia-link",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{href:"/contact-us"}},[t._v("Contact Us")])],1),t._v(" "),n("article",[t._t("default")],2)])}),[],!1,null,null,null).exports},1900:(t,e,n)=>{"use strict";function o(t,e,n,o,i,s,r,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>o})}}]);
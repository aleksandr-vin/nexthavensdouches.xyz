"use strict";(self.webpackChunknexthavensdouches_site=self.webpackChunknexthavensdouches_site||[]).push([[691],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,i=0;i<e.length;i++){var s=e[i];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=a,a=!0,i++):a&&n&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,n=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9230:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return A},_:function(){return c},a:function(){return r},b:function(){return d},g:function(){return l},h:function(){return o}});var n=a(7294),i=(a(4811),a(5697)),s=a.n(i);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(i[a]=e[a]);return i}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,a,n,i){return void 0===i&&(i={}),r({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:r({},i,{opacity:t?1:0})})}function l(e,t,a,n,i,s,c,o){var d={};s&&(d.backgroundColor=s,"fixed"===a?(d.width=n,d.height=i,d.backgroundColor=s,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),c&&(d.objectFit=c),o&&(d.objectPosition=o);var l=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return l}var p,u=["children"],f=function(e){var t=e.layout,a=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=c(e,u);return n.createElement(n.Fragment,null,n.createElement(f,r({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],m=function(e){var t=e.src,a=e.srcSet,i=e.loading,s=e.alt,o=void 0===s?"":s,d=e.shouldLoad,l=c(e,b);return n.createElement("img",r({},l,{decoding:"async",loading:i,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?a:void 0,"data-srcset":d?void 0:a,alt:o}))},w=function(e){var t=e.fallback,a=e.sources,i=void 0===a?[]:a,s=e.shouldLoad,o=void 0===s||s,d=c(e,h),l=d.sizes||(null==t?void 0:t.sizes),p=n.createElement(m,r({},d,t,{sizes:l,shouldLoad:o}));return i.length?n.createElement("picture",null,i.map((function(e){var t=e.media,a=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),p):p};m.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var v=["fallback"],E=function(e){var t=e.fallback,a=c(e,v);return t?n.createElement(w,r({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",r({},a))};E.displayName="Placeholder",E.propTypes={fallback:i.string,sources:null==(p=w.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(w,r({},e)),n.createElement("noscript",null,n.createElement(w,r({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var _,y,M=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),r=3;r<n;r++)i[r-3]=arguments[r];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:M},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],G=new Set,k=function(e){var t=e.as,i=void 0===t?"div":t,s=e.image,d=e.style,l=e.backgroundColor,p=e.className,u=e.class,f=e.onStartLoad,g=e.onLoad,b=e.onError,h=c(e,C),m=s.width,w=s.height,v=s.layout,E=function(e,t,a){var n={},i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(m,w,v),x=E.style,M=E.className,I=c(E,S),k=(0,n.useRef)(),N=(0,n.useMemo)((function(){return JSON.stringify(s.images)}),[s.images]);u&&(p=u);var j=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,m,w);return(0,n.useEffect)((function(){_||(_=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return y=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=k.current.querySelector("[data-gatsby-image-ssr]");return n&&o()?(n.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void G.add(N)):y&&G.has(N)?void 0:(_.then((function(a){var n=a.renderImageToString,i=a.swapPlaceholderImage;k.current.innerHTML=n(r({isLoading:!0,isLoaded:G.has(N),image:s},h)),G.has(N)||(e=requestAnimationFrame((function(){k.current&&(t=i(k.current,N,G,d,f,g,b))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[s]),(0,n.useLayoutEffect)((function(){G.has(N)&&y&&(k.current.innerHTML=y(r({isLoading:G.has(N),isLoaded:G.has(N),image:s},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,n.createElement)(i,r({},I,{style:r({},x,d,{backgroundColor:l}),className:M+(p?" "+p:""),ref:k,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(k,e):null}));N.propTypes=I,N.displayName="GatsbyImage";var j,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],L=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),T={src:s().string.isRequired,alt:M,width:L,height:L,sizes:s().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(j=N,function(e){var t=e.src,a=e.__imageData,i=e.__error,s=c(e,O);return i&&console.warn(i),a?n.createElement(j,r({image:a},s)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=T},962:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.r(t),a.d(t,{default:function(){return N}});var i=a(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var r=a(1721);function c(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=a(3935),d=!1,l=i.createContext(null),p="unmounted",u="exited",f="entering",g="entered",b="exiting",h=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var i,s=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(i=u,n.appearStatus=f):i=g:i=t.unmountOnExit||t.mountOnEnter?p:u,n.state={status:i},n.nextCallback=null,n}(0,r.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===p?{status:u}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==f&&a!==g&&(t=f):a!==f&&a!==g||(t=b)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===f?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===u&&this.setState({status:p})},a.performEnter=function(e){var t=this,a=this.props.enter,n=this.context?this.context.isMounting:e,i=this.props.nodeRef?[n]:[o.findDOMNode(this),n],s=i[0],r=i[1],c=this.getTimeouts(),l=n?c.appear:c.enter;!e&&!a||d?this.safeSetState({status:g},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,r),this.safeSetState({status:f},(function(){t.props.onEntering(s,r),t.onTransitionEnd(l,(function(){t.safeSetState({status:g},(function(){t.props.onEntered(s,r)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:o.findDOMNode(this);t&&!d?(this.props.onExit(n),this.safeSetState({status:b},(function(){e.props.onExiting(n),e.onTransitionEnd(a.exit,(function(){e.safeSetState({status:u},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:u},(function(){e.props.onExited(n)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(a&&!n){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],s=i[0],r=i[1];this.props.addEndListener(s,r)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===p)return null;var t=this.props,a=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,n(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(l.Provider,{value:null},"function"==typeof a?a(e,s):i.cloneElement(i.Children.only(a),s))},t}(i.Component);function m(){}h.contextType=l,h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},h.UNMOUNTED=p,h.EXITED=u,h.ENTERING=f,h.ENTERED=g,h.EXITING=b;var w=h,v=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return n=t,void((a=e).classList?a.classList.remove(n):"string"==typeof a.className?a.className=c(a.className,n):a.setAttribute("class",c(a.className&&a.className.baseVal||"",n)));var a,n}))},E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,a){var n=t.resolveArguments(e,a),i=n[0],s=n[1];t.removeClasses(i,"exit"),t.addClass(i,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,a)},t.onEntering=function(e,a){var n=t.resolveArguments(e,a),i=n[0],s=n[1]?"appear":"enter";t.addClass(i,s,"active"),t.props.onEntering&&t.props.onEntering(e,a)},t.onEntered=function(e,a){var n=t.resolveArguments(e,a),i=n[0],s=n[1]?"appear":"enter";t.removeClasses(i,s),t.addClass(i,s,"done"),t.props.onEntered&&t.props.onEntered(e,a)},t.onExit=function(e){var a=t.resolveArguments(e)[0];t.removeClasses(a,"appear"),t.removeClasses(a,"enter"),t.addClass(a,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var a=t.resolveArguments(e)[0];t.addClass(a,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var a=t.resolveArguments(e)[0];t.removeClasses(a,"exit"),t.addClass(a,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,a){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,a]},t.getClassNames=function(e){var a=t.props.classNames,n="string"==typeof a,i=n?""+(n&&a?a+"-":"")+e:a[e];return{baseClassName:i,activeClassName:n?i+"-active":a[e+"Active"],doneClassName:n?i+"-done":a[e+"Done"]}},t}(0,r.Z)(t,e);var a=t.prototype;return a.addClass=function(e,t,a){var n=this.getClassNames(t)[a+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===a&&i&&(n+=" "+i),"active"===a&&e&&e.scrollTop,n&&(this.appliedClasses[t][a]=n,function(e,t){e&&t&&t.split(" ").forEach((function(t){return n=t,void((a=e).classList?a.classList.add(n):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(a,n)||("string"==typeof a.className?a.className=a.className+" "+n:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+n)));var a,n}))}(e,n))},a.removeClasses=function(e,t){var a=this.appliedClasses[t],n=a.base,i=a.active,s=a.done;this.appliedClasses[t]={},n&&v(e,n),i&&v(e,i),s&&v(e,s)},a.render=function(){var e=this.props,t=(e.classNames,n(e,["classNames"]));return i.createElement(w,s({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);E.defaultProps={classNames:""};var x=E;function _(e,t){var a=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){a[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),a}function y(e,t,a){return null!=a[t]?a[t]:e.props[t]}function M(e,t,a){var n=_(e.children),s=function(e,t){function a(a){return a in t?t[a]:e[a]}e=e||{},t=t||{};var n,i=Object.create(null),s=[];for(var r in e)r in t?s.length&&(i[r]=s,s=[]):s.push(r);var c={};for(var o in t){if(i[o])for(n=0;n<i[o].length;n++){var d=i[o][n];c[i[o][n]]=a(d)}c[o]=a(o)}for(n=0;n<s.length;n++)c[s[n]]=a(s[n]);return c}(t,n);return Object.keys(s).forEach((function(r){var c=s[r];if((0,i.isValidElement)(c)){var o=r in t,d=r in n,l=t[r],p=(0,i.isValidElement)(l)&&!l.props.in;!d||o&&!p?d||!o||p?d&&o&&(0,i.isValidElement)(l)&&(s[r]=(0,i.cloneElement)(c,{onExited:a.bind(null,c),in:l.props.in,exit:y(c,"exit",e),enter:y(c,"enter",e)})):s[r]=(0,i.cloneElement)(c,{in:!1}):s[r]=(0,i.cloneElement)(c,{onExited:a.bind(null,c),in:!0,exit:y(c,"exit",e),enter:y(c,"enter",e)})}})),s}var I=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},C=function(e){function t(t,a){var n,i=(n=e.call(this,t,a)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}(0,r.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var a,n,s=t.children,r=t.handleExited;return{children:t.firstRender?(a=e,n=r,_(a.children,(function(e){return(0,i.cloneElement)(e,{onExited:n.bind(null,e),in:!0,appear:y(e,"appear",a),enter:y(e,"enter",a),exit:y(e,"exit",a)})}))):M(e,s,r),firstRender:!1}},a.handleExited=function(e,t){var a=_(this.props.children);e.key in a||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var a=s({},t.children);return delete a[e.key],{children:a}})))},a.render=function(){var e=this.props,t=e.component,a=e.childFactory,s=n(e,["component","childFactory"]),r=this.state.contextValue,c=I(this.state.children).map(a);return delete s.appear,delete s.enter,delete s.exit,null===t?i.createElement(l.Provider,{value:r},c):i.createElement(l.Provider,{value:r},i.createElement(t,s,c))},t}(i.Component);C.defaultProps={component:"div",childFactory:function(e){return e}};var S=C,G=a(9230),k=["children"];function N(){var e=function(e){var t=e.children,a=n(e,k);return i.createElement(x,Object.assign({},a,{timeout:1300,classNames:"fade"}),t)},t=[{img:i.createElement(G.S,{src:"../images/IMG_2468.jpg",alt:"A douche at Compagnieshaven Enkhuizen",__imageData:a(4073)}),latitude:"52° 42’ 11,022” N",longitude:"005° 17’ 53,67” E",place:"Compagnieshaven",stad:"Enkhuizen"},{img:i.createElement(G.S,{src:"../images/IMG_2464.jpg",alt:"A douche at Compagnieshaven Enkhuizen",__imageData:a(3172)}),latitude:"52° 42’ 11,022” N",longitude:"005° 17’ 53,67” E",place:"Compagnieshaven",stad:"Enkhuizen"},{img:i.createElement(G.S,{src:"../images/IMG_2465.jpg",alt:"A douche at Compagnieshaven Enkhuizen",__imageData:a(8667)}),latitude:"52° 42’ 11,022” N",longitude:"005° 17’ 53,67” E",place:"Compagnieshaven",stad:"Enkhuizen"},{img:i.createElement(G.S,{src:"../images/IMG_2467.jpg",alt:"A douche at Compagnieshaven Enkhuizen",__imageData:a(2539)}),latitude:"52° 42’ 11,022” N",longitude:"005° 17’ 53,67” E",place:"Compagnieshaven",stad:"Enkhuizen"},{img:i.createElement(G.S,{src:"../images/285600891_427917692472901_6940828723852816607_n.jpg",alt:"A douche with Champagne at Compagnieshaven Enkhuizen",__imageData:a(9741)}),latitude:"52° 42’ 11,022” N",longitude:"005° 17’ 53,67” E",place:"Compagnieshaven",stad:"Enkhuizen"},{img:i.createElement(G.S,{src:"../images/IMG_2132.jpg",alt:"A douche at Vissershaven Makkum",__imageData:a(4591)}),latitude:"53° 03’ 12,47” N",longitude:"005° 24’ 11,19” E",place:"Vissershaven",stad:"Makkum"},{img:i.createElement(G.S,{src:"../images/IMG_2129.jpg",alt:"A douche at Vissershaven Makkum",__imageData:a(2814)}),latitude:"53° 03’ 12,47” N",longitude:"005° 24’ 11,19” E",place:"Vissershaven",stad:"Makkum"},{img:i.createElement(G.S,{src:"../images/IMG_2166.jpg",alt:"A douche at Buitenhaven Den Oever",__imageData:a(1636)}),latitude:"52° 56’ 14,352” N",longitude:"005° 1’ 56,57” E",place:"Buitenhaven",stad:"Den Oever"},{img:i.createElement(G.S,{src:"../images/IMG_2165.jpg",alt:"A douche at Buitenhaven Den Oever",__imageData:a(8824)}),latitude:"52° 56’ 14,352” N",longitude:"005° 1’ 56,57” E",place:"Buitenhaven",stad:"Den Oever"},{img:i.createElement(G.S,{src:"../images/IMG_2164.jpg",alt:"A douche at Waddenhaven Oudeschild, Texel",__imageData:a(1731)}),latitude:"53° 2’ 41,2” N",longitude:"004° 51’ 25,77” E",place:"Waddenhaven",stad:"Oudeschild",island:"Texel"},{img:i.createElement(G.S,{src:"../images/IMG_2161.jpg",alt:"A douche at Waddenhaven Oudeschild, Texel",__imageData:a(774)}),latitude:"53° 2’ 41,2” N",longitude:"004° 51’ 25,77” E",place:"Waddenhaven",stad:"Oudeschild",island:"Texel"},{img:i.createElement(G.S,{src:"../images/IMG_2533.jpg",alt:"A douche at Bataviahaven Lelystad",__imageData:a(9593)}),latitude:"52° 31’ 9,192” N",longitude:"005° 26’ 22,248” E",place:"Bataviahaven",stad:"Lelystad"},{img:i.createElement(G.S,{src:"../images/IMG_2535.jpg",alt:"A douche at Bataviahaven Lelystad",__imageData:a(3924)}),latitude:"52° 31’ 9,192” N",longitude:"005° 26’ 22,248” E",place:"Bataviahaven",stad:"Lelystad"}],s=function(){return Math.floor(t.length*Math.random())},r=NaN;if("undefined"!=typeof window){var c=window.location.hash.substring(1);r=parseInt(c)}var o=(0,i.useState)(isNaN(r)?s():r),d=o[0],l=o[1],p=function(){for(var e=d;e==d;)e=s();return e},u=function(){var e=p();l(e),"undefined"!=typeof window&&void 0!==window.gtag&&window.gtag("event","clickNext",{idx:d,nextIdx:e})},f=t[d];return(0,i.useEffect)((function(){"undefined"!=typeof window&&window.history.replaceState(null,"","/#"+d),"undefined"!=typeof window&&void 0!==window.gtag&&window.gtag("event","show",{idx:d});var e=setTimeout((function(){var e=p();l(e),"undefined"!=typeof window&&void 0!==window.gtag&&window.gtag("event","moveNext",{idx:d,nextIdx:e})}),6200);return function(){return clearTimeout(e)}})),i.createElement("div",null,i.createElement("div",null,i.createElement("div",{id:"place"},f.place),i.createElement("div",{id:"stad"},f.stad),i.createElement("div",{id:"location"},f.latitude," ",f.longitude),i.createElement("div",{id:"next-button",onClick:function(){return u()}},"NEXT"),i.createElement("div",{id:"info",onClick:function(){return u()}},"HAVENs' DOUCHES"),i.createElement("div",{id:"author",onClick:function(){return u()}},"Aleksandr Vinokurov")),i.createElement("div",{id:"wrapper"},i.createElement(S,{className:"carousel"},i.createElement(e,{key:Math.random()},f.img))))}},8667:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8a8","images":{"fallback":{"src":"/static/6dd5949f55efdbdc3064b21bfeb58e56/fae27/IMG_2465.jpg","srcSet":"/static/6dd5949f55efdbdc3064b21bfeb58e56/6c903/IMG_2465.jpg 756w,\\n/static/6dd5949f55efdbdc3064b21bfeb58e56/44670/IMG_2465.jpg 1512w,\\n/static/6dd5949f55efdbdc3064b21bfeb58e56/fae27/IMG_2465.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/6dd5949f55efdbdc3064b21bfeb58e56/dd945/IMG_2465.webp 756w,\\n/static/6dd5949f55efdbdc3064b21bfeb58e56/76fb3/IMG_2465.webp 1512w,\\n/static/6dd5949f55efdbdc3064b21bfeb58e56/7d916/IMG_2465.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},774:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#989898","images":{"fallback":{"src":"/static/c3b25ff3bbc098234f2a1905ca5ebfe1/fae27/IMG_2161.jpg","srcSet":"/static/c3b25ff3bbc098234f2a1905ca5ebfe1/6c903/IMG_2161.jpg 756w,\\n/static/c3b25ff3bbc098234f2a1905ca5ebfe1/44670/IMG_2161.jpg 1512w,\\n/static/c3b25ff3bbc098234f2a1905ca5ebfe1/fae27/IMG_2161.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/c3b25ff3bbc098234f2a1905ca5ebfe1/dd945/IMG_2161.webp 756w,\\n/static/c3b25ff3bbc098234f2a1905ca5ebfe1/76fb3/IMG_2161.webp 1512w,\\n/static/c3b25ff3bbc098234f2a1905ca5ebfe1/7d916/IMG_2161.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},4073:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8b8a8","images":{"fallback":{"src":"/static/6a2ade06ebcb6035d80e08d02a173445/fae27/IMG_2468.jpg","srcSet":"/static/6a2ade06ebcb6035d80e08d02a173445/6c903/IMG_2468.jpg 756w,\\n/static/6a2ade06ebcb6035d80e08d02a173445/44670/IMG_2468.jpg 1512w,\\n/static/6a2ade06ebcb6035d80e08d02a173445/fae27/IMG_2468.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/6a2ade06ebcb6035d80e08d02a173445/dd945/IMG_2468.webp 756w,\\n/static/6a2ade06ebcb6035d80e08d02a173445/76fb3/IMG_2468.webp 1512w,\\n/static/6a2ade06ebcb6035d80e08d02a173445/7d916/IMG_2468.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},3924:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8b8a8","images":{"fallback":{"src":"/static/3b17379c9a7a4657bae4d4ee593dc896/fae27/IMG_2535.jpg","srcSet":"/static/3b17379c9a7a4657bae4d4ee593dc896/6c903/IMG_2535.jpg 756w,\\n/static/3b17379c9a7a4657bae4d4ee593dc896/44670/IMG_2535.jpg 1512w,\\n/static/3b17379c9a7a4657bae4d4ee593dc896/fae27/IMG_2535.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/3b17379c9a7a4657bae4d4ee593dc896/dd945/IMG_2535.webp 756w,\\n/static/3b17379c9a7a4657bae4d4ee593dc896/76fb3/IMG_2535.webp 1512w,\\n/static/3b17379c9a7a4657bae4d4ee593dc896/7d916/IMG_2535.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},9593:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a89888","images":{"fallback":{"src":"/static/f5d83cd63612ab9759f33cd73c3afb7d/fae27/IMG_2533.jpg","srcSet":"/static/f5d83cd63612ab9759f33cd73c3afb7d/6c903/IMG_2533.jpg 756w,\\n/static/f5d83cd63612ab9759f33cd73c3afb7d/44670/IMG_2533.jpg 1512w,\\n/static/f5d83cd63612ab9759f33cd73c3afb7d/fae27/IMG_2533.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/f5d83cd63612ab9759f33cd73c3afb7d/dd945/IMG_2533.webp 756w,\\n/static/f5d83cd63612ab9759f33cd73c3afb7d/76fb3/IMG_2533.webp 1512w,\\n/static/f5d83cd63612ab9759f33cd73c3afb7d/7d916/IMG_2533.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},8824:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a898","images":{"fallback":{"src":"/static/e810c367f6443b626ad3ec34f18eb091/fae27/IMG_2165.jpg","srcSet":"/static/e810c367f6443b626ad3ec34f18eb091/6c903/IMG_2165.jpg 756w,\\n/static/e810c367f6443b626ad3ec34f18eb091/44670/IMG_2165.jpg 1512w,\\n/static/e810c367f6443b626ad3ec34f18eb091/fae27/IMG_2165.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/e810c367f6443b626ad3ec34f18eb091/dd945/IMG_2165.webp 756w,\\n/static/e810c367f6443b626ad3ec34f18eb091/76fb3/IMG_2165.webp 1512w,\\n/static/e810c367f6443b626ad3ec34f18eb091/7d916/IMG_2165.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},1731:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8b898","images":{"fallback":{"src":"/static/ed7f3db6a86507ed08a58e7a0aedc045/fae27/IMG_2164.jpg","srcSet":"/static/ed7f3db6a86507ed08a58e7a0aedc045/6c903/IMG_2164.jpg 756w,\\n/static/ed7f3db6a86507ed08a58e7a0aedc045/44670/IMG_2164.jpg 1512w,\\n/static/ed7f3db6a86507ed08a58e7a0aedc045/fae27/IMG_2164.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/ed7f3db6a86507ed08a58e7a0aedc045/dd945/IMG_2164.webp 756w,\\n/static/ed7f3db6a86507ed08a58e7a0aedc045/76fb3/IMG_2164.webp 1512w,\\n/static/ed7f3db6a86507ed08a58e7a0aedc045/7d916/IMG_2164.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},2814:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/5d58043c07ce44fe8d66ea1c406a0679/fae27/IMG_2129.jpg","srcSet":"/static/5d58043c07ce44fe8d66ea1c406a0679/6c903/IMG_2129.jpg 756w,\\n/static/5d58043c07ce44fe8d66ea1c406a0679/44670/IMG_2129.jpg 1512w,\\n/static/5d58043c07ce44fe8d66ea1c406a0679/fae27/IMG_2129.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/5d58043c07ce44fe8d66ea1c406a0679/dd945/IMG_2129.webp 756w,\\n/static/5d58043c07ce44fe8d66ea1c406a0679/76fb3/IMG_2129.webp 1512w,\\n/static/5d58043c07ce44fe8d66ea1c406a0679/7d916/IMG_2129.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},4591:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/3be9ca41ce8d1d2c61f89924038a22d8/fae27/IMG_2132.jpg","srcSet":"/static/3be9ca41ce8d1d2c61f89924038a22d8/6c903/IMG_2132.jpg 756w,\\n/static/3be9ca41ce8d1d2c61f89924038a22d8/44670/IMG_2132.jpg 1512w,\\n/static/3be9ca41ce8d1d2c61f89924038a22d8/fae27/IMG_2132.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/3be9ca41ce8d1d2c61f89924038a22d8/dd945/IMG_2132.webp 756w,\\n/static/3be9ca41ce8d1d2c61f89924038a22d8/76fb3/IMG_2132.webp 1512w,\\n/static/3be9ca41ce8d1d2c61f89924038a22d8/7d916/IMG_2132.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},2539:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8d8c8","images":{"fallback":{"src":"/static/0b3c9cbefc2d983a6de0c26f7a885aa1/fae27/IMG_2467.jpg","srcSet":"/static/0b3c9cbefc2d983a6de0c26f7a885aa1/6c903/IMG_2467.jpg 756w,\\n/static/0b3c9cbefc2d983a6de0c26f7a885aa1/44670/IMG_2467.jpg 1512w,\\n/static/0b3c9cbefc2d983a6de0c26f7a885aa1/fae27/IMG_2467.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/0b3c9cbefc2d983a6de0c26f7a885aa1/dd945/IMG_2467.webp 756w,\\n/static/0b3c9cbefc2d983a6de0c26f7a885aa1/76fb3/IMG_2467.webp 1512w,\\n/static/0b3c9cbefc2d983a6de0c26f7a885aa1/7d916/IMG_2467.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},3172:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8a8","images":{"fallback":{"src":"/static/b41e6b0932418d661c16e5751175306e/fae27/IMG_2464.jpg","srcSet":"/static/b41e6b0932418d661c16e5751175306e/6c903/IMG_2464.jpg 756w,\\n/static/b41e6b0932418d661c16e5751175306e/44670/IMG_2464.jpg 1512w,\\n/static/b41e6b0932418d661c16e5751175306e/fae27/IMG_2464.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/b41e6b0932418d661c16e5751175306e/dd945/IMG_2464.webp 756w,\\n/static/b41e6b0932418d661c16e5751175306e/76fb3/IMG_2464.webp 1512w,\\n/static/b41e6b0932418d661c16e5751175306e/7d916/IMG_2464.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},1636:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#988878","images":{"fallback":{"src":"/static/22e3a872f19a1b650768a91468d4e1a1/fae27/IMG_2166.jpg","srcSet":"/static/22e3a872f19a1b650768a91468d4e1a1/6c903/IMG_2166.jpg 756w,\\n/static/22e3a872f19a1b650768a91468d4e1a1/44670/IMG_2166.jpg 1512w,\\n/static/22e3a872f19a1b650768a91468d4e1a1/fae27/IMG_2166.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/22e3a872f19a1b650768a91468d4e1a1/dd945/IMG_2166.webp 756w,\\n/static/22e3a872f19a1b650768a91468d4e1a1/76fb3/IMG_2166.webp 1512w,\\n/static/22e3a872f19a1b650768a91468d4e1a1/7d916/IMG_2166.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')},9741:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/7ca041b78f5b87d28e6b2ee29d08ab46/fae27/285600891_427917692472901_6940828723852816607_n.jpg","srcSet":"/static/7ca041b78f5b87d28e6b2ee29d08ab46/6c903/285600891_427917692472901_6940828723852816607_n.jpg 756w,\\n/static/7ca041b78f5b87d28e6b2ee29d08ab46/44670/285600891_427917692472901_6940828723852816607_n.jpg 1512w,\\n/static/7ca041b78f5b87d28e6b2ee29d08ab46/fae27/285600891_427917692472901_6940828723852816607_n.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/7ca041b78f5b87d28e6b2ee29d08ab46/dd945/285600891_427917692472901_6940828723852816607_n.webp 756w,\\n/static/7ca041b78f5b87d28e6b2ee29d08ab46/76fb3/285600891_427917692472901_6940828723852816607_n.webp 1512w,\\n/static/7ca041b78f5b87d28e6b2ee29d08ab46/7d916/285600891_427917692472901_6940828723852816607_n.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":4032}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-84b2cb549872a3fedeac.js.map
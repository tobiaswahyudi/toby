(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),o.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+s+l+a+r+t+i+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=e.ariaHidden,s=o.default.createElement(R,(0,d.default)({src:t},n,{ariaHidden:i}));return a.length>1?o.default.createElement("picture",null,r(a),s):s},R=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,I=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:k?1:0,transition:V?"opacity "+E+"ms":"none"},l),x="boolean"==typeof v?"lightgray":v,P={transitionDelay:E+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&P,{},l,{},f),W={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:y};if(g){var q=g,j=p(g);return o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),x&&o.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),j.base64&&o.default.createElement(O,{ariaHidden:!0,src:j.base64,spreadProps:W,imageVariants:q,generateSources:L}),j.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,src:j.tracedSVG,spreadProps:W,imageVariants:q,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,S(q),o.default.createElement(R,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:q}))}}))}if(h){var H=h,M=p(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete G.display,o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&o.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&P)}),M.base64&&o.default.createElement(O,{ariaHidden:!0,src:M.base64,spreadProps:W,imageVariants:H,generateSources:L}),M.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,src:M.tracedSVG,spreadProps:W,imageVariants:H,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,S(H),o.default.createElement(R,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},M,{imageVariants:H}))}}))}return null},t}(o.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:C,sizes:x,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=V;t.default=P},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},JCcN:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=a("9eSz"),l=a.n(s),d=(a("E9rb"),function(e){return e<0?"Present":new Date(e).toLocaleString("en-us",{month:"short",year:"numeric"})});t.default=function(e){var t=e.card,a=void 0===t?{frontmatter:{img:null}}:t;return n.a.createElement(i.Link,{className:"work-card"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"img-container"},a.frontmatter.img&&n.a.createElement(l.a,{fluid:a.frontmatter.img.childImageSharp.fluid})),n.a.createElement("div",{className:"card-info"},n.a.createElement("div",{className:"title"},n.a.createElement("span",{className:"overpass-semibold"},a.frontmatter.position+", "+a.frontmatter.title)),n.a.createElement("hr",null),n.a.createElement("div",{className:"time-place"},n.a.createElement("span",{className:"place overpass-regular-italic"},a.frontmatter.location),n.a.createElement("span",{className:"time overpass-light"},d(a.frontmatter.startDate)+" - "+d(a.frontmatter.endDate))),n.a.createElement("div",{className:"excerpt"},n.a.createElement("p",{className:"overpass-thin"},a.frontmatter.excerpt)))))}},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},d1iY:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz");a("aDpD");t.default=function(e){var t=e.path,a=void 0===t?"/":t;return n.a.createElement("div",{className:"read-more"},n.a.createElement(i.Link,{to:a},n.a.createElement("div",{className:"inner"},n.a.createElement("span",null,"read more"),n.a.createElement("svg",{width:"194",height:"24",viewBox:"0 0 194 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M0 11.6961H171.574H192M192 11.6961L179.745 1.07733M192 11.6961L179.745 23",stroke:"black","stroke-width":"2"})))))}},sXlN:function(e,t,a){"use strict";a.r(t),a.d(t,"LandingPageIntro",(function(){return d})),a.d(t,"Cards",(function(){return o}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=(a("nXc9"),a("d1iY")),l=a("JCcN"),d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"head"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},n.a.createElement("div",{className:"top"},n.a.createElement("span",{className:"overpass-light"},"Hello! I am"),n.a.createElement("hr",{className:"mid-line"})),n.a.createElement("div",{className:"mid"},n.a.createElement("h1",null,"Tobias Wahyudi")),n.a.createElement("div",{className:"bot"},n.a.createElement("hr",{className:"mid-line"}),n.a.createElement("span",{className:"overpass-light"},"Software Engineer Wizard-in-Training"))),n.a.createElement("div",{className:"paragraph-intro"},n.a.createElement("p",null,"Exploring the arts of front-end, back-end, and machine learning. Collecting skills and stories, one adventure at a time."))),n.a.createElement("div",{className:"links"},n.a.createElement("div",{className:"links-inner"},n.a.createElement(i.Link,null,"profile"),n.a.createElement(i.Link,null,"projects"),n.a.createElement(i.Link,null,"contact")))),n.a.createElement("div",{className:"paragraph-about"},n.a.createElement("p",null,"I’m a second-year CS student at the University of Waterloo. I'm currently exploring front-end and back-end software development, centered around React, Django, and GraphQL.")),n.a.createElement("div",{className:"paragraph-interests"},n.a.createElement("p",null,"While I am presently focused on software development, I intend to keep an open eye towards academic and research potentials. My long-term interests include machine learning and computational linguistics.")),n.a.createElement(s.default,null)))},o=function(e){var t=e.cards,a=void 0===t?[]:t,r=e.title;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"experience"},n.a.createElement("h2",null,r),n.a.createElement("div",{className:"cards"},a.map((function(e){return n.a.createElement(l.default,{card:e.node})}))),n.a.createElement(s.default,null)))};t.default=function(e){var t=e.work,a=e.projects;return n.a.createElement("div",{className:"landing-page"},n.a.createElement(d,null),n.a.createElement(o,{cards:t,title:"Work Experience"}),n.a.createElement(o,{cards:a,title:"Projects"}))}}}]);
//# sourceMappingURL=component---src-pages-landing-index-js-25e8c7d4b3a45d1e52b4.js.map
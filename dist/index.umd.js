!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var t={version:"1.1.0",name:"Views",views:{},settings:{enable:!1,basePath:"/",selector:"#app",notfound:null},loadStart:new Event("pinecone-start"),loadEnd:new Event("pinecone-end"),init:function(t,n){var o,i,r;if(null!=(o=n.middlewares)&&o.render)throw new Error("Pinecone Router "+this.name+": Cannot use views middleware along with render.");if(this.settings=e({},this.settings,null!=(i=n.middlewares[this.name])?i:{}),"body"==(null==(r=this.settings)?void 0:r.selector))throw new Error("Pinecone Router "+this.name+": Do not use body as the selector, it will cause the router component to be removed");window.PineconeRouter.settings.allowNoHandler=!0},onBeforeRouteProcessed:function(e,t,n){if(this.settings.enable&&(console.log({el:e}),e.hasAttribute("x-view"))){console.log("hasview");var o=e.getAttribute("x-view");"/"!=this.settings.basePath&&(o=this.settings.basePath+o),"notfound"==n?this.settings.notfound=o:this.views[n]=o}},onHandlersExecuted:function(e){var t=this;if(this.settings.enable){var n=e?this.views[e.path]?this.views[e.path]:null:this.settings.notfound;if(null==n)return;fetch(n).then(function(e){return e.text()}).then(function(e){var n;return n=e,document.querySelector(t.settings.selector).innerHTML=n,window.dispatchEvent(t.loadEnd),!1}).catch(function(e){document.querySelector("[x-router][x-data]").dispatchEvent(new CustomEvent("fetch-error",{detail:e})),console.error("Pinecone Router "+t.name+": Fetch Error: "+e)})}},onBeforeHandlersExecuted:function(e){window.dispatchEvent(this.loadStart)}};null==window.PineconeRouterMiddlewares?window.PineconeRouterMiddlewares=[t]:window.PineconeRouterMiddlewares.push(t)});
//# sourceMappingURL=index.umd.js.map

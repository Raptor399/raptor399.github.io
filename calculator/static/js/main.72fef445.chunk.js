(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(6),i=t.n(l),r=t(1),s=t(2),o=t(4),d=t(3),u=(t(12),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"component-display-distance"},c.a.createElement("div",{className:"label"},"Distance"),c.a.createElement("div",{className:"value"},this.props.value))}}]),t}(c.a.Component));t(13);var m=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=function(e,a){if(null===e)return 0;var t=parseFloat(e);if(t>=100&&t<=1600)return null===a||"USA"===a||"GER"===a?Math.round(-.23703*t+1001.46):Math.round(1120-21.33*(t/100-1));return 0}(this.props.value,this.props.faction);return c.a.createElement("div",{className:"component-display-elevation"},c.a.createElement("div",{className:"label"},"Elevation"),c.a.createElement("div",{className:"value"},e))}}]),t}(c.a.Component),h=(t(14),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).handleClick=function(){e.props.clickHandler(e.props.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=["component-button",this.props.dark?"dark":"",this.props.orange?"orange":"",this.props.quart?"quart":"",this.props.wide?"wide":""];return c.a.createElement("div",{className:e.join(" ").trim()},c.a.createElement("button",{onClick:this.handleClick},this.props.name))}}]),t}(c.a.Component)),p=(t(15),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).handleClick=function(a){e.props.clickHandler(a)},e}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"component-button-panel"},c.a.createElement("div",null,c.a.createElement(h,{name:"C",clickHandler:this.handleClick,quart:!0,orange:!0}),c.a.createElement(h,{name:"+",clickHandler:this.handleClick,quart:!0,dark:!0}),c.a.createElement(h,{name:"-",clickHandler:this.handleClick,quart:!0,dark:!0}),c.a.createElement(h,{name:this.props.faction,clickHandler:this.handleClick,quart:!0,dark:!0})),c.a.createElement("div",null,c.a.createElement(h,{name:"7",clickHandler:this.handleClick}),c.a.createElement(h,{name:"8",clickHandler:this.handleClick}),c.a.createElement(h,{name:"9",clickHandler:this.handleClick})),c.a.createElement("div",null,c.a.createElement(h,{name:"4",clickHandler:this.handleClick}),c.a.createElement(h,{name:"5",clickHandler:this.handleClick}),c.a.createElement(h,{name:"6",clickHandler:this.handleClick})),c.a.createElement("div",null,c.a.createElement(h,{name:"1",clickHandler:this.handleClick}),c.a.createElement(h,{name:"2",clickHandler:this.handleClick}),c.a.createElement(h,{name:"3",clickHandler:this.handleClick})),c.a.createElement("div",null,c.a.createElement(h,{name:"0",clickHandler:this.handleClick,wide:!0})))}}]),t}(c.a.Component));t(16);function k(e,a){return"USA"===a?{faction:"GER"}:"GER"===a?{faction:"RUS"}:"RUS"===a?{faction:"USA"}:"C"===a?{total:null,next:null,distance:null}:/[0-9]+/.test(a)?"0"===a&&"0"===e.distance?{}:{distance:null===e.distance||"0"===e.distance?a:e.distance.length<4?e.distance+a:e.distance,total:null}:"+"===a?{distance:null===e.distance?"1":parseInt(e.distance)<9999?(parseInt(e.distance)+1).toString():e.distance}:"-"===a?{distance:null===e.distance||"1"===e.distance?null:(parseInt(e.distance)-1).toString()}:void 0}t(17);var v=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={distance:null,elevation:null,faction:"USA"},e.handleClick=function(a){e.setState(k(e.state,a))},e}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"component-app"},c.a.createElement("div",null,c.a.createElement(u,{value:this.state.distance||"0"}),c.a.createElement(m,{value:this.state.distance||"0",faction:this.state.faction})),c.a.createElement(p,{clickHandler:this.handleClick,faction:this.state.faction}))}}]),t}(c.a.Component);t(18),t(19);i.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.72fef445.chunk.js.map
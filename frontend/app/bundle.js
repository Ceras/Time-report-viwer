webpackJsonp([0],{0:function(e,t,i){var r=i(2),n=(i(1),i(9));i(20);var a=i(10),s=i(11),o=i(12),l=i(13),c=i(14),p=i(15),u=i(16),d=i(17),f=i(18),h=r.createClass({displayName:"App",getInitialState:function(){return{loggedIn:!1}},setLoggedIn:function(){var e=n.isAuthorized();this.loggedIn!==e&&this.setState({loggedIn:e})},componentWillMount:function(){c.listen(l.fetchActivityReports),n.listen(this.setLoggedIn)},render:function(){var e=[{label:"From",serverProperty:"from",type:"date"},{label:"To",serverProperty:"to",type:"date"},{label:"Offer areas",type:"select",serverProperty:"offerAreas",multiple:!0,dataAction:"getOfferAreas",dataStore:s},{label:"Activities",type:"select",serverProperty:"activities",multiple:!0,dataAction:"getActivities",dataStore:a},{label:"Employees",type:"select",serverProperty:"employees",multiple:!0,dataAction:"getEmployees",dataStore:o}],t={items:[{text:"Import data from dropbox",url:"/import/importDataFromDropbox"},{text:"Export profitability basis",url:"/export/profitabilityBasis"}]};return n.isAuthorized()?r.createElement("div",{id:"pageContainer"},r.createElement(p,r.__spread({},t)),r.createElement(u,{filterConfiguration:e}),r.createElement(d,null)):r.createElement(f,null)}});r.render(r.createElement(h,null),document.body)},9:function(e,t,i){var r=i(1),n=i(61),a=i(60);e.exports=r.createStore({token:"",init:function(){},isAuthorized:function(){return void 0!==n.accessToken.access_token},login:function(e,t){var i={username:e,password:t},r=function(e){n.accessToken=e,this.trigger(e)}.bind(this),s={200:function(e){r(e)},400:function(){console.log("bad login params")},401:function(){console.log("Wrong username and/or password")}};a.login(i,s)}})},10:function(e,t,i){var r=i(60),n=i(1),a=i(4),s=i(9);e.exports=n.createStore({activities:[],init:function(){s.listen(this.fetchActivityData)},getActivities:function(){return this.activities},setActivities:function(e){this.activities=a.sortBy(e,function(e){return e.name}),this.trigger(this.activities)},fetchActivityData:function(){r.get("/activities.json?&max=-1",this.setActivities)}})},11:function(e,t,i){var r=i(60),n=i(1),a=i(4),s=i(9);e.exports=n.createStore({offerAreas:[],init:function(){s.listen(this.fetchOfferAreaData)},getOfferAreas:function(){return this.offerAreas},setOfferAreas:function(e){this.offerAreas=a.sortBy(e,function(e){return e.name}),this.trigger(this.offerAreas)},fetchOfferAreaData:function(){r.get("/offerAreas.json?&max=-1",this.setOfferAreas)}})},12:function(e,t,i){var r=i(60),n=i(1),a=i(9);e.exports=n.createStore({employees:[],getEmployees:function(){return this.employees},setEmployees:function(e){this.employees=_.sortBy(e,function(e){return e.name}),this.trigger(this.employees)},fetchEmployees:function(){r.get("/employees.json?&max=-1",this.setEmployees)},init:function(){a.listen(this.fetchEmployees)}})},13:function(e,t,i){var r=(i(61),i(60)),n=i(1),a=i(4);e.exports=n.createStore({activityReports:[],currentActivities:[],currentEmployees:[],getActivityReports:function(){return this.activityReports},getCurrentActivities:function(){return this.activities},getCurrentEmployees:function(){return this.currentEmployees},setMetaProperties:function(){this.activities=a.uniq(this.activityReports.map(function(e){return e.activity}),"id"),this.currentEmployees=a.uniq(this.activityReports.map(function(e){return e.employee}),"id")},setActivityReports:function(e){this.activityReports=e,this.setMetaProperties(),this.trigger(this.activityReports)},fetchActivityReports:function(e){r.get("/activityReports.json?&max=-1",this.setActivityReports,e)}})},14:function(e,t,i){var r=i(1);e.exports=r.createStore({filteredValues:{},setFilteredValue:function(e,t){JSON.stringify(t)!==JSON.stringify(this.filteredValues[e])&&(this.filteredValues[e]=t,this.trigger(this.filteredValues))},getFilteredValue:function(e){return this.filteredValues[e]}})},15:function(e,t,i){var r=i(2);i(232),i(149);var n=i(151),a=i(152);e.exports=r.createClass({displayName:"exports",getInitialState:function(){return{visibility:"hidden"}},toggleMenu:function(){var e="hidden"===this.state.visibility?"visible":"hidden";this.setState({visibility:e})},render:function(){var e=this.props.items.map(function(e){return r.createElement(n,r.__spread({},e))});return e.push(r.createElement(a,null)),r.createElement("div",{id:"menu",onClick:this.toggleMenu},r.createElement("div",{className:"list",style:{visibility:this.state.visibility}},e))}})},16:function(e,t,i){var r=i(2),n=i(4),a=i(14);i(145);var s=i(147),o=i(148);e.exports=r.createClass({displayName:"exports",getInitialState:function(){return{filterData:{}}},createSelectFilter:function(e){return e.data=void 0!==e.dataAction?this.state[e.dataAction]:e.data,r.createElement(s,{ref:e.serverProperty,filterProperties:e})},createDateFilter:function(e){return r.createElement(o,{ref:e.serverProperty,filterProperties:e})},componentWillMount:function(){n.each(this.props.filterConfiguration,function(e){void 0!==e.dataStore&&void 0!==e.dataAction&&(this.setStateForFilterItemData(e,{}),e.dataStore.listen(function(){this.setStateForFilterItemData(e,{})},this))},this),a.trigger()},setStateForFilterItemData:function(e,t){t[e.dataAction]=e.dataStore[e.dataAction](),this.setState(t)},render:function(){var e=this.props.filterConfiguration.map(function(e){switch(e.type){case"select":return this.createSelectFilter(e);case"date":return this.createDateFilter(e)}}.bind(this));return r.createElement("div",{id:"filter-container"},r.createElement("h3",null,"Filters"),r.createElement("form",null,r.createElement("ul",null,e)))}})},17:function(e,t,i){var r=i(2),n=i(13),a=i(10),s=i(12),o=(i(153),i(154)),l=i(156),c=i(155),p=i(157);e.exports=r.createClass({displayName:"exports",getInitialState:function(){return{activityReports:[],currentActivities:[],currentEmployees:[]}},activityReportsUpdated:function(e){var t=n.getCurrentActivities().map(function(e){return e.id}),i=_.filter(a.getActivities(),function(e){return _.contains(t,e.id)}),r=n.getCurrentEmployees().map(function(e){return e.id}),o=_.filter(s.getEmployees(),function(e){return _.contains(r,e.id)});this.setState({activityReports:e,currentActivities:i,currentEmployees:o})},componentDidMount:function(){n.listen(this.activityReportsUpdated)},render:function(){return r.createElement("div",{id:"activityReportViewer"},r.createElement("div",{id:"upper"},r.createElement(c,{activityReports:this.state.activityReports}),r.createElement(l,{activities:this.state.currentActivities}),r.createElement(o,{employees:this.state.currentEmployees})),r.createElement("div",{id:"lower"},r.createElement(p,{activityReports:this.state.activityReports})))}})},18:function(e,t,i){i(158);var r=i(2),n=i(9);e.exports=r.createClass({displayName:"exports",username:"",password:"",login:function(e){e.preventDefault(),n.login(this.username,this.password)},handleInputChange:function(e){var t=e.target.name;this[t]=e.target.value},render:function(){return r.createElement("div",{id:"login"},r.createElement("div",null,"Please Login (Confluence credentials)"),r.createElement("form",null,r.createElement("p",null,r.createElement("label",{"for":"username"},"Username:"),r.createElement("input",{type:"text",name:"username",onChange:this.handleInputChange})),r.createElement("p",null,r.createElement("label",{"for":"password"},"Password:"),r.createElement("input",{type:"password",name:"password",onChange:this.handleInputChange})),r.createElement("p",null,r.createElement("button",{onClick:this.login},"Login"))))}})},20:function(e,t,i){var r=i(21);"string"==typeof r&&(r=[[e.id,r,""]]);i(160)(r,{})},21:function(e,t,i){t=e.exports=i(231)(),t.push([e.id,"html,body,#pageContainer{height:100%}body{margin:0}#activityReportViewer{margin-right:250px}#activityReportViewer #upper{overflow:hidden;height:200px;white-space:nowrap;border-bottom:1px solid darkslategrey}#activityReportViewer #lower{overflow:hidden;margin-right:1px}#activityReportsDetails{display:block}#activityReportsSummary{padding:5px}#activityReportsSummary h3{margin:0}#activityReportsSummary ul{list-style:none;margin:0;padding:0;white-space:nowrap}#activityReportsSummary ul li{display:inline-block;width:8.3%;margin:10px 0 0 5px}#activityReportsDetails{display:inline-block;width:15%;padding-top:5px;text-align:center;vertical-align:top}#activityReportsDetails h4{margin:0}#activitiesInSelection{display:inline-block;height:100%;width:59.5%;overflow-y:auto;border-left:1px solid darkslategrey;text-align:center}#activitiesInSelection h4{margin:5px}#activitiesInSelection ul{list-style:none;padding:0}#activitiesInSelection ul li{margin:0 10px 0 0}#employeesInSelection{display:inline-block;height:100%;width:25%;overflow-y:auto;border-left:1px solid darkslategrey;text-align:center}#employeesInSelection h4{margin:5px}#employeesInSelection ul{list-style:none;padding:0}#employeesInSelection ul li{margin:0 10px 0 0}",""])},60:function(e,t,i){var r=i(61);e.exports={get:function(e,t,i){$.ajax({url:r.serverURL+e,crossDomain:!0,data:i,headers:{"x-auth-token":r.accessToken.access_token}}).then(function(e){t(e)}.bind(this))},download:function(e){var t=new XMLHttpRequest;t.open("GET",r.serverURL+e,!0),t.setRequestHeader("x-auth-token",r.accessToken.access_token),t.onload=function(){200==this.status&&window.open(r.serverURL.replace("/api","")+"/page/fetchFile/?serverFileName="+this.response)},t.send()},downloadWithData:function(e,t){var i=new XMLHttpRequest,n=new FormData;n.append("file",t),i.open("POST",r.serverURL+e,!0),i.setRequestHeader("x-auth-token",r.accessToken.access_token),i.responseType="blob",i.onload=function(){200==this.status&&window.open(r.serverURL.replace("/api","")+"/page/fetchFile/?serverFileName="+this.response)},i.send(n)},login:function(e,t){$.ajax({url:r.serverURL+"/login",crossDomain:!0,type:"POST",dataType:"json",contentType:"application/json; charset=UTF-8",data:JSON.stringify(e),statusCode:t})}}},61:function(e){e.exports={serverURL:"https://dev.find-out.se/time-report-data/api",accessToken:{}}},145:function(e,t,i){var r=i(146);"string"==typeof r&&(r=[[e.id,r,""]]);i(160)(r,{})},146:function(e,t,i){t=e.exports=i(231)(),t.push([e.id,"#filter-container{position:absolute;overflow-y:auto;right:0;width:240px;height:100%;padding:0 0 0 10px;background-color:rgba(118,126,121,.28);border-left:1px solid darkslategrey}#filter-container h3{text-align:center}#filter-container ul{list-style:none;padding:0}#filter-container ul li{margin:10px 10px 0 0}#filter-container select[multiple]{height:200px;width:100%;padding-right:2px}#filter-container input{border-width:1px;box-sizing:border-box;padding-left:5px;width:100%;height:20px}#filter-container .selectFilter{border-width:1px 1px 0 1px;border-radius:5px 5px 0 0}",""])},147:function(e,t,i){var r=i(2),n=i(4),a=i(14);e.exports=r.createClass({displayName:"exports",filterChange:function(e){this.setState({filteredItems:this.filterItems(e.target.value.toLowerCase())})},getItems:function(){var e=null===this.state?this.props.filterProperties.data:this.state.filteredItems;return e||[]},filterItems:function(e){return n.filter(this.props.filterProperties.data,function(t){return t.name.toLowerCase().indexOf(e)>-1})},updateFilterStore:function(){var e=this.props.filterProperties.serverProperty;setTimeout(function(){a.setFilteredValue(e,this.refs[e].state.value)}.bind(this),1)},render:function(){var e=this.props.filterProperties,t=this.getItems().map(function(e){return"object"==typeof e?r.createElement("option",{key:e.id,value:e.id},e.name):r.createElement("option",{key:e,value:e},e)});return r.createElement("li",{key:e.serverProperty},r.createElement("input",{className:"selectFilter",onChange:this.filterChange,placeholder:"Filter "+e.label}),r.createElement("select",{multiple:e.multiple,ref:e.serverProperty,onChange:this.updateFilterStore},t))}})},148:function(e,t,i){var r=i(2),n=i(14);e.exports=r.createClass({displayName:"exports",updateFilterStore:function(e){var t=this.props.filterProperties.serverProperty;n.setFilteredValue(t,e)},render:function(){var e="filter_"+this.props.filterProperties.serverProperty;return 0===$("#"+e+".hasDatepicker").length&&$("#"+e).datepicker({onSelect:this.updateFilterStore,dateFormat:"yy-mm-dd"}),r.createElement("li",{key:this.props.filterProperties.serverProperty},r.createElement("input",{id:e,ref:this.props.filterProperties.serverProperty,placeholder:"Filter "+this.props.filterProperties.label}))}})},149:function(e,t,i){var r=i(150);"string"==typeof r&&(r=[[e.id,r,""]]);i(160)(r,{})},150:function(e,t,i){t=e.exports=i(231)(),t.push([e.id,"#menu{position:absolute;width:34px;height:34px;top:5px;left:5px;cursor:pointer;background-image:url("+i(233)+")}#menu .list{position:absolute;margin-top:10px;margin-left:10px}#menu .listItem{display:inline-block;padding:2px;border:solid #000 1px;width:150px;background-color:#FAFAFA}#menu .listItem:hover{-webkit-transform:scale(1.1,1.1)translateX(4%);transform:scale(1.1,1.1)translateX(4%)}",""])},151:function(e,t,i){var r=i(2),n=i(60);e.exports=r.createClass({displayName:"exports",itemClick:function(e){e.preventDefault(),n.download(this.props.url)},render:function(){return r.createElement("div",{href:this.props.url,className:"listItem",onClick:this.itemClick},this.props.text)}})},152:function(e,t,i){var r=i(2),n=i(60);e.exports=r.createClass({displayName:"exports",itemClick:function(){this.refs.file.getDOMNode().click()},onChange:function(){console.log();var e=this.refs.file.getDOMNode().files[0];n.downloadWithData("/export/profitabilityDashboard",e)},render:function(){return r.createElement("div",{className:"listItem",onClick:this.itemClick},"Profitability dashboard",r.createElement("form",{hidden:!0},r.createElement("input",{className:"listItem",type:"file",name:"file",ref:"file",onChange:this.onChange})))}})},153:function(e,t,i){var r=i(2),n=i(13),a=["January","February","March","April","May","June","July","August","September","October","November","December"];e.exports=r.createClass({displayName:"exports",activityReportsUpdated:function(e){this.setState({activityReports:e,currentActivities:n.getCurrentActivities()})},getInitialState:function(){return{currentActivities:[],activityReports:[]}},componentDidMount:function(){n.listen(this.activityReportsUpdated)},render:function(){var e={};void 0!==this.state.activityReports&&this.state.activityReports.forEach(function(t){var i=a[new Date(t.date).getMonth()];e[i]=(e[i]||0)+t.hours,e[i]=Math.round(100*e[i])/100});var t=[];return a.forEach(function(i){void 0!==e[i]&&t.push(r.createElement("li",null,i.substr(0,3),r.createElement("br",null),e[i]))}),r.createElement("div",{id:"activityReportsSummary"},r.createElement("h3",null,"Monthly summary"),r.createElement("ul",null,t))}})},154:function(e,t,i){var r=i(2);e.exports=r.createClass({displayName:"exports",render:function(){var e=this.props.employees.map(function(e){return r.createElement("li",null,e.name)});return r.createElement("div",{id:"employeesInSelection"},r.createElement("h4",null,"Employees"),r.createElement("ul",null,e))}})},155:function(e,t,i){var r=i(2);e.exports=r.createClass({displayName:"exports",getTotalHoursInSelection:function(){if(this.props.activityReports.length>0){var e=this.props.activityReports.map(function(e){return e.hours}).reduce(function(e,t){return e+t});return Math.round(100*e)/100}return 0},render:function(){var e=this.getTotalHoursInSelection();return r.createElement("div",{id:"activityReportsDetails"},r.createElement("h4",null,"Total Hours"),e)}})},156:function(e,t,i){var r=i(2);e.exports=r.createClass({displayName:"exports",render:function(){var e=this.props.activities.map(function(e){return r.createElement("li",null,e.name," | ",r.createElement("i",null,e.offerArea.name))},this);return r.createElement("div",{id:"activitiesInSelection"},r.createElement("h4",null,"Activities"),r.createElement("ul",null,e))}})},157:function(e,t,i){var r=i(2),n=i(3),a=i(4),s=i(5);e.exports=r.createClass({displayName:"exports",getSummarizedActivityReports_days:function(){var e=[];if(this.props.activityReports.length>0){var t=a.uniq(this.props.activityReports.map(function(e){return e.date}));t.sort(),e=t.map(function(e){var t=a.filter(this.props.activityReports,function(t){return t.date===e}),i=t.map(function(e){return e.hours}).reduce(function(e,t){return e+t});return[new Date(e).getTime(),i]}.bind(this))}return e},getSummarizedActivityReports_weeks:function(){var e=[];if(this.props.activityReports.length>0){var t={};this.props.activityReports.forEach(function(e){var i=s(e.date).weekday(0).toDate().getTime();t[i]?t[i]+=e.hours:t[i]=e.hours});var i=Object.keys(t);i.sort(),e=i.map(function(e){return void 0!==t[e]?[parseInt(e,10),t[e]]:[parseInt(e,10),null]}.bind(this))}return e},render:function(){var e=((new Date).getTime(),this.getSummarizedActivityReports_weeks()),t={chart:{type:"column",backgroundColor:"transparent",spacingLeft:0},title:{text:"Time in selection",x:-20},xAxis:{type:"datetime",dateTimeLabelFormats:{month:"%e. %b",year:"%b"}},yAxis:{title:{text:"Hours"},gridLineColor:"#CCCCCC"},tooltip:{pointFormat:"{point.x:%e. %b}: {point.y:.2f}h"},legend:{enabled:!1},credits:{enabled:!1},plotOptions:{series:{animation:!1}},series:[{data:e}]};return r.createElement(n,{config:t})}})},158:function(e,t,i){var r=i(159);"string"==typeof r&&(r=[[e.id,r,""]]);i(160)(r,{})},159:function(e,t,i){t=e.exports=i(231)(),t.push([e.id,"#login{width:340px;margin:60px auto;padding:10px;text-align:center;border:1px solid #aab;background-color:#f0f0fa}",""])},160:function(e){function t(e,t){for(var i=0;i<e.length;i++){var r=e[i],a=l[r.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(n(r.parts[s],t))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(n(r.parts[s],t));l[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],i={},r=0;r<e.length;r++){var n=e[r],a=n[0],s=n[1],o=n[2],l=n[3],c={css:s,media:o,sourceMap:l};i[a]?i[a].parts.push(c):t.push(i[a]={id:a,parts:[c]})}return t}function r(){var e=document.createElement("style"),t=u();return e.type="text/css",t.appendChild(e),e}function n(e,t){var i,n,a;if(t.singleton){var l=f++;i=d||(d=r()),n=s.bind(null,i,l,!1),a=s.bind(null,i,l,!0)}else i=r(),n=o.bind(null,i),a=function(){i.parentNode.removeChild(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}function a(e,t,i){var r=["/** >>"+t+" **/","/** "+t+"<< **/"],n=e.lastIndexOf(r[0]),a=i?r[0]+i+r[1]:"";if(e.lastIndexOf(r[0])>=0){var s=e.lastIndexOf(r[1])+r[1].length;return e.slice(0,n)+a+e.slice(s)}return e+a}function s(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=a(e.styleSheet.cssText,t,n);else{var s=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function o(e,t){var i=t.css,r=t.media,n=t.sourceMap;if(n&&"function"==typeof btoa)try{i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(n))+" */",i='@import url("data:text/css;base64,'+btoa(i)+'")'}catch(a){}if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=c(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),u=c(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,f=0;e.exports=function(e,r){r=r||{},"undefined"==typeof r.singleton&&(r.singleton=p());var n=i(e);return t(n,r),function(e){for(var a=[],s=0;s<n.length;s++){var o=n[s],c=l[o.id];c.refs--,a.push(c)}if(e){var p=i(e);t(p,r)}for(var s=0;s<a.length;s++){var c=a[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete l[c.id]}}}}},231:function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];e.push(i[2]?"@media "+i[2]+"{"+i[1]+"}":i[1])}return e.join("")},e}},232:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADzSURBVFhH7ZY7CoRADIazIoKdhxC9hmDtRbyAra23svMOnsJOEHF3s2SCk7WdR5EPgnEY+H/IQ1/vLxABCT2Do0YkakRiTc04jjDPM2RZRiduOI4Dmqb56TFoBOn7Hg15DdQ0sJG6rh8vuwzUNHCPVFVFmT/umlaPDMMA+75DmqZ04obzPCHPc5imiU6EkZDoHpH8lWbbNkgSt/6u64KiKOiNQCPIsiw8Vr4CNQ1spCzLx8suAzUN0fRINKWJpll1oUniXGghP3o8NV3XcTf7CtQ0cGnWdaXMH3dNNtK2LWX+uGtaPRLy51n3iESNSNSIDcAH1caB9ItWklUAAAAASUVORK5CYII="},233:232});
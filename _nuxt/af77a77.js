(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{454:function(t,e,r){"use strict";r(460);var o=r(455);e.a={mounted:function(){Object(o.d)()}}},455:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"d",(function(){return C})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return x}));r(33),r(21),r(27),r(37),r(38);var o=r(9),n=r(30);function c(t,e){for(var r in e)"object"!==Object(n.a)(e[r])?t[r]=e[r]:c(t[r],e[r])}var l=r(460),d=r.n(l);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mode:"light",fonts:{base:"Open Sans"},colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},black:"#12263F",white:"#FFFFFF",orange:"#ffc1c1",transparent:"transparent"}};var j=!1;function C(){var t,e,r,o;j||(c(d.a,(t=m.colors,e=m.mode,r=m.fonts,o={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"===e?t.gray[700]:t.gray[800],defaultFontColor:"dark"===e?t.gray[700]:t.gray[800],defaultFontFamily:r.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:t.theme.warning},line:{tension:.4,borderWidth:4,borderColor:t.theme.warning,backgroundColor:t.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:t.theme.warning},arc:{backgroundColor:t.theme.primary,borderColor:"dark"==e?t.gray[800]:t.white,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},pie:{tooltips:{mode:"point"}},doughnut:{tooltips:{mode:"point"},cutoutPercentage:83,legendCallback:function(t){var data=t.data,content="";return data.labels.forEach((function(label,t){var e=data.datasets[0].backgroundColor[t];content+='<span class="chart-legend-item">',content+='<i class="chart-legend-indicator" style="background-color: '+e+'"></i>',content+=label,content+="</span>"})),content}}}},d.a.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"===e?t.gray[900]:t.gray[700],drawBorder:!1,drawTicks:!0,zeroLineWidth:1,zeroLineColor:"dark"===e?t.gray[900]:t.gray[700],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),d.a.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,lineWidth:1,zeroLineWidth:1},ticks:{padding:20},maxBarThickness:10}),o)),j=!0)}var v={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},y={scales:{yAxes:[{gridLines:{color:m.colors.gray[800],zeroLineColor:m.colors.gray[800]}}]}},x=(f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}));f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},601:function(t,e,r){"use strict";var o=r(457),n=r(454);e.a={name:"line-chart",extends:o.c,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},602:function(t,e,r){"use strict";var o=r(457),n=r(454);e.a={name:"bar-chart",extends:o.a,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},604:function(t,e,r){var map={"./af":466,"./af.js":466,"./ar":467,"./ar-dz":468,"./ar-dz.js":468,"./ar-kw":469,"./ar-kw.js":469,"./ar-ly":470,"./ar-ly.js":470,"./ar-ma":471,"./ar-ma.js":471,"./ar-sa":472,"./ar-sa.js":472,"./ar-tn":473,"./ar-tn.js":473,"./ar.js":467,"./az":474,"./az.js":474,"./be":475,"./be.js":475,"./bg":476,"./bg.js":476,"./bm":477,"./bm.js":477,"./bn":478,"./bn-bd":479,"./bn-bd.js":479,"./bn.js":478,"./bo":480,"./bo.js":480,"./br":481,"./br.js":481,"./bs":482,"./bs.js":482,"./ca":483,"./ca.js":483,"./cs":484,"./cs.js":484,"./cv":485,"./cv.js":485,"./cy":486,"./cy.js":486,"./da":487,"./da.js":487,"./de":488,"./de-at":489,"./de-at.js":489,"./de-ch":490,"./de-ch.js":490,"./de.js":488,"./dv":491,"./dv.js":491,"./el":492,"./el.js":492,"./en-au":493,"./en-au.js":493,"./en-ca":494,"./en-ca.js":494,"./en-gb":495,"./en-gb.js":495,"./en-ie":496,"./en-ie.js":496,"./en-il":497,"./en-il.js":497,"./en-in":498,"./en-in.js":498,"./en-nz":499,"./en-nz.js":499,"./en-sg":500,"./en-sg.js":500,"./eo":501,"./eo.js":501,"./es":502,"./es-do":503,"./es-do.js":503,"./es-mx":504,"./es-mx.js":504,"./es-us":505,"./es-us.js":505,"./es.js":502,"./et":506,"./et.js":506,"./eu":507,"./eu.js":507,"./fa":508,"./fa.js":508,"./fi":509,"./fi.js":509,"./fil":510,"./fil.js":510,"./fo":511,"./fo.js":511,"./fr":512,"./fr-ca":513,"./fr-ca.js":513,"./fr-ch":514,"./fr-ch.js":514,"./fr.js":512,"./fy":515,"./fy.js":515,"./ga":516,"./ga.js":516,"./gd":517,"./gd.js":517,"./gl":518,"./gl.js":518,"./gom-deva":519,"./gom-deva.js":519,"./gom-latn":520,"./gom-latn.js":520,"./gu":521,"./gu.js":521,"./he":522,"./he.js":522,"./hi":523,"./hi.js":523,"./hr":524,"./hr.js":524,"./hu":525,"./hu.js":525,"./hy-am":526,"./hy-am.js":526,"./id":527,"./id.js":527,"./is":528,"./is.js":528,"./it":529,"./it-ch":530,"./it-ch.js":530,"./it.js":529,"./ja":531,"./ja.js":531,"./jv":532,"./jv.js":532,"./ka":533,"./ka.js":533,"./kk":534,"./kk.js":534,"./km":535,"./km.js":535,"./kn":536,"./kn.js":536,"./ko":537,"./ko.js":537,"./ku":538,"./ku.js":538,"./ky":539,"./ky.js":539,"./lb":540,"./lb.js":540,"./lo":541,"./lo.js":541,"./lt":542,"./lt.js":542,"./lv":543,"./lv.js":543,"./me":544,"./me.js":544,"./mi":545,"./mi.js":545,"./mk":546,"./mk.js":546,"./ml":547,"./ml.js":547,"./mn":548,"./mn.js":548,"./mr":549,"./mr.js":549,"./ms":550,"./ms-my":551,"./ms-my.js":551,"./ms.js":550,"./mt":552,"./mt.js":552,"./my":553,"./my.js":553,"./nb":554,"./nb.js":554,"./ne":555,"./ne.js":555,"./nl":556,"./nl-be":557,"./nl-be.js":557,"./nl.js":556,"./nn":558,"./nn.js":558,"./oc-lnc":559,"./oc-lnc.js":559,"./pa-in":560,"./pa-in.js":560,"./pl":561,"./pl.js":561,"./pt":562,"./pt-br":563,"./pt-br.js":563,"./pt.js":562,"./ro":564,"./ro.js":564,"./ru":565,"./ru.js":565,"./sd":566,"./sd.js":566,"./se":567,"./se.js":567,"./si":568,"./si.js":568,"./sk":569,"./sk.js":569,"./sl":570,"./sl.js":570,"./sq":571,"./sq.js":571,"./sr":572,"./sr-cyrl":573,"./sr-cyrl.js":573,"./sr.js":572,"./ss":574,"./ss.js":574,"./sv":575,"./sv.js":575,"./sw":576,"./sw.js":576,"./ta":577,"./ta.js":577,"./te":578,"./te.js":578,"./tet":579,"./tet.js":579,"./tg":580,"./tg.js":580,"./th":581,"./th.js":581,"./tk":582,"./tk.js":582,"./tl-ph":583,"./tl-ph.js":583,"./tlh":584,"./tlh.js":584,"./tr":585,"./tr.js":585,"./tzl":586,"./tzl.js":586,"./tzm":587,"./tzm-latn":588,"./tzm-latn.js":588,"./tzm.js":587,"./ug-cn":589,"./ug-cn.js":589,"./uk":590,"./uk.js":590,"./ur":591,"./ur.js":591,"./uz":592,"./uz-latn":593,"./uz-latn.js":593,"./uz.js":592,"./vi":594,"./vi.js":594,"./x-pseudo":595,"./x-pseudo.js":595,"./yo":596,"./yo.js":596,"./zh-cn":597,"./zh-cn.js":597,"./zh-hk":598,"./zh-hk.js":598,"./zh-mo":599,"./zh-mo.js":599,"./zh-tw":600,"./zh-tw.js":600};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=604},607:function(t,e,r){"use strict";var o=r(457),n=r(454);e.a={name:"pie-chart",extends:o.d,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},784:function(t,e,r){"use strict";r.r(e);var o=r(457),n=r(454),c={name:"doughnut-chart",extends:o.b,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},l=r(601),d=r(602),h=r(607),f=r(455),m=r(116),j=r(131),C=r(117);function v(){return Math.round(100*Math.random())}var y={layout:"DashboardLayout",components:{DoughnutChart:c,LineChart:l.a,BarChart:d.a,PieChart:h.a,StatsCard:C.a,BaseHeader:j.a,RouteBreadCrumb:m.a},data:function(){return{salesChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]},extraOptions:f.b},ordersChart:{chartData:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29]}]}},dotsChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[10,18,28,23,28,40,36,46,52],pointRadius:10,pointHoverRadius:15,showLine:!1}]},extraOptions:{scales:{yAxes:[{gridLines:{color:f.a.colors.gray[200],zeroLineColor:f.a.colors.gray[200]}}]}}},doughnutChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},pieChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},barChartStacked:{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:f.a.colors.theme.danger,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 2",backgroundColor:f.a.colors.theme.primary,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 3",backgroundColor:f.a.colors.theme.success,data:[v(),v(),v(),v(),v(),v(),v()]}]},extraOptions:{tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Charts")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-danger mr-2"},[e("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total sales")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.salesChart.chartData}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Performance")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total orders")])]),t._v(" "),e("div",{staticClass:"chart"},[e("bar-chart",{attrs:{"chart-data":t.ordersChart.chartData,height:350}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Growth")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Sales value")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.dotsChart.chartData,"extra-options":t.dotsChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Users")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Audience overview")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("doughnut-chart",{attrs:{height:350,"chart-data":t.doughnutChart.chartData,"extra-options":t.doughnutChart.extraOptions}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Partners")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Affiliate traffic")])]),t._v(" "),e("div",{staticClass:"chart"},[e("pie-chart",{attrs:{height:350,"chart-data":t.pieChart.chartData,"extra-options":t.pieChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Product comparison")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("bar-chart",{attrs:{height:350,"chart-data":t.barChartStacked.chartData,"extra-options":t.barChartStacked.extraOptions}})],1)],2)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/BatchAttributeEditor/setting/SymChooser":function(){define(["dojo/_base/declare","dijit/_WidgetsInTemplateMixin","jimu/BaseWidgetSetting","esri/symbols/jsonUtils","dojo/text!./SymChooser.html"],function(m,k,q,n,r){return m([q,k],{templateString:r,baseClass:"solutions-widget-batcheditor-setting",data:null,selectionSymbols:null,constructor:function(h){this.data=h.data;this.selectionSymbols=h.selectionSymbols},postCreate:function(){this.inherited(arguments);this.showSymbolSelector()},
showSymbolSelector:function(){var h=null,f=this.data;this.selectionSymbols[f.id]&&(h=n.fromJson(this.selectionSymbols[f.id]));null===h?"esriGeometryPolygon"===f.geometryType?this.symbolSelector.showByType("fill"):"esriGeometryPoint"===f.geometryType?this.symbolSelector.showByType("marker"):"esriGeometryPolyline"===f.geometryType&&this.symbolSelector.showByType("line"):this.symbolSelector.showBySymbol(h)},okPress:function(){return this.symbolSelector}})})},"widgets/BatchAttributeEditor/utils":function(){define(["dojo/_base/lang",
"dojo/_base/array","jimu/utils"],function(m,k,q){return{getFieldInfosFromWebmap:function(n,r){var h=null,f=r.getLayerInfoByTopLayerId(n);if(f){var g=f.getPopupInfo();g&&g.fieldInfos?(h=m.clone(g.fieldInfos),f.layerObject&&k.forEach(h,function(b){k.some(f.layerObject.fields,function(e){if(b.fieldName===e.name)return b.type=e.type,!0})})):(h=[],f&&f.layerObject&&k.forEach(f.layerObject.fields,function(b){var e=q.getDefaultPortalFieldInfo(b);e.type=b.type;e.visible=!0;e.isEditable=!0;h.push(e)}))}h&&
k.forEach(h,function(b){b.format&&b.format.dateFormat&&b.format.dateFormat.toLowerCase()&&0<=b.format.dateFormat.toLowerCase().indexOf("time")&&(b.format.time=!0)});return h}}})},"widgets/BatchAttributeEditor/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/BatchAttributeEditor/setting/SymChooser.html":'\x3cdiv style\x3d"height:100%;width:100%;overflow:auto"\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"symbolPage"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"symbolSelector" data-dojo-type\x3d"jimu/dijit/SymbolChooser"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n',
"url:widgets/BatchAttributeEditor/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n\r\n\x3cdiv data-dojo-attach-point\x3d"controlNode"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"firstPageDiv"\x3e\r\n        \x3cdiv class\x3d"settings-heading" data-dojo-attach-point\x3d"tableToolHeader"\x3e${nls.page1.selectToolHeader}\x3c/div\x3e\r\n        \x3cdiv class\x3d"settings-description" data-dojo-attach-point\x3d"tableToolDescription"\x3e${nls.page1.selectToolDesc}\x3c/div\x3e\r\n\r\n        \x3ctable class\x3d"setting-tool-table" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                    \x3ctd\x3e\r\n                         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"selectByShape"\r\n                               data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"selectByShape" checked /\x3e\r\n                        \x3cspan\x3e${nls.page1.selectByShape}\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"selectByFeature"\r\n                               data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"selectByFeature" /\x3e\r\n                        \x3cspan\x3e${nls.page1.selectBySpatQuery}\x3c/span\x3e\r\n\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"selectByFeatureQuery"\r\n                               data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"selectByFeatureQuery" /\x3e\r\n                        \x3cspan\x3e${nls.page1.selectByAttQuery}\x3c/span\x3e\r\n\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3c!--\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"selectByQuery"\r\n                               data-dojo-type\x3d"dijit/form/RadioButton" value\x3d"selectByQuery" /\x3e\r\n                        \x3cspan\x3e${nls.page1.selectByQuery}\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n\t\t\t\t--\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\x3cbr /\x3e\r\n\r\n        \x3ctable class\x3d"settings-navigation-table" data-dojo-attach-point\x3d"pageOneControls" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:page1ToPage2"\x3e${nls.next}\x3c/div\x3e\r\n                        \x3cspan class\x3d"settings-error" data-dojo-attach-point\x3d"settingsFirstPageError" style\x3d"display:none"\x3e${nls.page1.toolNotSelected}\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cspan class\x3d"settings-error" data-dojo-attach-point\x3d"settingsFirstPageSaveError" style\x3d"display:none"\x3e${nls.errorOnOk}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"secondPageDiv" style\x3d"display:none"\x3e\r\n\r\n\r\n        \x3cdiv class\x3d"settings-heading" data-dojo-attach-point\x3d"layersToolHeader"\x3e${nls.page2.layersToolHeader}\x3c/div\x3e\r\n        \x3cdiv class\x3d"settings-description" data-dojo-attach-point\x3d"layersToolDesc"\x3e${nls.page2.layersToolDesc}\x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"setting-layer-table" data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"tableLayerInfosError" class\x3d"settings-nolayer-error" style\x3d"display:none"\x3e${nls.page2.noEditableLayers}\x3c/div\x3e\r\n        \x3cdiv class\x3d"setting-layer-toggle-checkbox-group"\x3e\r\n            \x3cdiv class\x3d"setting-layer-toggle-checkbox" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"toggleLayers"\x3e\x3c/div\x3e\r\n            \x3cspan class\x3d"setting-layer-toggle-checkbox-text"\x3e${nls.page2.toggleLayers}\x3c/span\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3ctable class\x3d"settings-navigation-table" data-dojo-attach-point\x3d"pageTwoControls" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:page2ToPage1"\x3e${nls.back}\x3c/div\x3e\r\n                        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:page2ToPage3"\x3e${nls.next}\x3c/div\x3e\r\n                        \x3cspan class\x3d"settings-error" data-dojo-attach-point\x3d"settingsSecondPageError" style\x3d"display:none"\x3e${nls.page2.noLayersSelected}\x3c/span\x3e\r\n\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cspan class\x3d"settings-error" data-dojo-attach-point\x3d"settingsSecondPageSaveError" style\x3d"display:none"\x3e${nls.errorOnOk}\x3c/span\x3e\r\n\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"thirdPageDiv" style\x3d"display:none"\x3e\r\n\r\n        \x3cdiv class\x3d"settings-heading" data-dojo-attach-point\x3d"tableCommonFieldHeader"\x3e${nls.page3.commonFieldsHeader}\x3c/div\x3e\r\n        \x3cdiv class\x3d"settings-description" data-dojo-attach-point\x3d"tableCommonFieldDesc"\x3e${nls.page3.commonFieldsDesc}\x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"setting-common-fields-table" data-dojo-attach-point\x3d"tableCommonFields"\x3e\x3c/div\x3e\x3cbr /\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"tableCommonFieldsError" class\x3d"settings-error" style\x3d"display:none"\x3e${nls.page3.noCommonFields}\x3c/div\x3e\x3cbr /\x3e\r\n        \x3ctable class\x3d"settings-navigation-table" data-dojo-attach-point\x3d"pageThreeControls" cellspacing\x3d" 0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:page3ToPage2"\x3e${nls.back}\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cspan class\x3d"settings-error" data-dojo-attach-point\x3d"settingsThirdPageSaveError" style\x3d"display:none"\x3e${nls.errorOnOk}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n',
"url:widgets/BatchAttributeEditor/setting/css/style.css":".solutions-widget-batcheditor-setting {margin: 0; padding: 0; font-size: 15px;}.solutions-widget-batcheditor-setting .dijitArrowButtonContainer {width: 17px;}.solutions-widget-batcheditor-setting .dijitSelect {height: 30px; width: 100%;}.solutions-widget-batcheditor-setting .editable {width: 100px;}.solutions-widget-batcheditor-setting .symbolselector {width: 140px;}.hide {display: none;}.solutions-widget-batcheditor-setting .settings-heading {font-size: 14px; margin-top: 15px; color: #2b2d39;}.solutions-widget-batcheditor-setting .settings-description {font-size: 12px; margin-top: 15px; margin-left: 10px; margin-right: 10px; color: #2b2d39;}.solutions-widget-batcheditor-setting .settings-error {font-size: 12px; font-style: italic; color: #999999;}.solutions-widget-batcheditor-setting .settings-nolayer-error {font-size: 12px; font-style: italic; color: #999999; margin-left: 10px; margin-right: 10px; margin-top: 5px; margin-bottom: 5px;}.batcheditor-settings-error {font-size: 12px; font-style: italic; color: #999999;}.solutions-widget-batcheditor-setting .settings-navigation-table \x3e tbody \x3e tr \x3e .controls {width: 100%;}.solutions-widget-batcheditor-setting .settings-navigation-table \x3e tbody \x3e tr \x3e td {vertical-align: middle; font-size: 1em;}.solutions-widget-batcheditor-setting .setting-tool-table {margin-top: 20px; margin-left: 10px; margin-right: 10px; border-width: 0px;}.solutions-widget-batcheditor-setting .setting-tool-table \x3e tbody \x3e tr \x3e .controls {width: 100%;}.solutions-widget-batcheditor-setting .setting-tool-table \x3e tbody \x3e tr \x3e td \x3e span {margin-left: 5px; margin-right: 5px;}.solutions-widget-batcheditor-setting .setting-tool-table \x3e tbody \x3e tr \x3e td \x3e input {margin-left: 0px; margin-right: 0px;}.solutions-widget-batcheditor-setting .setting-tool-table \x3e thead \x3e tr \x3e th, .solutions-widget-batcheditor-setting .setting-tool-table \x3e tbody \x3e tr \x3e td {line-height: 22px; vertical-align: middle; font-size: 12px;}.solutions-widget-batcheditor-setting .setting-layer-table {margin-left: 10px; margin-right: 10px; margin-top: 20px; margin-bottom: 10px;}.solutions-widget-batcheditor-setting .setting-layer-toggle-checkbox-group {margin-left: 10px; margin-right: 10px; margin-top: 15px;}.solutions-widget-batcheditor-setting .setting-layer-toggle-checkbox {margin-left: 0px; margin-right: 0px;}.solutions-widget-batcheditor-setting .setting-layer-toggle-checkbox-text {font-size: 12px; color: #2b2d39;}.solutions-widget-batcheditor-setting .setting-common-fields-table {margin: 15px; padding-left: 15px; padding-right: 15px;}.solutions-widget-batcheditor-setting .footer {text-align: right;}.footer {padding-top: 5px; width: 100%; height: 30px;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/BatchAttributeEditor/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/TabContainer3 dojo dojo/query dojo/_base/html dojo/dom-style dojo/_base/array dojo/on dojo/_base/lang dijit/form/Select dijit/registry dojo/dom-construct jimu/dijit/SymbolChooser jimu/dijit/Popup jimu/LayerInfos/LayerInfos ./SymChooser ../utils".split(" "),function(m,k,q,n,r,h,f,g,b,e,u,p,v,w,t,x,y,z,A,B){return m([q,k],{baseClass:"solutions-widget-batcheditor-setting",layersTable:null,
commonFieldsTable:null,layerSelects:null,currentLayer:null,selectionSymbols:{},currentPage:1,controlsAddedToWidgetFrame:!1,toolOption:{Shape:{value:0},FeatureSpatial:{value:1},FeatureQuery:{value:2},Query:{value:3}},tabContainer:null,popup:null,_jimuLayerInfos:null,startup:function(){this.inherited(arguments);z.getInstance(this.map,this.map.itemInfo).then(p.hitch(this,function(a){this._jimuLayerInfos=a}));this.tabContainer=new r({tabs:[{title:this.nls.tabs.selection,content:this.firstPageDiv},{title:this.nls.tabs.layers,
content:""},{title:this.nls.tabs.fields,content:""}],isNested:!0},this.controlNode);this.tabContainer.startup();this.own(u(this.tabContainer,"tabChanged",p.hitch(this,function(a){var c=this.currentPage;if(a===this.nls.tabs.selection){if(1<c)for(;1<c;)this.btnBackClick(),c--}else if(a===this.nls.tabs.layers)if(2>c)for(;2>c;)this.btnNextClick(),c++;else for(;2<c;)this.btnBackClick(),c--;else if(3>c)for(;3>c;)this.btnNextClick(),c++})));null===this.config&&(this.config={});void 0===this.config&&(this.config=
{});""===this.config&&(this.config={});this.setConfig(this.config);try{var a=this.domNode.parentNode.parentNode.parentNode.parentNode.lastChild.lastChild;this.btnErrorMsg=t.toDom("\x3cdiv class\x3d'batcheditor-settings-error hide'\x3e\x3c/div\x3e");t.place(this.btnErrorMsg,a,"after");g.addClass(this.pageOneControls,"hide");g.addClass(this.pageTwoControls,"hide");g.addClass(this.pageThreeControls,"hide");g.addClass(this.settingsFirstPageSaveError,"hide");g.addClass(this.settingsSecondPageSaveError,
"hide");g.addClass(this.settingsThirdPageSaveError,"hide");this.controlsAddedToWidgetFrame=!0}catch(d){console.log(d.message)}},btnNextClick:function(){1===this.currentPage?this.page1ToPage2():2===this.currentPage&&this.page2ToPage3()},btnBackClick:function(){2===this.currentPage?this.page2ToPage1():3===this.currentPage&&this.page3ToPage2()},getSelectedTool:function(){if(this.selectByShape.checked)return this.toolOption.Shape;if(this.selectByFeature.checked)return this.toolOption.FeatureSpatial;if(this.selectByFeatureQuery.checked)return this.toolOption.FeatureQuery},
page1ToPage2:function(){!1===this.selectByShape.checked&&!1===this.selectByFeature.checked&&!1===this.selectByFeatureQuery.checked?this.controlsAddedToWidgetFrame?(this.btnErrorMsg.innerHTML=this.config.nls.page1.toolNotSelected,g.removeClass(this.btnErrorMsg,"hide")):b.set(this.settingsFirstPageError,"display",""):(this.savePageToConfig("1"),this.showPage2())},page2ToPage1:function(){this.savePageToConfig("2");this.showPage1()},page2ToPage3:function(){this.createFieldsTable();e.some(this.layersTable.getRows(),
function(a){return this.layersTable.getRowData(a).update},this)?(this.savePageToConfig("2"),this.showPage3()):this.controlsAddedToWidgetFrame?(this.btnErrorMsg.innerHTML=this.nls.page2.noLayersSelected,g.removeClass(this.btnErrorMsg,"hide"),this.tabContainer.selectTab(this.nls.tabs.layers)):b.set(this.settingsSecondPageError,"display","")},page3ToPage2:function(){this.savePageToConfig("3");this.showPage2()},savePageToConfig:function(a){if("1"===a)this.config.selectByShape=!0===this.selectByShape.checked?
this.selectByShape.checked:!1,this.config.selectByFeature=!0===this.selectByFeature.checked?this.selectByFeature.checked:!1,this.config.selectByFeatureQuery=!0===this.selectByFeatureQuery.checked?this.selectByFeatureQuery.checked:!1;else if("2"===a){var b;null!==this.layersTable&&(this.config.toggleLayersOnOpen=this.toggleLayers.checked,this.config.updateLayers=[],this.config.selectByLayer={},e.forEach(this.layersTable.getRows(),function(a){var c=this.layersTable.getRowData(a),d=null,d=new x;void 0===
this.selectionSymbols[c.id]&&("esriGeometryPolygon"===c.geometryType?d.showByType("fill"):"esriGeometryPoint"===c.geometryType||"esriGeometryMultipoint"===c.geometryType?d.showByType("marker"):"esriGeometryPolyline"===c.geometryType&&d.showByType("line"),this.selectionSymbols[c.id]=d.getSymbol().toJson());d=this.selectionSymbols[c.id];!0===c.update&&(!0===this.selectByFeatureQuery.checked&&(b=f('input[name\x3d"queryFldSelect"]',a).shift().value,"NOTSET1"!==b?(c.queryField=b,this.layersTable.editRow(a,
{queryField:c.queryField})):c.queryField=null),this.config.updateLayers.push({id:c.id,name:c.label,queryField:c.queryField,selectionSymbol:d}));if(!0===this.selectByFeature.checked||!0===this.selectByFeatureQuery.checked)!0===this.selectByFeatureQuery.checked&&(b=f('input[name\x3d"queryFldSelect"]',a).shift().value.toString(),"NOTSET1"!==b?(c.queryField=b,this.layersTable.editRow(a,{queryField:c.queryField})):c.queryField=null),!0===c.selectByLayer&&(this.config.selectByLayer={id:c.id,name:c.label,
queryField:c.queryField,selectionSymbol:d})},this))}else"3"===a&&null!==this.commonFieldsTable&&(this.config.commonFields=[],e.forEach(this.commonFieldsTable.getRows(),function(c){c=this.commonFieldsTable.getRowData(c);!0===c.isEditable&&this.config.commonFields.push({alias:c.label,name:c.fieldName})},this))},showPage1:function(){this.selectByShape.set("checked",this.config.selectByShape);this.selectByFeature.set("checked",this.config.selectByFeature);this.selectByFeatureQuery.set("checked",this.config.selectByFeatureQuery);
"undefined"===typeof this.config.selectByShape&&"undefined"===typeof this.config.selectByFeature&&"undefined"===typeof this.config.selectByFeatureQuery&&this.selectByShape.set("checked",!0);b.set(this.firstPageDiv,"display","");b.set(this.secondPageDiv,"display","none");b.set(this.settingsFirstPageError,"display","none");this.hideOkError();this.controlsAddedToWidgetFrame&&(this.currentPage=1)},showPage2:function(){null!==this.config.toggleLayersOnOpen&&this.toggleLayers.setChecked(this.config.toggleLayersOnOpen);
var a=this.getSelectedTool(),d,c,l;a===this.toolOption.Shape?(c=d=!1,l=!0):a===this.toolOption.FeatureSpatial?(d=!0,l=c=!1):a===this.toolOption.FeatureQuery?(c=d=!0,l=!1):a===this.toolOption.Query&&(d=!1,c=!0,l=!1);this.createLayerTable(d,c);this.layersTable.clear();this.loadLayerTable(l,c);b.set(this.firstPageDiv,"display","none");b.set(this.secondPageDiv,"display","");b.set(this.thirdPageDiv,"display","none");b.set(this.settingsSecondPageError,"display","none");this.controlsAddedToWidgetFrame&&
(this.currentPage=2);this.hideOkError()},showPage3:function(){this.loadFieldsTable();b.set(this.firstPageDiv,"display","none");b.set(this.secondPageDiv,"display","none");b.set(this.thirdPageDiv,"display","");this.controlsAddedToWidgetFrame&&(this.currentPage=3);this.hideOkError()},hideOkError:function(){this.controlsAddedToWidgetFrame?g.addClass(this.btnErrorMsg,"hide"):(b.set(this.settingsFirstPageSaveError,"display","none"),b.set(this.settingsSecondPageSaveError,"display","none"),b.set(this.settingsThirdPageSaveError,
"display","none"))},showOKError:function(){if(this.controlsAddedToWidgetFrame)this.btnErrorMsg.innerHTML=this.nls.errorOnOk,g.removeClass(this.btnErrorMsg,"hide");else{var a=b.get(this.firstPageDiv,"display");"none"!==a?b.set(this.settingsFirstPageSaveError,"display",""):(a=b.get(this.secondPageDiv,"display"),"none"!==a?b.set(this.settingsSecondPageSaveError,"display",""):(a=b.get(this.thirdPageDiv,"display"),"none"!==a&&b.set(this.settingsThirdPageSaveError,"display","")))}},setConfig:function(a){this.config=
a;this.showPage1()},getConfig:function(){this.savePageToConfig("1");if(!1===this.selectByShape.checked&&!1===this.selectByFeature.checked&&!1===this.selectByFeatureQuery.checked)return this.showOKError(),!1;this.savePageToConfig("2");if(this.config.updateLayers){if(0===this.config.updateLayers.length)return this.showOKError(),!1}else return this.showOKError(),!1;if(!0===this.selectByFeature.checked||!0===this.selectByFeatureQuery.checked)if(this.config.selectByLayer){if(null===this.config.selectByLayer.id||
void 0===this.config.selectByLayer.id||""===this.config.selectByLayer.id)return this.showOKError(),!1}else return this.showOKError(),!1;if(!0===this.selectByFeatureQuery.checked){if(e.some(this.config.updateLayers,function(a){if(null===a.queryField||void 0===a.queryField||""===a.queryField)return this.showOKError(),!0},this))return!1;if(null===this.config.selectByLayer.queryField||void 0===this.config.selectByLayer.queryField||""===this.config.selectByLayer.queryField)return this.showOKError(),!1}this.savePageToConfig("3");
if(this.config){if(0===this.config.commonFields.length)return this.showOKError(),!1}else return this.showOKError(),!1;return this.config},_getDefaultFieldInfos:function(a){return B.getFieldInfosFromWebmap(a,this._jimuLayerInfos)},addQueryFields:function(){this.layerSelects=[];e.forEach(this.layersTable.getRows(),function(a){var b=f(".queryFieldDropdown.empty-text-td",a).shift(),c=this.layersTable.getRowData(a);a=this.map.getLayer(c.id);a=this.getVisibleFields(this._getDefaultFieldInfos(a.id));var l=
new v({name:"queryFldSelect",options:a});l.placeAt(b);this.layerSelects.push(l);c.queryField&&""!==c.queryField&&e.some(a,function(a){if(a.value===c.queryField)return l.set("value",c.queryField),!0})},this)},getEditableFields:function(a){return h.filter(a,function(a){return!0===a.isEditable&&a.type?"esriFieldTypeGlobalID"!==a.type&&"esriFieldTypeRaster"!==a.type&&"esriFieldTypeGeometry"!==a.type&&"esriFieldTypeOID"!==a.type&&"esriFieldTypeBlob"!==a.type&&"esriFieldTypeXML"!==a.type?!0:!1:!1})},getVisibleFields:function(a){var b=
[{label:"",value:"NOTSET1"}];e.forEach(a,function(a){!0===a.visible&&b.push({label:a.label,value:a.fieldName})});return b},arrayObjectIndexOf:function(a,b,c){for(var d=0,C=a.length;d<C;d++)if(a[d][c]===b)return d;return-1},intersect_array:function(a,b){return e.filter(a,function(a){return 0<=this.arrayObjectIndexOf(b,a.fieldName,"fieldName")?!0:!1},this)},loadFieldsTable:function(){this.commonFieldsTable.clear();var a=null,d=!0;e.forEach(this.layersTable.getRows(),function(c){c=this.layersTable.getRowData(c);
!0===c.update&&(c=this.map.getLayer(c.id),c=this.getEditableFields(this._getDefaultFieldInfos(c.id)),!0===d?(a=c,d=!1):a=this.intersect_array(a,c))},this);if(null===a)b.set(this.tableCommonFieldsError,"display",""),b.set(this.tableCommonFieldDesc,"display","none"),b.set(this.tableCommonFieldHeader,"display","none"),b.set(this.tableCommonFields,"display","none"),this.tableCommonFieldsError.innerHTML=this.nls.page3.noCommonFields;else if(0===a.length)b.set(this.tableCommonFieldsError,"display",""),
b.set(this.tableCommonFieldDesc,"display","none"),b.set(this.tableCommonFieldHeader,"display","none"),b.set(this.tableCommonFields,"display","none"),this.tableCommonFieldsError.innerHTML=this.nls.page3.noCommonFields;else{b.set(this.tableCommonFieldsError,"display","none");b.set(this.tableCommonFieldDesc,"display","");b.set(this.tableCommonFieldHeader,"display","");b.set(this.tableCommonFields,"display","");var c=e.map(this.config.commonFields,function(a){return a.name}),f=!1;e.forEach(a,function(a){f=
-1<c.indexOf(a.fieldName)?!0:!1;this.commonFieldsTable.addRow({fieldName:a.fieldName,label:a.label,isEditable:f})},this)}},createFieldsTable:function(){null===this.commonFieldsTable&&(this.commonFieldsTable=new n({fields:[{name:"isEditable",title:this.nls.page3.fieldTable.colEdit,type:"checkbox",width:125,"class":"editable"},{name:"fieldName",title:this.nls.page3.fieldTable.colName,type:"text"},{name:"label",title:this.nls.page3.fieldTable.colAlias,type:"text",editable:!1},{name:"actions",title:this.nls.page3.fieldTable.colAction,
type:"actions",actions:["up","down"],"class":"editable"}],selectable:!1}),this.commonFieldsTable.placeAt(this.tableCommonFields),this.commonFieldsTable.startup())},loadLayerTable:function(a,d){var c="",l=!1,g=!1,k,m;e.forEach(this.map.itemInfo.itemData.operationalLayers,function(b){if(null!==b.layerObject&&void 0!==b.layerObject&&"Feature Layer"===b.layerObject.type&&b.url&&(!a||!1!==b.layerObject.isEditable())){c=b.title;m=g=!1;k=null;var d=h.filter(this.config.updateLayers,function(a){return a.name===
c});0<d.length&&(d[0].selectionSymbol&&(this.selectionSymbols[b.layerObject.id]=d[0].selectionSymbol),g=!0,k=d[0].queryField);this.config.selectByLayer&&this.config.selectByLayer.name===c&&(m=!0,this.config.selectByLayer.hasOwnProperty("queryField")&&(k=this.config.selectByLayer.queryField),this.config.selectByLayer.hasOwnProperty("selectionSymbol")&&(this.selectionSymbols[b.layerObject.id]=this.config.selectByLayer.selectionSymbol));d=this.layersTable.addRow({label:c,update:g,id:b.layerObject.id,
selectByLayer:m,geometryType:b.layerObject.geometryType,queryField:k});l=!0;!1===b.layerObject.isEditable()&&(b=f(".jimu-checkbox",d.tr)[0],w.byNode(b).setStatus(!1))}},this);l?(b.set(this.tableLayerInfosError,"display","none"),!0===d&&this.addQueryFields()):b.set(this.tableLayerInfosError,"display","")},createLayerTable:function(a,b){var c={fields:[{name:"update",title:this.nls.page2.layerTable.colUpdate,type:"checkbox",width:125,"class":"editable"},{name:"label",title:this.nls.page2.layerTable.colLabel,
type:"text"},{name:"selectByLayer",title:this.nls.page2.layerTable.colSelectByLayer,type:"radio",hidden:!a},{name:"queryFieldDropdown",title:this.nls.page2.layerTable.colSelectByField,type:"empty",hidden:!b},{name:"actions",title:this.nls.page2.layerTable.colhighlightSymbol,type:"actions",width:200,"class":"symbolselector",actions:["edit"]},{name:"id",type:"text",hidden:!0},{name:"queryField",type:"text",hidden:!0},{name:"geometryType",type:"text",hidden:!0}],selectable:!1};t.empty(this.tableLayerInfos);
this.layersTable=new n(c);this.layersTable.placeAt(this.tableLayerInfos);this.layersTable.startup();this.own(u(this.layersTable,"actions-edit",p.hitch(this,this.showSymbolSelector)))},showSymbolSelector:function(a){var b=f(".action-item-parent",a);if(b&&b.length){a=this.layersTable.getRowData(a);this.currentLayer=a.id;b={};b.data=a;b.selectionSymbols=this.selectionSymbols;b.nls=this.nls;var c=new A(b),e=new y({width:425,height:475,content:c,titleLabel:this.nls.symbolPopup,onClose:p.hitch(this,function(){c.destroy()}),
buttons:[{label:this.nls.ok,onClick:p.hitch(this,function(){this.selectionSymbols[this.currentLayer]=c.okPress().getSymbol().toJson();e.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:p.hitch(this,function(){e.close()})}]})}}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Deferred dojo/query ./utils dijit/_TemplatedMixin dijit/_WidgetBase esri/undoManager esri/OperationBase esri/graphic esri/tasks/query esri/tasks/QueryTask esri/tasks/RelationshipQuery esri/layers/FeatureLayer esri/dijit/AttributeInspector jimu/ConfigManager jimu/dijit/DropdownMenu jimu/dijit/LoadingIndicator jimu/LayerInfos/LayerInfos".split(" "),function(q,d,k,f,m,l,t,n,w,x,y,z,A,r,u,B,C,D,E,F,G,H){var g=q([x,
w],{baseClass:"related-records-editor",templateString:"\x3cdiv\x3e\x3cdiv class\x3d'operation-box' data-dojo-attach-point\x3d'operationBox'\x3e\x3cdiv class\x3d'previos-btn feature-action' data-dojo-attach-point\x3d'previouBtn'data-dojo-attach-event\x3d'click:_onPreviouBtnClick'\x3e\x3c/div\x3e\x3cdiv class\x3d'operation-title' data-dojo-attach-point\x3d'operationTitle'\x3e\x3c/div\x3e\x3cdiv class\x3d'add-new-btn' data-dojo-attach-point\x3d'addNewBtn'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'content-box' data-dojo-attach-point\x3d'contentBox'\x3e\x3c/div\x3e\x3c/div\x3e",
editorATI:null,originalFeature:null,originalLayer:null,originalJimuLayerInfo:null,layerInfosObj:null,undoManager:null,refDomNode:null,_temporaryData:null,tableInfosParam:null,postCreate:function(){this._init();f.place(this.domNode,this.refDomNode,"after");window.isRTL?f.addClass(this.previouBtn,"icon-arrow-forward"):f.addClass(this.previouBtn,"icon-arrow-back");this.loading=(new G({hidden:!0})).placeAt(this.domNode);this._clearPage();this.showFirstPage({feature:this.originalFeature,oriJimuLayerInfo:this.originalJimuLayerInfo})},
_init:function(){this.refDomNode=this.editorATI.domNode;this.originalLayer=this.originalFeature.getLayer();this.layerInfosObj=H.getInstanceSync();this.originalJimuLayerInfo=this.layerInfosObj.getLayerOrTableInfoById(this.originalLayer.id);this.undoManager=new y;this._temporaryData={eventHandles:[],dijits:[]}},destroy:function(){this._clearPage();this.inherited(arguments)},_getRelatedTableInfoArray:function(a){var b=new l,c=[];a.getRelatedTableInfoArray("esriRelRoleOrigin").then(d.hitch(this,function(a){k.forEach(a,
function(a){this._findTableInfoFromTableInfosParam(a)&&c.push(a)},this);b.resolve(c)}));return b},_getRelatedRecordsByQuery:function(a){var b=new l,c=new r,h=new u(a.destJimuLayerInfo.getUrl()),e=a.destJimuLayerInfo.layerObject.relationships.keyField,v=a.oriJimuLayerInfo.layerObject.objectIdField;c.where=e?e+" \x3d "+a.feature.attributes[e]:v+" \x3d "+a.feature.attributes[v];c.outFields=["*"];h.execute(c,d.hitch(this,function(a){b.resolve(a)}));return b},_getRelatedRecordsByRelatedQuery:function(a){var b=
new l,c=new B,h=this._getOriRelationshipByDestLayer(a);c.outFields=["*"];c.relationshipId=h.id;var e=a.feature.attributes[a.oriJimuLayerInfo.layerObject.objectIdField];c.objectIds=[e];a.oriJimuLayerInfo.layerObject.queryRelatedFeatures(c,d.hitch(this,function(a){(a=a[e]&&a[e].features)?b.resolve(a):b.resolve([])}),d.hitch(this,function(){b.resolve([])}));return b},_getOriRelationshipByDestLayer:function(a){var b=null;k.some(a.oriJimuLayerInfo.layerObject.relationships,function(c){if(c.relatedTableId===
a.destJimuLayerInfo.layerObject.layerId)return b=c,!0},this);return b},_getDestRelationshipByDestLayer:function(a){var b=null;k.some(a.destJimuLayerInfo.layerObject.relationships,function(c){if(c.relatedTableId===a.oriJimuLayerInfo.layerObject.layerId)return b=c,!0},this);return b},_createATI:function(a){var b=null,c=this._findTableInfoFromTableInfosParam(a.destJimuLayerInfo);c&&(b=new g.ATI({layerInfos:[c],hideNavButtons:!0},f.create("div")),b.startup(),this._temporaryData.dijits.push(b));c=m(b,
"delete",d.hitch(this,this._onDeleteBtnClick,a));this._temporaryData.eventHandles.push(c);c=m(b,"attribute-change",d.hitch(this,this._onAttributeChange,a));this._temporaryData.eventHandles.push(c);return b},_findTableInfoFromTableInfosParam:function(a){var b=null;k.some(this.tableInfosParam,function(c){if(c.featureLayer.id===a.id)return b=c,!0},this);return b},_addNewRelatedRecord:function(a){var b=new l,c={},h=a.destJimuLayerInfo.layerObject,e=this._getOriRelationshipByDestLayer(a),f=this._getDestRelationshipByDestLayer(a);
k.forEach(h.fields,function(a){"esriFieldTypeDate"===a.type&&(c[a.name]=(new Date).valueOf())},this);e.keyField&&f.keyField&&(e=n.ignoreCaseToGetFieldKey(a.oriJimuLayerInfo.layerObject,e.keyField),f=n.ignoreCaseToGetFieldKey(a.destJimuLayerInfo.layerObject,f.keyField),e&&f&&(c[f]=a.feature.attributes[e]));var g=new A(null,null,c,null);h.applyEdits([g],null,null,d.hitch(this,function(a){var c=a[0];if(c.success&&c.objectId){a=new r;var e=new u(h.url);a.where=h.objectIdField+" \x3d "+c.objectId;a.outFields=
["*"];e.execute(a,d.hitch(this,function(a){(a=a.features[0])?b.resolve(a):(g.attributes[h.objectIdField]=c.objectId,b.resolve(g))}),d.hitch(this,function(){b.reject()}))}else b.reject()}),d.hitch(this,function(){b.reject()}));return b},_deleteRelatedRecord:function(a){var b=new l;a.destJimuLayerInfo.layerObject.applyEdits(null,null,[a.relatedFeature],d.hitch(this,function(){b.resolve()}),d.hitch(this,function(){b.reject()}));return b},_updateRelatedRecord:function(a,b){var c=new l,h=a.destJimuLayerInfo.layerObject,
e=a.relatedFeature;e.attributes[b.fieldName]=b.fieldValue;h.applyEdits(null,[e],null,d.hitch(this,function(){c.resolve()}),d.hitch(this,function(){c.reject()}));return c},_getDisplayTitleOfRelatedRecord:function(a,b,c){var d=a.getInfoTemplate();(b="popupTitle"===c&&d?"function"===typeof d.title?d.title(b):d.title:n.getAttrByFieldKey(b,c))?(a=n.ignoreCaseToGetFieldObject(a.layerObject,c))&&a.type&&"esriFieldTypeDate"===a.type&&(b=n.getLocaleDateTime(b)):b="";return b},showRelatedRecords:function(a){this._changeRefDomNode();
var b=d.getObject("_wabProperties.originalLayerName",!1,a.destJimuLayerInfo.layerObject)||a.destJimuLayerInfo.title;this._setOperationTitle(b);this._clearPage();this.loading.show();this._getRelatedRecordsByRelatedQuery(a).then(d.hitch(this,function(b){this._showAddNewBtn(a);0<b.length?this._setTitle(window.jimuNls.popup.relatedRecords):this._setTitle(window.jimuNls.popup.noRelatedRecotds,"font-normal");var c=this._showFieldSelector(a.destJimuLayerInfo);k.forEach(b,function(b,h){var e=this._getDisplayTitleOfRelatedRecord(a.destJimuLayerInfo,
b,c),e=f.create("div",{"class":"item record-item "+(0===h%2?"oddLine":"evenLine"),innerHTML:e},this.contentBox);e.relatedRecord=b;e=m(e,"click",d.hitch(this,function(){this._addOperation(g.OPERATION_SHOW_RELATED_RECORDS,a);this.showInspector(this._createOperationData(a.feature,a.oriJimuLayerInfo,a.destJimuLayerInfo,b))}));this._temporaryData.eventHandles.push(e)},this);this.loading.hide()}))},showInspector:function(a){this._changeRefDomNode();var b=a.destJimuLayerInfo.layerObject,c=d.getObject("_wabProperties.originalLayerName",
!1,b)||a.destJimuLayerInfo.title,b=d.getObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",!1,b),h=this._getDisplayTitleOfRelatedRecord(a.destJimuLayerInfo,a.relatedFeature,b);"popupTitle"!==b&&(h=c+": "+h);this._setOperationTitle(h);this._clearPage();this.loading.show();(c=this._createATI(a))&&f.place(c.domNode,this.contentBox);c=a.destJimuLayerInfo.layerObject.objectIdField;b=new r;b.where=c+" \x3d "+a.relatedFeature.attributes[c];a.destJimuLayerInfo.layerObject.selectFeatures(b,
C.SELECTION_NEW,d.hitch(this,function(){this.loading.hide()}));this.showRelatedTables(this._createOperationData(a.relatedFeature,a.destJimuLayerInfo,null,null),a)},showRelatedTables:function(a,b){this._getRelatedTableInfoArray(a.oriJimuLayerInfo).then(d.hitch(this,function(c){0<c.length&&this._setTitle(window.jimuNls.popup.relatedTables);k.forEach(c,function(c,e){var h=f.create("div",{"class":"item table-item "+(0===e%2?"oddLine":"evenLine"),innerHTML:c.title},this.contentBox),h=m(h,"click",d.hitch(this,
function(){c.getLayerObject().then(d.hitch(this,function(){b?this._addOperation(g.OPERATION_SHOW_INSPECTOR,b):this._addOperation(g.OPERATION_FIRST,a);this.showRelatedRecords(this._createOperationData(a.feature,a.oriJimuLayerInfo,c,null))}))}));this._temporaryData.eventHandles.push(h)},this)}))},showFirstPage:function(a){this._clearPage();this._revertRefDomNode();this.showRelatedTables(a)},_onAddNewBtnClick:function(a){this.loading.show();this._addNewRelatedRecord(a).then(d.hitch(this,function(b){this.loading.hide();
this._addOperation(g.OPERATION_SHOW_RELATED_RECORDS,a);this.showInspector(this._createOperationData(a.feature,a.oriJimuLayerInfo,a.destJimuLayerInfo,b))}),d.hitch(this,function(){this.loading.hide()}))},_onDeleteBtnClick:function(a){this.loading.show();this._deleteRelatedRecord(a).then(d.hitch(this,function(){this.loading.hide();this._onPreviouBtnClick()}),d.hitch(this,function(){this.loading.hide()}))},_onAttributeChange:function(a,b){this.loading.show();this._updateRelatedRecord(a,b).then(d.hitch(this,
function(){this.loading.hide()}),d.hitch(this,function(){this.loading.hide()}))},_createOperationData:function(a,b,c,d){return{feature:a,oriJimuLayerInfo:b,destJimuLayerInfo:c,relatedFeature:d}},_addOperation:function(a,b){this.undoManager.add(new g.Operation(a,b,this))},_onPreviouBtnClick:function(){this.undoManager.undo()},_clearPage:function(){f.empty(this.contentBox);f.setStyle(this.addNewBtn,"display","none");k.forEach(this._temporaryData.eventHandles,function(a){a&&a.remove&&a.remove()},this);
this._temporaryData.eventHandles=[];k.forEach(this._temporaryData.dijits,function(a){a&&a.destroy&&a.destroy()},this);this._temporaryData.dijits=[]},_changeRefDomNode:function(){f.setStyle(this.refDomNode,"display","none");f.setStyle(this.operationBox,"display","block");f.addClass(this.domNode,"fix-height-mode");this.previouBtn.title=window.jimuNls.common.back;this.addNewBtn.title=window.jimuNls.common.newText;this.undoManager.peekUndo()?f.setStyle(this.previouBtn,"display","block"):f.setStyle(this.previouBtn,
"display","none")},_revertRefDomNode:function(){f.setStyle(this.refDomNode,"display","block");f.setStyle(this.operationBox,"display","none");f.removeClass(this.domNode,"fix-height-mode")},_showAddNewBtn:function(a){var b=a.destJimuLayerInfo.layerObject;"Table"===b.type&&b.getEditCapabilities&&b.getEditCapabilities().canCreate&&(f.setStyle(this.addNewBtn,"display","block"),a=m(this.addNewBtn,"click",d.hitch(this,this._onAddNewBtnClick,a)),this._temporaryData.eventHandles.push(a))},_setTitle:function(a,
b){a&&f.create("div",{"class":"title-box "+(b?b:""),innerHTML:a},this.contentBox)},_setOperationTitle:function(a){f.setAttr(this.operationTitle,"innerHTML",a);f.setAttr(this.operationTitle,"title",a)},_showFieldSelector:function(a){var b="objecid",c=t(".title-box",this.contentBox)[0],f=a.layerObject,e=[];if(!c||!a)return b;var g=a.getPopupInfo();g&&g.title&&e.push({label:window.jimuNls.popup.saveAsPopupTitle,value:"popupTitle"});k.forEach(f.fields,function(a){"globalid"!==a.name.toLowerCase()&&"shape"!==
a.name.toLowerCase()&&e.push({label:a.alias||a.name,value:a.name})});c=(new F({items:e})).placeAt(c);c.domNode.title=window.jimuNls.popup.chooseFieldTip;var l=d.getObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",!1,f),p=n.ignoreCaseToGetFieldObject(a.layerObject,a.layerObject.displayField||a.layerObject.objectIdField),q=E.getInstance().getAppConfig();l?b=l:"2.3"===q.configWabVersion&&p&&p.name?b=p.name:g&&g.title?b="popupTitle":p&&p.name?b=p.name:0<e.length&&(b=e[0].value);b&&(c.setHighlightValue(b),
d.setObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",b,f));this._temporaryData.dijits.push(c);a=m(c,"click-item",d.hitch(this,function(a,b){t(".item.record-item",this.contentBox).forEach(d.hitch(this,function(c){d.setObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",b,f);var e=this._getDisplayTitleOfRelatedRecord(a,c.relatedRecord,b);c.innerHTML=e}))},a));this._temporaryData.eventHandles.push(a);return b}});g.Operation=q([z],{constructor:function(a,b,c){this.operationName=
a;this.operationData=b;this.relatedRecordsEditor=c},performUndo:function(){switch(this.operationName){case g.OPERATION_SHOW_RELATED_TABLES:return this.relatedRecordsEditor.showRelatedTables(this.operationData);case g.OPERATION_SHOW_RELATED_RECORDS:return this.relatedRecordsEditor.showRelatedRecords(this.operationData);case g.OPERATION_SHOW_INSPECTOR:return this.relatedRecordsEditor.showInspector(this.operationData);default:return this.relatedRecordsEditor.showFirstPage(this.operationData)}}});g.ATI=
q([D],{constructor:function(){this._aiConnects=[];this._selection=[];this._toolTips=[]}});d.mixin(g,{OPERATION_SHOW_RELATED_TABLES:"showRelatedTables",OPERATION_SHOW_RELATED_RECORDS:"showRelatedRecords",OPERATION_SHOW_INSPECTOR:"showInspector",OPERATION_FIRST:"first"});return g});
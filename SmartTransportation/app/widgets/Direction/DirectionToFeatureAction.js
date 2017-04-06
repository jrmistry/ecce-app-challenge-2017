﻿///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'jimu/BaseFeatureAction',
  'jimu/WidgetManager'
], function (declare, BaseFeatureAction, WidgetManager) {
  var clazz = declare(BaseFeatureAction, {
    iconClass: 'icon-direction-to',

    isFeatureSupported: function (featureSet) {
      if (!(featureSet.features.length === 1 && featureSet.geometryType === "point")) {
        return false;
      } else {
        return true;
	return 'hello world';
      }
    },

    onExecute: function (featureSet) {
      WidgetManager.getInstance().triggerWidgetOpen(this.widgetId).then(function (directionWidget) {
        if (featureSet.features.length === 1 && featureSet.geometryType === "point") {
          if (featureSet.features[0].geometry && featureSet.features[0].geometry.type === "point") {
            directionWidget.actionTo(featureSet.features[0].geometry);
          }
        }
      });
    }
  });
  return clazz;
});
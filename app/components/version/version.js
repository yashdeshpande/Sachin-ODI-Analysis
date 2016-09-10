'use strict';

angular.module('careerAnalysisApp.version', [
  'careerAnalysisApp.version.interpolate-filter',
  'careerAnalysisApp.version.version-directive'
])

.value('version', '0.1');

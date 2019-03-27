import angular from 'angular';

import displayComponent from './result-display.component';

const module = angular
    .module('app.components.result-display', [

    ])
    .component('resultDisplay', displayComponent);

export default module.name;

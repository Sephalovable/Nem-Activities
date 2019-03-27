import angular from 'angular';

import optionComponent from './option-checkbox.component';

const module = angular
    .module('app.components.option-checkbox', [
        
    ])
    .component('optionCheckbox', optionComponent);

export default module.name;

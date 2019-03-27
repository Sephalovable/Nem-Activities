import angular from 'angular';

import optionCheckbox from './option-checkbox';
import resultDisplay from './result-display';

const module = angular
    .module('app.components', [
        optionCheckbox,
        resultDisplay
    ]);

export default module.name;

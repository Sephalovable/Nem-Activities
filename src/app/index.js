import angular from "angular";

import common from './common';
import components from './components';

import appComponent from './app.component';

const module = angular
    .module('app', [
        common,
        components
    ])
    .component('app', appComponent);

export default module.name;

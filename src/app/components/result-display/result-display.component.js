import templateUrl from './result-display.html';
import './result-display.scss';

const component = {
    templateUrl,
    controller: class {
        constructor() {}

        listItems() {
            return this.values.join('  ');
        }
    },
    bindings: {
        header: '@',
        values: '<'
    }
};

export default component;

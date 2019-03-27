import templateUrl from './option-checkbox.html';
import './option-checkbox.scss';

const component = {
    templateUrl,
    controller: class {
        constructor($scope) {
            // attaches a watcher to the component's scope to watch for changes in the isSelected binding value
            // it triggers the onSelectedChanged callback passing the listKey and current value
            $scope.$watch(
                () => this.isSelected,
                () => this.onSelectedChanged({
                    key: this.listKey,
                    value: this.isSelected
                })
            );
        }
    },
    bindings: {
        listKey: '@',
        isSelected: '<?',
        onSelectedChanged: '&'
    }
};

export default component;

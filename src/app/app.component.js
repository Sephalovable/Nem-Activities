import templateUrl from './app.html';
import './app.scss';

const component = {
    templateUrl,
    controller: class {
        constructor(DatabaseService, GeneratorService) {
            this.GeneratorService = GeneratorService;

            this.thumbnail = "";
            this.thumbnail2 = "";
            this.activityListKeys = DatabaseService.activityListKeys;
            this.tackListKeys = DatabaseService.tackListKeys;
            this.blessingListKeys = DatabaseService.blessingListKeys;
            this.rankListKeys = DatabaseService.rankListKeys;
            this.companionListKeys = DatabaseService.companionListKeys;
        }

        selectedChanged(key, value) {
            this.GeneratorService.setKeySelected(key, value);
        }

        generateOutput() {
            this.GeneratorService.generateResponse()
                .then(result => {
                    return {
                        header: this.GeneratorService.generateHeader(),
                        values: result
                    };
                })
                .then(result => this.result = result);
        }
    }
};

export default component;

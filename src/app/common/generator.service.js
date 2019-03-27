import _ from 'lodash';

class GeneratorService {
    constructor($q, DatabaseService) {
        this.$q = $q;
        this.DatabaseService = DatabaseService;

        this._selectedKeys = [];
    }

    setKeySelected(key, value) {
        const item = this._selectedKeys.find(item => item.key === key);
        if (item) {
            item.value = value;
        } else {
            this._selectedKeys.push({ key, value });
        }
    }

    generateResponse() {
        return this.$q(fulfill => {
            let items = this._getDataItemsFromKeys();
            let result = [];

            items.forEach(item => {
                const maxCount = _.random(item.min, item.max);

                for (let i = 0; i < maxCount; i++) {
                    result.push(this._randomlySelectItemData(item));
                }
            });

            fulfill(result);
        });
    }

    _getDataItemsFromKeys() {
        let items = [];

        this._getSelectedKeys()
            .forEach(key => {
                const originalItem = this.DatabaseService.activityDatabase[key] ||
                    this.DatabaseService.tackDatabase[key] ||
                    this.DatabaseService.blessingDatabase[key] ||
                    this.DatabaseService.rankDatabase[key] ||
                    this.DatabaseService.companionDatabase[key];
                const item = Object.assign({}, originalItem, { name: key });
                items.push(item);
            });

        return items;
    }


    _getSelectedKeys() {
        return this._selectedKeys
            .filter(item => item.value)
            .map(item => item.key);
    }

    _randomlySelectItemData(item) {
        const maxIndex = item.values.length - 1;
        const index = _.random(0, maxIndex);
        return item.values[index];
    }

    generateHeader() {
        const headerOptions = this.DatabaseService.roleplayDatabase.responses;
        const maxIndex = headerOptions.length - 1;
        const index = _.random(0, maxIndex);
        return headerOptions[index];
    }
}

export default GeneratorService;

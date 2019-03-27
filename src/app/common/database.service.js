import ACTIVITY_DATABASE from "../data/activity-data.json";
import ROLEPLAY_DATABASE from '../data/roleplay-data.json';
import TACK_DATABASE from '../data/tack-data.json';
import BLESSING_DATABASE from '../data/blessing-data.json';
import RANK_DATABASE from '../data/rank-data.json';
import COMPANION_DATABASE from '../data/companion-data.json';

class DatabaseService {
    constructor() {
        
    }

    get activityListKeys() {
        return Object.keys(ACTIVITY_DATABASE);
    }

    get tackListKeys() {
        return Object.keys(TACK_DATABASE);
    }

    get blessingListKeys() {
        return Object.keys(BLESSING_DATABASE);
    }

    get rankListKeys() {
        return Object.keys(RANK_DATABASE);
    }

    get companionListKeys() {
        return Object.keys(COMPANION_DATABASE);
    }

    get activityDatabase() {
        return ACTIVITY_DATABASE;
    }

    get tackDatabase() {
        return TACK_DATABASE;
    }

    get blessingDatabase() {
        return BLESSING_DATABASE;
    }

    get rankDatabase() {
        return RANK_DATABASE;
    }

    get companionDatabase() {
        return COMPANION_DATABASE;
    }

    get roleplayDatabase() {
        return ROLEPLAY_DATABASE;
    }
}

export default DatabaseService;

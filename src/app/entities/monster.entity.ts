import { TraitsEntity } from './traits.entity';

export class MonsterEntity {

    id: number;

    level = 1;
    experience = 0;

    name: string;

    rob = 0;
    agi = 0;
    men = 0;
    vol = 0;

    armor = 8;

    role: string;
    path: string;
    proficiencies: string[] = [];
    disgraces = new Map<string, string[]>();
    traits: TraitsEntity[] = [];

    getPF() {
        return 8 + (this.level - 1) + (this.rob * 2) + ((this.role === 'fighter') ? 3 : 0);
    }

    getTem() {
        return 8 + this.rob;
    }

    getRif() {
        return 8 + this.agi;
    }

    getAcu() {
        return 8 + this.men;
    }

    getSpi() {
        return 8 + this.vol;
    }

    getRanks() {
        return Array.from(this.disgraces.keys());
    }

    getDisgracesPerRank(rank) {
        return this.disgraces.get(rank);
    }
}

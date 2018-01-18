import { Injectable } from '@angular/core';
import { MonsterEntity } from '../entities/monster.entity';
import { EventEmitter } from '@angular/core';

@Injectable()
export class EditorService {

    monsters: MonsterEntity[] = [];

    updateMonster = new EventEmitter<MonsterEntity[]>();

    getMonsters() {
        return this.monsters.slice();
    }

    saveMonster(newMonster: MonsterEntity) {
        this.monsters.push(newMonster);
        this.updateMonster.emit(this.monsters);
    }

    deleteMonster(newMonster: MonsterEntity) {
        this.monsters.splice(this.monsters.indexOf(newMonster), 1);
        this.updateMonster.emit(this.monsters);
    }
}

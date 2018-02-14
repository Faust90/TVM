import { Component, OnInit } from '@angular/core';
import { MonsterEntity } from '../entities/monster.entity';
import { EditorService } from '../services/editor.service';
import { TraitsEntity } from '../entities/traits.entity';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {

    currentMonster = new MonsterEntity();
    monsterList: MonsterEntity[] = [];

    constructor(private editorService: EditorService) { }

    ngOnInit(): void {
        this.editorService.updateMonster.subscribe(() => {
            this.monsterList = this.editorService.getMonsters();
        });
    }

    saveMon() {
        console.log(this.currentMonster);
    }

    addTrait(nameValue: string, descValue: string) {
        const newTrait = new TraitsEntity(nameValue, descValue);
        this.currentMonster.traits.push(newTrait);
    }

    resetMonster(){
        this.currentMonster = new MonsterEntity();
    }
}

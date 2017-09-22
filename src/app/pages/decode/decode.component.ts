import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ScoreService } from '../../services/scores.service';
import { LineHacked } from '../../models/line-hacked.model';

@Component({
  selector: 'decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent {

	unhackedScores: LineHacked[];
	constructor(private scoreService: ScoreService){}
	
	ngOnInit() {
		this.unhackedScores = this.scoreService.getScores();
		let unhackedScoresLength = this.unhackedScores.length;
		for(let i=0; i < unhackedScoresLength; i++) {
			this.unhackedScores[i].score = this.decode(this.unhackedScores[i].key, this.unhackedScores[i].score);
		}
	}
	
	decode(key: string, message: string) {

		let keyLength = key.length;
		let messageLength = message.length;
		let coded = 0;

		for (let i = 0; i < messageLength; i++) { 
			let ch = message.charAt(i);
			let keyEq = key.indexOf(ch);

			coded += keyEq * (keyLength ** (message.length - 1 - i));
		}
		return coded+"";
	}
}

import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {      
    private _scores: any[] = [];


    getScores() {
        return this._scores;
    }

    setScores(scores) {
        this._scores = scores;
    }

    removeScore(score) {
        this._scores = this._scores.filter((data) => data.name !== score.name);
    }

    addScore(score) {
        this._scores.push(score);
    }

}
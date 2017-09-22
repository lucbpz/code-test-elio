import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LineHacked } from '../../models/line-hacked.model';
import { ScoreService } from '../../services/scores.service';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class InputScoresComponent {
    public hackedScores: LineHacked[] = [];
    public scoreData: any;
    @Output() public onUnhack = new EventEmitter();

    constructor(private scoreService: ScoreService){
        this.hackedScores = [];
        this.scoreService.setScores([]);
    }
    
    addToTable(formValue) {
        if (formValue.scoreData != null && formValue.scoreData != "") {
            this.scoreData = formValue.scoreData;

        }
        if(this.scoreData != null && this.scoreData != "") {
            let content = this.scoreData.split("\n");
            let contentLength = content.length;
            for (let i = 0 ; i < contentLength; i++) {
                let row = content[i].split(",")
                if (row.length == 3) {
                    let obj = new LineHacked();
                    obj.name = row[0];
                    obj.key = row[1];
                    obj.score = row[2].trim();
                    this.hackedScores.push(obj);
                    this.scoreService.addScore(obj);
                }
            }
        }


        
    }

    openFile(event) {
        let input = event.target;
        for (var index = 0; index < input.files.length; index++) {
            let reader = new FileReader();
            reader.onload = () => {
                // this 'text' is the content of the file
                this.scoreData = reader.result;
            }
            reader.readAsText(input.files[index]);
        };
    }

    
      unhack() {
        this.onUnhack.emit(this.hackedScores); 
      }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clase } from '../class-list/clase';

@Component({
  selector: 'app-number-likes',
  templateUrl: './number-likes.component.html',
  styleUrls: ['./number-likes.component.css']
})
export class NumberLikesComponent implements OnInit {

  constructor() { }

  @Input() like!:number;
  @Output() likeChange: EventEmitter<number> = new EventEmitter<number>;

  ngOnInit(): void {
  }
  upLike():void{
    this.like++;
    this.likeChange.emit(this.like);
  }

}

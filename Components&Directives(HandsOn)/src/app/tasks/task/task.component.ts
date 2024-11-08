import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() id!: string;
  @Input() task!: string;
  @Input() summary!: string;
  @Input() date!: string;
  @Output() complete = new EventEmitter<string>();

  onHandleComplete() {
    this.complete.emit(this.id);
  }
}

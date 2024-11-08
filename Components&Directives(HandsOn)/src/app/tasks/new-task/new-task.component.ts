import { Component, EventEmitter, Output } from '@angular/core';
import { type newTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  title: string = '';
  summary: string = '';
  date: string = '';
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<newTask>();

  cancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.title,
      summary: this.summary,
      date: this.date
    })
  }
}

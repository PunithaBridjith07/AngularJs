import { Component, Input } from '@angular/core';
import { dummyTasks } from '../DUMMY_TASKS';
import { newTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() id!: string;
  @Input() name?: string;
  isAddingTask: boolean = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: newTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.onCancelTask();
  }
}

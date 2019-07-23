import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks: Array<Task> = [];
  public task: string = '';

  constructor(public navCtrl: NavController) {

  }

  public addTask(){
    if(this.task !== ''){
      let newTask: Task   = new Task();
      newTask.name        = this.task;
      newTask.isChecked   = false;
      this.tasks.push(newTask);
      this.task = '';
    }
  }

  public deleteTasks(){
    let newArrayTask: Array<Task> = [];
    for (let index = 0; index < this.tasks.length; index++) {
      const element = this.tasks[index];
      if(element.isChecked===false){
        newArrayTask.push(element);
      }
    }
    this.tasks = newArrayTask;
  }
}

export class Task{
  public name: string;
  public isChecked: boolean;
}

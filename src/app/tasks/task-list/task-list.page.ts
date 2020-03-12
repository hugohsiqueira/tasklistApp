import { TaskService } from "./../shared/task.service";
import { Component, OnInit } from "@angular/core";
import { Task } from "../shared/task";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.page.html",
  styleUrls: ["./task-list.page.scss"]
})
export class TaskListPage implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getAll();
  }
}

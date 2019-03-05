import { Component, OnInit } from '@angular/core';

  export class Todo{

    constructor(
      public discription : string,
      public targetDate : Date,
      public done : boolean
    ){}

  }

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos=[
    new Todo('I love India',new Date(),false),
    new Todo('I love Jadi',new Date(),false),
    new Todo('I love Ekta',new Date(),false)
]
  
  constructor() { }

  ngOnInit() {
  }

}

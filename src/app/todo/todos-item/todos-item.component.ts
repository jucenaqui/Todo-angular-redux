import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl } from '@angular/forms';
import { timeout } from 'q';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  txtInput: FormControl;
  chkField: FormControl;
  editando: boolean;

  @ViewChild('txtInputFisico') inputEdit: ElementRef;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto );

    this.chkField.valueChanges
      .subscribe( value => {

        const action = new ToggleTodoAction( this.todo.id );
        this.store.dispatch( action );

      });
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.inputEdit.nativeElement.select();
    }, 100);

  }

  terminarEdicion() {
    this.editando = false;

    if ( this.txtInput.invalid ){
      return;
    }

    if ( this.txtInput.value === this.todo.texto ){
      return;
    }

    const action = new EditarTodoAction( this.todo.id , this.txtInput.value.trim() );
    this.store.dispatch( action );

  }

  borrarTodo() {
    const action = new BorrarTodoAction( this.todo.id );
    this.store.dispatch( action );
  }

}

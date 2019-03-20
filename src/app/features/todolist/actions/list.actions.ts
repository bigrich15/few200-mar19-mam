import { Action}  from '@ngrx/store';
import { TodoEntity } from '../reducers/list';

let tempID = 999;

export const ITEM_ADDED = '[todoList] Item Added';

export class AddedTodoItem implements Action {
  readonly type = ITEM_ADDED;
  payload: TodoEntity;
  constructor(description: string) {

    this.payload= {
      id: 'T' + (tempID++),
      description

    };

   }


}


export type All = AddedTodoItem;
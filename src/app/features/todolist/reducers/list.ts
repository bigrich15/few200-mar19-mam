import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';



export interface TodoEntity {
  id: string;
  description: string;
}



export interface State extends EntityState<TodoEntity> {

}

export const adapter = createEntityAdapter<TodoEntity>();


const initialState: State = {
  ids: ['1', '2', '18'],
  entities: {
    1: { id: '1', description: 'Clean Deck' },
    2: { id: '2', description: 'Get Haircut' },
    18: { id: '18', description: 'Wash Van' }
  }

};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

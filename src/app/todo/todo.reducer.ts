import { Acciones, AGREGAR_TODO, TOGGLE_TODO, EDIT_TODO, REMOVE_TODO, TOGGLEALL_TODO,REMOVE_ALL_TODO } from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Matar Thanos')
const todo2 = new Todo('trabajos')
todo2.completado = true;
const estadoInicial: Todo[] = [
    todo1,
    todo2
];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {

    switch (action.type) {
        case AGREGAR_TODO:
            const todo = new Todo(action.texto);

            return [...state, todo]
            break;
        case TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            })
            break;
        case EDIT_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        text: action.text
                    }
                } else {
                    return todoEdit;
                }
            })
            break;
        case REMOVE_TODO:
            return state.filter(todoEdit=> todoEdit.id !== action.id)
            break;
        case REMOVE_ALL_TODO:
            return state.filter(todoEdit=> !todoEdit.completado)
            break;
        
        case TOGGLEALL_TODO:
            return state.map(todoEdit=>{
                return {
                    ...todoEdit,
                    completado:action.completado
                };
            })
            break;
        default:
            return state;
            break;
    }
}
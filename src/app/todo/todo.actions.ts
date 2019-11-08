import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[Todo] Agregar todo';
export const TOGGLE_TODO = '[Todo] TOGGLE todo';
export const EDIT_TODO = '[Todo] EDIT todo';
export const REMOVE_TODO = '[Todo] REMOVE todo';
export const TOGGLEALL_TODO = '[Todo] TOGGLE  ALL todo';
export const REMOVE_ALL_TODO = '[Todo] REMOVE ALL todo';

export class AgregartodoAction implements Action {
    readonly type = AGREGAR_TODO
    constructor( 
        public texto:string
    ){

    }
}
export class ToggletodoAction implements Action {
    readonly type = TOGGLE_TODO
    constructor( 
        public id:number
    ){

    }
}
export class EdittodoAction implements Action {
    readonly type = EDIT_TODO
    constructor( 
        public id:number,
        public text:string
    ){

    }
}
export class BorrartodoAction implements Action {
    readonly type = REMOVE_TODO
    constructor( 
        public id:number
        ){

    }
}
export class BorrarAlltodoAction implements Action {
    readonly type = REMOVE_ALL_TODO
}

export class ToggleAlltodoAction implements Action {
    readonly type = TOGGLEALL_TODO
    constructor( public completado:boolean){
    }
}



export type Acciones =  AgregartodoAction | ToggletodoAction |
                        EdittodoAction     |   BorrartodoAction |ToggleAlltodoAction |BorrarAlltodoAction;
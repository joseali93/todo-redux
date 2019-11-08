import * as FromFiltro from './filter.actions'


const estadoInicial:FromFiltro.filtrosValidos = 'todos'

export function filtroReducer(state=estadoInicial, 
    action : FromFiltro.AccionFilter):FromFiltro.filtrosValidos{

        switch (action.type) {
            case FromFiltro.SET_FILTRO:
                return action.filtro
                break;
        
            default:
                return state
                break;
        }

}
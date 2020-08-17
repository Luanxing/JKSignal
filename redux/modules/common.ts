import { handleActions, createAction } from 'redux-actions';

//actions
export const change = createAction('CHANGE');

//reducer

const JKState = handleActions(
    {
        [change.toString()]:(state:any,action: { payload: any; })=>({
            ...state,
            ...action.payload
        })
    },
    {
        JkName:'沙华'
    }
)

export const reducers = {
    JKState,
}
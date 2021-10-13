const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Sveta', id: 1},
        {name: 'Viktor', id: 2},
        {name: 'Lidiya', id: 3},
        {name: 'Maksim', id: 4},
        {name: 'Roma', id: 5},
        {name: 'Vitya', id: 6}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'GKSNJDGIL'}
    ],
}
const dialogReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newText}]
            };

        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})


export default dialogReduser;
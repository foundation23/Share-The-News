import profileReducer from "./ProfilePageReducer";
import dialogReduser from "./DialogPageReducer";


let store = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, post: 'OK'},
                {id: 2, post: 'Nice to Meet you'},
                {id: 3, post: 'My name is Maks'}
            ],
            friends: [
                {id: 1, name: "Sveta", logo: 'Sveta'},
                {id: 2, name: "Viktor", logo: './Viktor.jpg'},
                {id: 3, name: "Lidiya", logo: './Lidiya.jpg'},
                {id: 4, name: "Maksim", logo: './Maksim.jpg'},
                {id: 5, name: "Roma", logo: './Roma.jpg'},
                {id: 6, name: "Vitya", logo: './Vitya.jpg'},
                {id: 7, name: "Nataly", logo: './Nataly.jpg'},
                {id: 8, name: "Alex", logo: './Alex.jpg'}
            ],
            newPostText: 'dfeqafasd'
        },
        DialogPage: {
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
            newMessageText: 'uagishudfhsjka'
        },
        UsersPage: {
            friends: [
                {id: 1, name: "Sveta", logo: 'Sveta'},
                {id: 2, name: "Viktor", logo: './Viktor.jpg'},
                {id: 3, name: "Lidiya", logo: './Lidiya.jpg'},
                {id: 4, name: "Maksim", logo: './Maksim.jpg'},
                {id: 5, name: "Roma", logo: './Roma.jpg'},
                {id: 6, name: "Vitya", logo: './Vitya.jpg'},
                {id: 7, name: "Nataly", logo: './Nataly.jpg'},
                {id: 8, name: "Alex", logo: './Alex.jpg'}
            ],
            users: []
        },
        SideBar: {}
    },
    _callSubscriber() {
        console.log('SDCFsdfc');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogPage = dialogReduser(this._state.DialogPage, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;


export default store;
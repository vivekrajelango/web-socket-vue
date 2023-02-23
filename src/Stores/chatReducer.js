import {defineStore} from 'pinia'

export const useChatStore=defineStore({
    id: 'chat',
    state:()=>({
        chatItems: []
    }),
    actions:{
        addItems(payload){
            this.chatItems.push(payload);
        },
        clearItems(){
            this.chatItems = [];
        }
    }
})

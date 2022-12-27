import { myAxios } from "./Helper";

const signUp = (user) => {
    return myAxios.post('/')
}
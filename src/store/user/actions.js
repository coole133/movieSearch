import  { NEW_USER, QUIT_USER } from "./consts";

export const addUser = (user) => {
    return {
        type: NEW_USER,
        payload: user
    }
}
export const quitUser = (user) => {
    return {
        type: QUIT_USER,
        payload: user
    }
}
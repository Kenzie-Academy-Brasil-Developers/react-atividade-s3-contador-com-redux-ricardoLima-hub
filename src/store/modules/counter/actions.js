export const addNumber = (payload) => {
    return {
        type: "ADD_NUMBER",
        payload
    }
}

export const subNumber = (payload) => {
    return {
        type: "SUB_NUMBER",
        payload
    }
}
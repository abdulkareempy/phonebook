export const addContact = (payload) => {
    return {
        type: "ADD_CONTACT",
        payload: payload,
    };
};

export const toggleFav = (payload) => {
    return {
        type: "TOGGLE_FAV",
        payload: payload,
    };
};

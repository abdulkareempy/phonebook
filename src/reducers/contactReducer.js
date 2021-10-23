const contactReducer = (
    state = [
        {
            id: 1,
            firstName: "Mohd",
            lastName: "Nanu",
            isFav: true,
        },
        {
            id: 2,
            firstName: "Nishant",
            lastName: "Chahar",
            isFav: true,
        },
        {
            id: 3,
            firstName: "Sheroz",
            lastName: "Shah",
            isFav: false,
        },
    ],
    action
) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return state;
        case "TOGGLE_FAV":
            let newState = [...state];
            newState.forEach(ele=>{
                if(ele.id === action.payload.id){
                    ele.isFav = !ele.isFav;
                }
            })
            return newState;

        default:
            return state;
    }
};

export default contactReducer;

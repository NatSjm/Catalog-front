const products = (state = [], action) => {
    switch (action.type) {
        case 'products':
            return [
                ...state,
                ...action.payload()
            ];
        case 'firstTimeProducts':
            return [
                ...action.payload()
            ];
        default:
            return state;
    }
};

export default products;

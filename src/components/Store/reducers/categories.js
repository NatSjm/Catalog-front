
const categories = (state = [], action) => {
    return action.type === 'categories'
    ? action.payload()
        : state;
};

export default categories;

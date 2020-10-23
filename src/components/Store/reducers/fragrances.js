
const categories = (state = [], action) => {
    return action.type === 'fragrances'
    ? action.payload()
        : state;
};

export default categories;

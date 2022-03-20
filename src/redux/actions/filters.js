const setSortBy = (name) => {
     ({
        type: 'SET_SORT_BY',
        payload: name,
    })
}

function setCategory(catIndex) {
    return ({
        type: 'SET_CATEGORY',
        payload: catIndex,
    })
} 
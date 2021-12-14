//add to reading list 
export const addToReadingList = (payload) => {
    return {
        type: 'ADD_TO_READING_LIST',
        payload
    }
}

//remove to reading list 
export const removeToReadingList = (payload) => {
    return {
        type: 'REMOVE_TO_READING_LIST',
        payload
    }
}

//finished reading
export const addToFinishedList = (payload) => {
    return {
        type: 'ADD_TO_FINISHED_LIST',
        payload,
    }
}
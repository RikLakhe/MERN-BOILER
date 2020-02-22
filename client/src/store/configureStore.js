import configureStoreProd from './configProStore'
import configureStoreDev from './configDevStore'

const configureStore = (initialState = {}, history) => {
    return process.env.NODE_ENV === 'production'
        ? configureStoreProd(initialState, history)
        : configureStoreDev(initialState, history);
};

export default configureStore;
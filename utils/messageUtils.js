/**
 * Get the error message from error object
 */

const errorHandler = error => {
    let message = '';
    switch (error.code) {
        case 11000:
        case 11001:
            message = uniqueValueError(error);
            break;
        default:
            message = 'Something went wrong';
    }

    return {type: 'error', message: message};
};

/**
 * Get unique error field name
 */
const uniqueValueError = error => {
    return `Submitted ${Object.keys(error.keyValue)[0]} already exist.`
};

module.exports = {errorHandler};
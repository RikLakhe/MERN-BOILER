import { HTTP_404_ERROR, HTTP_500_ERROR } from '../constants/actionTypes';

export const http404Error = error => {
    return {
        type: HTTP_404_ERROR,
        error,
    };
};

export const http500Error = error => {
    return {
        type: HTTP_500_ERROR,
        error,
    };
};

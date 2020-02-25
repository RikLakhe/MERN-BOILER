const appConfig = {
    projectName: 'LAKHEMERN',
    projectDate: 2020,
    projectOwn: 'RIKLAKHE',
    projectLinked: 'https://www.linkedin.com/in/rikesh-lal-shrestha-55b063132/',
    projectKey: process.env.REACT_APP_ENCODE_SECRET || 'apple',
};

const production = window.location.origin;
const development = `${process.env.REACT_APP_REST_API_HOST}` || 'http://localhost:3003';

export const API_URL = (process.env.NODE_ENV==='production'? production : development);

// localstorage name
export const MERN_TOKEN = 'MERN-TOKEN';
export const MERN_PERMISSION = 'MERN-PERMISSION';

export default appConfig;
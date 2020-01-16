const config ={
    port : process.env.APP_SERVER_PORT || "3002",
    headers:{ 'content-type': 'application/json' },
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    dbName: 'blog-post',
};

export default config;
import http from "http";

const config ={
    port : process.env.APP_SERVER_PORT || "3002",
    headers:{ 'content-type': 'application/json' },
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    dbName: 'blog-post',
};

export const openServer = (app) => {
    const server = http.createServer(app);

    server
        .listen(config.port, () => {
            console.log(`Server running at port : http://localhost:${server.address().port}/`);
        })
        .on('error', (err) => {
            {
                if (err.code === 'EADDRINUSE') {
                    openServer(app,Number(config.port) + 1);
                }
            }
        })
};

export default config;
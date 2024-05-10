const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Simulate asynchronous operation with random delay
    const delay = Math.random() * 1000; // Random delay between 0 and 1000 milliseconds
    setTimeout(() => {
        // Respond with information about the user's CPU and OS
        const userInfo = {
            cpuArchitecture: os.arch(),
            totalMemory: os.totalmem(),
            freeMemory: os.freemem(),
            platform: os.platform(),
            release: os.release(),
            type: os.type(),
            uptime: os.uptime(),
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(userInfo));
    }, delay);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

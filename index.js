const express = require('express');
const app = express();
const RoutingTestModule = require('./features/routing/routing-test');
app.use('/routingmodule', RoutingTestModule);
app.get('/', function testFunc(req, res) {
    res.end(() => {
        console.log(req.route);
    })
});

app.get('/test', (req, res) => {
    console.log(`test route received`)
    res.end();
});

const port = 3001;
app.listen(port, () => {
    console.log(`Express Test App is listening on port ${port}`);
})
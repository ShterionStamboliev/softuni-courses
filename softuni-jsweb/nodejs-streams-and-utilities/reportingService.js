const eventBus = require('./eventBus');

const collector = (data) => {
    console.log(('Reporting service - ' + data.method));
};

eventBus.subscribe('request', collector);
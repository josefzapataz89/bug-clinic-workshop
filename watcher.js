'use strict'

module.exports = {
    local : function (traces) {
        console.error('up');
        let count = 0;

        traces.on("request:start", function (trace) {
            console.log(trace.url);
        });

        traces.on("request:end", function (trace) {
            count++;
            console.error(trace.statusCode);
            if(count===2)
                process.exit(0)
        });
    }
};

const superagent = require("superagent");

module.exports = (remoteUrl, callback) => {
    const superagentCallback = (err, resp) => {
        if (err) {
            return callback(err);
        } else if (resp.ok) {
            return callback(null, resp.text);
        }
        return callback(new Error(`GET ${remoteUrl} ${resp.status}`));
    };

    superagent.get(remoteUrl).buffer().end(superagentCallback);
};

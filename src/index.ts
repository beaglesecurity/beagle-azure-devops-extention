import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const app_key: string | undefined = tl.getInput('application_key', true);
        const access_key: string | undefined = tl.getInput('access_key', true);
        var request = require("request")
        var requestData = {
            "access_token": access_key,
            "application_token": app_key 
        }
        var api = "https://api.beaglesecurity.com/v1/test/start";
        request({
            url: api,
            method: "POST",
            json: requestData
        }, function (error: string, response: { statusCode: string | number; statusText: string; }, body: any) {
            if (!error && response.statusCode === 200) {
                console.log(body)
            }
            else {
                console.log("response.statusCode: " + response.statusCode)
                console.log("response.statusText: " + response.statusText)
            }
        });
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();

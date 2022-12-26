import tl = require('azure-pipelines-task-lib/task');


async function run() {
    try {
        const app_key: string | undefined = tl.getInput('applicationkey', true);
        const access_key: string | undefined = tl.getInput('accesskey', true);
        var request = require("request");
        var requestData = {
            "applicationToken": app_key
        }
        var api = "https://api.beaglesecurity.com/rest/v2/test/start/";
        request({
            url: api,
            method: "POST",
            json: requestData,
            headers: {
                'Authorization': "Bearer "+access_key
            }
        }, 
        function (error: string, response: { statusCode: string | number; statusText: string; }, body: any) {
            if (!error && response.statusCode === 200) {
                console.log(body)
            }
            else {
                console.log(body)
            }
        });
    }
    catch (err) {
         tl.setResult(tl.TaskResult.Failed, (err as Error).message);
    }
}

run();

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app_key = tl.getInput('a', true);
            const access_key = tl.getInput('b', true);
            var request = require("request");
            var requestData = {
                "access_token": access_key,
                "application_token": app_key
            };
            // var api = "https://api.beaglesecurity.com/v1/test/start";
            var api = "https://beagle-tvm-api.appfabs.com/v1/test/start";
            request({
                url: api,
                method: "POST",
                json: requestData
            }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log(body);
                }
                else {
                    console.log("response.statusCode: " + response.statusCode);
                    console.log("response.statusText: " + response.statusText);
                }
            });
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();

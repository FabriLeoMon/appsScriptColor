import "../lib/__webComponents";
// webComponents import MUST BE FIRST
import { NavigationDetection, NavigationEvent } from "../lib/feature-detection";
import { MonacoSetup } from "../lib/setup";

NavigationDetection.init({
    [NavigationEvent.SCRIPT_OPEN]: ({ scriptKey }) =>
        MonacoSetup.init(scriptKey),
    [NavigationEvent.SCRIPT_CLOSE]: () => MonacoSetup.destroy(),
});

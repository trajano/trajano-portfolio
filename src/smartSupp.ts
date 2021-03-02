/**
 * Smartsupp Live Chat script
 */
import $script from "scriptjs";
import store from "./store";

function smartSupp(clientKey) {
  global._smartsupp = global._smartsupp || {};
  global._smartsupp.key = clientKey;

  $script("//www.smartsuppchat.com/loader.js", () => {
    global.smartsupp("on", "status", status => {
      if (status === "online") {
        store.dispatch("smartSuppOnline");
      } else {
        store.dispatch("smartSuppOffline");
      }
    });
  });
}
export default smartSupp;

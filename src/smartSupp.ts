/**
 * Smartsupp Live Chat script
 */
import $script from "scriptjs";
import store from "./store";

function smartSupp(clientKey: string) {
  (window as any)._smartsupp = (window as any)._smartsupp || {};
  (window as any)._smartsupp.key = clientKey;

  $script("//www.smartsuppchat.com/loader.js", () => {
    (window as any).smartsupp("on", "status", (status: string) => {
      if (status === "online") {
        store.dispatch("smartSuppOnline");
      } else {
        store.dispatch("smartSuppOffline");
      }
    });
  });
}
export default smartSupp;

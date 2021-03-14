import Vue from "vue";

function deobfuscate(e: string) {
  return e
    .replace("...", "@")
    .replace(/\.\.\./g, ".")
    .replace(/One/g, "1")
    .replace(/Two/g, "2")
    .replace(/Three/g, "3")
    .replace(/Four/g, "4")
    .replace(/Five/g, "5")
    .replace(/Six/g, "6")
    .replace(/Seven/g, "7")
    .replace(/Eight/g, "8")
    .replace(/Nine/g, "9")
    .replace(/Zero/g, "0");
}

Vue.directive("deobfuscate", {
  inserted(el) {
    // if (!global.__PRERENDER_INJECTED) {
    /* Deobfuscate mailto and tel links */
    el.innerHTML = deobfuscate(el.innerHTML);
    if (el.hasAttribute("href")) {
      (el as HTMLAnchorElement).href = deobfuscate(
        (el as HTMLAnchorElement).href
      );
    }
    // }
  }
});

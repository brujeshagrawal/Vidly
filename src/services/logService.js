import Raven from "raven-js";

function init() {
  Raven.config("https://70542b6779e84dfaad2b31825f931fe0@sentry.io/3716589", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};

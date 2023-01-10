// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import configs from "../../apps/shell/configs.json";

export const APP_PORT = configs.appPort;
export const APP_BASE_URL = `http://localhost:${APP_PORT}`;

import { APP_PORT, APP_HOST } from "./common/constant";
import HttpConnection from "./connections/HttpConnection";
import App from "./app";

const httpConnection = new HttpConnection(APP_HOST, APP_PORT);
const app = new App();

app.addConnection(HttpConnection.CONNECTION_NAME, httpConnection);
app.run();

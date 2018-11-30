import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import * as reactLoadable from 'react-loadable';
import { log } from 'util';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "../public")));


reactLoadable.preloadAll().then(() => {
    app.listen(PORT, () => log(`App is listening on port ${PORT}`))
});

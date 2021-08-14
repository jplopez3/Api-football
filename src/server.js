import App from './loaders/app.js';
import Logger from './loaders/winston.js';

const PORT = process.env.PORT || 5000;
const outscoreApp = new App().app;
export default () => {
	try {
		outscoreApp.listen(PORT, () => {
			Logger.warn('Server Listening on port: %s', PORT);
		});
	} catch (error) {
		Logger.error('Error at server start: %0', error);
	}
};

const isLiveGame = (fixture) => {
	const liveStatus = ['1H', 'HT', '2H', 'ET', 'P', 'BT'];
	return liveStatus.includes(fixture.status.short);
};

const hasGameEnded = (fixture) => {
	const FIXTURE_IS_FINISHED_STATUS = ['FT', 'AET', 'PEN'];
	return FIXTURE_IS_FINISHED_STATUS.includes(fixture.status.short);
};

const gameNotStarted = (fixture) => {
	const notStartedStatus = ['NS', 'SUSP', 'INT', 'CANC', 'ABD'];
	return notStartedStatus.includes(fixture.status.short);
};

const isTodayDate = (date, timeZone = 'UTC') => {
	const today = new Date();
	date = new Date(date);
	date.toLocaleString('pt-PT', { timeZone });

	return (
		date.getDate() == today.getDate() &&
		date.getMonth() == today.getMonth() &&
		date.getFullYear() == today.getFullYear()
	);
};

const secondsUntilDate = (date) => {
	const now = new Date();

	return Math.round((date - now) / 1000);
};

const nextDayDate = (date) => {
	const nextDay = new Date(date);
	nextDay.setDate(nextDay.getDate() + 1);
	nextDay.setHours(0);
	nextDay.setMinutes(0);

	return nextDay;
};

const isValidDate = (date) => {
	return isNaN(Date.parse(date));
};

const isDateInPast = (date) => {
	const now = new Date();
	const dateToCompare = new Date(date);
	return dateToCompare < now;
};

const isDateInFuture = (date) => {
	const now = new Date();
	const dateToCompare = new Date(date);
	return dateToCompare.getDate() != now.getDate() && dateToCompare > now;
};

export {
	hasGameEnded,
	isValidDate,
	isTodayDate,
	isDateInFuture,
	isDateInPast,
	secondsUntilDate,
	nextDayDate,
	isLiveGame,
	gameNotStarted,
};

//FixturesUtils
/** isLive()
 *  isToday()
 *  getStartDate()
 *
 */

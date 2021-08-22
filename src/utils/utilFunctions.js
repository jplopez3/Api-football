const isLiveGame = (fixture) => {
	const liveStatus = ['1H', 'HT', '2H', 'ET', 'P', 'BT'];
	return liveStatus.includes(fixture.status.short);
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

export { isLiveGame, isTodayDate, secondsUntilDate };

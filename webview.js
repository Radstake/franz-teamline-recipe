module.exports = (Franz) => {
	const getTeamLineUserTasks = function getTeamLineUserTasks() {
		const count = parseInt(document.querySelectorAll('.counter')[0].innerHTML, 10);
		Franz.setBadge(count);
	};
  Franz.loop(getTeamLineUserTasks);
};
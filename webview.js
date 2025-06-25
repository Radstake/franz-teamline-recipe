module.exports = Franz => {
  const getTeamLineUserTasks = function getTeamLineUserTasks() {
    const counterElement = document.querySelector('.counter');
    let count = 0;

    if (counterElement) {
      const match = counterElement.textContent.match(/\d+/);
      if (match) {
        count = parseInt(match[0], 10);
      }
    }

    Franz.setBadge(count);
  };

  Franz.loop(getTeamLineUserTasks);
};

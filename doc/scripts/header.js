const domReady = function (callback) {
	const state = document.readyState;
	if (state === 'interactive' || state === 'complete') {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', callback);
	}
};

domReady(function () {
	const projectname = document.createElement('a');
	projectname.classList.add('project-name');
	projectname.text = 'collection-abstraction/set';
	projectname.href = './index.html';

	const header = document.querySelector('header');
	header.insertBefore(projectname, header.firstChild);

	const testlink = document.querySelector('header > a[data-ice="testLink"]');
	testlink.href = 'https://app.codecov.io/gh/collection-abstraction/set';
	testlink.target = '_BLANK';

	const searchBox = document.querySelector('.search-box');
	const input = document.querySelector('.search-input');

	// Active search box when focus on searchBox.
	input.addEventListener('focus', function () {
		searchBox.classList.add('active');
	});
});

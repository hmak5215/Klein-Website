function toggleHidden(toggle, button) {
	var element = toggle;
	element.classList.toggle('hidden');

	if (button.classList.contains('expanded')) {
		button.classList.remove('expanded');
	} else {
		button.classList.add('expanded');
	}
}

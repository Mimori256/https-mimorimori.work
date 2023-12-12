const createOutputFromSections = (sections: string[][]): string => {
	let output = '';
	sections.forEach((section) => {
		section.forEach((line) => {
			output += line + '\r\n';
		});
	});

	return output;
};

const addHeader = (text: string): string => {
	const splited_text = text.split('\n');
	let sections: Array<string[]> = [];
	let tmpSection: string[] = [];
	let isInContent = false;
	splited_text.forEach((line) => {
		if (line.startsWith('#') && !isInContent) {
			isInContent = true;
			tmpSection.push(line);
		} else if (line.startsWith('#') && isInContent) {
			sections.push(tmpSection);
			tmpSection = [];
			tmpSection.push(line);
		} else {
			tmpSection.push(line);
		}
	});
	sections.push(tmpSection);

	// Find the index section
	let isAfterIndex = false;
	let indexIndex = 0;
	let divCount = 1;
	let startDiv = '';
	let headers = [];

	for (let i = 0; i < sections.length; i++) {
		if (sections[i][0].includes('目次')) {
			isAfterIndex = true;
			indexIndex = i;
			continue;
		}
		if (isAfterIndex) {
			headers.push(sections[i][0].replace(/#/g, '').trim());
			startDiv = `<div id="anchor${divCount}">`;
			sections[i].unshift('');
			sections[i].unshift(startDiv);
			sections[i].push('</div>');
			sections[i].push('');
			divCount++;
		}
	}

	for (let i = 0; i < headers.length; i++) {
		let header = `${i + 1}. [${headers[i]}](#anchor${i + 1})`;
		sections[indexIndex].push(header);
	}

	sections[indexIndex].push('');

	return createOutputFromSections(sections);
};

export default addHeader;

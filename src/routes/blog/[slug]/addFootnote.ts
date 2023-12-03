const splitMarkdown = (markdown: string) => {
	const lines = markdown.split('\r\n');
	if (lines.length < 2) {
		return markdown.split('\n');
	}
	return lines;
};

const findFootnotes = (markdown: string) => {
	const lines = splitMarkdown(markdown);
	const footnoteRegex = /=footnote=\((.*?)\)/g;
	let newMarkdown: string[] = [];
	let footnoteCount = 1;
	let footnotes: string[] = [];
	lines.forEach((line) => {
		const match = footnoteRegex.exec(line);
		if (match) {
			const footnote = match[1];
			footnotes.push(footnote);
			line = line.replace(
				match[0],
				`<span id='reference${footnoteCount}'>[${footnoteCount}](#footnote${footnoteCount})</span>`
			);
			footnoteCount++;
		}
		newMarkdown.push(line);
	});
	return { markdown: newMarkdown.join('\r\n'), footnotes: footnotes };
};

const addFootnote = (markdownContent: string) => {
	let { markdown, footnotes } = findFootnotes(markdownContent);

	if (footnotes.length === 0) {
		return markdown;
	}

	let footnoteSection = '### 脚注\r\n';

	for (let i = 0; i < footnotes.length; i++) {
		footnoteSection += `<div id="footnote${i + 1}">\r\n\r\n`;
		footnoteSection += `${i + 1}. ${footnotes[i]} [↵](#reference${i + 1})\r\n\r\n`;
		footnoteSection += `</div>\r\n\r\n`;
	}

	markdown += '\r\n\r\n' + footnoteSection;
	return markdown;
};

export default addFootnote;

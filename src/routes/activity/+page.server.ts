import axios from 'axios';

const username = 'Mimori256';
const GitHubToken = process.env.GH_TOKEN;
const credentials = Buffer.from(`${username}:${GitHubToken}`).toString('base64');
const authHeader = `Basic ${credentials}`;

export async function load() {
	const url = 'https://raw.githubusercontent.com/Mimori256/fetch-git-stats/main/data.json';
	const response = await axios.get(url, {
		headers: {
			Authorization: authHeader
		}
	});
	return { langData: response.data as Record<string, number> };
}

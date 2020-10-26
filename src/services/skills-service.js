export default class SkillsService {
	_apiBase = '/api/skills.json';

	async getSkills() {
		const response = await fetch(this._apiBase);

		if (!response.ok) {
			throw new Error(`Could not fetch ${this._apiBase}, received ${response.status}`);
		}

		return await response.json();
	}
}

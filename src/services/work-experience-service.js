export default class WorkExperienceService {
	_apiBase = '/api/work-experience.json';

	async getWorkExperiences() {
		const response = await fetch(this._apiBase);

		if (!response.ok) {
			throw new Error(`Could not fetch ${this._apiBase}, received ${response.status}`);
		}

		return await response.json();
	}
}

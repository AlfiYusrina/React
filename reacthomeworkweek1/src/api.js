class API {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    fetchList() {
        return fetch(`${this.baseUrl}/api/list`, {
            method: 'GET',
            mode: 'cors'
        }).then(response => response.json());;
    }
}

// Normally we make this configurable in a .env file or in config.json object somewhere
export default new API('http://localhost:3003');

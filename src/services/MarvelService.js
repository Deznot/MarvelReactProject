class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = "apikey=d24cd74b8f784e74321942586e80d036";
    
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacterData);
    }

    getCharacter = async (id) => {
        let res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);
        return this._transformCharacterData(res.data.results[0]);
    }

    _transformCharacterData = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'Data about character is not found',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;
import useHttp from "../components/hooks/http.hooks";

const useMarvelService = () => {
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = "apikey=d24cd74b8f784e74321942586e80d036";
    const _apiCharOffset = 0;
    const { loading, request, error, clearError } = useHttp();

    const getAllCharacters = async (charOffset = _apiCharOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${charOffset}&${_apiKey}`);
        return res.data.results.map(_transformCharacterData);
    }

    const getCharacter = async (id) => {
        let res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);
        return _transformCharacterData(res.data.results[0]);
    }

    const getAllComics = async (ComicsOffset = 0) => {
        let res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${ComicsOffset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformCharacterData = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'Data about character is not found',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || "There is no description",
            pageCount: comics.pageCount
                ? `${comics.pageCount} p.`
                : "No information about the number of pages",
            thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
            language: comics.textObjects[0]?.language || "en-us",
            price: comics.prices[0].price
                ? `${comics.prices[0].price}$`
                : "not available",
        };
    }

    return {
        loading,
        request,
        error,
        clearError,
        getAllCharacters,
        getCharacter,
        getAllComics,
        getComics
    }
}

export default useMarvelService;
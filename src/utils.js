export const fetchData = (currentUrl) => {
    const baseUrl = 'https://api.themoviedb.org/3/';

    return fetch(`${baseUrl}${currentUrl}`)
        .then(res => res.json());
}
export function getUser(url) {
    return fetch(url)
    .then(response => response.json()).then(data => data);
}

export const GITHUB_API = 'https://api.github.com';

export const request = (path) => {
    return Promise
    .resolve()
    .then(() => fetch(GITHUB_API + path))
    .then(res => res.json())
};

export const repos = user => {
    return request(`/users/${user}/repos`);
};
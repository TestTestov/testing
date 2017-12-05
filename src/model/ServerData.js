//Server data
export let root = 'https://jsonplaceholder.typicode.com';
export let dataArray = function () {
    return fetch(root + '/users')
        .then(function (data) {
            return data.json();
        })
}
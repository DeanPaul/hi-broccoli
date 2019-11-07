export const sendInviteService = (name, email) => {
    let url = 'http://127.0.0.1:8703/api/prod/fake-auth';
    let fetchParams = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name ,email}),
    };
    return fetch(url, fetchParams).then(response =>response.json());
};
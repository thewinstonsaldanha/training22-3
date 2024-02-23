
function getUser() {
    fetch('http://localhost:8085/postbook/webapi/twitter/tweets/getAllTweet')
        .then(resp => resp.json())
        .then(data => console.log(data))
}
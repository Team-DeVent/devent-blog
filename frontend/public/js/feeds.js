
async function getSendFeed(idx) {

    let response = await fetch("/api/feeds/"+idx, {
        method: "GET"
    });

    let data = response.json();
    return data;
}

async function getFeed(idx) {
    let data = await getSendFeed(idx)
    
    console.log(data)
}


async function getSendFeedRange(start) {

    let response = await fetch(`/api/feeds?start=${start}`, {
        method: "GET",
        headers: {
            "x-access-token": getToken('user')
        },
    });

    let data = response.json();
    return data;
}

async function getFeedRange(start) {
    let data = await getSendFeedRange(start)
    return data
}


async function insertSendFeed({title, intro, content, tags, image, article}) {

    let response = await fetch("/api/feeds", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-access-token": getToken('user')

        },
        body: `title=${title}&intro=${intro}&content=${content}&tags=${tags}&image=${image}&article=${article}`

    });

    let data = response.json();
    return data;
}

async function insertFeed(content) {
    let data = await insertSendFeed(content)
    
    return data
}

async function deleteSendFeed(idx) {

    let response = await fetch("/api/feeds/"+idx, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-access-token": getToken('user')
        }

    });

    let data = response.json();
    return data;
}

async function deleteFeed(idx) {
    let data = await deleteSendFeed(idx)
    
    console.log(data)
}

async function updateSendFeed(idx, content) {

    let response = await fetch("/api/feeds/"+idx, {
        method: "PUT",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-access-token": getToken('user')
        },
        body :`content=${content}`
    });

    let data = response.json();
    return data;
}

async function updateFeed(idx, content) {
    let data = await updateSendFeed(idx, content)
    
    console.log(data)
}

async function controlFeedDate(date) {
    let result = date.split('.').slice(0,3).join('. ')
    
    return result
}


async function getArticle(idx) {
    let response = await fetch("/api/articles/"+idx, {
        method: "GET"
    });

    let data = response.json();
    return data;
}

async function getArticles(start) {
    let response = await fetch(`/api/articles?start=${start}`, {
        method: "GET"
    });

    let data = response.json();
    return data;
}

async function getFeedsFromArticleIdx(article_idx) {
    let response = await fetch(`/api/feeds/article/${article_idx}`, {
        method: "GET"
    });

    let data = response.json();
    return data;
}

async function getFeedsInformation(article_idx) {
    let response = await fetch(`/api/feeds/info/database`, {
        method: "GET"
    });

    let data = response.json();
    return data;
}
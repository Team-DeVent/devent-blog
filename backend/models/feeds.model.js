import conn from '../databases/db.js'

export async function getFeedsRange(range) {
    try {
        let { start, end } = range;

        let selectFeeds = `SELECT 
        idx, 
        feed_title,
        feed_intro,
        feed_tag,
        feed_date,
        feed_owner,
        feed_article,
        feed_image
        FROM feeds WHERE idx BETWEEN ? AND ? ORDER BY idx DESC`;
        const data = await new Promise((resolve, reject) => {
            conn.query(selectFeeds, [start, end], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve({status:1, result:result})
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function getFeedData(idx) {
    try {
        let selectFeed = "SELECT * FROM feeds WHERE idx = ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(selectFeed, [idx], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve(result)
            });
        })

        return data

    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function insertFeedData(insertData) {
    try {
        let { title, intro, content, tags, date, owner, article, image } = insertData;
        let insertFeeds = `INSERT INTO 
        feeds(feed_title, feed_intro, feed_content, feed_tag, feed_date, feed_owner, feed_article, feed_image) 
        VALUES (?,?,?,?,?,?,?,?);`;
        const data = await new Promise((resolve, reject) => {
            conn.query(insertFeeds, [title, intro, content, tags, date, owner, article, image ], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve({status:1})
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function deleteFeedData(check) {
    try {
        let { feed_idx, owner } = check;
        let deleteFeeds = "DELETE FROM feeds WHERE idx = ? AND feed_owner = ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(deleteFeeds, [feed_idx, owner], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                if (result.affectedRows >= 1) {
                    resolve({status:1})

                } else {
                    resolve({status:0})

                }
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function updateFeedData(updateData) {
    try {
        let { feed_update_idx, feed_update_content, owner } = updateData;
        let updateFeeds = "UPDATE feeds SET feed_content = ? WHERE idx = ? AND feed_owner = ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(updateFeeds, [feed_update_content, feed_update_idx, owner], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                if (result.affectedRows >= 1) {
                    resolve({status:1})

                } else {
                    resolve({status:0})

                }
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function getFeedsInsideArticle(article_idx) {
    try {
        let selectFeedsFromArticle = "SELECT * FROM feeds WHERE feed_article = ?";
        const data = await new Promise((resolve, reject) => {
            conn.query(selectFeedsFromArticle, [article_idx], function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve({status:1, result:result})
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export async function getFeedsInformation() {
    try {
        let selectFeedsInformation = `SELECT 
        count(*) as feed_count,
        MAX(idx) as feed_last_idx
        FROM feeds`;
        const data = await new Promise((resolve, reject) => {
            conn.query(selectFeedsInformation, function(err, result) {
                if (err) {
                    resolve({status:0})
                }
                resolve({status:1, result:result})
            });
        })

        return data
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

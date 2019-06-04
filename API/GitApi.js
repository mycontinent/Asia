var express = require('express');
var router = express.Router();
var http = require('https');
var identifiers = require('../Constant');
var attributes = require('../gitAttributes')

const url = identifiers.url;

var result = '';
router.get('/reviews', function (req, res) {
    var options = {
        method: "GET",
        headers: {
            "Authorization": identifiers.Authorization,
            "User-Agent": identifiers.UserAgent,
            "Host": identifiers.Host
        }
    };

    http.get(url, options, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            result = JSON.parse(body);
        })
    }).end();
    var reviews = [];

    if (result) {
        result.map((review) => {
            reviews.push({
                reviewComments: review.body,
                reviewId: review.pull_request_review_id,
                createdDate: review.created_at,
                modifiedDate: review.updated_at,
                codeSnippet: review.diff_hunk
            })
        })
    }
    res.status(200).send(reviews);
})

module.exports = router;
var express = require('express');
var router = express.Router();
const dbConfig = require('../util/dbconfig')

/* GET home page. */
router.get('/', function(req, res, next) {
    let sql = 'select * from cate';
    let sqlArr = [];
    let callBack = (err, data) => {
        if (err) {
            console.log('连接失败：', err);
        } else {
            res.send({ 'list': data });
        }
    }

    dbConfig.sqlConnect(sql, sqlArr, callBack);
    // res.render('index', { title: 'Express' });
});

module.exports = router;
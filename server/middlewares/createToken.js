// 创建 token
var jwt = require('jsonwebtoken')

module.exports = function(us) {
    const token = jwt.sign({
            us: us
        },
        'secret', {
            expiresIn: '10s' // 测试时长
        });

    return token;
}
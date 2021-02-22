import Mock from 'mockjs';
var Random = Mock.Random;
Random.email()
Random.extend({
    password:['1234','12345','1223456','34567','wsdeg','aswrt','4r45qf3','2d4hswg']
})
Mock.mock('/user',{
    'email':'@EMAIL',
});
Mock.mock('/password',{
    'password':'@password'
})
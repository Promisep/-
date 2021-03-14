import Mock from 'mockjs';
var Random = Mock.Random;
Random.email()
Random.extend({
    password:['1234','12345','1223456','34567','wsdeg','aswrt','4r45qf3','2d4hswg']
})
Random.extend({
    recommend:['好用，好看','erivliqp','ajneiubntroq209584',
    'nciwh3vhdoqo9r[vnri','xnjahfuewv;sbe','xnsqobow','那次是环卫工被日拍摄怒大V不饿哦不理人提供而那里去回复如不了'],
    url:['']
})
Mock.mock('/user',{
    'email':'@EMAIL',
});
Mock.mock('/password',{
    'password':'@password'
})
Mock.mock('/recommend',{
    'recommend':'@recommend'
})
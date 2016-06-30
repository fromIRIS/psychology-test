var ip = require('ip');
var log = require('npmlog');
var ipAdress = ip.address();

log.info('傻逼楠', '你的心里测试网址是: %j', ipAdress + ':3000');

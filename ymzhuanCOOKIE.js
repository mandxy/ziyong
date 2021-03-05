//独立COOKIE文件     ck在``里面填写，多账号换行

let  ymzhuanspbodyVal= `sign=3350b6bb11503a152ae29abce4554961&channelID=2&taskid=2&type=2&uid=10299&ver=104
sign=c544fcd9a4e847571659c115f1a069fd&channelID=2&taskid=2&type=2&uid=9470&ver=102
sign=4dc468a78efed258c708e929fc672e2c&channelID=2&taskid=2&type=2&uid=9617&ver=102`



let ymzhuanggbodyVal = `sign=3e67b741986b8fd8cdac05ea58186835&channelID=2&taskid=1&type=1&uid=10299&ver=104
sign=339073a5afb50c9c061bc5c429f4b712&channelID=2&taskid=1&type=1&uid=9470&ver=102
sign=dbc3ab51fc1b04e1024c8bbfa3321e53&channelID=2&taskid=1&type=1&uid=9617&ver=102`
let ymzhuantxbodyVal = `
sign=fd6ff75aeeabb79a02ee1fecbeed7027&account=18713271505&cellphone=&channelID=2&code=&money=3&name=%E9%82%93%E6%B9%98%E4%BE%9D&timestamp=1614905938252&type=2&uid=9470&ver=104
sign=f0127e512e009e3c83c009cac23da0b6&account=17573881215&cellphone=&channelID=2&code=&money=3&name=%E9%82%93%E6%B9%98%E6%97%BA&timestamp=1614905804262&type=2&uid=9617&ver=104`

let ymzhuancookie = {	 

    ymzhuanggbodyVal: ymzhuanggbodyVal,
    ymzhuanspbodyVal: ymzhuanspbodyVal,
    ymzhuantxbodyVal: ymzhuantxbodyVal,


}

module.exports = ymzhuancookie
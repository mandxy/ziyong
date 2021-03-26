
const $ = new Env('云扫码自动阅读');
let status;
status = (status = ($.getval("ysmstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符

let ysmurl1 = '';
let ysmurl2 = '';
let ysmurl3 = '';
let ysmurl4 = '';
let ysmurl5 = '';
let ysmurl = 'http://erd.zhangchaofan.xyz/yunonline/v1/task';

let ysmhd1= '{"Accept":"application/json, text/javascript, */*; q=0.01","Origin":"http://erd.zhangchaofan.xyz","Accept-Encoding":"gzip, deflate","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Connection":"keep-alive","Host":"erd.zhangchaofan.xyz","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000237) NetType/WIFI Language/zh_CN","Referer":"http://erd.zhangchaofan.xyz/yunonline/v70818/redirect/eyJpdiI6IjNNXC9zbXcxZk9aNWg1VzVGU0JocHl3PT0iLCJ2YWx1ZSI6InRFUzduTXhQZEJyTnpPSTZLRXc5aE1mNGtydDFxVlJ5WW9VUnltNlFPeFZWUTNVNk16cmt1cWJFUUY5NVpncGtQcnZYdkxKdFFmRjRXbmJBRjJpdW1XcGEwczFSQ2JMWEJZXC95Nm5XVVZyU3I3Mkh5Y2R4MThNclIzQnpkSkJsODZNeEV2SktsYXNFTlk2RE1oSFB5WFFhR1BaRVM5c3NYeWd0VmpmZ1d0RW1LR29obEJmVWdmdlozdlwvcSs4dEloNWtWZFBySThuczJTM1RLNTdCMVI2QT09IiwibWFjIjoiMGQ1OGMzNTMzNTI1NmNlYTVlZjg3YTZlMGVhOTY1MThkYzdmNjMwMGJmMDc1NDg1OTFkNGRjYTI3NmViMmMyZSJ9?openid=oksnzweHKuZuwV2M9eRiSBOSjTh0&secret=eyJpdiI6IjNNXC9zbXcxZk9aNWg1VzVGU0JocHl3PT0iLCJ2YWx1ZSI6InRFUzduTXhQZEJyTnpPSTZLRXc5aE1mNGtydDFxVlJ5WW9VUnltNlFPeFZWUTNVNk16cmt1cWJFUUY5NVpncGtQcnZYdkxKdFFmRjRXbmJBRjJpdW1XcGEwczFSQ2JMWEJZXC95Nm5XVVZyU3I3Mkh5Y2R4MThNclIzQnpkSkJsODZNeEV2SktsYXNFTlk2RE1oSFB5WFFhR1BaRVM5c3NYeWd0VmpmZ1d0RW1LR29obEJmVWdmdlozdlwvcSs4dEloNWtWZFBySThuczJTM1RLNTdCMVI2QT09IiwibWFjIjoiMGQ1OGMzNTMzNTI1NmNlYTVlZjg3YTZlMGVhOTY1MThkYzdmNjMwMGJmMDc1NDg1OTFkNGRjYTI3NmViMmMyZSJ9","Accept-Language":"zh-cn","Content-Length":"609","X-Requested-With":"XMLHttpRequest"}';
let ysmhd2= '{"Accept":"application/json, text/javascript, */*; q=0.01","Origin":"http://erd.zhangchaofan.xyz","Accept-Encoding":"gzip, deflate","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Connection":"keep-alive","Host":"erd.zhangchaofan.xyz","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000237) NetType/WIFI Language/zh_CN","Referer":"http://erd.zhangchaofan.xyz/yunonline/v81085/redirect/eyJpdiI6Ik95S1lwUnd2YkZzenlpeU13MlNlSWc9PSIsInZhbHVlIjoiR0ZqVk92Nnp2ZlVQbUlpME42d3QrNUk4T1lkNnhDUDJjZThNcHhTczlwdG85WGZPaXFibnllbmRSYW1FQkFDNnRYRGVBQVBZaCtDRHRNWitjZGxrbitjMGR5MXlDaXl2VDVDd0NITVZsYzJJWGhLZkFFcUJZTFZvUE12eGl0NWdnRlpxSHZTM2tUXC9rMmFZXC81TUJiRllsZ3lvVTJKdlB3MGlKWWdFT0NHRnl3Z3VzKzgwUFdkME56c21ibnkxU3U5MXNjS2kxb2ltYUJGQnExeFE2dWVnPT0iLCJtYWMiOiJkYzk5YjFlYTQ3Mzc1YWU5ODkwOGM1MDQ0N2UzNGIyMjRkNTM1MTRiM2FmOTg2MDc1ZjM0NTNiNmVhN2JlOTc1In0%3D?openid=oksnzwXAlRBO1CtsGgFDJmpYmZDQ&secret=eyJpdiI6Ik95S1lwUnd2YkZzenlpeU13MlNlSWc9PSIsInZhbHVlIjoiR0ZqVk92Nnp2ZlVQbUlpME42d3QrNUk4T1lkNnhDUDJjZThNcHhTczlwdG85WGZPaXFibnllbmRSYW1FQkFDNnRYRGVBQVBZaCtDRHRNWitjZGxrbitjMGR5MXlDaXl2VDVDd0NITVZsYzJJWGhLZkFFcUJZTFZvUE12eGl0NWdnRlpxSHZTM2tUXC9rMmFZXC81TUJiRllsZ3lvVTJKdlB3MGlKWWdFT0NHRnl3Z3VzKzgwUFdkME56c21ibnkxU3U5MXNjS2kxb2ltYUJGQnExeFE2dWVnPT0iLCJtYWMiOiJkYzk5YjFlYTQ3Mzc1YWU5ODkwOGM1MDQ0N2UzNGIyMjRkNTM1MTRiM2FmOTg2MDc1ZjM0NTNiNmVhN2JlOTc1In0%3D","Accept-Language":"zh-cn","Content-Length":"609","X-Requested-With":"XMLHttpRequest"}';
let ysmhd3= '{"Accept":"application/json, text/javascript, */*; q=0.01","Origin":"http://erd.zhangchaofan.xyz","Accept-Encoding":"gzip, deflate","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Connection":"keep-alive","Host":"erd.zhangchaofan.xyz","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000237) NetType/WIFI Language/zh_CN","Referer":"http://erd.zhangchaofan.xyz/yunonline/v97766/redirect/eyJpdiI6InlOeEpkXC9ON1NvdXNYalg0aW1uWWd3PT0iLCJ2YWx1ZSI6IkdWTno4VkZaSlZiNVZud1hqOWdPeWdxUnhjbDZmOXVlXC83eklLT2p3RFhjTnI5eDBCNGNnRnpqSURxUmFrXC9NK1hjcU5lbWtVbTVkc05YdFk5ZkZvZnh1NWtCcGhwdkViakRzWVZHNTBvTGd3RU4wbTJTZStoVnJKOWpsaG5rXC8rTWxrYVBEU0NnY3pqcHUwdUtZM0pJd25ISmhCRVlCVGFVbTVJRmpWUzAwaDV5Uk1MeGswVHp1ZmpSUWpwa1lOSjZMSytNV0tuZitWM1ExYU1CckppNnc9PSIsIm1hYyI6IjU4M2RhMmI2ODJmYWI0OTg0OTM5OGJhMmQ2NWQ2NWNhNzc3OWUxZjQ4YWIxOTBiZmFjZTc5YTllYWQ4YzNlZjEifQ%3D%3D?openid=oksnzwYtYAI7ZK_RmJlVfabsWiho&secret=eyJpdiI6InlOeEpkXC9ON1NvdXNYalg0aW1uWWd3PT0iLCJ2YWx1ZSI6IkdWTno4VkZaSlZiNVZud1hqOWdPeWdxUnhjbDZmOXVlXC83eklLT2p3RFhjTnI5eDBCNGNnRnpqSURxUmFrXC9NK1hjcU5lbWtVbTVkc05YdFk5ZkZvZnh1NWtCcGhwdkViakRzWVZHNTBvTGd3RU4wbTJTZStoVnJKOWpsaG5rXC8rTWxrYVBEU0NnY3pqcHUwdUtZM0pJd25ISmhCRVlCVGFVbTVJRmpWUzAwaDV5Uk1MeGswVHp1ZmpSUWpwa1lOSjZMSytNV0tuZitWM1ExYU1CckppNnc9PSIsIm1hYyI6IjU4M2RhMmI2ODJmYWI0OTg0OTM5OGJhMmQ2NWQ2NWNhNzc3OWUxZjQ4YWIxOTBiZmFjZTc5YTllYWQ4YzNlZjEifQ%3D%3D","Accept-Language":"zh-cn","Content-Length":"613","X-Requested-With":"XMLHttpRequest"}';
let ysmhd4= '{"Accept":"application/json, text/javascript, */*; q=0.01","Origin":"http://erd.zhangchaofan.xyz","Accept-Encoding":"gzip, deflate","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Connection":"keep-alive","Host":"erd.zhangchaofan.xyz","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000237) NetType/WIFI Language/zh_CN","Referer":"http://erd.zhangchaofan.xyz/yunonline/v72471/redirect/eyJpdiI6IjVZeFl2cFpjWFFmTktEbTdlZFwvb1lRPT0iLCJ2YWx1ZSI6IjdnQnNoWEF0Y1lkbzNGWHpMdHd3aGpHQk5iV3VIeFwvOVRqbko0a1VRZW5Gc0FkaVo4dTNkWnI4cWlMaTBXem03RkZSRmVLXC81dWJ3dTFORENNYUZpVWlZUE52MXhQa0g0V2ZyWVl4WnJoZ3VIbEZoXC9aaDlacmZhRFVBdkJjQllzbUhnMTN0VHFVK1wvTjlCdDZpV0Z0NHoweXFzRnY1dVRXcHZpUlI1cnlvQ2tcL2JwTGJoa1ZleWZmZDdHdlBkOFl3QlR1Y2lXWnRnOHlINUV6MDRiZ1hUQT09IiwibWFjIjoiNmRiZjg2MDBjMDkzMGM3Yzg1ZjVlMmQ0Mjc2NjcxYjY0MTk4MDc1YzI3Njk0OWRlZjk2MGIxZTY4N2I3NDQ4OSJ9?openid=oksnzwXfXMGcIHOoFw5gEgVURwKo&secret=eyJpdiI6IjVZeFl2cFpjWFFmTktEbTdlZFwvb1lRPT0iLCJ2YWx1ZSI6IjdnQnNoWEF0Y1lkbzNGWHpMdHd3aGpHQk5iV3VIeFwvOVRqbko0a1VRZW5Gc0FkaVo4dTNkWnI4cWlMaTBXem03RkZSRmVLXC81dWJ3dTFORENNYUZpVWlZUE52MXhQa0g0V2ZyWVl4WnJoZ3VIbEZoXC9aaDlacmZhRFVBdkJjQllzbUhnMTN0VHFVK1wvTjlCdDZpV0Z0NHoweXFzRnY1dVRXcHZpUlI1cnlvQ2tcL2JwTGJoa1ZleWZmZDdHdlBkOFl3QlR1Y2lXWnRnOHlINUV6MDRiZ1hUQT09IiwibWFjIjoiNmRiZjg2MDBjMDkzMGM3Yzg1ZjVlMmQ0Mjc2NjcxYjY0MTk4MDc1YzI3Njk0OWRlZjk2MGIxZTY4N2I3NDQ4OSJ9","Accept-Language":"zh-cn","Content-Length":"613","X-Requested-With":"XMLHttpRequest"}';
let ysmhd5= '{"Accept":"application/json, text/javascript, */*; q=0.01","Origin":"http://erd.zhangchaofan.xyz","Accept-Encoding":"gzip, deflate","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Connection":"keep-alive","Host":"erd.zhangchaofan.xyz","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000237) NetType/WIFI Language/zh_CN","Referer":"http://erd.zhangchaofan.xyz/yunonline/v5915/redirect/eyJpdiI6IlRZVWhha1ArZEJyNVwvQmxrRFdLXC9wUT09IiwidmFsdWUiOiIzaUFsZHJLdHNuWWxldVJkdnV5cFFuQ2pwTTNPcjJaRTRsem9FZ3ZQc0JqUzBvOXRQNVZTMjBiaUN5cGpJWUYxeGpreUVua0xGaDdUYlJFa0l0Y1F2MWNrNXJPS2syVGJyaHhZQndCQmRQSVJlYkJzaDF1bGJNVGdIdE5pVFI0UmJKbFwvYWY3XC9MTXRLMGpvMFU2dXhwVkg5MnNoaXZBaGhHcGJVV2Vjclc5a2lZcTdcLzJcL1V4a3MwWFEreTh2bmw3Rnp0WmRucjR3Y0tEVFBvazdlQzB0QT09IiwibWFjIjoiMDg3ZmVhZThlMmI5NzA1OTIxMzYzNDgzOGJkNGMzYzFlNjA0MmRlZTJiMDk5M2EwZjBhYzg3YWY2ODE0NjExMiJ9?openid=oksnzwW04IAbWgscqQjNLpqAGwsQ&secret=eyJpdiI6IlRZVWhha1ArZEJyNVwvQmxrRFdLXC9wUT09IiwidmFsdWUiOiIzaUFsZHJLdHNuWWxldVJkdnV5cFFuQ2pwTTNPcjJaRTRsem9FZ3ZQc0JqUzBvOXRQNVZTMjBiaUN5cGpJWUYxeGpreUVua0xGaDdUYlJFa0l0Y1F2MWNrNXJPS2syVGJyaHhZQndCQmRQSVJlYkJzaDF1bGJNVGdIdE5pVFI0UmJKbFwvYWY3XC9MTXRLMGpvMFU2dXhwVkg5MnNoaXZBaGhHcGJVV2Vjclc5a2lZcTdcLzJcL1V4a3MwWFEreTh2bmw3Rnp0WmRucjR3Y0tEVFBvazdlQzB0QT09IiwibWFjIjoiMDg3ZmVhZThlMmI5NzA1OTIxMzYzNDgzOGJkNGMzYzFlNjA0MmRlZTJiMDk5M2EwZjBhYzg3YWY2ODE0NjExMiJ9","Accept-Language":"zh-cn","Content-Length":"601","X-Requested-With":"XMLHttpRequest"}';

let ysmbody1 = '"secret=eyJpdiI6InEyaVlLY0ZkdzFKeHJDV1VSR0xzSlE9PSIsInZhbHVlIjoiY0V0endzWkw3ZU5lNEFUZHhLVVB1TWp2MUxYOEU4UCt6VkFkTHFFRTB6MkJHVUVjZUdvblpEanhnelE5XC9ORkZtNEw1T2NkTVlkZzZQU2ZGdEVHWUQwa2VcLzRCUyt3OWRTMlduZkJ5VUY4bVE0RURYQmRoODZLWmkxNmxKSzM0TWdOb0NpT2hZTklPeDQ4a1NIbEVsaEU4MGJxc1NQV2Z5TlRzSGxxOHBRVHBjdlpzNU9laXdGUjJmTmh2YzdhN3RMTkN1N01KUWE1dnJ1Z0syVFowZ0tsZXdJcjhOdlp0T25SM0h3NEh1RmY1aVl3bUR1VzlDTit3d1wvTEVycHlVUVJwM0ZOWlk2VUxadDRzQkJjZWlMUjF0OXNMYlhxcHh5cEtsaExlSUlKZ0hxamhiS0hDOUJTbHpMeWpHd21XcjgiLCJtYWMiOiI1YzNjMTYxMTA1NDI0MDRkOTE4N2JhNTMxYjM0ZWZkNjY3ZjZmZWVmYmVlZTVlYjEzOGRiM2QyOWQxOTZhYjUyIn0%253D&type=read"';
let ysmbody2 = '"secret=eyJpdiI6IkhTbUtMRkRWeVlBQThDUHA5WFpvU0E9PSIsInZhbHVlIjoiZmttenJwK3ZMVlJpY0pMUzQ2YUdJVVJjYnlmdXVCWFpiN2diMGlhS0J3bk1pUFBJMXJUeWNkNHQ2N08zMXV1ZlQwbTQ5VGdhU2RnZW9iZjBubHZYRjh0c1JWeXRsc3lVMU5jWVVaRzc1VlwvNXVoUlVZaFBVZDdjK0FDVnRVbXZ5SU5nc0NMajBOM3Ryamk0aDdYNFpZK2pXMFwvSW1UUW9GVjRLOHBvT05RTHFhS0plTndGckEwemdJdzNvTDkwNU8zVVJ4WDVQTk5obmt5TkxpSGpJUmZWUFRcLzlUODB3MTlxYUR3Y3hBOVluZjEraGFzaGx6bTdhM1c0ZEFvRzhUOFZwdm1KUnh1enMwMVFPbVZCdEp3UktXTXlVYnFOTjJjdWVWR1Bwcm5LMkNKYzdGZ3hIWGw1elEzM3hwZElqbjUiLCJtYWMiOiIyMjhmZWNiMDcwYTNhNDI3NzNlZWU2MzMxMGFkNzIwYWVjMTRhODlkMGYxZGZiZWZjMmUwYWM3YjZjM2ZmMzc2In0%253D&type=read"';
let ysmbody3 = '"secret=eyJpdiI6ImJRSk1KMjlKcUo1MWxKSjF1c2xqeGc9PSIsInZhbHVlIjoid2psV0xOZXpHT2ptN2JhWHFjUzZUQmlPSk1rZnJFYm9qbjFjZXNkSktIYkxxWEFFdHA4OEJUcFE4UFhvaFVBYko5UUZRRldQWHFUSVltdHl5dmJWUWFjQUc5VzhYZW5KdVFkcVdwNENcL3l1WjRJenBRWnMycThjTkZyc2lhNjM0bGpKdHlxemUzSkp4VXJNUjB3R0dDM2ZtOTA3WVp0TUlqZ2RrVG9seUxQRWRwR0h5ZVdxUjl3YlJ5RWhDZHl6U0J0alN4SkdSRG9YYzlIa2kwXC9rZ2ZlTGR5V0Z2QXRPcEdENXVTcVJzTDlGaDZLQTZLYm1ic1M4U041cEk4Q0Q3d3pjY0Z5TlV3bkN6aFJsZWVxZXBwbmhWRW8xZmxvYW5laTVpMkxlMm13bzhYTU9YYVFuRHNGN1pIWmZCdnE1NSIsIm1hYyI6ImYyMzVkNmM0NDJiMjkxYmUxMjkyYjlmYjNkMDg1YzMwNWM1YzFiY2NkN2NhMjdmYmJjZDFiNTI2NTVkNzg2N2EifQ%253D%253D&type=read"';
let ysmbody4 = '"secret=eyJpdiI6ImIrVE1FZW5PUFM0YlZaWExJTlVvelE9PSIsInZhbHVlIjoid2NxT3JqSzM5RHlwcFwvVVRIV1h5c1BlUnl5NGdRb3d5UjZiM2kxR1FUT3hDV0dEN0Z3SWg0d0NJRUdPd3dVYTFSeStSXC9Hb1hRMVpFdXVDZmtHdVJqR1lxeExRVHRoN0JacmhINzNIOWdiSGZSRVk0bFRadnJ4RnNGdlVKXC9Rb1gxbG9nbGFQcWl6S1VWTlZGeUdwMGVBM2xKazdJbjhJQVg0NkRFK0JFYmg0Vml3Z2VsNXViMnk4elphZ1BqcFp0QWt5RlwvZmtuVVwvTTVvZ3VEWXo4K0VHdENoTGUzczZianV4ZlRiUjJCcEZuaHhTMUlNeERmWTFYSU0xcGdrSFBHbWtCcW1odEFSZW9FV0dCbXdcL0xBQ2lTZVErUjE2eDRtKzdUdWxaVjRRV3JTdEFFb1VoV2JoMGo0dUNwSG5HNmYiLCJtYWMiOiIwNDQ4MWE2MWUxOTg4NTA5YmNjYTc2MGJjNmNjOTY1NDNmNWMyN2JlNDIwMzdhZDQxYzI5YzA0YTFmNWRmYjIwIn0%253D&type=read"';
let ysmbody5 = '"secret=eyJpdiI6ImRqNm1pbjh2OWJDUnEyMG1RVkpHMUE9PSIsInZhbHVlIjoiU1lUbElPc0pRazgrQXM5WDlvVjhSaUp1ZTZERVdqaUxOSnh0MlllRGtEMm5zcTV6amdyOVFUUVQxT044bmF3cTdUUWxtZ25vR3c3T01HNU00SzZjUG95WXRTS2F4aFByMzRpSmRWOVZYQk1hS3RpMUlhblZwTlNwYW5sd25NUG9KQlZKd3JraUZERUxMbzZ0VTNtYUoybWJJSU5VWmRDaUF0dXp5Z0xSM0xtTWltSTFMQmRFNmc1YWtMaG9ydDV0SFZQUVFKd2pNZzAxWUpya2V1MmhtQVNNdlliMHJ5ZkFuNGVrbkNTcDdEaVl0NzQzNFFDXC9JSFNDRWhHOEVZS1NrV3BxQVladFl0RFBMTHRnOWVQNWhseVo4MnRhNXVmeTVOZFV4RHhuaEIrd0tna0VtQmtLQTJkUHdVOHU1OXpMIiwibWFjIjoiY2JhNGRhYmNhZTk1MzEzZGY5N2MzMDAxYTY5YzRhMGFiY2E4ODdjNGY3ZmMwYWJiNmE5NGFiYzhmYWRkZGNmOCJ9&type=read"';


let ysm2body1 = 'openid=oksnzweHKuZuwV2M9eRiSBOSjTh0&time=19';
let ysm2body2 = 'openid=oksnzwXAlRBO1CtsGgFDJmpYmZDQ&time=22';
let ysm2body3 = 'openid=oksnzwYtYAI7ZK_RmJlVfabsWiho&time=22';
let ysm2body4 = 'openid=oksnzwXfXMGcIHOoFw5gEgVURwKo&time=16';
let ysm2body5 = 'openid=oksnzwW04IAbWgscqQjNLpqAGwsQ&time=22';


const ysmurlArr = [], ysmhdArr = [ ysmhd1,ysmhd2,ysmhd3,ysmhd4,ysmhd5 ],ysmbodyArr = [ysmbody1,ysmbody2,ysmbody3,ysmbody4,ysmbody5],ysm2bodyArr = [ysm2body1,ysm2body2,ysm2body3,ysm2body4,ysm2body5],ysmtxArr = [],ysmcount = ''


let ysmmr = ($.getval('ysmmr') || '1'); //开启该选项时，每天需手动阅读两次文章后脚本才能正常执行任务，尽量避免因脚本跑首次任务遭微信限制的情况 ，0为开启，1为关闭，默认开启如需关闭请去boxjs关闭

let ysmkey = '',xz = '',xx =''


!(async () => {
  
    console.log(`------------- 共${ysmhdArr.length}个账号-------------\n`)
      for (let i = 0; i < ysmhdArr.length; i++) {
        if (ysmhdArr[i]) {
         
          ysmhd = ysmhdArr[i];
          ysmbody = ysmbodyArr[i];
          ysm2body = ysm2bodyArr[i];
          ysmtx = ysmtxArr[i];
          $.index = i + 1;
          console.log(`\n开始【云扫码${$.index}】`)
          await ysmxx()
          if(xz <= 0 && ysmmr == 0){
$.log(`\n【云扫码${$.index}】请手动阅读两篇文章再运行脚本`)
          
}else{
await ysm1();

}
await ysmyh();
  }
  //await ysmtx();
}$.log('\n====== 云扫码运行完毕 打印用户信息======'+xx)

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//云扫码数据获取


function ysmck() {
   if ($request.url.indexOf("v1/task") > -1) {
 const ysmurl = $request.url
  if(ysmurl)     $.setdata(ysmurl,`ysmurl${status}`)
    $.log(ysmurl)
  const ysmhd = JSON.stringify($request.headers)
        if(ysmhd)    $.setdata(ysmhd,`ysmhd${status}`)
$.log(ysmhd)
   const ysmbody = JSON.stringify($request.body)
        if(ysmbody)    $.setdata(ysmbody,`ysmbody${status}`)
$.log(ysmbody)
   $.msg($.name,"",'云扫码'+`${status}` +'获取任务数据获取成功！')
  }
if ($request.url.indexOf("add_gold") > -1) {
 const ysm2body = $request.body
  if(ysm2body)     $.setdata(ysm2body,`ysm2body${status}`)
    $.log(ysm2body)
$.msg($.name,"",'云扫码'+`${status}` +'提交任务数据获取成功！')
   }
  if ($request.url.indexOf("withdraw") > -1) {
 const ysmtx = $request.body
  if(ysmtx)     $.setdata(ysmtx,`ysmtx${status}`)
    $.log(ysmtx)
$.msg($.name,"",'云扫码'+`${status}` +'微信提现数据获取成功！')
   }
}


//云扫码领取
function ysm3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http:"+ysmurl.match(/http:(.*?)yunonline/)[1]+"yunonline/v1/add_gold",
        headers : JSON.parse(ysmhd),
        body : ysm2body,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errcode == 0){
        console.log('\n云扫码领取阅读奖励回执:成功🌝 '+result.data.gold+'\n今日阅读次数: '+result.data.day_read+' 今日阅读奖励: '+result.data.day_gold+' 当前余额'+result.data.last_gold+'\n')
        if(result.data.last_gold >= 3000){
    console.log('\n检测到当前金额可提现，前去执行提现,请去抓取提现的数据，如果没有提现数据脚本会自行终止!')                
await ysmdh();
}       await $.wait(2000);
        await ysm1();
        
} else {
       if(result.errcode == 405){
console.log('\n🧼来自肥皂的提示:'+result.msg+'尝试继续执行任务')
      await ysm1();
}
    console.log(result.errcode)
console.log('\n云扫码领取阅读奖励回执:失败🚫 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//云扫码提交     
function ysm2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : ysmkey,
        headers : JSON.parse(ysmhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         //console.log('\n开始重定向跳转，跳转返回结果：'+data)
        if (err) {
          console.log(`\n${$.name} 🧼来自肥皂的提示:key请求提交失败,尝试重新执行任务`)
     await ysm1();
        } else {
           
    //const result = JSON.parse(data)
       console.log('\n云扫码key提交成功,10秒后开始领取阅读奖励') 
       
        await $.wait(9000);
        await ysm3(); 
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//云扫码key
function ysm1(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('ysmhd') === "undefined") {
        $.msg($.name,"",'请先获取云扫码数据!😓',)
        $.done()
      }

let url = {
        url : "http:"+ysmurl.match(/http:(.*?)yunonline/)[1]+"yunonline/v1/task",
        headers : JSON.parse(ysmhd),
        body : 'secret='+ysmbody.match(/secret=(.*?)&/)[1]+'&type=read',
}
      $.post(url, async (err, resp, data) => {
        try {
      if(data == '{"errcode":0,"msg":"success"}'){
       console.log('\n🧼来自肥皂的提示:当前没有任务啊,手动进云扫码看看是不是一直显示更新中,别问肥皂什么原因啦～')
}
          //console.log(data)
    const result = JSON.parse(data)
        if(result.errcode == 0){
         //console.log(data)
        console.log('\n云扫码获取key回执:成功🌝 开始 循环观看💦')
      if(result.data.link === undefined){
       console.log('\n🧼来自肥皂的提示:没有匹配到key'+result.data.msg)
} else {
        ysmkey = result.data.link
        //$.log(ysmkey)
        await $.wait(1000);
        await ysm2();
        
}
        
} else {
console.log('云扫码获取key回执:失败🚫 '+result.msg+' 已停止当前账号运行!')
}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


//云扫码兑换
function ysmdh(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "http:"+ysmurl.match(/http:(.*?)yunonline/)[1]+"yunonline/v1/user_gold",
        headers : JSON.parse(ysmhd),
        body : 'openid='+ysmtx.match(/openid=(.*?)ua/)[1]+'gold=3000',
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errcode == 0){
        console.log('\n云扫码提现兑换:成功🌝 兑换金额'+result.data.money+'元，前去微信提现')
        await $.wait(1000);
        await ysmwx();
} else {
       console.log('\n云扫码提现兑换:失败🚫 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//云扫码提现
function ysmwx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http:"+ysmurl.match(/http:(.*?)yunonline/)[1]+"yunonline/v1/withdraw",
        headers : JSON.parse(ysmhd),
        body : ysmtx,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errcode == 0){
        console.log('\n云扫码微信提现回执:成功🌝 '+result.msg)
        $.msg($.name,"",'云扫码已成功提现至微信0.3元')
        await ysm1();
} else {
       console.log('\n云扫码微信提现回执:失败🚫 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//云扫码用户信息     
function ysmxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://erd.zhangchaofan.xyz/yunonline/v1/gold?openid='+ysm2body.match(/openid=(.*?)&/)[1]+'&time=1616003606000',
        headers : JSON.parse(ysmhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
   const result = JSON.parse(data)
        if(result.errcode == 0){
        console.log(`\n云扫码${$.index}用户信息: \n今日阅读数:`+result.data.day_read+'\n今日已获得金币:'+result.data.day_gold+'\n剩余可提现金币:'+result.data.last_gold)
        xz = result.data.day_read
        } else {
           
    //const result = JSON.parse(data)
       console.log('\n云扫码未知错误'+data) 
       
        
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function ysmyh(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://erd.zhangchaofan.xyz/yunonline/v1/gold?openid='+ysm2body.match(/openid=(.*?)&/)[1]+'&time=1616003606000',
        headers : JSON.parse(ysmhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
   const result = JSON.parse(data)
        if(result.errcode == 0){
xx+=`\n\n云扫码${$.index}用户信息: \n今日阅读数:`+result.data.day_read+'\n今日已获得金币:'+result.data.day_gold+'\n剩余可提现金币:'+result.data.last_gold
  
        
        } else {
           
    //const result = JSON.parse(data)
       console.log('\n云扫码未知错误'+data) 
       
        
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

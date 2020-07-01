import request from '@/uilts/request'
export const  fitchCodeImg = function(data={}){
    return request({
        url:'/hua/getCaptcha',
        method:'post',
        data:{
            ...data
        }

    })
}
export const  hualogin = function(data){
    return request({
        url:'/hua/login',
        method:'post',
        data:{
            ...data
        }
    })
}
export const  findpassword = function(data){
    return request({
        url:'/hua/findPwd',
        method:'post',
        data:{
            ...data
        }
    })
}
export const  huarRegister = function(data){
    return request({
        url:'/hua/user/register',
        method:'post',
        data:{
            ...data
        }
    })
}
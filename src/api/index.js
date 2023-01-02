// 所有接口方法的列表
import Ajax from './ajax.js'

export const reqmain = () => {
    // 默认传了 GET
    return Ajax('/tesla')
}

export const reqshop = () => {
    return Ajax('/shop')
}

export const reqfind = (page) => {
    return Ajax(`/find/${page}`)
}

export const reqWeatherInfo = (adcode) => {
    return Ajax(`https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&extensions=all&key=2946ca9318702903204aa86bf4760e11`)
}

export const reqIpInfo = () => {
    return Ajax("https://restapi.amap.com/v3/ip?key=2946ca9318702903204aa86bf4760e11")
}
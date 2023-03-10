import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.31.110:9000';
// axios.defaults.baseURL = 'http://121.40.35.197:9000';

export default function Ajax (url, data = {}, type = 'GET'){
    return new Promise((resolve, rejet) => {
        let Promise;
        if (type === 'GET') {
            Promise = axios.get(url, {
                params: data
            })
        } else {
            Promise = axios.post(url, {
                params: data
            })
        }
        Promise.then((response) => {
            resolve(response);
        }).catch((error) => {
            console.error("数据请求异常！", error)
        })
    })
}

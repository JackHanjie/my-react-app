import React from "react";
import { useEffect } from "react";
import { Container } from './index.style'

const News = (props) => {

  const { state } = props.location

  useEffect(()=> {
    console.log(state,'hanjie')
  })

  const goBack = () => {
    history.go(-1)
  }
  const pics = ['https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/04/ChMkJlbKyFOILgqwAAU1Zymsk68AALIAgFwgVgABTV_720.jpg','https://ts1.cn.mm.bing.net/th/id/R-C.d2c277f9053ac18b9bce1964de7e3567?rik=PGJuquzJo%2fIK3Q&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1209%2f17%2fc0%2f13901631_1347858735845.jpg&ehk=kgbdoWeG5wuOvpX0S4v8fcTnitxmvbOaIb2FiD0vnGg%3d&risl=&pid=ImgRaw&r=0','https://tse1-mm.cn.bing.net/th/id/OIP-C.hO-rqmvAb-WMo7j_Lb5PEgHaEK?pid=ImgDet&rs=1','https://ts1.cn.mm.bing.net/th/id/R-C.e85b405ac60ec040c89aa6c0b5193de5?rik=srBfCiuR8O9f1Q&riu=http%3a%2f%2fi2.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102456_47618.jpg&ehk=kDWkBL2Wc2UiIEn1BoDclIm67lcChmJXv68lHOvaBFw%3d&risl=&pid=ImgRaw&r=0']


  return (
    <Container>
      <div className="back" onClick={goBack}>
        
        <svg t="1641971935225" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M738.145103 170.248828 663.234207 95.337931 313.114483 445.457655 312.937931 445.298759 238.768552 519.450483 238.945103 519.627034 238.768552 519.785931 313.679448 594.696828 313.838345 594.537931 658.996966 939.696552 733.166345 865.509517 388.007724 520.368552Z" p-id="2479" fill="#6F6F6F"></path></svg>
        <div className="detali">返回</div>
      </div>
      <div className="top">
        {
          <img src={pics[0]}/>
        }
      </div>
      <div className="mid">
        <table>
          <tr>
            <th>选项</th>
            <th>白天</th>
            <th>夜间</th>
          </tr>
          <tr>
            
            <td>时间</td>
            <td>{state.date}</td>
            <td>{state.date}</td>
          </tr>
          <tr>
            <td>风力</td>
            <td>{state.daypower} 级</td>
            <td>{state.nightpower} 级</td>
          </tr>
          <tr>
            <td>温度</td>
            <td>{state.daytemp} 摄氏度</td>
            <td>{state.nighttemp} 摄氏度</td>
          </tr>
          <tr>
            <td>天气</td>
            <td>{state.dayweather}</td>
            <td>{state.nightweather}</td>
          </tr>
          <tr>
            <td>风向</td>
            <td>{state.daywind}</td>
            <td>{state.nightwind}</td>
          </tr>
        </table>
      </div>
    </Container>
  )
}
export default News
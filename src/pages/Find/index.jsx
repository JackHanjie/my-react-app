import React, { useState, useEffect, memo } from "react";
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Main } from "./index.style";
import Lazyload, { forceCheck } from 'react-lazyload'
import loading from '../../assets/Images/1.gif'
import loading2 from '../../assets/Images/loading.gif'
import pic from '../../assets/Images/RE53gQa.gif'
import { useHistory } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import { reqIpInfo, reqWeatherInfo } from "../../api";

import { changeToNum } from "./utlis";




const Find = (props) => {

  const history = useHistory()

  const { route } = props

  let [page, setPage] = useState(1)

  // state
  const { finddata } = props

  // action
  const { getFindDataDispatch } = props

  const [isLoading, setIsLoading] = useState(false)

  const { newsList = [] } = finddata

  const [weather, setWeather] = useState({})
  const [casts, setCasts] = useState([])

  // 判断仓库是否为空，空则getFindDataDispatch()，page改变重新渲染页面
  useEffect(() => {
    
    reqIpInfo().then(({data}) => {
      reqWeatherInfo(data.adcode).then(({data}) => {
        console.log(data.forecasts[0].casts)
        setWeather(data)
        setCasts(data.forecasts[0].casts)
      })
    })
  }, [])
  

  // 上拉加载更多
  const handlePullUp = () => {
    // if (isLoading) return;
    // setPage(++page)
    // setIsLoading(true)
  }

  // 下拉刷新
  const handlePullDown = () => {

  }

  const gotoDetails = (item) => {
    console.log(item)
    history.push({ pathname: `/find/${item.week}`, state: item })
  }


  const pics = ['https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/04/ChMkJlbKyFOILgqwAAU1Zymsk68AALIAgFwgVgABTV_720.jpg','https://ts1.cn.mm.bing.net/th/id/R-C.d2c277f9053ac18b9bce1964de7e3567?rik=PGJuquzJo%2fIK3Q&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1209%2f17%2fc0%2f13901631_1347858735845.jpg&ehk=kgbdoWeG5wuOvpX0S4v8fcTnitxmvbOaIb2FiD0vnGg%3d&risl=&pid=ImgRaw&r=0','https://tse1-mm.cn.bing.net/th/id/OIP-C.hO-rqmvAb-WMo7j_Lb5PEgHaEK?pid=ImgDet&rs=1','https://ts1.cn.mm.bing.net/th/id/R-C.e85b405ac60ec040c89aa6c0b5193de5?rik=srBfCiuR8O9f1Q&riu=http%3a%2f%2fi2.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102456_47618.jpg&ehk=kDWkBL2Wc2UiIEn1BoDclIm67lcChmJXv68lHOvaBFw%3d&risl=&pid=ImgRaw&r=0']

  return (
    
    <Main>
      
      <div className="title">推荐</div>
      <Scroll
        direction="vertical" // 垂直滚动
        refresh={false} // 下拉更新为false
        
      >
        <div className="container">
          <div className="teslaFind">
            <img src={pic} />
          </div>
          <div className="teslaNews">
            { 
              casts.map((item, index) => {
                return (
                  <div className="news" key={index} onClick={() => gotoDetails(item)}>
                    <div className="newsLeft">
                      <h1>{index == 0 ? ("当前 "+" : "+ item.dayweather) : ("未来 "+" : "+item.dayweather) }</h1>
                      <p>{item.date + " 周" + changeToNum(item.week)}</p>
                      <p></p>
                    </div>
                    <div className="newsRight">
                      <Lazyload
                        height={100}
                        placeholder={
                          <img width="100%" height="100%" src={loading} />
                        }
                      >
                        <img src={pics[index]} />
                      </Lazyload>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Scroll>
      {/* <div className={isLoading ? 'pullUpLoading' : ''}>
        <img src={loading2} />
      </div> */}
      {/* 一定要开启子路由 */}
      {renderRoutes(route.routes)}
    </Main>
  )
}


const mapStateToPorps = (state) => {
  return {
    finddata: state.find.finddata
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getFindDataDispatch(page) {
      dispatch(actionCreators.getFindData(page))
    }
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Find))

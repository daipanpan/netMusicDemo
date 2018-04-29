import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  musics: [
    { "img":"http://p1.music.126.net/tWObIWPB5xNH0PICMpdqRA==/18979769718980043.jpg?param=140y140" , "title":"Gospel Music‖慢节奏，静享一段悠然时光" , "url":"http://oc24816dq.bkt.clouddn.com/%E8%85%B9%E8%82%8C,%E7%B1%B3%E7%99%BD,%E8%8E%93%E5%AD%90%20-%20%E3%80%8C%E6%A8%B1%E8%8A%B1%E6%A8%B1%E8%8A%B1%E6%83%B3%E8%A7%81%E4%BD%A0%E3%80%8D%EF%BC%88Cover%EF%BC%9A%E9%AB%98%E9%87%8E%E5%81%A5%E4%B8%80%EF%BC%89.mp3" },
    { "img":"http://p1.music.126.net/G3cHCM-p17eW3CLvJf16-w==/19041342370152117.jpg?param=140y140" , "title":"启程‖“中国味儿”旅行——路线图" , "url":"http://oc24816dq.bkt.com/test.mp3" },
    { "img":"http://p1.music.126.net/4Abjlr5eVYF9CGRQI12Osw==/109951163004900022.jpg?param=140y140" , "title": "「粤语」人人路过都像你 但你是你" , "url":"http://oc24816dq.bkt.clouddn.com/test.mp3"},
    { "img":"http://p1.music.126.net/dRntJd8qpWv97MPRtMUaKA==/109951163017327329.jpg?param=140y140" , "title": "《离经叛道》：创新者们的这些行为和你不一样" , "url":"http://oc24816dq.bkt.clouddn.com/test.mp3"},
    { "img":"http://p1.music.126.net/w8d2pw2DGKNCPPKaEARfWg==/18700493767196733.jpg?param=140y140" , "title": "古风｜百听不厌~咱的珍藏 ( •̀∀•́ )" , "url":"http://oc24816dq.bkt.clouddn.com/test.mp3"},
    { "img":"http://p1.music.126.net/UaSTJK03_kSyYUz-2L6tBA==/18697195232178550.jpg?param=140y140" , "title": "杨振宁和李政道（五 首度联手战缪子）" , "url":"http://oc24816dq.bkt.clouddn.com/test.mp3"},
    { "img":"http://p1.music.126.net/9EHl0lDnN0vIgT8AYjiTxQ==/18929192184112281.jpg?param=140y140" , "title": "「Acapella」空灵至幻 迷境失若绿茵林" , "url":"http://oc24816dq.bkt.clouddn.com/test.mp3"},
    { "img":"http://p1.music.126.net/qfJg2DnB79sLxs0VDONJHQ==/18908301463197572.jpg?param=140y140" , "title": "孟婆，请再给我一碗汤" , "url":"http://oc24816dq.bkt.clouddn.com/test.mp3"}
  ],
  logintype: {},
  dialog: {
    showFlag: false
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

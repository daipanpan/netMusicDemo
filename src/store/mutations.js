export default {
  INIT(state, value) {
    state.musics = value;
  },
  LOGINTYPE(state, value) {
    state.logintype = value;
  },
  SETSHOWFLAG (state, value) {
    state.dialog.showFlag = value;
  }
}

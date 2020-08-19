// import Container from "../views/Container"
import PlayMusic from "@/views/PlayMusic"
import Rank from "@/views/Rank"
import Login from "@/views/liong"
import Friend from "@/views/Friend"
import SongList from "@/views/songsList/songsList"
import Singer from "@/views/Singer"
import MyMusic from "@/views/Mymusic/index.vue"
import Anchor from "@/views/Anchor/index.vue"

export default [
  // {
  //   path: "/",
  //   compoment: Container,
  // },
  // {
  //   path: "/dismusic",
  //   compoment: Container,
  // },
  {
    path: "/mymusic",
    component: MyMusic,
  },
  {
    path: "/playmusic",
    component: PlayMusic,
  },
  // 朋友
  {
    path: "/friend",
    component: Friend,
    name: "Friend",
  },
  // 排行榜
  {
    path: "/rank",
    component: Rank,
  },
  // 去登录
  {
    path: "/login",
    component: Login,
  },
  // 歌单
  {
    path: "/songlist",
    component: SongList,
  },
  // 歌手
  {
    path: "/singer",
    component: Singer,
  },
  // 电台主播
  {
    path: "/anchor",
    component: Anchor,
  },
]

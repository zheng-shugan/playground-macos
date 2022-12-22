import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Links",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "img/ui/avatar.png",
        link: "https://zhengshugan.me/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/zheng-shugan"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/outlook.png",
        link: "mailto:renovamenzxh@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "zhihu",
        title: "知乎",
        img: "img/sites/zhihu.jpeg",
        link: "https://www.zhihu.com/"
      },
      {
        id: "bilibili",
        title: "Bilibili",
        img: "img/sites/bilibili.svg",
        link: "https://www.bilibili.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "gitee",
        title: "Gitee",
        // img: "https://gitee.com/static/images/logo-en.svg",
        img: "img/sites/gitee.svg",
        link: "https://gitee.com/"
      }
    ]
  }
};

export default websites;

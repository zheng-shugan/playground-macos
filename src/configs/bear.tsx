import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/profile/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm an common luck player..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/profile/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/profile/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: "i-cil-education",
    md: [
      {
        id: "Education",
        title: "My Education",
        file: "markdown/education/education.md",
        icon: "",
        excerpt: "Something about my education"
      }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    icon: "i-cib-skillshare",
    md: [
      {
        id: "code",
        title: "Coding",
        file: "markdown/skill/coding.md",
        icon: "i-material-symbols-code-blocks-outline",
        excerpt: "Something about my coding skill"
      }
    ]
  }
];

export default bear;

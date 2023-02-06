import { Skill, SkillId } from "./type";

import vueImage from "./assets/vue.svg";
import reactImage from "./assets/react.svg";
import typescriptImage from "./assets/typescript.svg";
import javascriptImage from "./assets/javascript.svg";
import gitImage from "./assets/git.svg";
import nodejsImage from "./assets/nodejs.svg";
import dockerImage from "./assets/docker.svg";
import nextjsImage from "./assets/nextjs.svg";
import golangImage from "./assets/golang.svg";
import nginxImage from "./assets/nginx.svg";
import k8sImage from "./assets/k8s.svg";
import viteImage from "./assets/vite.svg";

const skills: Skill[] = [
  {
    id: SkillId.React,
    name: "React",
    alt: "React logo",
    image: reactImage
  },
  {
    id: SkillId.Vue,
    name: "Vue",
    alt: "Vue logo",
    image: vueImage
  },
  {
    id: SkillId.TypeScript,
    name: "TypeScript",
    alt: "TypeScript logo",
    image: typescriptImage
  },
  {
    id: SkillId.JavaScript,
    name: "JavaScript",
    alt: "JavaScript logo",
    image: javascriptImage
  },
  {
    id: SkillId.Git,
    name: "Git",
    alt: "Git logo",
    image: gitImage
  },
  {
    id: SkillId.Nodejs,
    name: "Nodejs",
    alt: "Nodejs logo",
    image: nodejsImage
  },
  {
    id: SkillId.Docker,
    name: "Docker",
    alt: "Docker logo",
    image: dockerImage
  },
  {
    id: SkillId.Nextjs,
    name: "Nextjs",
    alt: "Nextjs logo",
    image: nextjsImage
  },
  {
    id: SkillId.Golang,
    name: "Golang",
    alt: "Golang logo",
    image: golangImage
  },
  {
    id: SkillId.Vite,
    name: "Vite",
    alt: "Vite logo",
    image: viteImage
  },
  {
    id: SkillId.Nginx,
    name: "Nginx",
    alt: "Nginx logo",
    image: nginxImage
  },
  {
    id: SkillId.K8s,
    name: "K8s",
    alt: "K8s logo",
    image: k8sImage
  }
];

export default skills;

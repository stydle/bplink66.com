import { StaticImageData } from "next/image";

export interface Skill {
  id: SkillId;
  alt: string;
  name: string;
  image: StaticImageData;
}

export enum SkillId {
  React = "react",
  Vue = "vue",
  TypeScript = "typescript",
  JavaScript = "javascript",
  Git = "git",
  Nodejs = "nodejs",
  Docker = "docker",
  Nextjs = "nextjs",
  Golang = "Golang",
  Python = "python",
  C = "c++",
  Vite = "vite",
  Nginx = "nginx",
  K8s = "k8s"
}

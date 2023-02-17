import { Work, WorkId } from "./type";

import myImage from "./assets/my.png";

const works: Work[] = [
  {
    id: WorkId.My,
    name: "bplink66.com",
    year: 2022,
    tags: ["Next", "TypeScript"],
    url: "https://github.com/stydle/bplink66.com",
    image: myImage
  }
];

export default works;

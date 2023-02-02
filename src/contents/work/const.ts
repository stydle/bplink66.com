import { Work, WorkId } from './type';

import myImage from './assets/my.png';

export const works: Work[] = [
  {
    id: WorkId.My,
    name: 'bplink66.com',
    year: 2022,
    tags: ['Next', 'TypeScript'],
    url: 'https://www.baidu.com/',
    image: myImage,
  }
]
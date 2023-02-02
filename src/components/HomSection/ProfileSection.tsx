import Link from '../Link/Link'
import Panel from '../Panel/Panel'

const ProfileSection = () => {
  return (
    <Panel title="关于我">
      <ul>
        <li>夜猫子，夜晚的宁静更容易集中注意力。</li>
        <li>不是一个真正的二次元，但偶尔也会看看番。</li>
        <li>不善于和别人沟通，更不善于组织语言，比较喜欢使用文字表达自己的想法。</li>
        <li>尽可能的追求简洁，不喜欢太杂乱的环境。</li>
        <li>间歇性踌躇满志，持续性混吃等死。</li>
        <li>拥有把代码越写越渣的能力。</li>
        <li>主业写 Bug，副业 Debug。</li>
        <li>天天划水摸鱼，日常重装电脑。</li>
        <li>喜欢的游戏有：<Link href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild">塞尔达传说: 旷野之息</Link>、<Link href="https://en.wikipedia.org/wiki/Fire_Emblem">火焰纹章</Link>、<Link href="https://en.wikipedia.org/wiki/Animal_Crossing:_New_Horizons">集合啦！动物森友会</Link>。</li>
      </ul>
    </Panel>
  )
}

export default ProfileSection;
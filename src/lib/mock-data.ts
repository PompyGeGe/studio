
export type Course = {
  id: number;
  title: string;
  teacher: string;
  platform: string;
  imageId: string;
  category: string;
  status: '已开课' | '未开课';
  videoUrl: string;
};

const allCategories = [
  '电路分析基础', '模拟电子技术', '数字信号处理', '嵌入式系统设计', '机器学习导论', '高级数据结构', '操作系统原理', '计算机网络原理'
];

const statuses: ('已开课' | '未开课')[] = ['已开课', '未开课'];
const teachers = [
    '清华大学 电子工程系',
    '北京大学 信息科学技术学院',
    '上海交通大学 电子信息与电气工程学院',
    '浙江大学 信息与电子工程学院',
    '电子科技大学 信息与通信工程学院',
    '华中科技大学 计算机科学与技术学院',
    '西安电子科技大学 计算机科学与技术学部',
    '哈尔滨工业大学 计算学部'
];
const platforms = [
    '学堂在线',
    '中国大学MOOC',
    'Coursera',
    'edX',
    '智慧树',
    '超星泛雅',
    'Bilibili',
    '慕课网'
];

export const courses: Course[] = [
  {
    id: 1,
    title: '电路分析基础',
    teacher: '于歆杰 - 清华大学',
    platform: '学堂在线',
    imageId: 'course-1',
    category: '电路分析基础',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08051000228/12582035',
  },
  {
    id: 2,
    title: '模拟电子技术基础',
    teacher: '华成英 - 清华大学',
    platform: '学堂在线',
    imageId: 'course-2',
    category: '模拟电子技术',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/thu08051000288/12582103',
  },
  {
    id: 3,
    title: '信号与系统',
    teacher: '郑君里 - 上海交通大学',
    platform: '中国大学MOOC',
    imageId: 'course-3',
    category: '数字信号处理',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/SJTU-1002527001',
  },
  {
    id: 4,
    title: '嵌入式系统：应用开发方法',
    teacher: '周佳社 - 西安交通大学',
    platform: '智慧树',
    imageId: 'course-4',
    category: '嵌入式系统设计',
    status: '未开课',
    videoUrl: 'https://www.zhihuishu.com/stuStudy?courseId=2111244',
  },
  {
    id: 5,
    title: '机器学习',
    teacher: '周志华 - 南京大学',
    platform: '中国大学MOOC',
    imageId: 'course-5',
    category: '机器学习导论',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/NJU-1001563002',
  },
  {
    id: 6,
    title: '数据结构',
    teacher: '陈越/何钦铭 - 浙江大学',
    platform: '中国大学MOOC',
    imageId: 'course-6',
    category: '高级数据结构',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/ZJU-93001',
  },
  {
    id: 7,
    title: '操作系统',
    teacher: '向勇/陈渝 - 清华大学',
    platform: '学堂在线',
    imageId: 'course-7',
    category: '操作系统原理',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000267/12582737',
  },
  {
    id: 8,
    title: '计算机网络微课堂',
    teacher: '湖科大教书匠',
    platform: 'Bilibili',
    imageId: 'course-8',
    category: '计算机网络原理',
    status: '已开课',
    videoUrl: 'https://www.bilibili.com/video/BV1c4411d7jb',
  },
];


export const filters = {
  "开课状态": ["全部", "未开课", "已开课"],
  "热门搜索": ['电路设计', '微处理器', '信号处理', '嵌入式系统'],
  "其他搜索": ['机器学习', '数据结构', '操作系统', '计算机网络'],
};

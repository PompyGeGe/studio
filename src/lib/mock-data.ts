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
    teacher: '清华大学 电子工程系',
    platform: '学堂在线',
    imageId: 'course-1',
    category: '电路分析基础',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08051000228/12582035',
  },
  {
    id: 2,
    title: '模拟电子技术',
    teacher: '北京大学 信息科学技术学院',
    platform: '中国大学MOOC',
    imageId: 'course-2',
    category: '模拟电子技术',
    status: '未开课',
    videoUrl: 'https://www.icourse163.org/course/PKU-1003317001',
  },
  {
    id: 3,
    title: '数字信号处理',
    teacher: '上海交通大学 电子信息与电气工程学院',
    platform: 'Coursera',
    imageId: 'course-3',
    category: '数字信号处理',
    status: '已开课',
    videoUrl: 'https://www.coursera.org/specializations/digital-signal-processing',
  },
  {
    id: 4,
    title: '嵌入式系统设计',
    teacher: '浙江大学 信息与电子工程学院',
    platform: 'edX',
    imageId: 'course-4',
    category: '嵌入式系统设计',
    status: '未开课',
    videoUrl: 'https://www.edx.org/learn/embedded-systems',
  },
  {
    id: 5,
    title: '机器学习导论',
    teacher: '电子科技大学 信息与通信工程学院',
    platform: '智慧树',
    imageId: 'course-5',
    category: '机器学习导论',
    status: '已开课',
    videoUrl: 'https://www.zhihuishu.com/stuStudy?courseId=2076043',
  },
  {
    id: 6,
    title: '高级数据结构',
    teacher: '华中科技大学 计算机科学与技术学院',
    platform: '超星泛雅',
    imageId: 'course-6',
    category: '高级数据结构',
    status: '未开课',
    videoUrl: 'https://mooc1.chaoxing.com/course/200676451.html',
  },
  {
    id: 7,
    title: '操作系统原理',
    teacher: '西安电子科技大学 计算机科学与技术学部',
    platform: 'Bilibili',
    imageId: 'course-7',
    category: '操作系统原理',
    status: '已开课',
    videoUrl: 'https://www.bilibili.com/video/BV1uW411f72n',
  },
  {
    id: 8,
    title: '计算机网络原理',
    teacher: '哈尔滨工业大学 计算学部',
    platform: '慕课网',
    imageId: 'course-8',
    category: '计算机网络原理',
    status: '未开课',
    videoUrl: 'https://www.imooc.com/learn/110',
  },
];


export const filters = {
  "开课状态": ["全部", "未开课", "已开课"],
  "热门搜索": ['电路设计', '微处理器', '信号处理', '嵌入式系统'],
  "其他搜索": ['机器学习', '数据结构', '操作系统', '计算机网络'],
};

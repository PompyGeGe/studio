export type Course = {
  id: number;
  title: string;
  teacher: string;
  platform: string;
  imageId: string;
  category: string;
  status: '已开课' | '未开课';
};

const allCategories = [
  '电路设计', '微处理器', '信号处理', '嵌入式系统', '机器学习', '数据结构', '操作系统', '计算机网络'
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


export const courses: Course[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `${allCategories[i]}核心技术`,
  teacher: teachers[i],
  platform: platforms[i],
  imageId: `course-${i + 1}`,
  category: allCategories[i],
  status: statuses[i % 2],
}));

export const filters = {
  "开课状态": ["全部", "未开课", "已开课"],
  "热门搜索": ['电路设计', '微处理器', '信号处理', '嵌入式系统'],
  "其他搜索": ['机器学习', '数据结构', '操作系统', '计算机网络'],
};

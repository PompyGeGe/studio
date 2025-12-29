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

export const courses: Course[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `${allCategories[i]}核心技术`,
  teacher: `电子科技大学 ${i + 1}系`,
  platform: `平台 ${String.fromCharCode(65 + i)}`,
  imageId: `course-${i + 1}`,
  category: allCategories[i],
  status: statuses[i % 2],
}));

export const filters = {
  "开课状态": ["全部", "未开课", "已开课"],
  "热门搜索": ['电路设计', '微处理器', '信号处理', '嵌入式系统'],
  "其他搜索": ['机器学习', '数据结构', '操作系统', '计算机网络'],
};

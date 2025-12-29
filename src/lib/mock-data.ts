
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

export const courses: Course[] = [
  {
    id: 1,
    title: '电路分析基础',
    teacher: '于歆杰 - 清华大学',
    platform: '学堂在线',
    imageId: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: '电路分析基础',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08051000228/12582035',
  },
  {
    id: 2,
    title: '模拟电子技术基础',
    teacher: '华成英 - 清华大学',
    platform: '学堂在线',
    imageId: 'https://images.unsplash.com/photo-1555431182-0c3e7ade3979',
    category: '模拟电子技术',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/thu08051000288/12582103',
  },
  {
    id: 3,
    title: '信号与系统',
    teacher: '郑君里 - 上海交通大学',
    platform: '中国大学MOOC',
    imageId: 'https://picsum.photos/seed/signal-processing/400/250',
    category: '数字信号处理',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/SJTU-1002527001',
  },
  {
    id: 4,
    title: '嵌入式系统：应用开发方法',
    teacher: '周佳社 - 西安交通大学',
    platform: '智慧树',
    imageId: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a',
    category: '嵌入式系统设计',
    status: '未开课',
    videoUrl: 'https://www.zhihuishu.com/stuStudy?courseId=2111244',
  },
  {
    id: 5,
    title: '机器学习',
    teacher: '周志华 - 南京大学',
    platform: '中国大学MOOC',
    imageId: 'https://picsum.photos/seed/machine-learning-ai/400/250',
    category: '机器学习导论',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/NJU-1001563002',
  },
  {
    id: 6,
    title: '数据结构',
    teacher: '陈越/何钦铭 - 浙江大学',
    platform: '中国大学MOOC',
    imageId: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    category: '高级数据结构',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/ZJU-93001',
  },
  {
    id: 7,
    title: '操作系统原理',
    teacher: '向勇/陈渝 - 清华大学',
    platform: '学堂在线',
    imageId: 'https://picsum.photos/seed/operating-system/400/250',
    category: '操作系统原理',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000267/12582737',
  },
  {
    id: 8,
    title: '计算机网络',
    teacher: '湖科大教书匠',
    platform: 'Bilibili',
    imageId: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    category: '计算机网络原理',
    status: '已开课',
    videoUrl: 'https://www.bilibili.com/video/BV1c4411d7jb',
  },
  {
    id: 9,
    title: 'C++程序设计',
    teacher: '郑莉 - 清华大学',
    platform: '学堂在线',
    imageId: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    category: '程序设计',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000268/12582738',
  },
  {
    id: 10,
    title: '编译原理',
    teacher: '陈鄞 - 哈尔滨工业大学',
    platform: '中国大学MOOC',
    imageId: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    category: '编译原理',
    status: '未开课',
    videoUrl: 'https://www.icourse163.org/course/HIT-1001532001',
  },
  {
    id: 11,
    title: '大学物理',
    teacher: '“爱课程”团队',
    platform: '爱课程',
    imageId: 'https://images.unsplash.com/photo-1623223259972-68e314a275e7',
    category: '物理学',
    status: '已开课',
    videoUrl: 'https://www.icourses.cn/sCourse/course_3578.html',
  },
];


export const filters = {
  "开课状态": ["全部", "未开课", "已开课"],
  "热门搜索": ['电路设计', '微处理器', '信号处理', '模拟信号', '数字电路', '电子元器件', 'PCB设计', '耦合器件'],
  "其他搜索": ['机器学习', '数据结构', '操作系统', '计算机网络'],
};

export type User = {
  id: string;
  username: string;
  password?: string;
  role: '教师' | '学生';
  photoURL: string;
};

export const mockUsers: User[] = [
  { id: '1', username: '张雪', password: '123456', role: '教师', photoURL: 'https://picsum.photos/seed/user-teacher/200/200' },
  { id: '2', username: '李航', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/user-student/200/200' },
  { id: '3', username: '张伟', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-3/200/200' },
  { id: '4', username: '王磊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-4/200/200' },
  { id: '5', username: '李明', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-5/200/200' },
  { id: '6', username: '刘洋', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-6/200/200' },
  { id: '7', username: '陈杰', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-7/200/200' },
  { id: '8', username: '杨帆', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-8/200/200' },
  { id: '9', username: '赵强', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-9/200/200' },
  { id: '10', username: '黄俊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-10/200/200' },
  { id: '11', username: '周涛', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-11/200/200' },
  { id: '12', username: '吴昊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-12/200/200' },
  { id: '13', username: '徐凯', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-13/200/200' },
  { id: '14', username: '孙鹏', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-14/200/200' },
  { id: '15', username: '马超', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-15/200/200' },
  { id: '16', username: '朱晨', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-16/200/200' },
  { id: '17', username: '胡宇', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-17/200/200' },
  { id: '18', username: '郭鑫', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-18/200/200' },
  { id: '19', username: '何东', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-19/200/200' },
  { id: '20', username: '高翔', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-20/200/200' },
  { id: '21', username: '林峰', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-21/200/200' },
  { id: '22', username: '罗斌', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-22/200/200' },
  { id: '23', username: '郑浩', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-23/200/200' },
  { id: '24', username: '梁博', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-24/200/200' },
  { id: '25', username: '谢宇航', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-25/200/200' },
  { id: '26', username: '宋凯', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-26/200/200' },
  { id: '27', username: '唐磊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-27/200/200' },
  { id: '28', username: '韩旭', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-28/200/200' },
  { id: '29', username: '曹阳', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-29/200/200' },
  { id: '30', username: '曾俊杰', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-30/200/200' },
  { id: '31', username: '彭涛', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-31/200/200' },
  { id: '32', username: '蔡志强', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-32/200/200' },
  { id: '33', username: '魏晨', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-33/200/200' },
  { id: '34', username: '蒋浩然', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-34/200/200' },
  { id: '35', username: '沈睿', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-35/200/200' },
  { id: '36', username: '叶鑫', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-36/200/200' },
  { id: '37', username: '程亮', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-37/200/200' },
  { id: '38', username: '苏航', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-38/200/200' },
  { id: '39', username: '丁宇', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-39/200/200' },
  { id: '40', username: '任博', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-40/200/200' },
  { id: '41', username: '邓凯', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-41/200/200' },
  { id: '42', username: '方铭', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-42/200/200' },
  { id: '43', username: '金浩', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-43/200/200' },
  { id: '44', username: '白宇', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/student-44/200/200' },
];

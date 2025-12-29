
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
    title: '操作系统原理',
    teacher: '向勇/陈渝 - 清华大学',
    platform: '学堂在线',
    imageId: 'course-7',
    category: '操作系统原理',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000267/12582737',
  },
  {
    id: 8,
    title: '计算机网络',
    teacher: '湖科大教书匠',
    platform: 'Bilibili',
    imageId: 'course-8',
    category: '计算机网络原理',
    status: '已开课',
    videoUrl: 'https://www.bilibili.com/video/BV1c4411d7jb',
  },
  {
    id: 9,
    title: 'C++程序设计',
    teacher: '郑莉 - 清华大学',
    platform: '学堂在线',
    imageId: 'course-9',
    category: '程序设计',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000268/12582738',
  },
  {
    id: 10,
    title: '编译原理',
    teacher: '陈鄞 - 哈尔滨工业大学',
    platform: '中国大学MOOC',
    imageId: 'course-10',
    category: '编译原理',
    status: '未开课',
    videoUrl: 'https://www.icourse163.org/course/HIT-1001532001',
  },
  {
    id: 11,
    title: '大学物理',
    teacher: '“爱课程”团队',
    platform: '爱课程',
    imageId: 'course-11',
    category: '物理学',
    status: '已开课',
    videoUrl: 'http://www.icourses.cn/sCourse/course_3579.html',
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
  { id: '1', username: '张雪', password: '123456', role: '教师', photoURL: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1080&auto=format&fit=crop' },
  { id: '2', username: '李航', password: '123456', role: '学生', photoURL: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1080&auto=format&fit=crop' },
];

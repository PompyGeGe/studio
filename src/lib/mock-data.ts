
import imageManifest from './placeholder-images.json';

type ImageManifest = typeof imageManifest;
type ImageId = keyof ImageManifest;

export type Course = {
  id: number;
  title: string;
  teacher: string;
  platform: string;
  imageId: ImageId;
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
    imageId: 'circuit_analysis',
    category: '电路分析基础',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08051000228/12582035',
  },
  {
    id: 2,
    title: '模拟电子技术基础',
    teacher: '华成英 - 清华大学',
    platform: '学堂在线',
    imageId: 'analog_electronics',
    category: '模拟电子技术',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/thu08051000288/12582103',
  },
  {
    id: 3,
    title: '信号与系统',
    teacher: '郑君里 - 上海交通大学',
    platform: '中国大学MOOC',
    imageId: 'signals_systems',
    category: '数字信号处理',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/SJTU-1002527001',
  },
  {
    id: 4,
    title: '嵌入式系统：应用开发方法',
    teacher: '周佳社 - 西安交通大学',
    platform: '智慧树',
    imageId: 'embedded_systems',
    category: '嵌入式系统设计',
    status: '未开课',
    videoUrl: 'https://www.zhihuishu.com/stuStudy?courseId=2111244',
  },
  {
    id: 5,
    title: '机器学习',
    teacher: '周志华 - 南京大学',
    platform: '中国大学MOOC',
    imageId: 'machine_learning',
    category: '机器学习导论',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/NJU-1001563002',
  },
  {
    id: 6,
    title: '数据结构',
    teacher: '陈越/何钦铭 - 浙江大学',
    platform: '中国大学MOOC',
    imageId: 'data_structures',
    category: '高级数据结构',
    status: '已开课',
    videoUrl: 'https://www.icourse163.org/course/ZJU-93001',
  },
  {
    id: 7,
    title: '操作系统原理',
    teacher: '向勇/陈渝 - 清华大学',
    platform: '学堂在线',
    imageId: 'operating_systems',
    category: '操作系统原理',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000267/12582737',
  },
  {
    id: 8,
    title: '计算机网络',
    teacher: '湖科大教书匠',
    platform: 'Bilibili',
    imageId: 'computer_networks',
    category: '计算机网络原理',
    status: '已开课',
    videoUrl: 'https://www.bilibili.com/video/BV1c4411d7jb',
  },
  {
    id: 9,
    title: 'C++程序设计',
    teacher: '郑莉 - 清华大学',
    platform: '学堂在线',
    imageId: 'cpp_programming',
    category: '程序设计',
    status: '已开课',
    videoUrl: 'https://www.xuetangx.com/course/THU08091000268/12582738',
  },
  {
    id: 10,
    title: '编译原理',
    teacher: '陈鄞 - 哈尔滨工业大学',
    platform: '中国大学MOOC',
    imageId: 'compiler_principles',
    category: '编译原理',
    status: '未开课',
    videoUrl: 'https://www.icourse163.org/course/HIT-1001532001',
  },
  {
    id: 11,
    title: '大学物理',
    teacher: '“爱课程”团队',
    platform: '爱课程',
    imageId: 'university_physics',
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
  { id: '3', username: '张伟', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/zhangwei/200/200' },
  { id: '4', username: '王磊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/wanglei/200/200' },
  { id: '5', username: '李明', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/liming/200/200' },
  { id: '6', username: '刘洋', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/liuyang/200/200' },
  { id: '7', username: '陈杰', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/chenjie/200/200' },
  { id: '8', username: '杨帆', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/yangfan/200/200' },
  { id: '9', username: '赵强', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/zhaoqiang/200/200' },
  { id: '10', username: '黄俊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/huangjun/200/200' },
  { id: '11', username: '周涛', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/zhoutao/200/200' },
  { id: '12', username: '吴昊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/wuhao/200/200' },
  { id: '13', username: '徐凯', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/xukai/200/200' },
  { id: '14', username: '孙鹏', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/sunpeng/200/200' },
  { id: '15', username: '马超', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/machao/200/200' },
  { id: '16', username: '朱晨', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/zhuchen/200/200' },
  { id: '17', username: '胡宇', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/huyu/200/200' },
  { id: '18', username: '郭鑫', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/guoxin/200/200' },
  { id: '19', username: '何东', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/hedong/200/200' },
  { id: '20', username: '高翔', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/gaoxiang/200/200' },
  { id: '21', username: '林峰', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/linfeng/200/200' },
  { id: '22', username: '罗斌', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/luobin/200/200' },
  { id: '23', username: '郑浩', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/zhenghao/200/200' },
  { id: '24', username: '梁博', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/liangbo/200/200' },
  { id: '25', username: '谢宇航', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/xieyuhang/200/200' },
  { id: '26', username: '宋凯', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/songkai/200/200' },
  { id: '27', username: '唐磊', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/tanglei/200/200' },
  { id: '28', username: '韩旭', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/hanxu/200/200' },
  { id: '29', username: '曹阳', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/caoyang/200/200' },
  { id: '30', username: '曾俊杰', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/zengjunjie/200/200' },
  { id: '31', username: '彭涛', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/pengtao/200/200' },
  { id: '32', username: '蔡志强', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/caizhiqiang/200/200' },
  { id: '33', username: '魏晨', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/weichen/200/200' },
  { id: '34', username: '蒋浩然', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/jianghaoran/200/200' },
  { id: '35', username: '沈睿', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/shenrui/200/200' },
  { id: '36', username: '叶鑫', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/yexin/200/200' },
  { id: '37', username: '程亮', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/chengliang/200/200' },
  { id: '38', username: '苏航', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/suhang/200/200' },
  { id: '39', username: '丁宇', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/dingyu/200/200' },
  { id: '40', username: '任博', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/renbo/200/200' },
  { id: '41', username: '邓凯', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/dengkai/200/200' },
  { id: '42', username: '方铭', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/fangming/200/200' },
  { id: '43', username: '金浩', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/jinhao/200/200' },
  { id: '44', username: '白宇', password: '123456', role: '学生', photoURL: 'https://picsum.photos/seed/baiyu/200/200' },
];

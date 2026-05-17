use('qnu_quiz');

db.users.drop();
db.students.drop();
db.subjects.drop();
db.questions.drop();
db.exams.drop();
db.rankings.drop();
db.subjectstatistics.drop();

db.users.createIndex({ email: 1 }, { unique: true });
db.students.createIndex({ userId: 1 }, { unique: true });
db.students.createIndex({ studentCode: 1 }, { unique: true });
db.questions.createIndex({ subjectId: 1 });
db.exams.createIndex({ studentId: 1, subjectId: 1 });
db.rankings.createIndex({ studentId: 1, subjectId: 1 }, { unique: true });
db.subjectstatistics.createIndex({ subjectId: 1 }, { unique: true });

const adminId = ObjectId();
const studentUserId1 = ObjectId();
const studentUserId2 = ObjectId();
const studentId1 = ObjectId();
const studentId2 = ObjectId();
const subjectId1 = ObjectId();
const subjectId2 = ObjectId();
const subjectId3 = ObjectId();

db.users.insertMany([
  {
    _id: adminId,
    fullName: 'Admin QNU',
    email: 'admin@qnu.edu.vn',
    password: '$2a$10$7k8Yd6jB6QZxWNsPiW9a5OpjWDuR3BqPf3QwcpYQkM9hM14tLVc1m',
    role: 'admin',
    createdAt: new Date()
  },
  {
    _id: studentUserId1,
    fullName: 'Nguyen Van An',
    email: 'an@student.qnu.edu.vn',
    password: '$2a$10$7k8Yd6jB6QZxWNsPiW9a5OpjWDuR3BqPf3QwcpYQkM9hM14tLVc1m',
    role: 'student',
    createdAt: new Date()
  },
  {
    _id: studentUserId2,
    fullName: 'Tran Thi Binh',
    email: 'binh@student.qnu.edu.vn',
    password: '$2a$10$7k8Yd6jB6QZxWNsPiW9a5OpjWDuR3BqPf3QwcpYQkM9hM14tLVc1m',
    role: 'student',
    createdAt: new Date()
  }
]);

db.students.insertMany([
  {
    _id: studentId1,
    userId: studentUserId1,
    studentCode: 'QNU2024001',
    className: 'CNTT K46A',
    faculty: 'Cong nghe thong tin',
    academicYear: '2024-2028'
  },
  {
    _id: studentId2,
    userId: studentUserId2,
    studentCode: 'QNU2024002',
    className: 'Kinh te K46B',
    faculty: 'Kinh te va Ke toan',
    academicYear: '2024-2028'
  }
]);

db.subjects.insertMany([
  {
    _id: subjectId1,
    subjectName: 'Tin hoc dai cuong',
    description: 'Mon hoc cung cap kien thuc nen tang ve may tinh va cong nghe thong tin.',
    createdAt: new Date()
  },
  {
    _id: subjectId2,
    subjectName: 'Triet hoc Mac - Lenin',
    description: 'Mon hoc dai cuong ve cac nguyen ly co ban cua chu nghia Mac - Lenin.',
    createdAt: new Date()
  },
  {
    _id: subjectId3,
    subjectName: 'Phap luat dai cuong',
    description: 'Mon hoc gioi thieu nhung kien thuc co ban ve nha nuoc va phap luat.',
    createdAt: new Date()
  }
]);

db.questions.insertMany([
  {
    subjectId: subjectId1,
    content: 'Don vi nho nhat de bieu dien thong tin trong may tinh la gi?',
    difficulty: 'easy',
    createdAt: new Date(),
    options: [
      { optionText: 'Bit', isCorrect: true },
      { optionText: 'Byte', isCorrect: false },
      { optionText: 'Kilobyte', isCorrect: false },
      { optionText: 'Megabyte', isCorrect: false }
    ]
  },
  {
    subjectId: subjectId1,
    content: 'He dieu hanh co chuc nang chinh nao sau day?',
    difficulty: 'easy',
    createdAt: new Date(),
    options: [
      { optionText: 'Quan ly tai nguyen phan cung va phan mem', isCorrect: true },
      { optionText: 'Chi dung de soan thao van ban', isCorrect: false },
      { optionText: 'Chi dung de truy cap Internet', isCorrect: false },
      { optionText: 'Chi dung de ve hinh', isCorrect: false }
    ]
  },
  {
    subjectId: subjectId2,
    content: 'Theo triet hoc Mac - Lenin, vat chat duoc hieu la gi?',
    difficulty: 'medium',
    createdAt: new Date(),
    options: [
      { optionText: 'Phan anh thuc tai khach quan ton tai doc lap voi y thuc', isCorrect: true },
      { optionText: 'San pham tuong tuong cua con nguoi', isCorrect: false },
      { optionText: 'Tap hop cac cam giac ca nhan', isCorrect: false },
      { optionText: 'Y niem tuyet doi', isCorrect: false }
    ]
  },
  {
    subjectId: subjectId3,
    content: 'Hien phap la gi trong he thong phap luat Viet Nam?',
    difficulty: 'easy',
    createdAt: new Date(),
    options: [
      { optionText: 'Dao luat co hieu luc phap ly cao nhat', isCorrect: true },
      { optionText: 'Van ban hanh chinh thong thuong', isCorrect: false },
      { optionText: 'Quy che noi bo cua mot truong dai hoc', isCorrect: false },
      { optionText: 'Hop dong dan su', isCorrect: false }
    ]
  }
]);

db.subjectstatistics.insertMany([
  { subjectId: subjectId1, totalAttempts: 0, averageScore: 0 },
  { subjectId: subjectId2, totalAttempts: 0, averageScore: 0 },
  { subjectId: subjectId3, totalAttempts: 0, averageScore: 0 }
]);

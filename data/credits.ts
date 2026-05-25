export interface Member {
  name: string
  studentId: string
  role: string
  github?: string
  email?: string
}

export const members: Member[] = [
  {
    name: '박도현',
    studentId: '60220311',
    role: '사이트 개발 및 디자인',
    github: 'walkingdomi',
    email: 'dohyun9041@naver.com'
  },
  {
    name: '권예슬',
    studentId: '6023',
    role: '사이트 개발 및 콘텐츠 관리',
    email : 'yxsxux@mju.ac.kr'
  }
]

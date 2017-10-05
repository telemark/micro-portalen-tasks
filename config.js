module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  ENCRYPTOR_SECRET: process.env.ENCRYPTOR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  compilo: {
    url: process.env.COMPILO_URL || 'https://feed.klos.no',
    username: process.env.COMPILO_X1 || 'x1',
    password: process.env.COMPILO_X2 || 'x2'
  },
  visma: {
    url: process.env.VISMA_URL || 'http://localhost:8290/hrm_ws/secure/tasks/username/',
    username: 'username',
    password: 'password'
  }
}

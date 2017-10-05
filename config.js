module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  compilo: {
    url: process.env.COMPILO_URL || 'https://feed.klos.no',
    username: process.env.COMPILO_USERNAME || 'x1',
    password: process.env.COMPILO_PASSWORD || 'x2'
  },
  visma: {
    url: process.env.VISMA_URL || 'http://localhost:8290/hrm_ws/secure/tasks/username/',
    username: process.env.VISMA_USERNAME || 'username',
    password: process.env.COMPILO_PASSWORD || 'password'
  },
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'micro-portalen-tasks',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}

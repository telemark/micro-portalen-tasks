'use strict'

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  ENCRYPTOR_SECRET: process.env.ENCRYPTOR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SERVICES: {
    compilo: process.env.COMPILO_URL || 'https://feed.compilo.no',
    visma: process.env.VISMA_URL || 'http://localhost:8290/hrm_ws/secure/tasks/username/'
  },
  COMPILO_X1: process.env.COMPILO_X1 || 'x1',
  COMPILO_X2: process.env.COMPILO_X2 || 'x2'
}

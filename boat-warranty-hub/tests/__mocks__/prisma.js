const { mockDeep } = require('jest-mock-extended');

const prismaMock = mockDeep();

module.exports = {
  __esModule: true,
  default: prismaMock,
  prisma: prismaMock,
};

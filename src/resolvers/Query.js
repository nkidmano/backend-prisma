const Query = {
  async users(root, args, { prisma }) {
    return await prisma.users();
  },
};

module.exports = Query;

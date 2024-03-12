const { prisma } = require("../prisma/prisma-client");

const LikeController = {
  likePost: async (req, res) => {
    const { postId } = req.body;
    const userId = req.user.userId;

    if (!postId) {
      return res.status(400).json({ error: "Все поля обязательны!" });
    }

    try {
      const existingLike = await prisma.like.findFirst({
        where: { postId, userId },
      });

      if (existingLike) {
        return res.status(400).json({
          error: "Вы уже поставили лайк",
        });
      }

      const like = await prisma.like.create({
        data: { postId, userId },
      });

      res.json(like);
    } catch (error) {
      console.log("Error like post", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
  unlikePost: async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    if (!id) {
      return res.status(400).json({
        error: "Вы уже поставили лайк!",
      });
    }
    try {
      const existingLike = await prisma.like.findFirst({
        where: { postId, userId },
      });

      if (!existingLike) {
        return res.status(400).json({
          error: "Лайк уже существует!",
        });
      }
      const like = await prisma.like.deleteMany({
        where: { postId, id, userId },
      });

      res.json(like);
    } catch (error) {
      console.log("Error unlike post", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  },
};

module.exports = LikeController;

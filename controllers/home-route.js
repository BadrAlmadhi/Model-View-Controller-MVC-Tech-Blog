const router = require("express").Router();
const e = require("express");
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbUser = await User.findAll({
        include: [
            {
                model: User,
                
            }
        ]
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

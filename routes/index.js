const router = require('express').Router()
const Todo = require("../models/Todo");

router.get("/", async(req, res) => {
    const _id = req.body._id;
    const allTodos = await Todo.find();
    const oneTodo = await Todo.find({_id: _id})
    res.render("index",{todo: allTodos ,one: oneTodo})
})

module.exports = router;
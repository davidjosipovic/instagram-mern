const { Signup,Login } = require("../controllers/auth.controller");
const router = require("express").Router();
const {userVerification}=require("../middleware/auth");

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/',userVerification);

module.exports = router;
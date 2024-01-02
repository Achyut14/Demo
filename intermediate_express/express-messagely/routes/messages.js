/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/


/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/


/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
const Router = require("express").Router;
const Messages = require("../models/message");
const {ensureLoggedIn, ensureCorrectUser} = require("../middleware/auth");
const ExpressError = require("../expressError");

const router = new Router();

//Getting detail of messages
router.get("/:id", ensureCorrectUser, async function(req, res, next){
    try{
        let messages = await Messages.get(req.params.username);
        const currentUser = res.user.username
        if (messages.to_user.username !== currentUser && 
                messages.from_user.username !== currentUser){
                    throw new ExpressError("Can only read");
                }
        return res.json({messages});
    } catch(e){
        return next(e)
    }
});

//Posting Messages
router.post("/", ensureLoggedIn, async function(req, res, next){
    try{
        const messages = await Messages.create({
            from_username: res.user.username,
            to_username: req.body.to_username,
            body: req.body.body
        });
        return res.json({messages});
    } catch(e){
        return next(e)
    }
});

router.post("/:id/read", ensureLoggedIn, async function (req, res, next) {
    const message = await Messages.get(req.params.id);
    const currentUser = res.user.username;

    if (message.to_user.username !== currentUser) {
        throw new ExpressError("Only recipients can mark message as read");
    }

    const readMessage = await Messages.markRead(req.params.id);
    return res.json({ readMessage }); 
})









module.exports = router;
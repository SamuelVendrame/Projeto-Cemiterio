const autoSend = (req, res, next) => {
    console.log(req.session);

    if(req.session.user){
        return res.redirect('/admin')
    }
    next()
}

module.exports = autoSend;
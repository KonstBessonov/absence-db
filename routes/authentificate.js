var express = require('express');

function authentificate(req, res, next) {

    if (req.app.get('env') === 'development') {
        req.headers['x-iisnode-auth_user'] = 'ORDS\\k.bessonov';
    }

    var user = {};
    user.name = req.headers['x-iisnode-auth_user'].split('\\')[1];

    user.displayName = 'Бессонов К. А.';
    user.allowReports = true;
    user.allowSetup = true;

    req.user = user;
    next();
    // var err = new Error('Access denied');
    // err.status = 401;
    // next(err);
};

module.exports = authentificate;
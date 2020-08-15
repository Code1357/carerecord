'use strict';

module.exports = {

  index: (req, res) => {
    res.render('index', { title: '', sub: '', Annotation: '推奨ブラウザ:Chrome' });
  },
  offTop: function (req, res, next) {
    const top = 'top';
    res.locals.top = top;
    next();
  }

};

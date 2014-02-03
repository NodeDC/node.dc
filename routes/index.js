/* jslint node:true */
/*******************************************************************************
 * GET `home` page.
 ******************************************************************************/
exports.index = function(req, res){
    'use strict';
    res.render('index');
};

/*******************************************************************************
 * Get Angular Partials.
 ******************************************************************************/
exports.partials = function (req, res) {
    'use strict';
    var name = req.params.name;
    res.render('partials/' + name);
};

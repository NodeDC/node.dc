/* jslint node:true */
/*******************************************************************************
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
    'use strict';
    res.json({
        name: 'Node.DC'
    });
};

exports.rss = function(req, res){
	'use strict';
	
}
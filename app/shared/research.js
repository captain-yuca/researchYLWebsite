"use strict";
var Research = (function () {
    function Research() {
    }
    function setupDB(){
	var sql = require('sql');

	sql.setDialect('postgres');

	/*
		Declares the Schematic to be utlized by the table
	*/
	var paper = sql.define(
		{
			name:'paper',
			columns:['date','contributor','link', 'chemicalName']
		}
	);

	/*
		Updates The Table with provided fields
	*/
	var post = sql.define(
		{
			name:'post',
			columns:['date','contributor','link','chemicalName']			
		}
	);
    }
    return Research;
}());
exports.Research = Research;
//# sourceMappingURL=research.js.map
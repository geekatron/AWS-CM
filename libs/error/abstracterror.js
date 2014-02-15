/**
 * Created with WebStorm.
 * Date: 2/8/2014
 * Time: 2:40 AM
 * @author Adam C. Nowak
 * @description
 */

/*jslint node: true */

"use strict";

var util = require('util');

var AbstractError = function (message, constr) {
    Error.captureStackTrace(this, constr || this);
    this.message = message || 'Error';

};
util.inherits(AbstractError, Error);
AbstractError.prototype.name = 'Abstract Error';
AbstractError.prototype.httpCode = 500;

var PromotionNotFoundError = function (message) {
    PromotionNotFoundError.super_.call(this, message, this.constructor);
};

util.inherits(PromotionNotFoundError, AbstractError);
PromotionNotFoundError.prototype.httpCode = 404;
PromotionNotFoundError.prototype.name = 'Promotion Not Found Error';

var ContentNotFoundError = function (message) {
    ContentNotFoundError.super_.call(this, message, this.constructor);
};

util.inherits(ContentNotFoundError, AbstractError);
ContentNotFoundError.prototype.httpCode = 404;
ContentNotFoundError.prototype.name = 'Content library Not Found Error';


var DatabaseNotAvailableError = function (message) {
    DatabaseNotAvailableError.super_.call(this, message, this.constructor);
};

util.inherits(DatabaseNotAvailableError, AbstractError);
DatabaseNotAvailableError.prototype.httpCode = 503;
DatabaseNotAvailableError.prototype.name = 'Data is not available Error';


var ValidationError = function (message, errors) {
    ValidationError.super_.call(this, message, this.constructor);
    this.errors = errors;
};

util.inherits(ValidationError, AbstractError);
ValidationError.prototype.httpCode = 400;
ValidationError.prototype.name = 'Input Validation Error';

var BadContentTypeError = function (message) {
    BadContentTypeError.super_.call(this, message, this.constructor);

};
util.inherits(BadContentTypeError, AbstractError);
BadContentTypeError.prototype.httpCode = 415;
BadContentTypeError.prototype.name = 'Bad Content Type Error';


module.exports = {
    NotFound: PromotionNotFoundError,
    ContentNotFound: ContentNotFoundError,
    DataBaseNotAvailable: DatabaseNotAvailableError,
    Validation: ValidationError,
    BadContentType: BadContentTypeError
};

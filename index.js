'use strict';

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;

  request.uri = encodeURI(request.uri)

  callback(null, request);
};

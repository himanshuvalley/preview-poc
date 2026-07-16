'use strict';

module.exports.hello = async (event) => {
  const stage = process.env.STAGE || 'unknown';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'Preview PoC is working',
      stage: stage,
      path: event.path || event.rawPath || '/',
    }),
  };
};
// circle delete test

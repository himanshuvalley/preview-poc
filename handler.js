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
// PR TWO 2026-07-16T16:17:11+05:30

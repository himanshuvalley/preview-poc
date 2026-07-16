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
// test Thursday 16 July 2026 03:50:55 PM IST
// test Thursday 16 July 2026 03:57:11 PM IST
// test                Local time: Thu 2026-07-16 15:58:03 IST
           Universal time: Thu 2026-07-16 10:28:03 UTC
                 RTC time: Thu 2026-07-16 10:28:03
                Time zone: Asia/Kolkata (IST, +0530)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no

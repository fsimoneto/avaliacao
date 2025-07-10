const http = require('k6/http');
const { sleep, check } = require('k6');
const { htmlReport } = require('https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js');

exports.options = {
  vus: 500,
  duration: '5m',
  thresholds: {
    'http_req_duration': ['p(95)<2000'],
    'http_req_failed': ['rate<0.01'],
  },
};

exports.handleSummary = function(data) {
  return {
    'summary.html': htmlReport(data),
  };
};

exports.default = function() {
  const res = http.get('https://reqres.in/api/users?page=2');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
};

const http = require('k6/http');
const { sleep, check } = require('k6');
const { htmlReport } = require('https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js');

exports.options = {
  vus: 10,
  duration: '10s',
  thresholds: {
    'http_req_duration': ['p(95)<2000'],  // 95% das requisições devem responder em menos de 2000ms
    'http_req_failed': ['rate<0.01'],     // Menos de 1% das requisições podem falhar
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

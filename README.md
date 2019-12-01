[![Build Status](https://travis-ci.org/telemark/micro-portalen-tasks.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-tasks)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-portalen-tasks

Collect tasks for user

## Example
```json
{
  "user": "user1",
  "data": [
    {
      "systemid": "visma",
      "title": "Timelister til behandling",
      "url": "http://tfk-fh-visma01:8200/hrm/organisasjon/blah/ORGANIZATION_TASKS_NODE/TIMESHEET",
      "number": "1",
      "timestamp": 1507229802606
    },
    {
      "systemid": "visma",
      "title": "Varsel ansatt",
      "url": "http://tfk-fh-visma01:8200/hrm/organisasjon/blah/ORGANIZATION_TASKS_NODE/ALERT",
      "number": "4",
      "timestamp": 1507229802606
    }
  ]
}
```

## License

[MIT](LICENSE)

[![Build Status](https://travis-ci.org/telemark/micro-portalen-tasks.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-tasks)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-portalen-roles.svg)](https://greenkeeper.io/)

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
    },
    {
      "systemid": "compilo",
      "title": "Dokumenter til revisjon (33)",
      "url": "http://klos.no/system.php",
      "timestamp": 1507229803205
    },
    {
      "systemid": "compilo",
      "title": "Revisjonsansvar (65)",
      "url": "http://klos.no/",
      "timestamp": 1507229803205
    }
  ]
}
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-portalen-tasks.png "Robohash image of micro-portalen-tasks")

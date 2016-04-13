require('shelljs/global');

var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.hour = 6;
rule.minute = 0;

var j = schedule.scheduleJob(rule, function(){
  if (exec('node app.js').code !== 0) {
	  echo('Error: Update failed');
	  exit(1);
	}
});
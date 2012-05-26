var sprintf = require(__dirname + '/..');

sprintf('Hallo %s!', 'Welt');
sprintf.sprintf('Hallo %s!', 'Welt');
sprintf.vsprintf('Hallo %s!', ['Welt']);

var alarm = chrome.alarms.create("myAlarm", {delayInMinutes: 1, periodInMinutes: 15} ); 

chrome.alarms.onAlarm.addListener( function (alarm) {

  chrome.notifications.clear('breath-conscious')
  
  var notification = chrome.notifications.create(
    'breath-conscious', {
      type: 'basic',
      iconUrl: 'conscious-breathing.jpg',

      // Customize either the notification title or message
      title: 'Breath Conscious!',
      message: 'Take a deep conscious breath'
    },

    function () {}

  );
});

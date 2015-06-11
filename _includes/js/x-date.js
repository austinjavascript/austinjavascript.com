(function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December' ];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'];
  var period = ['A.M.', 'P.M.'];

  function ordinalSuffix(i) {
    var mod10 = i % 10, mod100 = i % 100;
    if (mod10 == 1 && mod100 != 11) return 'st';
    if (mod10 == 2 && mod100 != 12) return 'nd';
    if (mod10 == 3 && mod100 != 13) return 'rd';
                                    return 'th';
  }

  var XDate = document.registerElement('x-date', {
    prototype: Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          var format = this.getAttribute('format') || 'day';

          this._date = new Date(this.textContent);

          if (format == 'meetup')
            this.innerHTML = this._formatMeetup();
          else
            this.innerHTML = this._formatDay();

        }
      },

      _formatDay: {
        value: function() {
          return this.month() + ' ' + this.date() + '<sup>' +
            ordinalSuffix(this.date()) + '</sup>';
        }
      },

      _formatMeetup: {
        value: function() {
          var end = new Date(this._date.valueOf() + 90 * 60 * 1000);
          // this space brought to you by @lawnsea
          return this.day() + ', ' + this._formatDay() + ', from ' +
            this.time() + ' to ' + this.time(end);
        }
      },

      month: {
        value: function() {
          return months[this._date.getMonth()];
        }
      },

      date: {
        value: function() {
          return this._date.getDate();
        }
      },

      day: {
        value: function() {
          return days[this._date.getDay()];
        }
      },

      time: {
        value: function(d) {
          d = d || this._date;

          var h = d.getHours() % 12;
          var m = (d.getMinutes() < 10? '0' : '') + d.getMinutes();
          var p = period[Math.floor(d.getHours() / 12)];

          return h + ':' + m + ' ' + p;
        }
      },

      when: {
        value: function() {
          return new Date(this._date.valueOf());
        }
      }
    })
  });
})();

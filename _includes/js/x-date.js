(function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December' ];

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
          this._date = new Date(this.textContent);
          this.innerHTML = this.month() + ' ' + this.date() +
            '<sup>' + ordinalSuffix(this.date()) + '</sup>';
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

      when: {
        value: function() {
          return new Date(this._date.valueOf());
        }
      }
    })
  });
})();

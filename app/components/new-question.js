import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes')

      };
      this.sendAction('saveQuestion', params);
    }
  }
});

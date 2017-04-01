import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    update(question) {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes')
      };
      this.sendAction('update', question, params);
    }
  }
});

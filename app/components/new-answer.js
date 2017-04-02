import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        contributor: this.get('contributor'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
  contributor: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});

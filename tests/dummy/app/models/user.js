import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age:  DS.attr('number'),
  pets: DS.hasMany('pet', { inverse: 'owner' }),
  bestie: DS.belongsTo('pet')
});
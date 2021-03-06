import Ember from 'ember';
import IsUpdateDisabled from 'hospitalrun/mixins/is-update-disabled';
import SelectValues from 'hospitalrun/utils/select-values';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend(IsUpdateDisabled, {
  patientsController: Ember.inject.controller('patients'),

  categoryTypes: [
    'Clothing',
    'Education',
    'Electricity',
    'Food',
    'Fuel',
    'Other',
    'Rent',
    'Transportation',
    'Water'
  ].map(SelectValues.selectValuesMap),

  editController: Ember.computed.alias('patientsController'),
  showUpdateButton: true,
  title: t('patients.titles.social_work'),
  updateButtonAction: 'update',

  updateButtonText: function() {
    var isNew = this.get('model.isNew');
    if (isNew) {
      return this.get('i18n').t('buttons.add');
    } else {
      return this.get('i18n').t('buttons.add');
    }
  }.property('model.isNew'),

  actions: {
    cancel: function() {
      this.send('closeModal');
    },

    update: function() {
      var model = this.get('model');
      this.get('editController').send('updateExpense', model);
    }
  }
});

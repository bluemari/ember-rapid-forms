import Ember from 'ember';
import layout from '../templates/components/html-text';

export default Ember.Component.extend({
  layout: layout,
  didReceiveAttrs( /*attrs*/ ) {
    this._super(...arguments);
    // set it to the correct value of the selection
    this.selectedValue = Ember.computed('mainComponent.model.' + this.get('mainComponent.property'), function() {
      return this.get('mainComponent.model.' + this.get('mainComponent.property'));
    });
  },
  actions: {
    change: function() {
      const selectedEl = this.$('textarea')[0];
      const value = selectedEl.value;
      this.set('mainComponent.model.' + this.get('mainComponent.property'), value);
      const changeAction = this.get('action');
      if(changeAction){
        changeAction(value);
      }
      else{
        // TODO make deprecate here so everyone switches to new action syntax
      }
    },
    input: function() {
      // input is always called when input is altert
      // except in IE9 where when cutting or removing things it doesn't get fired
      // https://developer.mozilla.org/en-US/docs/Web/Events/input#Browser_compatibility
      const selectedEl = this.$('textarea')[0];
      const value = selectedEl.value;
      this.set('mainComponent.model.' + this.get('mainComponent.property'), value);
      const changeAction = this.get('action');
      if(changeAction){
        changeAction(value);
      }
      else{
        // TODO make deprecate here so everyone switches to new action syntax
      }
    }
  }
});

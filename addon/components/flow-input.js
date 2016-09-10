import Ember from 'ember';

const {
  Component,
  computed,
  isBlank
} = Ember;

export default Component.extend({
  label: '',
  name: '',
  value: '',
  type: 'text',
  theme: 'hoshi',

  tagName: 'span',
  classNames: ['input'],
  classNameBindings: ['themeClass'],

  themeClass: computed('theme', function() {
    let { theme } = this.getProperties('theme');
    if (isBlank(theme)) theme = 'hoshi';
    return `input--${theme}`;
  }),

  inputFieldClass: computed('theme', function() {
    let { theme } = this.getProperties('theme');
    if (isBlank(theme)) theme = 'hoshi';
    return `input__field input__field--${theme}`;
  }),

  inputLabelClass: computed('theme', function() {
    let { theme } = this.getProperties('theme');
    if (isBlank(theme)) theme = 'hoshi';
    return `input__label input__label--${theme}`;
  }),

  inputContentClass: computed('theme', function() {
    let { theme } = this.getProperties('theme');
    if (isBlank(theme)) theme = 'hoshi';
    return `input__label-content input__label-content--${theme}`;
  })
});

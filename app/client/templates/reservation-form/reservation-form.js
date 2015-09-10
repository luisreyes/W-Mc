/*****************************************************************************/
/* ReservationForm: Event Handlers */
/*****************************************************************************/
Template.ReservationForm.events({

  'click .reservation-form-button-add': function() {
    if (Template.instance().viewmodel.name()) {

      // Manual update the DatePicker
      Template.instance().viewmodel.date($('.datetimepicker').data("DateTimePicker").date()._d);

      // Create the reservation
      Meteor.call('addReservation', Template.instance().viewmodel.toJS());

      // Reset viewmodel for new reservation
      Template.instance().viewmodel.reset();

      // Reset DateTimePicker
      $('.datetimepicker').data("DateTimePicker").date(new Date());

    } else {
      // Input is invalid
      $('.reservation-form-name .input-group').addClass('invalid');
    }

  },

  'focus #formName': function(e) {
    // Clear validation errors
    $('.reservation-form-name .input-group').removeClass('invalid');
  },

  'click .dropdown a': function(e) {
    // Manual update the Dropdown
    Template.instance().viewmodel.sitting(e.target.innerText);
  }

});


/*****************************************************************************/
/* ReservationForm: ViewModel */
/*****************************************************************************/
Template.ReservationForm.viewmodel({
  name: '',
  date: new Date(),
  adults: 1,
  kids: 0,
  sitting: 'Table',
  notes: '',
  isFulfilled: false

});

/*****************************************************************************/
/* ReservationForm: Lifecycle Hooks */
/*****************************************************************************/
Template.ReservationForm.onRendered(function() {
  this.$('.datetimepicker').datetimepicker({
    minDate: new Date(),
    useCurrent: true,
    showTodayButton: true,
    allowInputToggle: true,
    showClose: true,
    format: 'MMM Do YYYY - h:mm a'
  });
});
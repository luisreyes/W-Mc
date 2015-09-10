/*****************************************************************************/
/* Reservations: Event Handlers */
/*****************************************************************************/
Template.Reservations.events({
  'click .reservation-button-discard': function(e) {
    Meteor.call('discardReservation', this._id);
  },
  'click .reservation-button-fulfill': function(e) {
    Meteor.call('fulfillRestoreReservation', this._id, true);
  },
  'click .reservation-button-restore': function(e) {
    Meteor.call('fulfillRestoreReservation', this._id, false);
  }
});

/*****************************************************************************/
/* Reservations: Helpers */
/*****************************************************************************/
Template.Reservations.helpers({
  'reservations': function(isFulfilled) {
    return Reservations.find({
      isFulfilled: isFulfilled
    });
  },
  'emptyMessage': function(isFulfilled) {
    return "There are no " + (isFulfilled ? "fulfilled" : "active") + " reservations to display";
  }
});

/*****************************************************************************/
/* ReservationsItem: Lifecycle Hooks */
/*****************************************************************************/
Template.Reservations.onCreated(function() {
  Handlebars.registerHelper('party', function(adults, kids) {
    return parseInt(adults) + parseInt(kids);
  });
  Handlebars.registerHelper('pretty', function(date) {
    return moment(date).format("ddd, MMM Do - h:mm a");
  });
  Handlebars.registerHelper('fromNow', function(date, isFulfilled) {
    var prepend = isFulfilled ? 'Fulfilled' : 'Created';
    return prepend + ' ' + moment(date).fromNow();
  });
});

Template.Reservations.onRendered(function() {
  $('.reservations').css('maxHeight', window.outerHeight - 280);
});
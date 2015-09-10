/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'addReservation': function(model) {
    model.createdAt = new Date();
    model.createdBy = Meteor.userId();
    Reservations.insert(model);
  },
  'fulfillRestoreReservation': function(id, isFulfilled) {

    Reservations.update(id, {

      $set: {
        fulfilledAt: new Date(),
        isFulfilled: isFulfilled
      }
    });

  },
  'discardReservation': function(id) {
    Reservations.remove(id);
  }
});
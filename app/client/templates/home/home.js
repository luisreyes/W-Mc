ReactiveTabs.createInterface({
  template: 'ReservationTabs',
  onChange: function(slug, template) {
    Session.set('activeTab', slug);
  }
});


/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  tabs: function() {
    return [{
      name: 'Active',
      slug: 'active',
      count: function() {
        return Reservations.find({
          isFulfilled: false
        }).count();
      }
    }, {
      name: 'Fulfilled',
      slug: 'fulfilled',
      count: function() {
        return Reservations.find({
          isFulfilled: true
        }).count();
      }
    }];
  },
  activeTab: function() {
    return Session.get('activeTab');
  }
});
var SeatsView = Backbone.View.extend({
	el: "#container",
	// initialize: function () {
	// 	this.model.fetch(); // fetching the model data from /my/url
	// },

	render: function() {
	    this.$el.appendTo('#main');
	    console.log(this.model);
	    var planeID = this.model.get('plane_id');
	    var plane = app.planes.where({id: plane_id });
	    var columns = plane[0].get('columns');
	    var rows = plane[0].get('row');
	    console.log(columns);
	    console.log(rows);

	// // render: function(){
	// // 	this.$el.html("SEATS");
	//
	// 	return this;
	}
});


// var app = app || {};
// app.SeatingView = Backbone.View.extend({
//   tagName: 'div',
//   className: 'plane',
//   events: {
//   'click .seat': 'selectSeat',
//   'click #save': 'reserveSeat'
// },
//   render: function() {
//     this.$el.appendTo('#main');
//     console.log(this.model);
//     var planeID = this.model.get('plane_id');
//     var plane = app.planes.where({id: plane_id });
//     var columns = plane[0].get('columns');
//     var rows = plane[0].get('row');
//     console.log(columns);
//     console.log(rows);
//     // letters to set to seat
//     var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     // looping rows & columns
//     for (var x = 1; x <= rows; x++) {
//       for (var y = 1; y <= columns; y++) {
//         var seatName = x.toString() + letters[y-1]
//         var $seat = $('<div class="unselected seat" id=' +seatName + '>' + seatName + '</div>');
//         $seat.addClass(seatName);
//         this.$el.append($seat)
//       }
//     }
//     var $button = $('<button id="save">Reserve</button>');
//     this.$el.append($button);
//     var flightID= this.model.get('id');
//     var flightBookings = app.reservations.where({flight_id: flightID});
//     var seatsTaken = flightBookings.map(function(flight) {
//       return flight.get('seat')
//     });
//       _.each(seatsTaken,function(s){
//         $('div[id="'+ s + '"]').addClass('taken')
//       })
//   },
//   selectSeat: function(event){
//     // only allowing one seat to be selected per reservation
//     var planeID = this.model.get('id');
//     var alreadyBooked= app.bookings.where({user_id: app.GlobalUser, flight_id: planeID});
//     if (alreadyBooked.length === 0){
//       var $seat = $(event.target);
//       var reserved = $('.seat').hasClass('reserved')
//       if (!reserved || $seat.hasClass('reserved')){
//         $(event.target).toggleClass('reserved');
//       }
//     } else {
//       alert('You have already made a reservation. Please book another flight.')
//     }
//   },
//   reserveSeat: function() {
//     // debugger;
//     var planeID = this.model.get('id');
//     var alreadyBooked= app.bookings.where({user_id: app.GlobalUser, flight_id: planeID});
//     var reserved = $('.seat').hasClass('reserved')
//     if (reserved){
//       var arrayOfselectedSeats = $('.plane .reserved')
//       app.bookings.create({
//         user_id: app.GlobalUser,
//         flight_id: this.model.get('id'),
//         seat: $('.plane .reserved').text()
//       })
//       var $success = $('<p>').html('You have reserved seat: ' + $('.plane .reserved').text() + '. <p>No refunds or exchanges. Please read the fine print.</p>');
//       this.$el.append($success);
//     } else if (alreadyBooked.length> 0){
//       alert("You already have a reservation.")
//     } else {
//       alert("Hurry, please pick a seat!!!!");
//     }
//   },
// });

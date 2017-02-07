User.destroy_all
u1 = User.create :name =>'Mel', :email=>"meljamei.info@gmail.com", :password =>'chicken', :password_confirmation => 'chicken'
u2 = User.create :name =>'Matthew', :email=>"mat.edge@gmail.com", :password =>'chicken', :password_confirmation => 'chicken', :admin => true
u3 = User.create :name =>'Rati', :email=>"ratixoxo@gmail.com", :password =>'chicken',:password_confirmation => 'chicken'




Plane.destroy_all
p1 = Plane.create :name=>"Boeing 757", :rows=>27, :columns=>3
p2 = Plane.create :name=>"Boeing 777", :rows=>18, :columns=>1
p3 = Plane.create :name=>"Airbus A320", :rows=>10, :columns=>5


Flight.destroy_all
f1 = Flight.create :date =>"27/4/2017", :origin =>"Sydney",  :destination =>"Melbourn"
f2 = Flight.create :date =>"17/7/2017", :origin =>"Sydney",  :destination =>"London"
f3 = Flight.create :date =>"23/3/2017", :origin =>"Sydney",  :destination =>"China"


Reservation.destroy_all
f1.reservations.create user: u1, seat_row: 12, seat_col: 3
f1.reservations.create user: u2, seat_row: 18, seat_col: 1
f2.reservations.create user: u3, seat_row: 25, seat_col: 6


p1.flights << f3 << f2
p2.flights << f1

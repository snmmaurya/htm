# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Roles
["ADMIN", "SUPER", "USER"].each do |role|
	Role.where(:title => role).first_or_create
end

#ADMIN user
User.create({name: "Snm Maurya", email: "snmmaurya@gmail.com", password: "snmmaurya", username: "common", confirmation_code: nil, responsible: "Software Engineer", user_id: nil, role_id: 1, status: "ACTIVE"})

#SUPER user
User.create({name: "Hola Chef", email: "hola@holachef.com", password: "password", username: "common", confirmation_code: nil, responsible: "Software Engineer", user_id: nil, role_id: 2, status: "ACTIVE"})


#USER user
User.create({name: "Hola First", email: "holafirst@holachef.com", password: "password", username: "common", confirmation_code: nil, responsible: "Software Engineer", user_id: nil, role_id: 3, status: "ACTIVE"})
User.create({name: "Hola Second", email: "holasecond@holachef.com", password: "password", username: "common", confirmation_code: nil, responsible: "Software Engineer", user_id: nil, role_id: 3, status: "ACTIVE"})
User.create({name: "Hola Third", email: "holathird@holachef.com", password: "password", username: "common", confirmation_code: nil, responsible: "Software Engineer", user_id: nil, role_id: 3, status: "ACTIVE"})
User.create({name: "Hola Fourth", email: "holafourth@holachef.com", password: "password", username: "common", confirmation_code: nil, responsible: "Software Engineer", user_id: nil, role_id: 3, status: "ACTIVE"})


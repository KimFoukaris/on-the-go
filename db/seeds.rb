# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User.destroy_all

User.create!([{ name: 'Kim', password: 'Kim'}, { name: 'Elizabeth', password: 'Elizabeth'}])

#Beneficiary.destroy_all

Beneficiary.create!([{ first_name: 'Zang', nationality: 'Cameroon', gender: 'M', intake_date: Date.parse('01/01/1998')},
{first_name: 'Gabriez', nationality: 'Cameroon', gender: 'M', intake_date: Date.parse('2/2/2001')},
{first_name: 'Irene', nationality: 'Cameroon', gender: 'F', intake_date: Date.parse('3/3/2005')},
{first_name: 'Frankline', nationality: 'Cameroon', gender: 'M', intake_date: Date.parse('4/4/2016')}])

#Note.destroy_all

Note.create!([{content: "New today", date: Date.parse('1998/1/1'), user_id: 1, beneficiary_id: 1},
{content: "New today", date: Date.parse('2001/2/2'), user_id: 1, beneficiary_id: 2},
{content: "New today", date: Date.parse('2005/3/3'), user_id: 2, beneficiary_id: 3},
{content: "New today", date: Date.parse('2016/4/4'), user_id: 2, beneficiary_id: 4},
{content: "Visit to SW", date: Date.parse('2001/2/4'), user_id: 2, beneficiary_id: 1},
{content: "Visit to IM", date: Date.parse('2001/2/7'), user_id: 1, beneficiary_id: 1}])
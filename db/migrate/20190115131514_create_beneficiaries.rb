class CreateBeneficiaries < ActiveRecord::Migration[5.2]
  def change
    create_table :beneficiaries do |t|
      t.text :first_name
      t.text :nationality
      t.date :intake_date
      t.text :gender

      t.timestamps
    end
  end
end

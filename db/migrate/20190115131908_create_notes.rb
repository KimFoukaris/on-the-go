class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.text :content
      t.date :date
      t.integer :user_id
      t.integer :beneficiary_id

      t.timestamps
    end
  end
end

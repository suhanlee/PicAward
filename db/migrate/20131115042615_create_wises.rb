class CreateWises < ActiveRecord::Migration
  def change
    create_table :wises do |t|
      t.string :writer
      t.text :saying

      t.timestamps
    end
  end
end

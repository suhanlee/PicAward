class AddReadToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :read, :integer, :default => 0
  end
end

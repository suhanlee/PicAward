class AddCategoryIdToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :category_id, :integer, :default => 1
  end
end

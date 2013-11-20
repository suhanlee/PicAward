class RenameReadToLikeFromPhotos < ActiveRecord::Migration
  def change
  	rename_column :photos, :read, :like
  end
end

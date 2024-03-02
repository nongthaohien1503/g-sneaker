class Fix < ActiveRecord::Migration[7.1]
  def change
    change_table :products do |t|
      t.remove :product_price
      t.float :product_price
    end
end
end

class Products < ActiveRecord::Migration[7.1]
  def change
    create_table :producrs do |t|
      t.string :product_img
      t.string :product_name
      t.string :product_description
      t.integer :product_price
      t.string :product_bg_color

      t.timestamps
    end
  end
end

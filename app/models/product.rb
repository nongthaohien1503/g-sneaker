class Product < ApplicationRecord
    validates :product_name, uniqueness: true 
end
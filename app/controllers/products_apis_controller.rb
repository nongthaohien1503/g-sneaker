class ProductsApisController < ApplicationController
    before_action :set_product, only: %i[ show edit update destroy ]
  
    # GET /products_apis or /products_apis.json
    def index
      @products_apis = Product.all
      render json: @products_apis
    end
  
    # GET /products_apis/1 or /products_apis/1.json
    def show
      @products_api = @products_apis.find(params[:id])
  
      render json: @products_api
    end
    
    # GET /products_apis/new
    def new
      @products_api = Product.new
    end
  
    # GET /products_apis/1/edit
    def edit
    end
  
    # POST /products_apis or /products_apis.json
    def create
      @products_api = Product.new(product_params)
    end
  
    # PATCH/PUT /products_apis/1 or /products_apis/1.json
    def update
    end
  
    # DELETE /products_apis/1 or /products_apis/1.json
    def destroy
      @products_api.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_product
        @products_api = Product.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def product_params
        params.require(:product).permit(:product_name, :product_image, :product_description, :product_price, :product_bg_color)
      end
  end
  
class WisesController < ApplicationController
  before_action :set_wise, only: [:show, :edit, :update, :destroy]
  
  # GET /wises
  # GET /wises.json
  def index
    @wises = Wise.all
  end

  # GET /wises/1
  # GET /wises/1.json
  def show
  end

  # GET /wises/new
  def new
    @wise = Wise.new
  end

  # GET /wises/1/edit
  def edit
  end

  # POST /wises
  # POST /wises.json
  def create
    @wise = Wise.new(wise_params)

    respond_to do |format|
      if @wise.save
        format.html { redirect_to @wise, notice: 'Wise was successfully created.' }
        format.json { render action: 'show', status: :created, location: @wise }
      else
        format.html { render action: 'new' }
        format.json { render json: @wise.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wises/1
  # PATCH/PUT /wises/1.json
  def update
    respond_to do |format|
      if @wise.update(wise_params)
        format.html { redirect_to @wise, notice: 'Wise was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @wise.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wises/1
  # DELETE /wises/1.json
  def destroy
    @wise.destroy
    respond_to do |format|
      format.html { redirect_to wises_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wise
      @wise = Wise.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wise_params
      params.require(:wise).permit(:writer, :saying)
    end
end

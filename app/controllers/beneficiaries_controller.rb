class BeneficiariesController < ApplicationController
  
    def index
        @beneficiaries = Beneficiary.all.order("first_name")
        render json: @beneficiaries
    end

    def create
        @beneficiary = Beneficiary.create!(beneficiary_params)
    end

    def update
        @beneficiary.update(beneficiary_params)
    end

    private

    def beneficiary_params
        params.permit(:firstname, :nationality, :date_entered, :gender)
    end
end

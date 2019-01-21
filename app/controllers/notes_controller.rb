class NotesController < ApplicationController

    def index
       @notes = Note.all
       render json: @notes 
    end

    def create
        @note = User.create!(note_params)
    end

    def update
        @note.update(note_params)
    end

    private

    def note_params
        params.permit(:content, :date, :user_id, :beneficiary_id)
    end
end

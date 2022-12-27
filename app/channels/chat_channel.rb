class ChatChannel < ApplicationCable::Channel
  # rescue_from 'MyError', with: :deliver_error_message

  def subscribed
    stream_from "chat_#{params[:room]}"
  end

  def receive(data)
    ActionCable.server.broadcast("chat_#{params[:room]}", data)
  end
  # private

  # def deliver_error_message(e)
  #   broadcast_to(
  #     {
  #       sent_by: 'Paul',
  #       body: 'This is a cool chat app.'
  #     }
  #   )
  # end
end
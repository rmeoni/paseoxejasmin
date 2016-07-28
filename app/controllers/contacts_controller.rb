class ContactsController < ApplicationController
	def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Gracias por su mensaje! Pronto nos pondremos en contácto con usted!'
    else
      flash.now[:error] = 'Error al enviar mensaje'
      render :new
    end
  end
end

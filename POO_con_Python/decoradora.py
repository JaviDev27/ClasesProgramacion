def enviar_mail(notificacion):
    def enviar_mail():
        print('Se envia email')
        notificacion()

    return enviar_mail


"""
def notificar():
    print('Tu mail se ha enviado, correctamente!')


enviar_un_mail = enviar_mail(notificar)

enviar_un_mail()

"""


@enviar_mail
def notificar():
    print('Tu mail se ha enviado, correctamente!')


notificar()

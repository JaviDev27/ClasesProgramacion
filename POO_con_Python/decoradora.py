def enviar_mail(notificacion):
    def enviar_mail():
        print('Se envia email')
        notificacion()

    return enviar_mail


"""
def notificar():
    print('Tu mail se ha enviado, correctamente!')


notificar = enviar_mail(notificar)

notificar()

"""


@enviar_mail
def notificar():
    print('Tu mail se ha enviado, correctamente!')


notificar()

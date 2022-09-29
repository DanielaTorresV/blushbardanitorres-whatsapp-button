import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string // wp.png
  phone: string // 3505555
  message: string // Estás comunicándote con Blush-Bar, por favor ingresa tu duda.
}

const WhatsappButton = ({ logo, phone, message }: Props) => {
  return (
    <>
      <p>{logo}</p>
      <p>{phone}</p>
      <p>{message}</p>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3004507575',
  message: 'Estás comunicándote con Blush-Bar, por favor ingresa tu duda.',
}

WhatsappButton.schema = {
  title: 'WhatsApp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'WhatsApp Logo with Brand',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone',
      description: 'Add phone number!',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'Add message to show to your client!',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
  },
}

export default WhatsappButton

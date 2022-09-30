import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string // wp.png
  phone: string // 3505555
  message: string // Estás comunicándote con Blush-Bar, por favor ingresa tu duda.
  width: number // 80px
  height: number // 80px
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-1 right-2 flex felxColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Logo WP" />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3004507575',
  message: 'Estás comunicándote con Blush-Bar, por favor ingresa tu duda.',
  width: 70,
  height: 70,
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
    width: {
      title: 'Width',
      type: 'number',
    },
    height: {
      title: 'Height',
      type: 'number',
    },
  },
}

export default WhatsappButton

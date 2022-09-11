import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <div className="component4-container01">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component4-image"
        />
        <div className="component4-container02">
          <div className="component4-container03">
            <div className="component4-container04">
              <div className="component4-container05">
                <span className="component4-text">{props.text2}</span>
              </div>
            </div>
          </div>
          <span className="component4-text1">{props.text}</span>
        </div>
      </div>
      <div className="component4-container06">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="component4-image1"
        />
        <div className="component4-container07">
          <div className="component4-container08">
            <div className="component4-container09">
              <div className="component4-container10">
                <span className="component4-text2">{props.text3}</span>
              </div>
            </div>
          </div>
          <span className="component4-text3">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

Component4.defaultProps = {
  image_alt1: 'image',
  text1: '5',
  image_alt: 'image',
  image_src: '/playground_assets/component%201.svg',
  text2: 'Commandes annulées',
  text: '5',
  text3: 'Commandes en cours',
  rootClassName: '',
  image_src1: '/playground_assets/component%201.svg',
}

Component4.propTypes = {
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Component4

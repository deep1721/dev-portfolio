import React from 'react'

import { motion, AnimatePresence } from "framer-motion"
import './ImageSwitcher.scss'

const ImageSwitcher = ({ activeImage, images }) => {

  const variants = {
    show: {
      y: 0,
      opacity: 1
    },
    hide: {
      y: 100, opacity:0 
    }
  }

  return (
    <div>
      {activeImage !== null &&
        <div className="image-switcher lg:block hidden">
          <AnimatePresence>
            <motion.img
              className="image-switcher__image"
              variants={variants}
              key={activeImage}
              src={images[activeImage].src}
              initial="hide"
              animate="show"
              exit="hide"
              transition={{
                y: {
                  type: "spring",
                  damping: 200,
                  mass: 1
                }
              }}
            >
            </motion.img>
          </AnimatePresence>
        </div>
      }
    </div>
  )
}

export default ImageSwitcher
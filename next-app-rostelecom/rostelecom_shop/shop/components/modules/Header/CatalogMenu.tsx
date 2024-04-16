'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { $catalogMenuIsOpen, closeCatalogMenu } from '@/context/madals'
import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import { useMenuAnimation } from '@/hooks/useMenuAnimation'
import Header from './Header'
import { removeOverflowHiddenFromBody } from '@/lib/utills/common'
import { useUnit } from 'effector-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const CatalogMenu = () => {
  const catalogMenuIsOpen = useUnit($catalogMenuIsOpen)
  const [showClothList, setShowClothList] = useState(false)
  const [showAccessoriesList, setShowAccessoriesList] = useState(false)
  const [showSouvenirsList, setShowSouvenirsList] = useState(false)
  const [showOfficeList, setShowOfficeList] = useState(false)
  const { lang, translations } = useLang()
  const { popupZIndex, itemVariants, sideVariants } = useMenuAnimation(
    2,
    catalogMenuIsOpen
  )
  const isMedia640 = useMediaQuery(640)

  const handleShowClothList = () => {
    setShowClothList(true)
    setShowAccessoriesList(false)
    setShowSouvenirsList(false)
    setShowOfficeList(false)
  }
  const handleShowAccessoriesList = () => {
    setShowClothList(false)
    setShowAccessoriesList(true)
    setShowSouvenirsList(false)
    setShowOfficeList(false)
  }
  const handleShowSouvenirsList = () => {
    setShowClothList(false)
    setShowAccessoriesList(false)
    setShowSouvenirsList(true)
    setShowOfficeList(false)
  }
  const handleShowOfficeList = () => {
    setShowClothList(false)
    setShowAccessoriesList(false)
    setShowSouvenirsList(false)
    setShowOfficeList(true)
  }

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeCatalogMenu()
    setShowClothList()
    setShowAccessoriesList()
    setShowSouvenirsList()
    setShowOfficeList()
  }

  const items = [
    {
      name: translations[lang].main_menu.cloth,
      id: 1,
      items: [
        translations[lang].comparison['t-shirts'],
        translations[lang].comparison['long-sleeves'],
        translations[lang].comparison.hoodie,
        translations[lang].comparison.outerwear,
      ],
      handler: () => setActiveListId(1),
    },
    {
      name: translations[lang].main_menu.accessories,
      id: 2,
      items: [
        translations[lang].comparison.bags,
        translations[lang].comparison.headdress,
        translations[lang].comparison.umbrella,
      ],
      handler: () => setActiveListId(2),
    },
    {
      name: translations[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translations[lang].comparison['business-souvenirs'],
        translations[lang].comparison['promotional-souvenirs'],
      ],
      handler: () => setActiveListId(3),
    },
    {
      name: translations[lang].main_menu.office,
      id: 4,
      items: [
        translations[lang].comparison.notebook,
        translations[lang].comparison.pen,
      ],
      handler: () => setActiveListId(4),
    },
  ]

  return (
    <div className='catalog-menu' style={{ zIndex: popupZIndex }}>
      <AnimatePresence>
        {catalogMenuIsOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 'calc(100% - 48px)',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className='catalog-menu__aside'
          >
            <div className='catalog-menu__header'>
              <Header />
            </div>
            <motion.div
              className='catalog-menu__inner'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <img
                className='catalog-menu__bg'
                src='/img/menu-bg-small.png'
                alt='menu background'
              />
              <motion.button
                className='btn-reset catalog-menu__close'
                variants={itemVariants}
                onClick={handleCloseMenu}
              />
              <motion.h2
                variants={itemVariants}
                className='catalog-menu__title'
              >
                {translations[lang].main_menu.catalog}
              </motion.h2>
              <ul className='list-reset catalog-menu__list'>
                {items.map(({ id, name, items, handler }) => {
                  console.log()
                  return (
                    <motion.li
                      key={id}
                      variants={itemVariants}
                      className='catalog-menu__list__item'
                    >
                      {!isMedia640 && <></>}
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CatalogMenu

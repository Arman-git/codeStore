import { $menuIsOpen } from '@/context/madals'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactList, setShowContactList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translation } = useLang()
  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu

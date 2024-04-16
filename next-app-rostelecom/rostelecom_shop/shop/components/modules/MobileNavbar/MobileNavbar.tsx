'use client'
import Link from 'next/link'
import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context/madals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenToBody } from '@/lib/utills/common'

const MobileNavbar = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody()
    openCatalogMenu()
    closeMenu()
  }

  return (
    <div className='mobile-navbar'>
      <Link href='/' className='mobile-navbar__btn'>
        {translations[lang].breadcrumbs.main}
      </Link>
      <button
        className='btn-reset mobile-navbar__btn'
        onClick={handleOpenCatalogMenu}
      >
        {translations[lang].breadcrumbs.catalog}
      </button>
      <Link className='btn-reset mobile-navbar__btn' href='/favorites'>
        {translations[lang].breadcrumbs.favorites}
      </Link>
      <Link className='btn-reset mobile-navbar__btn' href='/cart'>
        {translations[lang].breadcrumbs.cart}
      </Link>
      <button className='btn-reset mobile-navbar__btn' onClick={handleOpenMenu}>
        {translations[lang].breadcrumbs.more}
      </button>
    </div>
  )
}

export default MobileNavbar

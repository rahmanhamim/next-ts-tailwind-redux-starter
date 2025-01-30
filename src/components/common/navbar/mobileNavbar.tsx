'use client'
import CloseIcon from '@/components/common/icons/closeIcon'
import HamburgerIcon from '@/components/common/icons/hamburgerIcon'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { closeNavbar, openNavbar } from '@/redux/slices/navbarSlice'
import { cn } from '@/helpers/cn'
import { useOutsideClick } from '@/helpers/hooks/useOutsideClick'
import Link from 'next/link'
import { useRef } from 'react'
import { navItems } from './navbar.helper'
import Button from '@/components/ui/button'

interface IProps {
  className?: string
}

const MobileNavbar = ({ className }: IProps) => {
  const dispatch = useAppDispatch()
  const { isNavbarOpen } = useAppSelector((state) => state.navbar)

  const onCloseNav = () => {
    dispatch(closeNavbar())
  }

  const onOpenNav = () => {
    dispatch(openNavbar())
  }

  const menuRef = useRef<any>(null)
  useOutsideClick(menuRef, onCloseNav)

  return (
    <div className={cn(className)}>
      <HamburgerIcon onClick={onOpenNav} className='cursor-pointer' />
      <div>
        {/* backdrop */}
        <div
          className={cn('fixed inset-0 z-50 bg-neutral-900 bg-opacity-50', {
            hidden: !isNavbarOpen,
          })}
        />

        {/* sidebar */}
        <div
          ref={menuRef}
          className={cn(
            'fixed bottom-0 right-0 top-0 z-[999] w-[288px] max-w-[90vw] overflow-y-auto bg-neutral-0 px-4 py-4 shadow-md transition-all',
            {
              'translate-x-0': isNavbarOpen,
              'translate-x-full': !isNavbarOpen,
            }
          )}
        >
          <CloseIcon
            size={18}
            className='ml-auto cursor-pointer'
            onClick={onCloseNav}
          />
          <div className='my-4 h-[1px] bg-neutral-600' />
          {/* section 1 nav items */}
          <div className='my-4'>
            <Button intent='primary' size='small'>
              Login
            </Button>
          </div>
          <ul className='flex flex-col gap-4'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className='text-content-500 flex items-center gap-2 text-sm transition-all hover:text-primary-500'
                  href={item?.href || '#'}
                  onClick={onCloseNav}
                >
                  {item.icon ? (
                    <item.icon size={18} />
                  ) : (
                    <span className='aspect-square w-[18px] rounded bg-primary-500' />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='my-4 h-[1px] bg-neutral-600' />
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar

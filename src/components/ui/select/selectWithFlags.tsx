'use client'
import { cn } from '@/helpers/cn'
import { ISelectProps } from '@/types/common'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'

export interface ISelectWithFlagProps extends ISelectProps {
  flag: string
}

const SelectWithFlag = ({
  options,
  className = '',
}: {
  options: ISelectWithFlagProps[]
  className?: string
}) => {
  const customStyles: StylesConfig = {
    control: (base) => ({
      ...base,
      width: 90,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      fontSize: 14,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f5f5f5' : 'white',
      color: '#333',
      fontSize: 12,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: 0,
    }),
  }

  const [selectedLang, setSelectedLang] = useState<ISelectWithFlagProps>(
    options[0]
  )

  const id = Date.now().toString()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return isMounted ? (
    <div className={cn('flex items-center', className)}>
      <Image
        src={selectedLang.flag}
        alt={selectedLang.label}
        width={20}
        height={20}
      />
      <Select
        id={id}
        styles={customStyles}
        defaultValue={selectedLang}
        isClearable={false}
        isSearchable={false}
        name='lang-select'
        options={options}
        onChange={(selectedOption) =>
          setSelectedLang(selectedOption as ISelectWithFlagProps)
        }
      />
    </div>
  ) : null
}

export default SelectWithFlag

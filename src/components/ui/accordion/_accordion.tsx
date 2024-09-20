"use client"

import { cn } from "@/helpers/cn"
import { AccordionItem } from "@/types/common"
import React, { useState } from "react"
import PlusIcon from "@/components/common/icons/plusIcon"
import MinusIcon from "@/components/common/icons/minusIcon"

export const sampleAccordionItems: AccordionItem[] = [
  {
    id: "1",
    title: "Accordion Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, lacus id gravida vestibulum, turpis elit aliquet nunc, nec fermentum turpis velit at felis. Nulla facilisi. Suspendisse potenti. Donec euismod, justo et ultricies ultricies, nunc nisl tincidunt odio, nec tincidunt nunc purus sed purus. Aliquam erat volutpat. Nullam et orci nec purus ultricies ultricies. In hac habitasse platea dictumst. Sed non nunc sit amet metus tincidunt aliquam. Nulla facilisi. Donec nec turpis sit amet nulla bibendum aliquam",
  },
  {
    id: "2",
    title: "Accordion Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, lacus id gravida vestibulum, turpis elit aliquet nunc, nec fermentum turpis velit at felis. Nulla facilisi. Suspendisse potenti. Donec euismod, justo et ultricies ultricies, nunc nisl tincidunt odio, nec tincidunt nunc purus sed purus. Aliquam erat volutpat. Nullam et orci nec purus ultricies ultricies. In hac habitasse platea dictumst. Sed non nunc sit amet metus tincidunt aliquam. Nulla facilisi. Donec nec turpis sit amet nulla bibendum aliquam",
  },
  {
    id: "3",
    title: "Accordion Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, lacus id gravida vestibulum, turpis elit aliquet nunc, nec fermentum turpis velit at felis. Nulla facilisi. Suspendisse potenti. Donec euismod, justo et ultricies ultricies, nunc nisl tincidunt odio, nec tincidunt nunc purus sed purus. Aliquam erat volutpat. Nullam et orci nec purus ultricies ultricies. In hac habitasse platea dictumst. Sed non nunc sit amet metus tincidunt aliquam. Nulla facilisi. Donec nec turpis sit amet nulla bibendum aliquam",
  },
]

interface IAccordionProps {
  items: AccordionItem[]
}

const Accordion = ({ items }: IAccordionProps) => {
  const [expanded, setExpanded] = useState<string | null>(null)

  const handleAccordionClick = (panelId: string) => () => {
    setExpanded(expanded === panelId ? null : panelId)
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className='border-b border-neutral-300 py-5 last:border-b-0'
        >
          <div className='flex items-center justify-between gap-10 py-4'>
            <p
              onClick={handleAccordionClick(item.id)}
              className={cn("cursor-pointer hover:text-primary-500", {
                "font-medium text-primary-500": expanded === item.id,
              })}
            >
              {item.title}
            </p>
            <div
              className='cursor-pointer'
              onClick={handleAccordionClick(item.id)}
            >
              {expanded === item.id ? <MinusIcon /> : <PlusIcon />}
            </div>
          </div>
          <div
            className={cn(
              "scrollbar overflow-hidden transition-all duration-500",
              {
                "max-h-0": expanded !== item.id,
                "max-h-[200px] overflow-y-auto": expanded === item.id,
              }
            )}
          >
            <p className='text-content-500 pb-4'>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion

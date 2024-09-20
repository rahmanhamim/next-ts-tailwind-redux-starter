"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group" // react-select is using this.

import ReactPortal from "@/components/ui/modal/reactPortal"
import { cn } from "@/helpers/cn"

type Props = {
  children: React.ReactNode
  open: boolean
  handleClose: () => void
  modalId?: string
  className?: string
}

export const Modal = ({
  children,
  open,
  handleClose,
  modalId = "defaultModalId",
  className = "",
}: Props) => {
  const nodeRef = useRef<HTMLDivElement>(null)

  const closeOnEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    },
    [handleClose]
  )

  const [scrollbarWidth, setScrollbarWidth] = useState(0)

  useEffect(() => {
    const initialScrollWidth =
      window.innerWidth - document.documentElement.clientWidth

    setScrollbarWidth(initialScrollWidth)

    if (open) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.style.paddingRight = ""
      document.body.classList.remove("overflow-hidden")
    }

    document.body.addEventListener("keydown", closeOnEscapeKey)

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
      document.body.style.paddingRight = ""
      document.body.classList.remove("overflow-hidden")
    }
  }, [closeOnEscapeKey, open, scrollbarWidth])

  const onBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement
    if (el.id === modalId) {
      handleClose()
    }
  }

  const [opacity, setOpacity] = useState(0)

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
      <CSSTransition
        in={open}
        timeout={300}
        unmountOnExit
        classNames='modal'
        nodeRef={nodeRef}
        onEnter={() => setOpacity(1)}
        onExit={() => setOpacity(0)}
      >
        <div
          // tabIndex={-1}
          id={modalId}
          onClick={onBackdropClick}
          className={cn(
            "fixed inset-0 z-[999] flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out",
            className
          )}
          style={{
            background: "rgba(0, 0, 0, 0.50)",
            backdropFilter: "blur(8px)",
            opacity: opacity,
            paddingRight: !open ? `${scrollbarWidth}px` : "0",
          }}
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}

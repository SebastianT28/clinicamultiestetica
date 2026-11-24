"use client"

import type { SVGProps } from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { springStateChange } from "@/lib/motion"

const Accordion = AccordionPrimitive.Root

// Base UI className can be a state function; the wrappers feed it to cn(), so
// narrow it to a plain string (same treatment as the other ported files).
type WithClassName<P> = Omit<P, "className"> & { className?: string }

function AccordionItem({
  className,
  ...props
}: WithClassName<AccordionPrimitive.Item.Props>) {
  return (
    <AccordionPrimitive.Item className={cn("border-b", className)} {...props} />
  )
}
AccordionItem.displayName = "AccordionItem"

function AccordionTrigger({
  className,
  children,
  ...props
}: WithClassName<AccordionPrimitive.Trigger.Props>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-panel-open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="h-4 w-4 shrink-0 transition-transform duration-base ease-out"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}
AccordionTrigger.displayName = "AccordionTrigger"

function AccordionContent({
  className,
  children,
  ...props
}: WithClassName<AccordionPrimitive.Panel.Props>) {
  return (
    <AccordionPrimitive.Panel
      keepMounted
      className="text-sm"
      {...props}
      render={(propsWithHidden, state) => {
        const { hidden, ...panelProps } = propsWithHidden
        void hidden
        return (
        // hidden is stripped so the close spring can play, but the kept-mounted
        // closed panel must not stay reachable: inert removes it from tab order
        // and the accessibility tree.
        <div {...panelProps} inert={state.open ? undefined : true}>
          <motion.div
            animate={
              state.open
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={springStateChange}
            initial={false}
            className="overflow-hidden"
          >
            <div className={cn("pb-4 pt-0", className)}>{children}</div>
          </motion.div>
        </div>
        )
      }}
    />
  )
}
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

// Iconoir, the icon library this system pairs with, drawn inline
// so the installed component loads no icon at runtime:
// "iconoir:nav-arrow-down"
// [BD-1029]
function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 9l6 6l6-6"/>
    </svg>
  )
}

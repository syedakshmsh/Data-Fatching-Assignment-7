"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="bg-yellow-500">
            <TiThMenu />

            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-yellow-500">
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
             
            </SheetHeader>
            <ul className="flex-col md:hidden">
            <li>
             
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="ClientSide">ClientSide</Link>
            </li>
            <li>
              <Link href="ServerSide">ServerSide</Link>
            </li>
          </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
   
   
  )
}

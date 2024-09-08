"use client"

import { useState } from 'react'
import { PlusIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "../hooks/use-toast"
import axios from 'axios'

export default function AskMeAnything() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 1000))
    setQuestion('')
    setOpen(false)
    // Show success toast
    toast({
      title: "Your message has landed with warmth and joy.",
      duration: 3000,
    })
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-[5.5rem] md:bottom-6 right-4 h-14 w-14 rounded-full p-0"
            variant="default"
          >
            <PlusIcon className="h-6 w-6" />
            <span className="sr-only">Send me message</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Hi, how you doing?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[100px]"
            />
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
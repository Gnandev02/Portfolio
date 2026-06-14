"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Message sent successfully! (Simulated)")
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-bold tracking-tight mb-4 text-foreground leading-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-[18px] max-w-2xl"
          >
            I'm open to internship opportunities and collaborations. Let's build something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center text-primary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-muted-foreground tracking-wide uppercase mb-1">Email</p>
                <a href="mailto:gnandevbonthu12@gmail.com" className="text-[18px] font-medium text-foreground hover:text-primary transition-colors">
                  gnandevbonthu12@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center text-primary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-muted-foreground tracking-wide uppercase mb-1">Phone</p>
                <a href="tel:+919121247185" className="text-[18px] font-medium text-foreground hover:text-primary transition-colors">
                  +91 9121247185
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center text-primary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-muted-foreground tracking-wide uppercase mb-1">Location</p>
                <span className="text-[18px] font-medium text-foreground">
                  IIIT Vadodara, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-3 text-[15px] outline-none focus:border-primary focus:bg-secondary/50 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-3 text-[15px] outline-none focus:border-primary focus:bg-secondary/50 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-3 text-[15px] outline-none focus:border-primary focus:bg-secondary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-secondary/30 border border-border rounded-lg px-4 py-3 text-[15px] outline-none focus:border-primary focus:bg-secondary/50 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="h-12 w-full sm:w-auto sm:self-start px-8 font-medium bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-lg mt-2">
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

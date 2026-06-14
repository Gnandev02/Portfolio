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
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Message sent successfully! (Simulated)")
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Let's connect!</h3>
              <p className="text-muted-foreground">
                I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary border-primary/20 border">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:gnandevbonthu12@gmail.com" className="hover:text-primary transition-colors">
                    gnandevbonthu12@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary border-secondary/20 border">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+919121247185" className="hover:text-secondary transition-colors">
                    +91 9121247185
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent border-accent/20 border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <span>IIIT Vadodara, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-full mt-2">
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

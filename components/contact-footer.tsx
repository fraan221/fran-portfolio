"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, Copy, ArrowRight } from "lucide-react";

export function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer id="contact" className="relative py-40 px-4 border-t border-white/5 bg-background/50 backdrop-blur-3xl">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              ¿Trabajamos <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/50">Juntos?</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto text-pretty font-light leading-relaxed">
              Siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="group relative p-8 glass-card rounded-2xl hover:bg-primary/5 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("franhe345@gmail.com", "email")
                    }
                    className="p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Correo Electrónico
                  </p>
                  <a
                    href="mailto:franhe345@gmail.com"
                    className="text-xl font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2"
                  >
                    franhe345@gmail.com
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative p-8 glass-card rounded-2xl hover:bg-secondary/5 transition-all duration-500 hover:border-secondary/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <button
                    onClick={() => copyToClipboard("+5491160542164", "phone")}
                    className="p-2 text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Teléfono / WhatsApp
                  </p>
                  <a
                    href="tel:+5491160542164"
                    className="text-xl font-medium text-foreground group-hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    +54 9 11 6054-2164
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-sm text-muted-foreground/60 font-mono">
              © {new Date().getFullYear()} Franco Damian Herrera. Built with Next.js & Tailwind.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-muted-foreground font-mono tracking-wide">
                All systems operational
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

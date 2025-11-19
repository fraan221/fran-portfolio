"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, Copy } from "lucide-react";

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
    <footer id="contact" className="relative py-32 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              ¡Hablemos!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Actualmente estoy buscando nuevas oportunidades.
              <br />
              No dudes en contactarme si queres que trabajemos juntos.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {/* Email */}
            <div className="group relative p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("franhe345@gmail.com", "email")
                    }
                    className="transition-colors cursor-pointer"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-primary" />
                    )}
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:franhe345@gmail.com"
                    className="text-lg font-mono group-hover:text-primary transition-colors break-all"
                  >
                    franhe345@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group relative p-8 bg-card border border-border rounded-lg hover:border-secondary transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <button
                    onClick={() => copyToClipboard("+5491160542164", "phone")}
                    className="transition-colors cursor-pointer"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-secondary" />
                    ) : (
                      <Copy className="w-4 h-4 text-secondary" />
                    )}
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+5491160542164"
                    className="text-lg font-mono group-hover:text-secondary transition-colors"
                  >
                    +54 9 11 6054-2164
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12 border-t border-border"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Franco Damian Herrera.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground font-mono">
                  Disponible
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

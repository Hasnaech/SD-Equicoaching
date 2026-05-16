'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Check, ArrowRight } from 'lucide-react'
import FadeIn from '../../components/FadeIn'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', message: '' })

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const inputClass = "w-full border border-gris-clair rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:border-violet transition-colors"

  return (
    <section className="bg-beige min-h-screen">
      <div className="container pt-32 pb-20">
        <FadeIn className="mb-16">
          <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce">
            Parlons de votre projet
          </h1>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-violet-fonce mb-1">Zone d&apos;intervention</h3>
                  <p className="text-gris-moyen font-inter">Paris & Île-de-France<br />Déplacements possibles en France</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-violet-fonce mb-1">Email</h3>
                  <a href="mailto:contact@sd-equicoaching.fr" className="text-gris-moyen font-inter hover:text-violet transition-colors">
                    contact@sd-equicoaching.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-pale flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-violet-fonce mb-1">Disponibilités</h3>
                  <p className="text-gris-moyen font-inter">Lundi – Vendredi, 9h – 18h<br />Réponse sous 24h ouvrées</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            {!submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gris-clair">
                <h2 className="font-playfair font-semibold text-2xl text-violet-fonce mb-6">Envoyer un message</h2>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Prénom *</label>
                      <input required type="text" className={inputClass} value={form.prenom} onChange={set('prenom')} />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Nom *</label>
                      <input required type="text" className={inputClass} value={form.nom} onChange={set('nom')} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Email *</label>
                    <input required type="email" className={inputClass} value={form.email} onChange={set('email')} />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center py-4"
                  >
                    Envoyer <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gris-clair"
              >
                <div className="w-20 h-20 rounded-full bg-or/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-or" />
                </div>
                <h2 className="font-playfair font-semibold text-2xl text-violet-fonce mb-4">Message envoyé !</h2>
                <p className="text-gris-moyen font-inter">Nous vous répondrons sous 24h ouvrées.</p>
              </motion.div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

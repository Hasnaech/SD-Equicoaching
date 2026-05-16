'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Clock, Shield, Users } from 'lucide-react'
import FadeIn from '../../components/FadeIn'

const benefits = [
  "Analyse de votre contexte managérial spécifique",
  "Identification de vos 3 leviers prioritaires de performance",
  "Recommandations actionnables immédiatement",
  "Proposition de programme sur-mesure si pertinent",
  "Zéro engagement, zéro pression commerciale",
]

export default function AuditGratuitPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '', entreprise: '', effectif: '', contexte: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }))

  const inputClass = "w-full border border-gris-clair rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:border-violet transition-colors bg-white"

  return (
    <section className="bg-beige min-h-screen">
      <div className="container pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeIn direction="left">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Sans engagement</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce mb-6 leading-tight">
              Audit Gratuit Performance Managériale
            </h1>
            <p className="text-gris-moyen font-inter text-lg leading-relaxed mb-8">
              45 minutes de diagnostic pour identifier précisément ce qui freine la performance de vos équipes
              et les leviers à activer en priorité.
            </p>
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-inter text-gris-fonce">
                  <Check className="w-5 h-5 text-or shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-6 text-gris-moyen font-inter text-sm">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-or" /> 45 minutes</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-or" /> Confidentialité totale</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-or" /> Dirigeants & DRH</span>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" delay={0.2}>
            {!submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-xl shadow-violet/5 border border-gris-clair">
                <h2 className="font-playfair font-semibold text-2xl text-violet-fonce mb-6">
                  Réserver mon audit gratuit
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Email professionnel *</label>
                    <input required type="email" className={inputClass} value={form.email} onChange={set('email')} />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Téléphone</label>
                    <input type="tel" className={inputClass} value={form.telephone} onChange={set('telephone')} />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Entreprise *</label>
                    <input required type="text" className={inputClass} value={form.entreprise} onChange={set('entreprise')} />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Effectif de votre équipe</label>
                    <select className={inputClass} value={form.effectif} onChange={set('effectif')}>
                      <option value="">Sélectionner...</option>
                      <option>1 à 10 personnes</option>
                      <option>11 à 50 personnes</option>
                      <option>51 à 200 personnes</option>
                      <option>200+ personnes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-gris-fonce mb-1">Votre principal défi managérial</label>
                    <textarea
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Décrivez brièvement votre contexte..."
                      value={form.contexte}
                      onChange={set('contexte')}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    Réserver mon audit gratuit <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <p className="text-center text-gris-moyen font-inter text-xs">
                    Nous vous répondons sous 24h ouvrées. Aucun engagement.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center shadow-xl border border-gris-clair"
              >
                <div className="w-20 h-20 rounded-full bg-or/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-or" />
                </div>
                <h2 className="font-playfair font-semibold text-2xl text-violet-fonce mb-4">Demande envoyée !</h2>
                <p className="text-gris-moyen font-inter leading-relaxed">
                  Nous avons bien reçu votre demande et vous contacterons sous 24h ouvrées
                  pour fixer votre audit gratuit.
                </p>
              </motion.div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

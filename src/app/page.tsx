'use client'

import React, { useState, useEffect } from 'react'
import {
  ArrowRight, Calendar, ShieldCheck, Sparkles, Star, Menu, X, ChevronDown, Phone,
  Mail, MapPin, Clock, Award, Users, Heart, Upload, Image as ImageIcon, FileImage
} from 'lucide-react'

/* ========= UI BASICS ========= */

function Button(
  { className = '', variant = 'default', children, ...props }:
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { variant?: 'default'|'ghost'|'outline' }
) {
  const baseClasses = 'inline-flex items-center justify-center text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 disabled:opacity-50 disabled:pointer-events-none'
  const variantClasses: Record<string,string> = {
    default: 'bg-[#0b1f3a] text-white hover:bg-[#0d274e] hover:shadow-lg',
    ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700',
    outline: 'border border-neutral-200 bg-white hover:bg-neutral-50'
  }
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

function Card(
  { className = '', children, ...props }:
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div className={`rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardContent(
  { className = '', children, ...props }:
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return <div className={`p-6 ${className}`} {...props}>{children}</div>
}

/* ========= FLOATING WHATSAPP ========= */

function WhatsAppFloat() {
  const WHATSAPP_NUMBER = '34600000000' // TODO: reemplazar por número real

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría solicitar información sobre los tratamientos de la Clínica Dr. Asenjo')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
        aria-label="Abrir WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.846.626.775.185 1.48.159 2.038.096.621-.069 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
        </svg>
        <div className="absolute bottom-16 right-0 bg-white p-3 rounded-lg shadow-lg border max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="text-sm text-neutral-700">¿Tienes dudas? ¡Escríbenos por WhatsApp!</p>
        </div>
      </button>
    </div>
  )
}

/* ========= NAV ========= */

type NavProps = {
  currentPage: string
  setCurrentPage: (p: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (b: boolean) => void
}

function Navigation({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }: NavProps) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const menuItems = {
    'Tratamientos': {
      'Cirugía Facial': ['rinoplastia', 'blefaroplastia', 'lifting-facial', 'otoplastia', 'mentoplastia'],
      'Cirugía Corporal': ['lipoescultura', 'abdominoplastia', 'brazilian-butt-lift', 'brachioplastia'],
      'Cirugía Mamaria': ['aumento-mamario', 'reduccion-mamaria', 'mastopexia', 'ginecomastia']
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="h-7 w-7 rounded-full bg-gradient-to-r from-[#0b1f3a] to-[#1e3a8a] flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">Clínica Dr. Asenjo</span>
              <div className="text-xs text-neutral-500">Cirugía Plástica, Estética y Reparadora</div>
            </div>
          </div>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('tratamientos')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 py-2 hover:text-[#0b1f3a] transition-colors">
                Tratamientos <ChevronDown className="h-4 w-4" />
              </button>

              {dropdownOpen === 'tratamientos' && (
                <div className="absolute top-full left-0 w-96 bg-white border border-neutral-200 rounded-xl shadow-2xl p-6 mt-1">
                  <div className="grid grid-cols-1 gap-6">
                    {Object.entries(menuItems['Tratamientos']).map(([category, treatments]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-neutral-900 mb-3">{category}</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {(treatments as string[]).map(t => (
                            <li key={t}>
                              <button
                                onClick={() => { setCurrentPage(t); setDropdownOpen(null) }}
                                className="text-neutral-600 hover:text-[#0b1f3a] transition-colors capitalize text-left w-full text-sm py-1"
                              >
                                {t.replace(/-/g, ' ')}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => setCurrentPage('resultados')} className="hover:text-[#0b1f3a] transition-colors">
              Resultados
            </button>
            <button onClick={() => setCurrentPage('equipo')} className="hover:text-[#0b1f3a] transition-colors">
              Equipo
            </button>
            <button onClick={() => setCurrentPage('contacto')} className="hover:text-[#0b1f3a] transition-colors">
              Contacto
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden lg:flex rounded-full h-10 px-6" onClick={() => setCurrentPage('contacto')}>
              Reservar Cita
            </Button>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menú">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <div className="space-y-4">
              <div>
                <button
                  className="font-medium text-left w-full mb-3"
                  onClick={() => setDropdownOpen(dropdownOpen === 'mobile-tratamientos' ? null : 'mobile-tratamientos')}
                >
                  Tratamientos <ChevronDown className="h-4 w-4 inline ml-1" />
                </button>
                {dropdownOpen === 'mobile-tratamientos' && (
                  <div className="pl-4 space-y-3">
                    {Object.entries(menuItems['Tratamientos']).map(([category, treatments]) => (
                      <div key={category}>
                        <h4 className="font-medium text-sm text-neutral-600 mb-2">{category}</h4>
                        <ul className="space-y-1 pl-2">
                          {(treatments as string[]).map(t => (
                            <li key={t}>
                              <button
                                onClick={() => { setCurrentPage(t); setMobileMenuOpen(false) }}
                                className="text-neutral-600 hover:text-[#0b1f3a] transition-colors capitalize text-left w-full text-sm"
                              >
                                {t.replace(/-/g, ' ')}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => { setCurrentPage('resultados'); setMobileMenuOpen(false) }} className="block w-full text-left font-medium hover:text-[#0b1f3a]">
                Resultados
              </button>
              <button onClick={() => { setCurrentPage('equipo'); setMobileMenuOpen(false) }} className="block w-full text-left font-medium hover:text-[#0b1f3a]">
                Equipo
              </button>
              <button onClick={() => { setCurrentPage('contacto'); setMobileMenuOpen(false) }} className="block w-full text-left font-medium hover:text-[#0b1f3a]">
                Contacto
              </button>

              <Button className="w-full rounded-full h-10 mt-4" onClick={() => { setCurrentPage('contacto'); setMobileMenuOpen(false) }}>
                Reservar Cita
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* ========= CONTACT FORM ========= */

function FormBooking() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: 'Granada',
    tratamiento: 'Rinoplastia',
    fecha: '',
    mensaje: '',
  })
  const [consent, setConsent] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const sendEmail = () => {
    if (!consent) return
    const subject = `Reserva: ${form.nombre} — ${form.ciudad} — ${form.tratamiento}`
    const body = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Ciudad: ${form.ciudad}`,
      `Tratamiento: ${form.tratamiento}`,
      `Fecha preferida: ${form.fecha}`,
      '',
      'Mensaje:',
      form.mensaje,
    ].map(encodeURIComponent).join('%0A')
    window.location.href = `mailto:info@drasenjo.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-2">Nombre completo</label>
          <input id="nombre" name="nombre" required value={form.nombre} onChange={onChange}
                 className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
          <input id="email" type="email" name="email" required value={form.email} onChange={onChange}
                 className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors" />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-2">Teléfono</label>
          <input id="telefono" name="telefono" value={form.telefono} onChange={onChange}
                 className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors" />
        </div>
        <div>
          <label htmlFor="ciudad" className="block text-sm font-medium text-neutral-700 mb-2">Ciudad</label>
          <select id="ciudad" name="ciudad" value={form.ciudad} onChange={onChange}
                  className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors">
            <option>Granada</option>
            <option>Málaga</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="tratamiento" className="block text-sm font-medium text-neutral-700 mb-2">Tratamiento</label>
          <select id="tratamiento" name="tratamiento" value={form.tratamiento} onChange={onChange}
                  className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors">
            <optgroup label="Cirugía Facial">
              <option>Rinoplastia</option>
              <option>Blefaroplastia</option>
              <option>Lifting facial</option>
              <option>Otoplastia</option>
              <option>Mentoplastia</option>
            </optgroup>
            <optgroup label="Cirugía Corporal">
              <option>Lipoescultura</option>
              <option>Abdominoplastia</option>
              <option>Brazilian Butt Lift</option>
              <option>Brachioplastia</option>
            </optgroup>
            <optgroup label="Cirugía Mamaria">
              <option>Aumento mamario</option>
              <option>Reducción mamaria</option>
              <option>Mastopexia</option>
              <option>Ginecomastia</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label htmlFor="fecha" className="block text-sm font-medium text-neutral-700 mb-2">Fecha preferida</label>
          <input id="fecha" type="date" name="fecha" value={form.fecha} onChange={onChange}
                 className="w-full h-12 rounded-xl border border-neutral-200 px-4 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-2">Cuéntanos tu caso</label>
        <textarea id="mensaje" name="mensaje" rows={4} value={form.mensaje} onChange={onChange}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/10 transition-colors"
                  placeholder="Describe tus objetivos, expectativas y cualquier consulta específica." />
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" className="mt-1" checked={consent} onChange={(e)=>setConsent(e.target.checked)} />
        <label htmlFor="consent" className="text-sm text-neutral-600">
          He leído y acepto la <a className="underline" href="#">Política de Privacidad</a>.
        </label>
      </div>

      <Button onClick={sendEmail} className="w-full rounded-xl h-12 text-base font-medium" disabled={!consent}>
        Solicitar Primera Consulta Gratuita
      </Button>

      <p className="text-xs text-neutral-500 text-center">
        Al enviar aceptas nuestra <a className="underline hover:text-[#0b1f3a]" href="#">Política de Privacidad</a> y
        <a className="underline hover:text-[#0b1f3a]" href="#"> Términos de Servicio</a>.
      </p>
    </div>
  )
}

/* ========= HOME ========= */

function HomePage({ setCurrentPage }: { setCurrentPage: (p: string)=>void }) {
  useEffect(() => {
    document.title = 'Clínica Dr. Asenjo — Cirugía estética en Granada y Málaga'
  }, [])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-10 md:pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
                <ShieldCheck className="h-3.5 w-3.5" /> Cirugía Plástica · Estética · Reparadora
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Resultados naturales con seguridad y excelencia
              </h1>
              <p className="mt-4 text-neutral-600 text-lg">
                Atención personalizada en Granada y Málaga. Consulta informativa gratuita para orientarte en tu decisión.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl h-11 px-6" onClick={() => setCurrentPage('contacto')}>
                  <Calendar className="mr-2 h-4 w-4"/> Solicitar valoración
                </Button>
                <Button
                  className="rounded-2xl h-11 px-6 text-[#0b1f3a] hover:bg-[#0b1f3a]/5"
                  variant="ghost"
                  onClick={() => setCurrentPage('rinoplastia')}
                >
                  Explorar tratamientos
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-200 to-neutral-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-neutral-500">
                    <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Fotografía del Dr. Asenjo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-[2rem] bg-neutral-950 text-white p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">Reserva tu consulta</h3>
                <p className="mt-3 text-neutral-300">
                  Atención en Granada y Málaga. Te responderemos por email en menos de 24h.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Seguridad y anestesia certificadas</li>
                  <li className="flex items-center gap-2"><Sparkles className="h-4 w-4"/>Resultados naturales, cicatrices mínimas</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4"/>Alta satisfacción de pacientes</li>
                </ul>
              </div>
              <div className="bg-white text-neutral-900 rounded-3xl p-6">
                <FormBooking />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ========= CONTACT ========= */

function ContactPage() {
  useEffect(() => { document.title = 'Contacto y Citas — Clínica Dr. Asenjo' }, [])
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Contacto y Citas</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Solicita tu primera consulta gratuita. Te proporcionaremos toda la información necesaria para tomar la mejor decisión.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Solicitar Cita</h2>
                <FormBooking />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0b1f3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#0b1f3a]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Teléfono</h4>
                      <p className="text-neutral-600">+34 958 XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0b1f3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#0b1f3a]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-neutral-600">info@drasenjo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0b1f3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#0b1f3a]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ubicación</h4>
                      <p className="text-neutral-600">Granada · Málaga</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0b1f3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#0b1f3a]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horario</h4>
                      <p className="text-neutral-600">Lunes a Viernes · 9:00–20:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">¿Qué incluye la consulta?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#0b1f3a]" /><span>Evaluación médica completa</span></div>
                  <div className="flex items-center gap-3"><Users className="h-5 w-5 text-[#0b1f3a]" /><span>Consulta personalizada con el Dr. Asenjo</span></div>
                  <div className="flex items-center gap-3"><Heart className="h-5 w-5 text-[#0b1f3a]" /><span>Plan de tratamiento adaptado</span></div>
                  <div className="flex items-center gap-3"><Award className="h-5 w-5 text-[#0b1f3a]" /><span>Presupuesto detallado sin sorpresas</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========= TREATMENT DETAIL ========= */

const treatmentsData: Record<string, {
  title: string
  subtitle: string
  description: string
  content: string[]
  benefits: string[]
  duration: string
  recovery: string
  anesthesia: string
}> = {
  'rinoplastia': {
    title: 'Rinoplastia',
    subtitle: 'Armonía facial y funcionalidad',
    description: 'Cirugía para mejorar estética y función nasal con resultados naturales.',
    content: [
      'Estudio facial previo y planificación personalizada.',
      'Técnicas abiertas/cerradas según el caso para controlar forma y función.',
      'Enfocados en vías respiratorias y estética global.'
    ],
    benefits: ['Mejor perfil', 'Corrección funcional', 'Resultados naturales', 'Recuperación predecible'],
    duration: '1.5–3 horas',
    recovery: '7–10 días',
    anesthesia: 'General'
  },
  'blefaroplastia': {
    title: 'Blefaroplastia',
    subtitle: 'Rejuvenecimiento de la mirada',
    description: 'Elimina exceso de piel y bolsas en párpados superiores e inferiores.',
    content: [
      'Incisiones estratégicas en pliegues naturales.',
      'Mejora aspecto cansado respetando la expresión.',
      'Alta satisfacción con recuperación rápida.'
    ],
    benefits: ['Elimina bolsas y ojeras', 'Mirada descansada', 'Cicatrices discretas', 'Resultados duraderos'],
    duration: '1–2 horas',
    recovery: '5–7 días',
    anesthesia: 'Local + sedación'
  },
  'aumento-mamario': {
    title: 'Aumento Mamario',
    subtitle: 'Feminidad y proporción',
    description: 'Implantes de alta gama con enfoque en naturalidad y seguridad.',
    content: [
      'Selección personalizada de volumen y proyección.',
      'Planos subglandular/subfascial/submuscular según anatomía.',
      'Protocolos de seguridad y seguimiento.'
    ],
    benefits: ['Mayor volumen', 'Mejor forma', 'Corrige asimetrías', 'Alta satisfacción'],
    duration: '1–2 horas',
    recovery: '7–14 días',
    anesthesia: 'General'
  },
  'lipoescultura': {
    title: 'Lipoescultura',
    subtitle: 'Remodelado corporal',
    description: 'Elimina grasa localizada y define contornos.',
    content: [
      'Zonas: abdomen, flancos, espalda, muslos, brazos.',
      'Esculpido para realzar curvas naturales.',
      'En casos seleccionados, lipofilling complementario.'
    ],
    benefits: ['Silueta definida', 'Elimina grasa localizada', 'Recuperación ágil', 'Resultados precisos'],
    duration: '1–3 horas',
    recovery: '7–14 días',
    anesthesia: 'General o local + sedación'
  },
  'lifting-facial': {
    title: 'Lifting facial',
    subtitle: 'Rejuvenecimiento global',
    description: 'Tensado de planos profundos (SMAS) y redistribución de volúmenes.',
    content: ['Aborda flacidez, surcos y cuello', 'Cicatrices discretas', 'Resultados naturales y duraderos'],
    benefits: ['Tensado', 'Definición mandibular', 'Cuello rejuvenecido', 'Cicatrices discretas'],
    duration: '2–4 horas',
    recovery: '10–14 días',
    anesthesia: 'General'
  },
  'abdominoplastia': {
    title: 'Abdominoplastia',
    subtitle: 'Abdomen firme y plano',
    description: 'Resección de exceso cutáneo y reparación de diástasis.',
    content: ['Reposiciona ombligo', 'Marca cintura', 'Ideal post-gestación o pérdida ponderal'],
    benefits: ['Mejora contorno', 'Faja muscular', 'Elimina piel sobrante', 'Cicatriz baja'],
    duration: '2–3 horas',
    recovery: '14–21 días',
    anesthesia: 'General'
  },
  'reduccion-mamaria': {
    title: 'Reducción mamaria',
    subtitle: 'Alivio y proporción',
    description: 'Reduce volumen y eleva el pecho para mayor confort.',
    content: ['Alivio de dolores cervicales', 'Mejora postura', 'Resultados proporcionados'],
    benefits: ['Alivio físico', 'Postura', 'Autoestima', 'Proporción corporal'],
    duration: '2–3 horas',
    recovery: '10–14 días',
    anesthesia: 'General'
  },
  'mastopexia': {
    title: 'Mastopexia',
    subtitle: 'Elevación mamaria',
    description: 'Reposiciona el complejo areola-pezón y mejora forma.',
    content: ['Opcional con implantes', 'Cicatrices según grado de ptosis', 'Resultados naturales'],
    benefits: ['Elevación', 'Proyección', 'Simetría', 'Juventud'],
    duration: '2–3 horas',
    recovery: '10–14 días',
    anesthesia: 'General'
  },
  'ginecomastia': {
    title: 'Ginecomastia',
    subtitle: 'Contorno torácico masculino',
    description: 'Resección glandular/liposucción para torax plano.',
    content: ['Incisiones mínimas', 'Contorno definido', 'Recuperación ágil'],
    benefits: ['Confianza', 'Definición', 'Cicatrices discretas', 'Rápida recuperación'],
    duration: '1–2 horas',
    recovery: '5–10 días',
    anesthesia: 'Local + sedación / General'
  },
  'otoplastia': {
    title: 'Otoplastia',
    subtitle: 'Orejas en armonía',
    description: 'Corrige orejas prominentes con cicatriz oculta posterior.',
    content: ['Moldeado cartilaginoso', 'Resultados naturales', 'Procedimiento ambulatorio'],
    benefits: ['Simetría', 'Confianza', 'Cicatriz oculta', 'Rápida recuperación'],
    duration: '1–2 horas',
    recovery: '5–7 días',
    anesthesia: 'Local + sedación'
  },
  'mentoplastia': {
    title: 'Mentoplastia',
    subtitle: 'Proyección y equilibrio',
    description: 'Aumenta o reduce mentón para armonía facial.',
    content: ['Implante o avance óseo', 'Estudio del tercio inferior', 'Resultados estables'],
    benefits: ['Perfil armónico', 'Proporción', 'Autoestima', 'Naturalidad'],
    duration: '1–2 horas',
    recovery: '7–10 días',
    anesthesia: 'General / Local + sedación'
  },
  'brazilian-butt-lift': {
    title: 'BBL — Lipofilling glúteo',
    subtitle: 'Curvas naturales',
    description: 'Transferencia de grasa purificada para proyección y forma.',
    content: ['Extracción + purificado', 'Inyección por planos seguros', 'Contorno global'],
    benefits: ['Curvas', 'Tacto natural', 'Define cintura', 'Sin implantes'],
    duration: '2–3 horas',
    recovery: '10–14 días',
    anesthesia: 'General'
  },
  'brachioplastia': {
    title: 'Brachioplastia',
    subtitle: 'Tensado de brazos',
    description: 'Elimina exceso cutáneo en brazos con cicatriz afinada.',
    content: ['Diseño de cicatriz', 'Puede combinar liposucción', 'Compresión posoperatoria'],
    benefits: ['Tono', 'Definición', 'Confort', 'Ropa que sienta mejor'],
    duration: '1.5–2.5 horas',
    recovery: '10–14 días',
    anesthesia: 'General / Local + sedación'
  }
}

function TreatmentDetail({ treatment, setCurrentPage }: { treatment: string, setCurrentPage: (p:string)=>void }) {
  useEffect(() => {
    const t = treatmentsData[treatment]
    document.title = t ? `${t.title} — Clínica Dr. Asenjo` : 'Tratamiento — Clínica Dr. Asenjo'
  }, [treatment])

  const currentTreatment = treatmentsData[treatment]
  if (!currentTreatment) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Tratamiento no encontrado</h1>
        <Button onClick={() => setCurrentPage('home')}>Volver al inicio</Button>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-600">
              <span onClick={() => setCurrentPage('home')} className="cursor-pointer hover:underline">Inicio</span>
              <span>/</span>
              <span className="capitalize">{treatment.replace(/-/g,' ')}</span>
            </div>
            <h1 className="text-4xl font-bold mt-3">{currentTreatment.title}</h1>
            <p className="text-lg text-neutral-600 mt-2">{currentTreatment.subtitle}</p>
          </section>

          <section className="space-y-6">
            <p className="text-neutral-700 leading-relaxed text-lg">{currentTreatment.description}</p>
            <div className="space-y-4">
              {currentTreatment.content.map((paragraph, i) => (
                <p key={i} className="text-neutral-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Beneficios principales</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {currentTreatment.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl">
                  <div className="h-2 w-2 bg-[#0b1f3a] rounded-full" />
                  <span className="text-neutral-800 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="font-bold mb-4">Detalles del procedimiento</h3>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-neutral-600">Duración:</span><span className="font-medium">{currentTreatment.duration}</span></div>
                <div className="flex justify-between"><span className="text-neutral-600">Recuperación:</span><span className="font-medium">{currentTreatment.recovery}</span></div>
                <div className="flex justify-between"><span className="text-neutral-600">Anestesia:</span><span className="font-medium">{currentTreatment.anesthesia}</span></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold mb-4">¿Tienes dudas?</h3>
              <p className="text-neutral-600 mb-4">Resuelve todas tus preguntas en una consulta personalizada gratuita.</p>
              <Button className="w-full rounded-xl h-11" onClick={() => setCurrentPage('contacto')}>
                Solicitar Consulta
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold mb-4">Contacto directo</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0b1f3a]" /><span>+34 958 XX XX XX</span></div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#0b1f3a]" /><span>info@drasenjo.com</span></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

/* ========= RESULTS ========= */

type GalleryImage = { id: number; url: string; category: string; name: string }

function ResultsPage() {
  useEffect(() => { document.title = 'Resultados de Pacientes — Clínica Dr. Asenjo' }, [])

  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [images, setImages] = useState<GalleryImage[]>([])

  // persistencia
  useEffect(() => {
    const saved = localStorage.getItem('asenjo_results_images')
    if (saved) setImages(JSON.parse(saved))
  }, [])
  useEffect(() => {
    localStorage.setItem('asenjo_results_images', JSON.stringify(images))
  }, [images])

  const categories = [
    { id: 'todos', name: 'Todos los resultados' },
    { id: 'facial', name: 'Cirugía Facial' },
    { id: 'corporal', name: 'Cirugía Corporal' },
    { id: 'mamaria', name: 'Cirugía Mamaria' },
    { id: 'sin-categoria', name: 'Sin categoría' },
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newImage: GalleryImage = {
          id: Date.now() + Math.random(),
          url: String(e.target?.result),
          category: selectedCategory === 'todos' ? 'sin-categoria' : selectedCategory,
          name: file.name
        }
        setImages(prev => [...prev, newImage])
      }
      reader.readAsDataURL(file)
    })
  }

  const filteredImages = selectedCategory === 'todos' ? images : images.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">Resultados</h1>

          <div className="flex items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-11 rounded-xl border border-neutral-200 px-4"
            >
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>

            <label className="inline-flex items-center justify-center h-11 px-4 rounded-xl border border-dashed border-neutral-300 cursor-pointer hover:bg-neutral-50">
              <Upload className="h-4 w-4 mr-2" />
              Subir imágenes
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        </div>

        {filteredImages.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center text-neutral-500">
              <FileImage className="h-10 w-10 mx-auto mb-3 opacity-60" />
              Aún no hay imágenes en esta categoría.
            </CardContent>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map(image => (
              <div key={image.id} className="aspect-square rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={image.url}
                  alt={`Resultado ${image.category} — ${image.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ========= EQUIPO ========= */

function EquipoPage() {
  useEffect(() => { document.title = 'Nuestro Equipo — Clínica Dr. Asenjo' }, [])
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-6">Nuestro Equipo</h1>
        <p className="text-neutral-600 text-lg mb-10">
          Conoce al equipo médico y de enfermería de la Clínica Dr. Asenjo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="space-y-3">
                <div className="aspect-[4/3] rounded-lg bg-neutral-100 flex items-center justify-center">
                  <Users className="h-10 w-10 text-neutral-400" />
                </div>
                <div>
                  <div className="font-semibold">Nombre Apellido</div>
                  <div className="text-sm text-neutral-500">Especialidad</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ========= FOOTER ========= */

function Footer() {
  return (
    <footer className="border-t border-neutral-200 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-[#0b1f3a]" aria-hidden />
              <span className="font-semibold tracking-tight">Clínica Dr. Asenjo</span>
            </div>
            <p className="mt-3 text-neutral-500 max-w-xs">
              Clínica Dr. Asenjo · Granada · Málaga. Cirugía y medicina estética con estándares internacionales.
            </p>
          </div>
          <div>
            <div className="font-medium mb-3">Clínica</div>
            <ul className="space-y-2 text-neutral-600">
              <li><a className="hover:text-neutral-900" href="#equipo">Equipo</a></li>
              <li><a className="hover:text-neutral-900" href="#tratamientos">Tratamientos</a></li>
              <li><a className="hover:text-neutral-900" href="#resultados">Resultados</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-neutral-600">
              <li><a className="hover:text-neutral-900" href="#">Privacidad</a></li>
              <li><a className="hover:text-neutral-900" href="#">Cookies</a></li>
              <li><a className="hover:text-neutral-900" href="#">Términos</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Contacto</div>
            <ul className="space-y-2 text-neutral-600">
              <li>Granada · Málaga</li>
              <li><a href="mailto:info@drasenjo.com">info@drasenjo.com</a></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Clínica Dr. Asenjo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

/* ========= APP (PAGE) ========= */

export default function ClinicaDrAsenjoPage() {
  const [currentPage, setCurrentPage] = useState<string>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // título por defecto cuando no haya páginas que lo ajusten
    if (currentPage === 'home') {
      document.title = 'Clínica Dr. Asenjo — Cirugía estética en Granada y Málaga'
    }
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'contacto':
        return <ContactPage />
      case 'resultados':
        return <ResultsPage />
      case 'equipo':
        return <EquipoPage />
      case 'rinoplastia':
      case 'blefaroplastia':
      case 'aumento-mamario':
      case 'lipoescultura':
      case 'lifting-facial':
      case 'abdominoplastia':
      case 'reduccion-mamaria':
      case 'mastopexia':
      case 'ginecomastia':
      case 'otoplastia':
      case 'mentoplastia':
      case 'brazilian-butt-lift':
      case 'brachioplastia':
        return <TreatmentDetail treatment={currentPage} setCurrentPage={setCurrentPage} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {renderPage()}
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

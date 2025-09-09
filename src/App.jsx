import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function FormBooking() {
  const WHATSAPP = '34600000000' // <- puedes cambiarlo cuando quieras
  const EMAIL = 'info@drasenjo.com' // <- tu email profesional
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: 'Granada',
    tratamiento: 'Rinoplastia',
    fecha: '',
    mensaje: '',
  })
  const sendEmail = () => {
    const subject = `Reserva: ${form.nombre} — ${form.ciudad} — ${form.tratamiento}`
    const body = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono/WhatsApp: ${form.telefono}`,
      `Ciudad: ${form.ciudad}`,
      `Tratamiento: ${form.tratamiento}`,
      `Fecha preferida: ${form.fecha}`,
      'Mensaje:',
      form.mensaje,
    ].join('%0A')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`
  }
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-neutral-600">Nombre</label>
          <input name="nombre" required value={form.nombre} onChange={onChange} className="mt-1 w-full h-11 rounded-xl border border-neutral-200 px-3" />
        </div>
        <div>
          <label className="text-sm text-neutral-600">Email</label>
          <input type="email" name="email" required value={form.email} onChange={onChange} className="mt-1 w-full h-11 rounded-xl border border-neutral-200 px-3" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-neutral-600">Teléfono</label>
          <input name="telefono" required value={form.telefono} onChange={onChange} className="mt-1 w-full h-11 rounded-xl border border-neutral-200 px-3" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-neutral-600">Ciudad</label>
            <select name="ciudad" value={form.ciudad} onChange={onChange} className="mt-1 w-full h-11 rounded-xl border border-neutral-200 px-3 bg-white">
              <option>Granada</option>
              <option>Málaga</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-neutral-600">Fecha preferida</label>
            <input type="date" name="fecha" value={form.fecha} onChange={onChange} className="mt-1 w-full h-11 rounded-xl border border-neutral-200 px-3" />
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm text-neutral-600">Tratamiento</label>
        <select name="tratamiento" value={form.tratamiento} onChange={onChange} className="mt-1 w-full h-11 rounded-xl border border-neutral-200 px-3 bg-white">
          <option>Rinoplastia</option>
          <option>Blefaroplastia</option>
          <option>Aumento mamario</option>
          <option>Lipoescultura</option>
          <option>Toxina botulínica</option>
          <option>Ácido hialurónico</option>
        </select>
      </div>
      <div>
        <label className="text-sm text-neutral-600">Mensaje</label>
        <textarea name="mensaje" rows={4} value={form.mensaje} onChange={onChange} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2" placeholder="Cuéntame tus objetivos..." />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={sendEmail} className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]">Enviar por Email</Button>
      </div>
      <p className="text-xs text-neutral-500">Al enviar aceptas la <a className="underline" href="#">Política de Privacidad</a>.</p>
    </form>
  )
}

export default function ClinicaDrAsenjo() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-[#0b1f3a]" aria-hidden />
              <span className="font-semibold tracking-tight">Clínica Dr. Asenjo</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#tratamientos" className="hover:opacity-70">Tratamientos</a>
              <a href="#resultados" className="hover:opacity-70">Resultados</a>
              <a href="#equipo" className="hover:opacity-70">Equipo</a>
              <a href="#contacto" className="hover:opacity-70">Contacto</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Button className="rounded-2xl h-9 px-5 bg-[#0b1f3a] text-white hover:bg-[#0d274e]">Reserva online</Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                Cirugía estética de autor. <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500">Elegancia discreta, resultados naturales.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="mt-6 text-neutral-600 text-lg max-w-xl">
                Clínica Dr. Asenjo · Granada · Málaga. Técnicas avanzadas y un enfoque minimalista para realzar tu belleza con la máxima seguridad.
              </motion.p>
              <motion.div variants={fadeIn} className="mt-8 flex flex-wrap items-center gap-3">
                <Button className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]">Reservar en Clínica Dr. Asenjo <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button className="rounded-2xl h-11 px-6 text-[#0b1f3a] hover:bg-[#0b1f3a]/5" variant="ghost">Explorar tratamientos</Button>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Seguridad certificada</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4" /> +1.2k reseñas</div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-neutral-100 shadow-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-50 flex items-center justify-center">
                  <div className="text-neutral-500">Imagen destacada</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="tratamientos" className="py-14 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tratamientos</h2>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-700">Ver todos</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Rinoplastia', description: 'Respira mejor, luce natural.', icon: Sparkles },
              { title: 'Blefaroplastia', description: 'Mirada fresca y luminosa.', icon: Sparkles },
              { title: 'Aumento mamario', description: 'Armonía y proporción.', icon: Sparkles },
              { title: 'Lipoescultura', description: 'Definición con precisión.', icon: Sparkles },
              { title: 'Toxina botulínica', description: 'Suaviza sin perder expresión.', icon: Sparkles },
              { title: 'Ácido hialurónico', description: 'Volumen sutil y contorno.', icon: Sparkles },
            ].map((f, i) => (
              <Card key={i} className="rounded-3xl border-neutral-200 hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <f.icon className="h-5 w-5" />
                  <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{f.description}</p>
                  <div className="mt-4">
                    <Button variant="ghost" className="rounded-xl h-9 px-4 text-[#0b1f3a] hover:bg-[#0b1f3a]/5">Más información <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="equipo" className="py-16 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Dirección Médica</h2>
              <p className="mt-4 text-neutral-600 max-w-xl">Dr. Roberto Asenjo Medina, Director Médico de la Clínica Dr. Asenjo. Filosofía “menos es más”: resultados proporcionados, cicatrices discretas y protocolos de seguridad avanzados.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]"><Calendar className="mr-2 h-4 w-4"/>Solicitar valoración</Button>
                <Button className="rounded-2xl h-11 px-6 text-[#0b1f3a] hover:bg-[#0b1f3a]/5" variant="ghost">Ver credenciales</Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-3xl bg-neutral-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-50 flex items-center justify-center">
                  <div className="text-neutral-500">Retrato del Director Médico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-[2rem] bg-neutral-950 text-white p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">Reserva tu consulta</h3>
                <p className="mt-3 text-neutral-300">Atención en Granada y Málaga. Elige email y te responderemos en menos de 24h.</p>
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

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-10 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#0b1f3a]" aria-hidden />
                <span className="font-semibold tracking-tight">Clínica Dr. Asenjo</span>
              </div>
              <p className="mt-3 text-neutral-500 max-w-xs">Clínica Dr. Asenjo · Granada · Málaga. Cirugía y medicina estética con estándares internacionales.</p>
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
          <div className="text-xs text-neutral-400">© {new Date().getFullYear()} Clínica Dr. Asenjo. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

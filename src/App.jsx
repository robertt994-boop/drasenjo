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
<option>Mastopexia (con y sin prótesis)</option>
<option>Reducción de mama</option>
<option>Ginecomastia</option>
<option>Lifting facial</option>
          <option>Lipoescultura (Lipo HD)</option>
        </select>
      </div>
      <div>
        <label className="text-sm text-neutral-600">Mensaje</label>
        <textarea name="mensaje" rows={4} value={form.mensaje} onChange={onChange} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2" placeholder="Cuéntame tus objetivos..." />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={sendEmail} className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]">Enviar por Email</Button>
      </div>
      <p className="text-xs text-neutral-500">Al enviar aceptas la <a className="underline" href="#/legal/privacidad">Política de Privacidad</a>.</p>
    </form>
  )
}


// --- Simple i18n ---
const TEXTS = {
  es: {
    nav_tratamientos: "{TEXTS[lang].nav_tratamientos}",
    nav_equipo: "{TEXTS[lang].nav_equipo}",
    nav_contacto: "{TEXTS[lang].nav_contacto}",
    hero_title: "Resultados naturales, seguridad y cercanía.",
    hero_cta_primary: "Solicitar valoración",
    hero_cta_secondary: "{TEXTS[lang].hero_cta_secondary}",
    more_info: "Más información",
    back: "Volver",
    book_now: "Reservar",
    reserve_online: "{TEXTS[lang].reserve_online}",
  },
  en: {
    nav_tratamientos: "Treatments",
    nav_equipo: "Team",
    nav_contacto: "Contact",
    hero_title: "Natural results, safety and care.",
    hero_cta_primary: "Book consultation",
    hero_cta_secondary: "Explore treatments",
    more_info: "Learn more",
    back: "Back",
    book_now: "Book now",
    reserve_online: "Book online",
  }
}

// --- Procedures data ---
const PROCEDURES = {
  'rinoplastia': {
    es: {
      title: 'Rinoplastia',
      description: 'Respira mejor y mejora la armonía facial con técnicas de preservación.',
      seoTitle: 'Rinoplastia en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Rinoplastia funcional y estética con enfoque natural. Consulta en Granada y Málaga.',
      content: `Indicada para mejorar forma y función nasal. Empleamos técnicas de preservación y manejo septal para mantener estructuras y acortar la recuperación. Anestesia general. Postoperatorio con férula 7-10 días. Objetivo: una nariz armónica y respiración cómoda.`
    },
    en: {
      title: 'Rhinoplasty',
      description: 'Breathe better and refine facial harmony using preservation techniques.',
      seoTitle: 'Rhinoplasty in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Functional and aesthetic rhinoplasty with a natural approach.',
      content: `Aimed at improving nasal form and function. Preservation rhinoplasty maintains key structures for a smoother recovery. General anaesthesia. Splint for 7–10 days.`
    }
  },
  'blefaroplastia': {
    es: {
      title: 'Blefaroplastia',
      description: 'Párpados más descansados manteniendo tu expresión.',
      seoTitle: 'Blefaroplastia en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Blefaroplastia superior e inferior con técnicas de preservación de grasa.',
      content: `Corrige exceso de piel y bolsas palpebrales. Vía transconjuntival cuando procede para evitar cicatrices visibles. Anestesia local con sedación. Vuelta a la vida social en 7-10 días.`
    },
    en: {
      title: 'Blepharoplasty',
      description: 'Brighter, rested-looking eyes while keeping your expression.',
      seoTitle: 'Blepharoplasty in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Upper and lower blepharoplasty with fat preservation.',
      content: `Removes excess skin and treats fat pads. Transconjunctival approach when indicated to avoid external scars. Local anaesthesia with sedation.`
    }
  },
  'aumento-mamario': {
    es: {
      title: 'Aumento mamario',
      description: 'Armonía y proporción con prótesis de última generación.',
      seoTitle: 'Aumento de pecho en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Aumento mamario con resultados naturales. Valoración precisa de tamaño y forma.',
      content: `Plan individualizado del tamaño y proyección según anatomía y objetivos. Implantes de alta seguridad, preferencia por plano subfascial o dual plane. Incisión en surco submamario. Recuperación progresiva en 1-2 semanas.`
    },
    en: {
      title: 'Breast augmentation',
      description: 'Harmony and proportion using state‑of‑the‑art implants.',
      seoTitle: 'Breast augmentation in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Natural breast augmentation with precise sizing and planning.',
      content: `Personalised planning of volume and projection. High-safety implants, subfascial or dual plane. Submammary incision. Recovery 1–2 weeks.`
    }
  },
  'lipoescultura': {
    es: {
      title: 'Lipoescultura (Lipo HD)',
      description: 'Definición corporal con alta precisión y contorno atlético.',
      seoTitle: 'Lipoescultura y Lipo HD en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Lipoescultura de alta definición para mejorar contorno y marcación muscular.',
      content: `Remodelado 360º con aspiración asistida y marcación selectiva (Lipo HD) cuando está indicado. Faja compresiva 4-6 semanas. Retorno a actividad progresivo desde la 2ª semana.`
    },
    en: {
      title: 'Liposculpture (HD Lipo)',
      description: 'High‑definition body contouring for athletic lines.',
      seoTitle: 'Liposculpture & HD Lipo in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'High‑definition liposculpture to enhance contour and muscular definition.',
      content: `360º reshaping with assisted suction and selective definition (HD) when indicated. Compression garment 4–6 weeks.`
    }
  },
  'mastopexia': {
    es: {
      title: 'Mastopexia (con y sin prótesis)',
      description: 'Eleva y redefine el pecho con cicatrices discretas.',
      seoTitle: 'Mastopexia en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Mastopexia con o sin implantes, según necesidad de volumen.',
      content: `Corrige la ptosis mamaria. Técnicas en I corta o T invertida según flacidez. Con implante cuando se precisa volumen extra; sin implante si prioriza tejido propio. Sujetador deportivo 6 semanas.`
    },
    en: {
      title: 'Mastopexy (with/without implants)',
      description: 'Lift and reshape the breast with discreet scarring.',
      seoTitle: 'Mastopexy in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Mastopexy tailored to lift and volume needs.',
      content: `Corrects breast ptosis. Short-scar or inverted‑T techniques depending on laxity. Implants only when additional volume is needed.`
    }
  },
  'reduccion-mama': {
    es: {
      title: 'Reducción de mama',
      description: 'Alivio funcional y mejora estética.',
      seoTitle: 'Reducción mamaria en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Reducción de mama para mejorar postura, dolor cervical y bienestar.',
      content: `Reduce el volumen y peso mamario, mejorando postura y confort. Recolocación areolar y tejido mamario. Recuperación gradual en 2-3 semanas.`
    },
    en: {
      title: 'Breast reduction',
      description: 'Functional relief with an aesthetic outcome.',
      seoTitle: 'Breast reduction in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Breast reduction to improve posture, neck pain and wellbeing.',
      content: `Reduces volume and weight with nipple‑areola repositioning. Gradual recovery in 2–3 weeks.`
    }
  },
  'ginecomastia': {
    es: {
      title: 'Ginecomastia',
      description: 'Reducción mamaria masculina con cicatrices mínimas.',
      seoTitle: 'Ginecomastia en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Tratamiento quirúrgico de la ginecomastia con resultados naturales.',
      content: `Combinación de liposucción y resección glandular a través de incisiones pequeñas en el borde areolar. Faja torácica 4 semanas.`
    },
    en: {
      title: 'Gynecomastia surgery',
      description: 'Male chest reduction with minimal scarring.',
      seoTitle: 'Gynecomastia surgery in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Surgical treatment of gynecomastia with natural outcomes.',
      content: `Combination of liposuction and gland excision via small periareolar incisions. Compression vest 4 weeks.`
    }
  },
  'lifting-facial': {
    es: {
      title: 'Lifting facial',
      description: 'Rejuvenecimiento y definición del óvalo facial.',
      seoTitle: 'Lifting facial en Granada y Málaga · Clínica Dr. Asenjo',
      seoDesc: 'Lifting cervicofacial con enfoque en SMAS y cuello.',
      content: `Tensado del SMAS y manejo cervical para mejorar flacidez y papada. Incisiones ocultas alrededor de oreja. Recuperación social en 2-3 semanas.`
    },
    en: {
      title: 'Facelift',
      description: 'Rejuvenation with improved jawline and neck contour.',
      seoTitle: 'Facelift in Granada & Málaga · Dr. Asenjo Clinic',
      seoDesc: 'Neck‑face lift focusing on SMAS and neck definition.',
      content: `SMAS tightening and neck work to address laxity. Incisions concealed around the ear. Social downtime 2–3 weeks.`
    }
  },
}

// --- Legal pages ---
const LEGAL = {
  es: {
    privacidad: {
      title: "Política de Privacidad",
      content: `Responsable: Clínica Dr. Asenjo. Finalidad: gestión de consultas y citas. Legitimación: consentimiento del interesado. Destinatarios: no se ceden datos salvo obligación legal o prestación de servicios (hosting, analítica). Derechos: acceso, rectificación, supresión y otros en info@drasenjo.com. Más info en esta política.`
    },
    cookies: {
      title: "Política de Cookies",
      content: `Usamos cookies técnicas necesarias y, si lo autorizas, analíticas para medir el uso del sitio. Puedes configurar tu consentimiento en cualquier momento. Las cookies analíticas no se activarán sin tu permiso.`
    },
    aviso: {
      title: "Aviso Legal",
      content: `Este sitio es titularidad de Clínica Dr. Asenjo. El acceso implica la aceptación de las condiciones de uso aquí expuestas. Queda prohibida la reproducción no autorizada de contenidos.`
    }
  },
  en: {
    privacidad: {
      title: "Privacy Policy",
      content: `Controller: Clínica Dr. Asenjo. Purpose: handling enquiries and appointments. Legal basis: user consent. Recipients: service providers and legal obligations. Rights: access, rectification, erasure at info@drasenjo.com.`
    },
    cookies: {
      title: "Cookies Policy",
      content: `We use strictly necessary cookies and, if you consent, analytics cookies to understand usage. You can change your preferences at any time.`
    },
    aviso: {
      title: "Legal Notice",
      content: `This website is owned by Clínica Dr. Asenjo. Access implies acceptance of these terms. Unauthorised reproduction of content is prohibited.`
    }
  }
}

// --- Simple hash router ---
function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash;
}

function setSEO(title, description) {
  if (title) document.title = title;
  if (description) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }
}

function ProcedurePage({ slug, lang, onBack }) {
  const t = PROCEDURES[slug]?.[lang] || PROCEDURES[slug]?.es;
  React.useEffect(() => {
    if (t) setSEO(t.seoTitle, t.seoDesc);
  }, [slug, lang]);
  if (!t) return <div className="max-w-3xl mx-auto px-4 py-16">Procedimiento no encontrado.</div>;
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <button className="text-sm text-[#0b1f3a] underline" onClick={onBack}>← {TEXTS[lang].back}</button>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-3 text-neutral-700">{t.description}</p>
      <div className="mt-6 prose prose-neutral max-w-none">
        <p>{t.content}</p>
        <h3>Proceso y recuperación</h3>
        <ul>
          <li>Valoración personalizada y expectativas realistas.</li>
          <li>Técnicas modernas para un resultado natural.</li>
          <li>Seguimiento estrecho y contacto directo con el equipo.</li>
        </ul>
      </div>
      <div className="mt-8">
        <Button className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]" onClick={() => document.getElementById("contacto")?.scrollIntoView({behavior:'smooth'})}>
          <Calendar className="mr-2 h-4 w-4"/> {TEXTS[lang].hero_cta_primary}
        </Button>
      </div>
    </section>
  )
}

function LegalPage({ page, lang, onBack }) {
  const map = { privacidad:'privacidad', cookies:'cookies', aviso:'aviso' }
  const item = LEGAL[lang][map[page]] || LEGAL.es[map[page]]
  React.useEffect(() => {
    if (item) setSEO(item.title + " · Clínica Dr. Asenjo", item.title);
  }, [page, lang]);
  if (!item) return null
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <button className="text-sm text-[#0b1f3a] underline" onClick={onBack}>← {TEXTS[lang].back}</button>
      <h1 className="mt-4 text-3xl font-semibold">{item.title}</h1>
      <p className="mt-4 text-neutral-700 whitespace-pre-wrap">{item.content}</p>
    </section>
  )
}

export default function ClinicaDrAsenjo() {
  const [lang, setLang] = React.useState(localStorage.getItem('lang') || 'es');
  const hash = useHashRoute();
  React.useEffect(()=>{ localStorage.setItem('lang', lang); },[lang]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">{" "}
{(()=>{ const m = (hash.replace("#","")||"/").split("/").filter(Boolean); if(m[0]==="proc" && m[1]) return <ProcedurePage slug={m[1]} lang={lang} onBack={()=>window.history.back()} />; if(m[0]==="legal" && m[1]) return <LegalPage page={m[1]} lang={lang} onBack={()=>window.history.back()} />; return null })()}

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-[#0b1f3a]" aria-hidden />
              <span className="font-semibold tracking-tight">Clínica Dr. Asenjo</span><button className="ml-3 text-xl" aria-label="language" onClick={()=>setLang(lang==="es"?"en":"es")}>{lang==="es"?"🇬🇧":"🇪🇸"}</button>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#tratamientos" className="hover:opacity-70">{TEXTS[lang].nav_tratamientos}</a>
              <a href="#resultados" className="hover:opacity-70">Resultados</a>
              <a href="#equipo" className="hover:opacity-70">{TEXTS[lang].nav_equipo}</a>
              <a href="#contacto" className="hover:opacity-70">{TEXTS[lang].nav_contacto}</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Button className="rounded-2xl h-9 px-5 bg-[#0b1f3a] text-white hover:bg-[#0d274e]" onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}>{TEXTS[lang].reserve_online}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
{React.useEffect(()=>{ setSEO('Clínica Dr. Asenjo — Cirugía Plástica Granada · Málaga', 'Cirugía plástica en Granada y Málaga. Aumento de pecho, lipoescultura (Lipo HD), rinoplastia, blefaroplastia, mastopexia, ginecomastia. Resultados naturales.'); },[])}
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
                <Button className="rounded-2xl h-11 px-6 text-[#0b1f3a] hover:bg-[#0b1f3a]/5" variant="ghost" onClick={() => document.getElementById("tratamientos")?.scrollIntoView({ behavior: "smooth" })}>{TEXTS[lang].hero_cta_secondary}</Button>
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
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{TEXTS[lang].nav_tratamientos}</h2>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-700">Ver todos</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Rinoplastia', description: 'Respira mejor, luce natural.', icon: Sparkles },
              { title: 'Blefaroplastia', description: 'Mirada fresca y luminosa.', icon: Sparkles },
              { title: 'Aumento mamario', description: 'Armonía y proporción.', icon: Sparkles },
{ title: 'Mastopexia (con y sin prótesis)', description: 'Eleva y corrige la caída del pecho.', icon: Sparkles },
{ title: 'Reducción de mama', description: 'Alivio funcional y mejora estética.', icon: Sparkles },
{ title: 'Ginecomastia', description: 'Reducción mamaria masculina.', icon: Sparkles },
{ title: 'Lifting facial', description: 'Rejuvenecimiento y definición del óvalo.', icon: Sparkles },
              { title: 'Lipoescultura', description: 'Definición con precisión. Lipo HD disponible.', icon: Sparkles },
                                        ].map((f, i) => (
              <Card key={i} className="rounded-3xl border-neutral-200 hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <f.icon className="h-5 w-5" />
                  <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{f.description}</p>
                  <div className="mt-4">
                    <Button variant="ghost" className="rounded-xl h-9 px-4 text-[#0b1f3a] hover:bg-[#0b1f3a]/5">{TEXTS[lang].more_info} <ArrowRight className="ml-1 h-4 w-4" /></Button>
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
                <Button className="rounded-2xl h-11 px-6 text-[#0b1f3a] hover:bg-[#0b1f3a]/5" variant="ghost" onClick={() => document.getElementById("tratamientos")?.scrollIntoView({ behavior: "smooth" })}>Ver credenciales</Button>
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
                <span className="font-semibold tracking-tight">Clínica Dr. Asenjo</span><button className="ml-3 text-xl" aria-label="language" onClick={()=>setLang(lang==="es"?"en":"es")}>{lang==="es"?"🇬🇧":"🇪🇸"}</button>
              </div>
              <p className="mt-3 text-neutral-500 max-w-xs">Clínica Dr. Asenjo · Granada · Málaga. Cirugía y medicina estética con estándares internacionales.</p>
            </div>
            <div>
              <div className="font-medium mb-3">Clínica</div>
              <ul className="space-y-2 text-neutral-600">
                <li><a className="hover:text-neutral-900" href="#equipo">{TEXTS[lang].nav_equipo}</a></li>
                <li><a className="hover:text-neutral-900" href="#tratamientos">{TEXTS[lang].nav_tratamientos}</a></li>
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
              <div className="font-medium mb-3">{TEXTS[lang].nav_contacto}</div>
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

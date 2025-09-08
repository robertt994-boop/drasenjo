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
          <option>Blefaroplastia (Foxy eyes)</option>
          <option>Lifting de cejas</option>
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


// --- Procedures data ---
const PROCEDURES = {
  'rinoplastia': {
    title: 'Rinoplastia',
    description: 'Mejora la forma y la función de la nariz con un enfoque conservador.',
    seoTitle: 'Rinoplastia en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Rinoplastia funcional y estética con resultados naturales.',
    content: [
      `La rinoplastia busca armonizar la nariz con el resto de la cara y mejorar la respiración cuando es necesario. Priorizamos técnicas de preservación que respetan los tejidos y acortan la recuperación, con resultados estables y naturales.`,
      `La intervención suele realizarse bajo anestesia general. Habitualmente se utiliza una férula dorsal entre 7 y 10 días, con reincorporación progresiva a la vida social a partir de la segunda semana.`
    ]
  },
  'blefaroplastia': {
    title: 'Blefaroplastia (incluye “foxy eyes” cuando está indicado)',
    description: 'Rejuvenece la mirada manteniendo tu expresión.',
    seoTitle: 'Blefaroplastia y Foxy Eyes en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Blefaroplastia superior e inferior; opción de foxy eyes según indicación.',
    content: [
      `La blefaroplastia corrige el exceso de piel y las bolsas de los párpados con cicatrices discretas. Cuando procede, puede combinarse con técnicas de tracción del canto y elevación de ceja externa para un efecto “foxy eyes” suave y armónico.`,
      `Preferimos la preservación de grasa cuando es posible y la vía transconjuntival en párpado inferior para minimizar cicatrices. Suele realizarse con anestesia local y sedación, con recuperación social en 7–10 días.`
    ]
  },
  'aumento-mamario': {
    title: 'Aumento mamario',
    description: 'Armonía y proporción con implantes de última generación.',
    seoTitle: 'Aumento de pecho en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Aumento mamario con planificación precisa y resultado natural.',
    content: [
      `Planificamos el volumen y la proyección según tu anatomía y objetivos, explicando opciones de tipo de implante, plano (subfascial o dual plane) y cicatriz (habitualmente en el surco). El objetivo es un pecho natural, cómodo y estable en el tiempo.`,
      `Trabajamos con implantes de alta seguridad y medidas intraoperatorias para un ajuste fino. La recuperación inicial suele ser de 1–2 semanas, con actividad progresiva y uso de sujetador deportivo.`
    ]
  },
  'mastopexia': {
    title: 'Mastopexia (con y sin prótesis)',
    description: 'Eleva y redefine el pecho con cicatrices discretas.',
    seoTitle: 'Mastopexia en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Elevación mamaria con o sin implantes según necesidad de volumen.',
    content: [
      `La mastopexia corrige la caída del pecho reposicionando el complejo areola‑pezón y reestructurando el tejido mamario. Según el grado de flacidez, empleamos patrones de cicatriz corta o en T invertida, buscando siempre un contorno armónico.`,
      `Puede combinarse con implantes si se desea más volumen o proyección. El postoperatorio requiere sujetador deportivo durante 6 semanas y seguimiento para optimizar la cicatrización.`
    ]
  },
  'reduccion-mama': {
    title: 'Reducción de mama',
    description: 'Alivio funcional y mejora estética.',
    seoTitle: 'Reducción de mama en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Cirugía para reducir volumen, mejorar postura y bienestar.',
    content: [
      `Indicada para aliviar molestias cervicales o dorsales, irritación cutánea y limitaciones deportivas. Se reduce el volumen y se reposiciona la areola para recuperar proporción y comodidad.`,
      `La recuperación inicial suele ser de 2–3 semanas. Ofrecemos pautas individualizadas para el control del dolor, el cuidado de las cicatrices y la vuelta progresiva a la actividad.`
    ]
  },
  'ginecomastia': {
    title: 'Ginecomastia',
    description: 'Reducción mamaria masculina con cicatrices mínimas.',
    seoTitle: 'Ginecomastia en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Tratamiento quirúrgico con resultados naturales y discretos.',
    content: [
      `Combinamos liposucción para el componente graso y resección glandular a través de pequeñas incisiones periareolares. Buscamos un tórax más plano y definido preservando la naturalidad.`,
      `El uso de una prenda compresiva durante 4 semanas ayuda a controlar la inflamación y mejorar la adaptación de los tejidos. La reincorporación es progresiva en 1–2 semanas.`
    ]
  },
  'lipoescultura': {
    title: 'Lipoescultura (Lipo HD)',
    description: 'Definición corporal con alta precisión y contorno atlético.',
    seoTitle: 'Lipoescultura y Lipo HD en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Remodelado 360º con marcación selectiva cuando está indicado.',
    content: [
      `La lipoescultura remodela el contorno mediante aspiración asistida y, en casos seleccionados, marcación de líneas musculares (Lipo HD) para un aspecto atlético. Personalizamos el abordaje según la calidad de piel y los objetivos.`,
      `Indicamos faja compresiva entre 4 y 6 semanas y drenaje linfático cuando procede. El retorno a la actividad es gradual desde la segunda semana.`
    ]
  },
  'lifting-facial': {
    title: 'Lifting facial',
    description: 'Rejuvenecimiento y definición del óvalo facial y cuello.',
    seoTitle: 'Lifting facial en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Lifting cervicofacial con trabajo en el SMAS y el cuello.',
    content: [
      `Actuamos sobre el plano profundo (SMAS) para tensar y recolocar, mejorando la flacidez de mejillas, mandíbula y cuello. Las incisiones se esconden alrededor de la oreja para mantener un aspecto natural.`,
      `Combinamos, si es necesario, liposucción submentoniana o tratamiento del platisma. La recuperación social suele situarse entre 2 y 3 semanas.`
    ]
  },
  'lifting-cejas': {
    title: 'Lifting de cejas',
    description: 'Eleva la cola de la ceja y abre la mirada con cicatrices mínimas.',
    seoTitle: 'Lifting de cejas en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Elevación de ceja con abordaje endoscópico o temporal.',
    content: [
      `El lifting de cejas reposiciona la ceja, especialmente su porción lateral, para abrir la mirada y mejorar el tercio superior. Utilizamos abordajes endoscópicos o temporales según el caso, con cicatrices discretas ocultas en el cabello.`,
      `Suele realizarse con anestesia local y sedación, y puede combinarse con blefaroplastia para un resultado integral. La recuperación social es rápida, en torno a una semana.`
    ]
  },
}

// --- Legal pages ---
const LEGAL = {
  es: {
    privacidad: { title: "Política de Privacidad", content: `Responsable: Clínica Dr. Asenjo. Finalidad: gestión de consultas y citas. Legitimación: consentimiento. Destinatarios: prestadores de servicio y obligaciones legales. Derechos: acceso, rectificación, supresión y otros en info@drasenjo.com.` },
    cookies: { title: "Política de Cookies", content: `Usamos cookies técnicas necesarias y, si lo autorizas, analíticas para medir el uso del sitio. Puedes configurar tu consentimiento en cualquier momento.` },
    aviso: { title: "Aviso Legal", content: `Este sitio es titularidad de Clínica Dr. Asenjo. El acceso implica la aceptación de las condiciones de uso. Queda prohibida la reproducción no autorizada de contenidos.` }
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

function ProcedurePage({ slug, onBack }) {
  const t = PROCEDURES[slug];
  React.useEffect(() => { if (t) setSEO(t.seoTitle, t.seoDesc); }, [slug]);
  if (!t) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        Procedimiento no encontrado.
      </div>
    );
  }

  // JSON-LD (schemas) como objetos JS
  const jsonProc = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: t.title,
    description: t.seoDesc || t.description,
    howPerformed: t.content.join(" "),
    url: "https://www.drasenjo.com/#/proc/" + slug,
    medicalSpecialty: "PlasticSurgery",
    procedureType: "SurgicalProcedure"
  };

  const jsonCrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.drasenjo.com/" },
      { "@type": "ListItem", position: 2, name: "Tratamientos", item: "https://www.drasenjo.com/#tratamientos" },
      { "@type": "ListItem", position: 3, name: t.title, item: "https://www.drasenjo.com/#/proc/" + slug }
    ]
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      {/* JSON-LD en el DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonProc) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonCrumbs) }}
      />

      <button
        className="text-sm text-[#0b1f3a] underline"
        onClick={onBack}
      >
        ← Volver
      </button>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-3 text-neutral-700">{t.description}</p>

      <div className="mt-6 prose prose-neutral max-w-none">
        {t.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <Button
          className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]"
          onClick={() =>
            document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Calendar className="mr-2 h-4 w-4" />
          Solicitar valoración
        </Button>
      </div>
    </section>
  );
}

                 
      <button className="text-sm text-[#0b1f3a] underline" onClick={onBack}>← Volver</button>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-3 text-neutral-700">{t.description}</p>
      <div className="mt-6 prose prose-neutral max-w-none">
        {t.content.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-8">
        <Button className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]" onClick={() => document.getElementById("contacto")?.scrollIntoView({behavior:'smooth'})}>
          <Calendar className="mr-2 h-4 w-4"/> Solicitar valoración
        </Button>
      </div>
    </section>
  )
}

function LegalPage({ page, onBack }) {
  const map = { privacidad: "privacidad", cookies: "cookies", aviso: "aviso" };
  const item = LEGAL.es[map[page]];
  React.useEffect(() => {
    if (item) setSEO(item.title + " · Clínica Dr. Asenjo", item.title);
  }, [page]);
  if (!item) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <button
        className="text-sm text-[#0b1f3a] underline"
        onClick={onBack}
      >
        ← Volver
      </button>
      <h1 className="mt-4 text-3xl font-semibold">{item.title}</h1>
      <p className="mt-4 text-neutral-700 whitespace-pre-wrap">{item.content}</p>
    </section>
  );
}


  const item = LEGAL[lang][map[page]] || LEGAL.es[map[page]]
  React.useEffect(() => {
    if (item) setSEO(item.title + " · Clínica Dr. Asenjo", item.title);
  }, [page, lang]);
  if (!item) return null
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <button className="text-sm text-[#0b1f3a] underline" onClick={onBack}>← Volver</button>
      <h1 className="mt-4 text-3xl font-semibold">{item.title}</h1>
      <p className="mt-4 text-neutral-700 whitespace-pre-wrap">{item.content}</p>
    </section>
  )
}

export default function ClinicaDrAsenjo() {
  
  const hash = useHashRoute();
  React.useEffect(()=>{ localStorage.setItem('lang', lang); },[lang]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">{" "}
{(()=>{ const m = (hash.replace("#","")||"/").split("/").filter(Boolean); if(m[0]==="proc" && m[1]) return <ProcedurePage slug={m[1]} onBack={()=>window.history.back()} />; if(m[0]==="legal" && m[1]) return <LegalPage page={m[1]} onBack={()=>window.history.back()} />; return null })()}

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
              <Button className="rounded-2xl h-9 px-5 bg-[#0b1f3a] text-white hover:bg-[#0d274e]" onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}>Reserva online</Button>
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
                <Button className="rounded-2xl h-11 px-6 text-[#0b1f3a] hover:bg-[#0b1f3a]/5" variant="ghost" onClick={() => document.getElementById("tratamientos")?.scrollIntoView({ behavior: "smooth" })}>Explorar tratamientos</Button>
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
              { title: 'Blefaroplastia (Foxy eyes)', description: 'Mirada fresca y luminosa.', icon: Sparkles },
              { title: 'Lifting de cejas', description: 'Eleva la cola de la ceja y abre la mirada.', icon: Sparkles },
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

{/* Cookie banner */}
<div id="cookie-banner" className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-lg rounded-2xl border border-neutral-200 bg-white/95 backdrop-blur p-4 shadow">
  <p className="text-sm text-neutral-700">
    Usamos cookies técnicas y, si aceptas, analíticas (Plausible) para entender el uso de la web.
  </p>
  <div className="mt-3 flex gap-2">
    <Button className="rounded-xl h-9 px-4 bg-[#0b1f3a] text-white hover:bg-[#0d274e]" onClick={() => window.__acceptAnalytics?.()}>Aceptar</Button>
    <Button variant="ghost" className="rounded-xl h-9 px-4" onClick={() => window.__rejectAnalytics?.()}>Rechazar</Button>
    <a href="#/legal/cookies" className="ml-auto text-sm underline">Más info</a>
  </div>
</div>

    </div>
  )
}

import React from 'react';

/* ---------- Datos de procedimientos (ES) ---------- */
const PROCEDURES = {
  'rinoplastia': {
    title: 'Rinoplastia',
    description: 'Mejora la forma y la función nasal con un enfoque conservador.',
    seoTitle: 'Rinoplastia en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Rinoplastia funcional y estética con resultados naturales.',
    content: [
      'La rinoplastia busca armonizar la nariz con el resto de la cara y mejorar la respiración cuando es necesario. Priorizamos técnicas de preservación que respetan los tejidos y acortan la recuperación.',
      'La intervención suele realizarse bajo anestesia general. Se utiliza una férula dorsal entre 7 y 10 días, con reincorporación progresiva a la vida social a partir de la segunda semana.'
    , '\nEn consulta resolvemos dudas, revisamos expectativas y te acompañamos en el postoperatorio con recomendaciones claras para una recuperación cómoda.']
  },
  'blefaroplastia': {
    title: 'Blefaroplastia (Foxy eyes)',
    description: 'Rejuvenece la mirada manteniendo tu expresión.',
    seoTitle: 'Blefaroplastia y Foxy Eyes en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Blefaroplastia superior e inferior; opción de foxy eyes según indicación.',
    content: [
      'La blefaroplastia corrige el exceso de piel y las bolsas de los párpados con cicatrices discretas. Cuando procede, puede combinarse con tracción del canto y elevación lateral de ceja para un efecto “foxy eyes” suave y armónico.',
      'Preferimos la preservación de grasa cuando es posible y la vía transconjuntival en párpado inferior para minimizar cicatrices. Suele realizarse con anestesia local y sedación, con recuperación social en 7–10 días.'
    ]
  },
  'aumento-mamario': {
    title: 'Aumento mamario',
    description: 'Armonía y proporción con implantes de última generación.',
    seoTitle: 'Aumento de pecho en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Aumento mamario con planificación precisa y resultado natural.',
    content: [
      'Planificamos el volumen y la proyección según tu anatomía y objetivos, explicando opciones de tipo de implante, plano (subfascial o dual plane) y cicatriz (habitualmente en el surco). El objetivo es un pecho natural, cómodo y estable en el tiempo.',
      'Trabajamos con implantes de alta seguridad y medidas intraoperatorias para un ajuste fino. La recuperación inicial suele ser de 1–2 semanas, con actividad progresiva y uso de sujetador deportivo.'
    ]
  },
  'mastopexia': {
    title: 'Mastopexia (con y sin prótesis)',
    description: 'Eleva y redefine el pecho con cicatrices discretas.',
    seoTitle: 'Mastopexia en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Elevación mamaria con o sin implantes según necesidad de volumen.',
    content: [
      'La mastopexia corrige la caída del pecho reposicionando el complejo areola‑pezón y reestructurando el tejido mamario. Según el grado de flacidez, empleamos patrones de cicatriz corta o en T invertida.',
      'Puede combinarse con implantes si se desea más volumen o proyección. El postoperatorio requiere sujetador deportivo durante 6 semanas y seguimiento para optimizar la cicatrización.'
    ]
  },
  'reduccion-mama': {
    title: 'Reducción de mama',
    description: 'Alivio funcional y mejora estética.',
    seoTitle: 'Reducción de mama en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Cirugía para reducir volumen, mejorar postura y bienestar.',
    content: [
      'Indicada para aliviar molestias cervicales o dorsales, irritación cutánea y limitaciones deportivas. Se reduce el volumen y se reposiciona la areola para recuperar proporción y comodidad.',
      'La recuperación inicial suele ser de 2–3 semanas. Ofrecemos pautas individualizadas para el control del dolor, el cuidado de las cicatrices y la vuelta progresiva a la actividad.'
    ]
  },
  'ginecomastia': {
    title: 'Ginecomastia',
    description: 'Reducción mamaria masculina con cicatrices mínimas.',
    seoTitle: 'Ginecomastia en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Tratamiento quirúrgico con resultados naturales y discretos.',
    content: [
      'Combinamos liposucción para el componente graso y resección glandular a través de pequeñas incisiones periareolares. Buscamos un tórax más plano y definido preservando la naturalidad.',
      'El uso de una prenda compresiva durante 4 semanas ayuda a controlar la inflamación y mejorar la adaptación de los tejidos. La reincorporación es progresiva en 1–2 semanas.'
    ]
  },
  'lipoescultura': {
    title: 'Lipoescultura (Lipo HD)',
    description: 'Definición corporal con alta precisión y contorno atlético.',
    seoTitle: 'Lipoescultura y Lipo HD en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Remodelado 360º con marcación selectiva cuando está indicado.',
    content: [
      'La lipoescultura remodela el contorno mediante aspiración asistida y, en casos seleccionados, marcación de líneas musculares (Lipo HD) para un aspecto atlético. Personalizamos el abordaje según la calidad de piel y los objetivos.',
      'Indicamos faja compresiva entre 4 y 6 semanas y drenaje linfático cuando procede. El retorno a la actividad es gradual desde la segunda semana.'
    ]
  },
  'lifting-facial': {
    title: 'Lifting facial',
    description: 'Rejuvenecimiento y definición del óvalo facial y cuello.',
    seoTitle: 'Lifting facial en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Lifting cervicofacial con trabajo en el SMAS y el cuello.',
    content: [
      'Actuamos sobre el plano profundo (SMAS) para tensar y recolocar, mejorando la flacidez de mejillas, mandíbula y cuello. Las incisiones se esconden alrededor de la oreja para mantener un aspecto natural.',
      'Podemos combinar liposucción submentoniana o tratamiento del platisma si es necesario. La recuperación social suele situarse entre 2 y 3 semanas.'
    ]
  },
  'lifting-cejas': {
    title: 'Lifting de cejas',
    description: 'Eleva la cola de la ceja y abre la mirada con cicatrices mínimas.',
    seoTitle: 'Lifting de cejas en Granada y Málaga · Clínica Dr. Asenjo',
    seoDesc: 'Elevación de ceja con abordaje endoscópico o temporal.',
    content: [
      'El lifting de cejas reposiciona la ceja, especialmente su porción lateral, para abrir la mirada y mejorar el tercio superior. Utilizamos abordajes endoscópicos o temporales según el caso, con cicatrices discretas ocultas en el cabello.',
      'Suele realizarse con anestesia local y sedación, y puede combinarse con blefaroplastia. La recuperación social es rápida, en torno a una semana.'
    ]
  }
};

/* ---------- Router por hash ---------- */
function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash;
}

/* ---------- SEO helper ---------- */
function setSEO(title, description) {
  if (title) document.title = title;
  if (description) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.setAttribute('content', description);
  }
}

/* ---------- Páginas ---------- */
function ProcedurePage({ slug, onBack }) {
  const t = PROCEDURES[slug];
  React.useEffect(() => { if (t) setSEO(t.seoTitle, t.seoDesc); }, [slug]);
  React.useEffect(() => {
    if (!t) return;
    // JSON-LD via head (sin <script> en JSX)
    const data1 = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: t.title,
      description: t.seoDesc || t.description,
      howPerformed: t.content.join(" "),
      url: "https://www.drasenjo.com/#/proc/" + slug,
      medicalSpecialty: "PlasticSurgery",
      procedureType: "SurgicalProcedure"
    };
    const data2 = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.drasenjo.com/" },
        { "@type": "ListItem", position: 2, name: "Tratamientos", item: "https://www.drasenjo.com/#tratamientos" },
        { "@type": "ListItem", position: 3, name: t.title, item: "https://www.drasenjo.com/#/proc/" + slug }
      ]
    };
    const s1 = document.createElement('script'); s1.type='application/ld+json'; s1.text=JSON.stringify(data1);
    const s2 = document.createElement('script'); s2.type='application/ld+json'; s2.text=JSON.stringify(data2);
    document.head.appendChild(s1); document.head.appendChild(s2);
    return () => { s1.remove(); s2.remove(); };
  }, [slug, t]);

  if (!t) return <div className="max-w-3xl mx-auto px-4 py-16">Procedimiento no encontrado.</div>;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    <div>
      <button className="text-sm text-[#0b1f3a] underline" onClick={onBack}>← Volver</button>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight leading-tight">{t.title}</h1>
      <p className="mt-4 text-neutral-700 text-lg">{t.description}</p>
      <div className="mt-6 prose prose-neutral max-w-none">
        {t.content.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-8">
        <button
          className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]"
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Solicitar valoración
        </button>
      </div>
    </div>
    <div className="md:sticky md:top-20">
      <img src={"/proc/" + slug + ".jpg"} alt={t.title} className="w-full rounded-2xl border shadow-sm object-cover" />
      <p className="mt-3 text-xs text-neutral-500">Imagen orientativa. Sustituir por foto real del procedimiento.</p>
    </div>
  </div>
</section>
  );
}

function HomePage() {
  React.useEffect(() => {
    setSEO('Clínica Dr. Asenjo — Cirugía Plástica Granada · Málaga', 'Cirugía plástica en Granada y Málaga. Aumento de pecho, lipoescultura (Lipo HD), rinoplastia, blefaroplastia (foxy eyes), mastopexia, lifting de cejas.');
  }, []);

  const treatments = [
    { title: 'Rinoplastia', slug: 'rinoplastia', description: 'Armonía facial y respiración cómoda.' },
    { title: 'Blefaroplastia (Foxy eyes)', slug: 'blefaroplastia', description: 'Mirada fresca conservando tu expresión.' },
    { title: 'Aumento mamario', slug: 'aumento-mamario', description: 'Volumen y forma con resultado natural.' },
    { title: 'Lipoescultura (Lipo HD)', slug: 'lipoescultura', description: 'Definición corporal de alta precisión.' },
    { title: 'Mastopexia (con y sin prótesis)', slug: 'mastopexia', description: 'Eleva y redefine el pecho.' },
    { title: 'Reducción de mama', slug: 'reduccion-mama', description: 'Alivio funcional y mejora estética.' },
    { title: 'Ginecomastia', slug: 'ginecomastia', description: 'Reducción mamaria masculina discreta.' },
    { title: 'Lifting facial', slug: 'lifting-facial', description: 'Rejuvenece el óvalo y el cuello.' },
    { title: 'Lifting de cejas', slug: 'lifting-cejas', description: 'Abre la mirada con cicatrices mínimas.' },
  ];

  const [show, setShow] = React.useState(false);
  React.useEffect(()=>{ const t = setTimeout(()=>setShow(true), 30); return ()=>clearTimeout(t); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Clínica Dr. Asenjo</a>
          <nav className="flex gap-6 text-sm">
            <a href="#tratamientos" className="hover:underline">Tratamientos</a>
            <a href="#equipo" className="hover:underline">Equipo</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO mejorado */}
      <section className={"mx-auto max-w-6xl px-4 py-16 transition-all duration-700 " + (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
        <div className="rounded-[28px] border bg-gradient-to-b from-[#f4f7fb] to-white p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Resultados naturales, seguridad y cercanía en Granada y Málaga.
          </h1>
          <p className="mt-5 text-neutral-700 max-w-2xl text-lg">
            Cirugía plástica y estética centrada en ti. Información clara, técnica moderna y acompañamiento durante todo el proceso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e]"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserva online
            </button>
            <button
              className="rounded-2xl h-11 px-6 border border-[#0b1f3a]/20 hover:bg-[#0b1f3a]/5"
              onClick={() => document.getElementById('tratamientos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar tratamientos
            </button>
          </div>
        </div>
      </section>

      {/* TRATAMIENTOS con cards premium */}
      <section id="tratamientos" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Tratamientos</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map(f => (
            <article key={f.slug} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{f.description}</p>
              <div className="mt-5 flex gap-2">
                <button
                  className="h-10 px-4 rounded-xl bg-[#0b1f3a] text-white hover:bg-[#0d274e]"
                  onClick={() => window.location.hash = '#/proc/' + f.slug}
                >
                  Más información
                </button>
                <button
                  className="h-10 px-4 rounded-xl border hover:bg-neutral-50"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Reservar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Equipo</h2>
        <p className="mt-3 text-neutral-700 max-w-2xl">Equipo comprometido con resultados naturales, seguridad y trato cercano.</p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <input className="border rounded-xl h-10 px-3" placeholder="Nombre" />
          <input className="border rounded-xl h-10 px-3" placeholder="Teléfono" />
          <input className="border rounded-xl h-10 px-3 md:col-span-2" placeholder="Email" />
          <select name="tratamiento" className="border rounded-xl h-10 px-3 md:col-span-2">
            <option>Rinoplastia</option>
            <option>Blefaroplastia (Foxy eyes)</option>
            <option>Aumento mamario</option>
            <option>Lipoescultura (Lipo HD)</option>
            <option>Mastopexia (con y sin prótesis)</option>
            <option>Reducción de mama</option>
            <option>Ginecomastia</option>
            <option>Lifting facial</option>
            <option>Lifting de cejas</option>
          </select>
          <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={4} placeholder="Cuéntanos qué necesitas" />
          <button className="rounded-2xl h-11 px-6 bg-[#0b1f3a] text-white hover:bg-[#0d274e] md:col-span-2">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between text-sm">
          <span>© {new Date().getFullYear()} Clínica Dr. Asenjo</span>
          <nav className="flex gap-4">
            <a href="#/legal/privacidad" className="hover:underline">Privacidad</a>
            <a href="#/legal/cookies" className="hover:underline">Cookies</a>
            <a href="#/legal/aviso" className="hover:underline">Aviso legal</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}


/* ---------- Páginas legales ---------- */
const LEGAL = {
  es: {
    privacidad: { title: 'Política de Privacidad', content: 'Responsable: Clínica Dr. Asenjo. Finalidad: gestión de consultas y citas. Legitimación: consentimiento. Destinatarios: prestadores de servicio y obligaciones legales. Derechos: acceso, rectificación, supresión y otros en info@drasenjo.com.' },
    cookies: { title: 'Política de Cookies', content: 'Usamos cookies técnicas necesarias y, si lo autorizas, analíticas para medir el uso del sitio. Puedes configurar tu consentimiento en cualquier momento.' },
    aviso: { title: 'Aviso Legal', content: 'Este sitio es titularidad de Clínica Dr. Asenjo. El acceso implica la aceptación de las condiciones de uso. Queda prohibida la reproducción no autorizada de contenidos.' }
  }
};

function LegalPage({ page, onBack }) {
  const map = { privacidad: 'privacidad', cookies: 'cookies', aviso: 'aviso' };
  const item = LEGAL.es[map[page]];
  React.useEffect(() => { if (item) setSEO(item.title + ' · Clínica Dr. Asenjo', item.title); }, [page]);
  if (!item) return null;
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <button className="text-sm text-[#0b1f3a] underline" onClick={onBack}>← Volver</button>
      <h1 className="mt-4 text-3xl font-semibold">{item.title}</h1>
      <p className="mt-4 text-neutral-700 whitespace-pre-wrap">{item.content}</p>
    </section>
  );
}

/* ---------- App (router) ---------- */
export default function ClinicaDrAsenjo() {
  const hash = useHashRoute();

  const RouteView = React.useMemo(() => {
    const parts = (hash.replace('#','') || '/').split('/').filter(Boolean);
    if (parts[0] === 'proc' && parts[1]) return <ProcedurePage slug={parts[1]} onBack={() => window.history.back()} />;
    if (parts[0] === 'legal' && parts[1]) return <LegalPage page={parts[1]} onBack={() => window.history.back()} />;
    return null;
  }, [hash]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {RouteView || <HomePage />}
    </div>
  );
}
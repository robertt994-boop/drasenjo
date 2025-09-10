# Clínica Dr. Asenjo (Next.js + Tailwind)

Proyecto listo para ejecutar y publicar. Incluye UI corregida, navegación, formulario con consentimiento y galería con persistencia en `localStorage`.

## Requisitos
- Node.js 18+
- npm / pnpm / yarn
- (Opcional) Cuenta de GitHub y **GitHub Desktop**
- (Opcional) Cuenta en **Vercel** para desplegar

---

## 1) Ejecutar en local
```bash
npm install        # o pnpm i / yarn
npm run dev        # http://localhost:3000
```

> Edita el número real de WhatsApp en `src/app/page.tsx` (`WHATSAPP_NUMBER`).

---

## 2) Publicarlo con GitHub Desktop
1. Abre **GitHub Desktop** → **File → Add local repository…** → **Choose…** y selecciona la carpeta del proyecto.
2. Si te dice que no es un repositorio Git: **Create a repository** y confirma.
3. Escribe un mensaje de commit: `feat: proyecto inicial (Next.js + Tailwind)` → **Commit to main**.
4. Pulsa **Publish repository** (elige `Private` si prefieres).

> A partir de ahora, para subir cambios: **Commit to main** → **Push origin**.

---

## 3) Desplegar en Vercel (recomendado)
**Opción A — Conectar GitHub:**
1. Ve a [Vercel](https://vercel.com) → **New Project** → **Import Git Repository**.
2. Selecciona tu repo `clinica-dr-asenjo`.
3. Configuración por defecto (framework detectado: **Next.js**). Pulsa **Deploy**.
4. En cada push a `main`, Vercel redeploya automáticamente.

**Opción B — Importar carpeta (sin GitHub):**
1. **Vercel → New Project → Import**.
2. Arrastra la carpeta del proyecto (o el ZIP). Vercel crea un repo interno y despliega.

**Domains/URLs:**
- Puedes asignar un dominio desde **Project Settings → Domains**.
- SSL/TLS automático por Vercel.

---

## Variables y ajustes útiles
- Cambiar títulos/datos de contacto dentro de `src/app/page.tsx` y `src/app/layout.tsx`.
- Si añades imágenes en `public/`, puedes referenciarlas con `/nombre.png`.

---

## Estructura principal
```
src/
  app/
    page.tsx       # Página principal (cliente)
    layout.tsx     # Layout base + <html>
    globals.css    # Tailwind
public/
  # estáticos (imágenes, favicon, etc.)
tailwind.config.ts
postcss.config.js
next.config.mjs
```

---

## Licencia
MIT — ver `LICENSE`.

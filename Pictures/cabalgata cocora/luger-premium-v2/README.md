# LUGER — Finca & experiencia · Version 3.0.0

Landing page editorial para Finca Luger, desarrollada con React + Vite + Cloudinary.

## Requisitos
- Node.js 20.19+ o 22.12+
- npm

## Instalación y ejecución
```bash
npm install
npm run dev
```

## Compilar para producción
```bash
npm run build
npm run preview
```

## Cloudinary
Copia `.env.example` como `.env` y define:
```env
VITE_CLOUDINARY_CLOUD_NAME=f1omymbg
VITE_CLOUDINARY_VIDEO_ID=tu_public_id_del_video
```
El vídeo de portada es opcional; sin un ID configurado se muestra una fotografía.
La imagen vertical indicada para la versión 3 está integrada en la historia de la finca.

## Idiomas
El selector ES / EN cambia el idioma de la web y recuerda la preferencia en el almacenamiento local del navegador. Las traducciones se mantienen en `src/i18n.jsx`.

## Contenido y diseño
- `src/components/Hero.jsx`: portada.
- `src/components/Tour.jsx`: experiencia e historia visual de la finca.
- `src/components/Gallery.jsx`: galería.
- `src/components/Hours.jsx`: horarios, reservas e información de transporte.
- `src/components/History.jsx`: historia familiar.
- `src/components/Footer.jsx`: pie de página y enlaces legales.
- `src/App.css`: estilos complementarios de la versión 3.

## Privacidad y cumplimiento
La sección informativa incluida es una **plantilla inicial**, no una certificación de cumplimiento legal ni asesoría jurídica. Antes de publicar, completa la identidad y datos de contacto del responsable del tratamiento, finalidades y bases legales reales, plazos de conservación, procedimiento para ejercer derechos, proveedores que reciben datos, condiciones de reserva/cancelación y cualquier requisito aplicable a tus mercados. Revisa especialmente la Ley 1581 de 2012 y sus normas reglamentarias en Colombia y, cuando corresponda por el público o la operación, GDPR/UK GDPR, reglas de cookies y normativa de protección al consumidor. No añadas analítica, píxeles publicitarios, formularios o cookies no esenciales sin evaluar avisos y consentimientos necesarios. Pide una revisión legal local antes del lanzamiento.

Los horarios, servicios y condiciones que aparecen en la web deben coincidir con la operación real de la finca. La información de transporte indica que este no está incluido; confirma la disponibilidad de cada alternativa antes de ofrecerla como servicio.

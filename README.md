<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/ManuelIturriaga/JobTrack@main/PremiumLogo.jpg" alt="JobTrack Logo" width="120" height="120">
  
  <h1>JobTrack</h1>
  
  <p>
    <strong>El CRM Personal para el Éxito Profesional Junior</strong>
  </p>
  
  <p>
    <a href="#-visión">Visión</a> •
    <a href="#-stack-tecnológico">Tech Stack</a> •
    <a href="#-instalación">Instalación</a> •
    <a href="#-roadmap">Roadmap</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/UI_Design-Google_Stitch-4285F4?style=flat-square&logo=google" alt="Google Stitch" />
    <img src="https://img.shields.io/badge/AI_Core-Gemini_1.5_Pro-8E75B2?style=flat-square&logo=google-gemini" alt="Gemini AI" />
    <img src="https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?style=flat-square&logo=mongodb" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Status-MVP_Dev-orange?style=flat-square" alt="Status" />
  </p>
</div>

---

## 🚀 Visión

**JobTrack** no es otro portal de empleo. Es tu centro de comando.

La búsqueda de empleo para perfiles junior es caótica: decenas de aplicaciones, hojas de cálculo desordenadas y *ghosting* por parte de las empresas. JobTrack elimina el ruido ofreciendo una **gestión de carrera nativa, visual e inteligente**.

> *"Control, Claridad y Consistencia para tu primer gran salto profesional."*

---

## ✨ Características Principales

* **⚡ Pipeline Visual (Kanban):** Visualiza el estado real de tus procesos (*Enviado → Entrevista → Prueba → Oferta*).
* **🤖 AI-Driven Insights:** Análisis automático de descripciones de trabajo para sugerir palabras clave en tu CV (Powered by Google Gemini).
* **🎨 Diseño Minimalista:** Interfaz limpia diseñada con **Google Stitch**, pensada para reducir la fatiga visual.
* **🔔 Smart Follow-ups:** Recordatorios automáticos para no dejar ninguna oportunidad en "visto".

---

## 🛠 Stack Tecnológico

Este proyecto utiliza una arquitectura **Serverless & AI-First**:

| Componente | Tecnología | Uso |
| :--- | :--- | :--- |
| **Frontend UI** | **Google Stitch** | Generación de interfaces mediante IA y Gemini 2.5. |
| **Estilos** | **Tailwind CSS** | Estilizado moderno y responsive. |
| **Inteligencia** | **Google AI Studio** | Procesamiento de lenguaje natural para análisis de ofertas. |
| **Backend / DB** | **MongoDB Atlas** | Base de datos documental y App Services (Triggers/Functions). |
| **Assets** | **GitHub / CDN** | Alojamiento de recursos estáticos optimizados. |

---

## 📂 Estructura del Proyecto

```bash
JobTrack/
├── assets/              # Imágenes y logos (CDN source)
│   ├── PremiumLogo.jpg  # Logo Principal
│   └── FreeLogo.jpg     # Versión Alternativa
├── src/
│   ├── components/      # Componentes UI generados por Stitch
│   ├── services/        # Conexión a MongoDB y Google AI
│   └── utils/           # Constantes (incl. URLs de imágenes)
├── index.html           # Punto de entrada
└── README.md            # Documentación
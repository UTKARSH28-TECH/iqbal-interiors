\# FOLDER STRUCTURE



\# Purpose



This document defines the folder structure for the Iqbal Interiors website.



The architecture should remain clean, scalable, and easy to maintain as the project grows.



\---



\# Project Root



```text

iqbal-interiors/

│

├── app/

├── components/

├── data/

├── hooks/

├── lib/

├── public/

├── styles/

├── types/

├── docs/

├── design-inspiration/

├── package.json

└── README.md

```



\---



\# App Directory



Responsible for routing and layouts.



```text

app/

│

├── layout.tsx

├── page.tsx

├── about/

├── services/

├── contact/

├── gallery/

│   ├── page.tsx

│   └── \[category]/

│       └── page.tsx

└── api/

```



\---



\# Components



Every reusable UI element belongs here.



```text

components/

│

├── layout/

│   ├── Navbar.tsx

│   ├── Footer.tsx

│   └── Container.tsx

│

├── hero/

│

├── services/

│

├── gallery/

│

├── sections/

│

├── ui/

│

└── common/

```



Never place page-specific code inside reusable components.



\---



\# Data



Centralized project data.



```text

data/

│

├── services.ts

├── gallery.ts

├── navigation.ts

├── testimonials.ts

├── metadata.ts

└── statistics.ts

```



Business information should live here rather than inside components.



\---



\# Hooks



Reusable React hooks.



```text

hooks/

│

├── useScroll.ts

├── useMediaQuery.ts

├── useGallery.ts

└── useLightbox.ts

```



\---



\# Library



Reusable utilities.



```text

lib/

│

├── utils.ts

├── seo.ts

├── gallery.ts

├── animations.ts

└── constants.ts

```



\---



\# Types



TypeScript interfaces.



```text

types/

│

├── gallery.ts

├── services.ts

├── project.ts

└── navigation.ts

```



Avoid using `any`.



\---



\# Public Assets



```text

public/

│

├── images/

│   ├── hero/

│   ├── gallery/

│   ├── logo/

│   ├── owners/

│   └── shop/

│

├── favicon.ico

├── robots.txt

└── sitemap.xml

```



Only production assets belong in `public/`.



\---



\# Documentation



```text

docs/

```



Contains all project documentation and development standards.



Claude should read this folder before making changes.



\---



\# Design Inspiration



```text

design-inspiration/

```



Contains Pinterest references, UI inspiration, and layout examples.



These files are for development only and must not be served to website visitors.



\---



\# Folder Rules



\* Use lowercase folder names.

\* Use hyphens where appropriate.

\* Keep related files together.

\* Avoid deeply nested folders unless necessary.



\---



\# Future Expansion



The structure should accommodate future additions:



\* Blog

\* CMS

\* Dashboard

\* Video Gallery

\* Booking System

\* Multi-language support



without major restructuring.



\---



\# Final Principle



The project should remain understandable to any developer joining the project.



A clean folder structure improves maintainability, scalability, and collaboration.




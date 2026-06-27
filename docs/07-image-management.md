\# IMAGE MANAGEMENT



\# Purpose



Images are the primary content of the Iqbal Interiors website.



This document defines how images should be stored, optimized, displayed, and maintained.



The architecture should allow the website to grow for many years without requiring structural changes.



\---



\# Image Philosophy



Photography sells the business.



Visitors should immediately see real projects completed by Iqbal Interiors.



Never replace genuine project photographs with stock images.



Authenticity builds trust.



\---



\# Image Categories



Current categories:



\* Hero Section

\* Bedroom

\* Hall

\* False Ceiling

\* TV Unit Design

\* Kitchen

\* Lighting

\* Jhumars

\* Office

\* Sanitary

\* Shop

\* Owners

\* Logo



Future categories can be added without changing the application architecture.



\---



\# Folder Structure



```

public/

└── images/

&#x20;   ├── hero/

&#x20;   ├── gallery/

&#x20;   │   ├── bedroom/

&#x20;   │   ├── hall/

&#x20;   │   ├── false-ceiling/

&#x20;   │   ├── tv-unit-design/

&#x20;   │   ├── kitchen/

&#x20;   │   ├── lighting/

&#x20;   │   ├── jhumars/

&#x20;   │   ├── office/

&#x20;   │   └── sanitary/

&#x20;   ├── owners/

&#x20;   ├── shop/

&#x20;   └── logo/

```



Folder names should always use lowercase letters and hyphens.



\---



\# Hero Images



Requirements



\* Three premium photographs

\* Large landscape format

\* High quality

\* Optimized for desktop and mobile

\* Automatic slider



\---



\# Gallery Images



Every gallery category should display images automatically from its corresponding folder.



No React component should require manual editing when adding new images.



\---



\# Dynamic Gallery



Gallery pages must be generated dynamically.



Developer workflow:



1\. Add new images to the correct folder.

2\. Deploy the website.



The new images should appear automatically.



No additional configuration should be required.



\---



\# Image Naming



Use descriptive names.



Examples



bedroom-01.webp



bedroom-02.webp



hall-modern-01.webp



kitchen-03.webp



Avoid names like:



IMG\_4387.jpg



DSC00458.jpg



photo1.png



\---



\# Preferred Format



Primary



WebP



Accepted



PNG



JPEG



Future



AVIF



\---



\# Image Optimization



Requirements



\* Responsive sizing

\* Lazy loading

\* Next.js Image component

\* Proper width and height

\* Optimized loading priority



Hero images should receive loading priority.



Gallery images should be lazy loaded.



\---



\# Responsive Behaviour



Desktop



Large masonry/grid layout



Tablet



Two-column layout



Mobile



Single-column layout



Images should maintain their aspect ratio.



\---



\# Lightbox



Every gallery page should support:



\* Fullscreen preview

\* Previous / Next navigation

\* Keyboard controls

\* Swipe gestures

\* Zoom

\* Close button

\* Image counter



\---



\# Image Accessibility



Every image should include descriptive alt text.



Example:



Modern bedroom interior with wooden false ceiling and warm lighting.



Avoid generic alt text like:



image1



photo



bedroom



\---



\# Shareable Gallery



Each gallery category must have a dedicated URL.



Example:



/gallery/bedroom



/gallery/hall



/gallery/kitchen



These URLs should be easy to share through WhatsApp.



\---



\# Future Expansion



The image system should support:



\* Videos

\* Before \& After comparisons

\* Project descriptions

\* Customer testimonials

\* Filters

\* Search

\* Featured projects



without changing the overall architecture.



\---



\# Maintenance Rules



Whenever new projects are completed:



1\. Optimize images.

2\. Name them correctly.

3\. Upload to the correct folder.

4\. Deploy.



No code modifications should be necessary for routine gallery updates.



\---



\# Final Goal



The image system should behave like a professional portfolio platform.



Managing new projects should be fast, scalable, and require minimal developer effort.




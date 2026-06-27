\# DEVELOPMENT RULES



\# Purpose



This document defines the engineering standards for the Iqbal Interiors website.



Every feature should be built with maintainability, scalability, accessibility, and performance in mind.



The project should be production-ready from the beginning.



\---



\# Technology Stack



Framework



\* Next.js (App Router)



Language



\* TypeScript



Styling



\* Tailwind CSS



Animations



\* Framer Motion



Icons



\* Lucide React



Deployment



\* Cloudflare Pages



Version Control



\* Git + GitHub



\---



\# Code Philosophy



Write clean, readable, reusable code.



Avoid duplication.



Prefer composition over repetition.



Keep components small and focused.



\---



\# Component Rules



Each component should have a single responsibility.



Examples:



\* Navbar

\* Hero

\* GalleryGrid

\* GalleryCard

\* ServiceCard

\* Button

\* Footer



Avoid creating large components with multiple responsibilities.



\---



\# Reusable Components



Whenever possible, create reusable UI components.



Examples:



\* Button

\* Section Heading

\* Container

\* Card

\* Modal

\* Gallery Grid

\* Image Card

\* CTA Banner



These components should be reused across the website.



\---



\# File Organization



Separate:



\* Components

\* Data

\* Utilities

\* Types

\* Hooks

\* Assets



Avoid placing unrelated logic together.



\---



\# Image Handling



Always use the Next.js Image component.



Requirements:



\* Lazy loading

\* Responsive sizing

\* Width and height specified

\* Optimized loading



Hero images may use priority loading.



\---



\# State Management



Keep state local whenever possible.



Avoid unnecessary global state.



Use React Context only when truly needed.



\---



\# Animations



Animations should be subtle.



Allowed:



\* Fade

\* Slide

\* Scale

\* Image Reveal

\* Hover Lift



Avoid distracting or excessive animations.



\---



\# Responsive Design



Build mobile-first.



Breakpoints:



\* Mobile

\* Tablet

\* Laptop

\* Desktop



Every page must work well on all screen sizes.



\---



\# Accessibility



Requirements:



\* Semantic HTML

\* Keyboard navigation

\* Focus states

\* Alt text

\* Form labels

\* ARIA attributes where needed



Accessibility should never be optional.



\---



\# Performance



Optimize for:



\* Fast loading

\* Low bundle size

\* Efficient rendering

\* Lazy loading

\* Code splitting



Avoid unnecessary JavaScript.



\---



\# SEO



Every page should include:



\* Metadata

\* Open Graph tags

\* Twitter cards

\* Canonical URLs

\* Structured headings



\---



\# Error Handling



Handle gracefully:



\* Missing images

\* Invalid routes

\* Empty gallery categories

\* Failed image loading



The website should never break because one asset is missing.



\---



\# Future Scalability



The project should support future additions such as:



\* Blogs

\* Reviews

\* Video Gallery

\* Admin Dashboard

\* Appointment Booking

\* Multi-language support



without requiring major refactoring.



\---



\# Git Workflow



Use meaningful commit messages.



Examples:



\* Create responsive navbar

\* Add gallery architecture

\* Improve hero animations

\* Optimize image loading



Avoid vague commit messages like:



\* update

\* changes

\* fix



\---



\# Final Principle



Every line of code should improve:



\* Readability

\* Maintainability

\* Scalability

\* Performance

\* User Experience



The project should feel like software built by an experienced frontend engineering team rather than a quickly generated AI website.




\# COMPONENT LIBRARY



\# Purpose



This document defines every reusable component that should be built for the Iqbal Interiors website.



The objective is to create a consistent, scalable, and maintainable design system.



Avoid duplicate code by reusing components wherever possible.



\---



\# Design Principles



Every component should be:



\* Reusable

\* Responsive

\* Accessible

\* Type-safe

\* Easy to maintain

\* Easy to extend



Components should have a single responsibility.



\---



\# Layout Components



\## Navbar



Features:



\* Sticky navigation

\* Transparent over hero

\* Blur on scroll

\* Mobile drawer

\* Active link indicator

\* WhatsApp button



\---



\## Footer



Contains:



\* Logo

\* Company description

\* Quick links

\* Gallery links

\* Contact information

\* Social links

\* Copyright



\---



\## Container



Reusable width container.



Responsibilities:



\* Max width

\* Horizontal padding

\* Responsive spacing



Every section should use this component.



\---



\# Hero Components



\## HeroSlider



Responsibilities:



\* Display three hero images

\* Auto-play

\* Manual navigation

\* Smooth transitions

\* Responsive behaviour



\---



\## HeroContent



Contains:



\* Heading

\* Description

\* CTA buttons



Keep text separate from slider logic.



\---



\# Typography Components



\## SectionHeading



Reusable section heading.



Supports:



\* Small label

\* Main title

\* Subtitle



Used across all pages.



\---



\# Button Components



\## PrimaryButton



Gold background.



Used for:



\* WhatsApp

\* Contact

\* Explore Gallery



\---



\## SecondaryButton



White background with border.



Used for:



\* Learn More

\* View Collection



\---



\# Service Components



\## ServiceCard



Contains:



\* Image

\* Title

\* Description

\* CTA



Reusable across homepage and services page.



\---



\# Gallery Components



\## GalleryGrid



Displays gallery images.



Responsibilities:



\* Responsive grid

\* Lazy loading

\* Consistent spacing



\---



\## GalleryCard



Contains:



\* Image

\* Hover animation

\* Click interaction



\---



\## GalleryCategoryCard



Contains:



\* Cover image

\* Category title

\* Optional image count

\* View Collection button



Used on homepage and gallery page.



\---



\## Lightbox



Features:



\* Fullscreen view

\* Previous / Next

\* Keyboard support

\* Swipe support

\* Zoom

\* Close button

\* Image counter



\---



\# Featured Project Components



\## FeaturedProjectCard



Contains:



\* Cover image

\* Project title

\* Short description

\* CTA



Supports alternating layouts.



\---



\# Statistics Components



\## CounterCard



Displays:



\* Number

\* Label

\* Optional icon



Supports count-up animation.



\---



\# About Components



\## OwnerCard



Contains:



\* Owner photograph

\* Name

\* Introduction

\* Experience



\---



\## Timeline



Future-ready component for company history.



\---



\# Contact Components



\## ContactCard



Displays:



\* Phone

\* WhatsApp

\* Address

\* Business Hours



\---



\## ContactForm



Fields:



\* Name

\* Phone

\* Email (optional)

\* Message



Includes validation.



\---



\## GoogleMap



Reusable embedded map.



\---



\# CTA Components



\## CTASection



Reusable call-to-action banner.



Used before footer and on gallery pages.



\---



\# Utility Components



\## ImagePlaceholder



Displayed while images load.



\---



\## LoadingSpinner



Reusable loading state.



\---



\## EmptyState



Shown when:



\* Gallery is empty

\* Search has no results



\---



\## Breadcrumb



Reusable breadcrumb navigation.



\---



\## ScrollToTop



Floating action button.



\---



\# Animation Components



Reusable animation wrappers using Framer Motion.



Examples:



\* FadeIn

\* SlideUp

\* ScaleIn

\* RevealOnScroll



Keep animation logic separate from content.



\---



\# Component Rules



\* Keep components small.

\* Avoid duplicate JSX.

\* Use TypeScript interfaces.

\* Accept props instead of hardcoding values.

\* Make styling configurable where appropriate.



\---



\# Future Components



The architecture should allow future additions such as:



\* VideoPlayer

\* ReviewCard

\* BlogCard

\* FAQAccordion

\* AppointmentScheduler

\* CostEstimator



without modifying existing components.



\---



\# Final Principle



Every reusable component should solve one problem well.



Pages should be assembled from reusable building blocks rather than containing large amounts of custom code.



This ensures consistency, easier maintenance, and faster future development.




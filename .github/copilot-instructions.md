# Copilot Instructions for MADMA Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js website for MADMA, an IT services company based in Saarbrücken, Germany.

## Tech Stack
- Next.js 15+ with App Router
- React 19+
- TypeScript
- Tailwind CSS
- Framer Motion for animations

## Design Guidelines
- Use a light, modern design with white background
- Primary colors: Blue (#3B82F6, #2563EB) and white
- Secondary colors: Slate gray for text (#0F172A, #475569, #64748B)
- Accent colors: Light blue (#DBEAFE, #BFDBFE) for backgrounds
- Use rounded corners with radius between 18px and 52px
- Implement subtle, elegant animations - avoid over-the-top effects
- Use smooth, natural transitions (duration: 0.3-0.6s)
- Implement scroll-triggered animations with `whileInView`
- Keep animations professional and not distracting
- Use sticky positioning for navigation
- Ensure responsive design for all screen sizes

## Animation Guidelines
- Use Framer Motion for all animations
- Prefer subtle fade-ins and slide-ins over complex animations
- Use `initial`, `animate`, and `whileInView` for scroll animations
- Keep transition durations between 0.3-0.8 seconds
- Use easing: [0.25, 0.1, 0.25, 1] for smooth, natural motion
- Implement gentle hover effects (scale: 1.02-1.1)
- Avoid excessive parallax effects
- Use viewport={{ once: true }} to prevent re-triggering animations

## Business Information
- Company: MADMA
- Owner: Mario Dohr
- Location: Rastbachweg 20, 66113 Saarbrücken, Germany
- VAT-ID: DE173951491
- Phone: 0681-754545
- Mobile: 0171-3666687
- Email: m.dohr@madma.de

## Services Offered
1. Hardware and Software Consulting & Sales
2. Installation Services
3. Network Technology
4. Video Surveillance Systems
5. Smart Home Automation
6. Software Development

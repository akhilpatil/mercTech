# Merc Technologies Website (Wireframe)

## Overview
A complete B2B precision gauge manufacturing website built with Astro. This is a wireframe version using only black and white colors, with black rectangles as image placeholders.

## Project Status
✅ **Complete and Ready to View**

The development server is running at: **http://localhost:4321/**

## What's Included

### Pages (4 Total)
1. **Home (/)** - Hero section, services, industries, product overview, custom solutions, use case, CTAs
2. **About (/about)** - Company story, facility, capabilities, philosophy, vision, certifications
3. **Products (/products)** - Complete product catalog with 6 major categories
4. **Contact (/contact)** - Contact information and inquiry form with file upload

### Components (8 Total)
- `Navigation.astro` - Sticky navigation with active page indicators
- `Footer.astro` - Company information and links
- `Button.astro` - Reusable button component with hover states
- `Hero.astro` - Home page hero section with CTAs and trust strip
- `ServiceCard.astro` - Service display cards
- `Section.astro` - Consistent section wrapper
- `ProductSection.astro` - Product category sections
- `ContactForm.astro` - Contact form with file upload capability

### Layout
- `BaseLayout.astro` - Main layout wrapper with navigation and footer

### Styling
- `global.css` - Complete wireframe styling system with:
  - CSS custom properties for consistency
  - Typography scale (H1: 48px, H2: 36px, H3: 24px, Body: 16px)
  - Spacing system (8px to 80px)
  - Responsive breakpoints (640px, 768px, 1024px)
  - Utility classes for grids, flex, spacing, and typography

## Design Specifications

### Wireframe Aesthetic
- **Colors**: Black (#000) and White (#fff) ONLY
- **Typography**: System fonts for cross-platform compatibility
- **Image Placeholders**: Black filled rectangles with proper aspect ratios
- **Borders**: 1px (thin) or 2px (thick) solid black
- **Buttons**: Inverted on hover (black background, white text)
- **Forms**: Clean borders with focus states

### Layout
- Container max-width: 1200px
- Section vertical padding: 80px
- Responsive and mobile-friendly
- Semantic HTML throughout

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
mercTech/
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── ProductSection.astro
│   │   ├── Section.astro
│   │   └── ServiceCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro (Home)
│   │   ├── about.astro
│   │   ├── products.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Highlights

### Home Page Sections
- Hero with trust indicators
- What We Do (3 service areas)
- Industries We Serve (6 industries)
- Product Overview (5 categories)
- Custom Solutions
- Why Merc Technologies (6 features)
- Use Case: Automotive Shaft Inspection
- Final CTA

### About Page Sections
- Company story since 2003
- Facility & Capabilities (25,000 sq ft, CNC equipment, metrology lab)
- Philosophy (3 core principles)
- Vision (3 focus areas)
- Certifications (ISO 9001:2015, ASME, NIST)

### Products Page Categories
1. Standard Plain Gauges (Plug, Ring, Snap)
2. Thread Gauges (UN, UNJ, Metric, NPT)
3. Carbide Gauges (0.010" to 12.000")
4. Master Gauges & Setting Standards
5. Special Purpose Gauges (5 types)
6. Custom Gauge Design & Manufacturing (highlighted section)

### Contact Page Features
- Multiple contact methods (phone, email, address)
- Inquiry form with file upload for drawings
- What to Expect section (3-step process)
- FAQ section (5 common questions)
- Service areas information

## Technical Features

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Form labels and required field indicators
- Focus states on interactive elements

### Performance
- Static site generation (fast loading)
- Minimal CSS (no frameworks)
- No JavaScript dependencies for core functionality
- Optimized for production builds

### Responsive Design
- Mobile-first approach
- Breakpoints at 640px, 768px, 1024px
- Flexible grids and layouts
- Touch-friendly navigation on mobile

## Testing Checklist

✅ **Visual Verification**
1. Visit http://localhost:4321/ - Home page loads
2. Navigate to /about - About page displays correctly
3. Navigate to /products - All product sections visible
4. Navigate to /contact - Contact form renders properly
5. Check that all pages use ONLY black and white
6. Verify image placeholders are black rectangles
7. Test navigation between pages
8. Test button hover states (should invert colors)

✅ **Responsive Testing**
1. Resize browser to mobile width (< 640px)
2. Check that navigation stacks vertically
3. Verify grids become single column on mobile
4. Test that content is readable at all sizes

✅ **Content Verification**
1. All sections from plan are present
2. Trust indicators on home page
3. Use case example included
4. All product categories listed
5. Contact form has all required fields including file upload
6. Footer appears on all pages with contact info

✅ **Technical Validation**
1. No console errors in browser
2. All pages render without TypeScript errors
3. Navigation active states work correctly
4. Form inputs have proper validation attributes

## Next Steps

This wireframe is ready for:
1. **User Testing** - Navigate through all pages and verify content
2. **Content Refinement** - Update copy, add real company details
3. **Design Evolution** - Add colors, real images, brand identity
4. **Form Integration** - Connect contact form to backend/email service
5. **Production Deployment** - Build and deploy to hosting platform

## Notes

- The contact form currently has HTML structure only - you'll need to add a backend handler or use a service like Formspree/Netlify Forms for actual submissions
- All image placeholders can be replaced by updating the respective components
- The design strictly adheres to the wireframe aesthetic (black and white only) as specified
- File upload accepts .pdf, .dwg, and .dxf formats

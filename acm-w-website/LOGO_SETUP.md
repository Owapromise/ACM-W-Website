# ACM-W Logo Setup Guide

## Adding Your Logos

The website is configured to display your ACM-W logos. Follow these steps to add them:

### 1. Add the Main Logo

**File**: `src/assets/acm-w-logo.png`

Save your ACM-W logo (the circular blue/purple logo with white arrow) as:
- **Filename**: `acm-w-logo.png`
- **Location**: `acm-w-website/src/assets/`
- **Format**: PNG (recommended for transparency) or SVG
- **Recommended Size**: At least 200x200px

### 2. (Optional) Add Secondary Logo

For the main hero section or footer, you can also add:
- **Filename**: `nu-arlington-acm-w-logo.png`
- **Location**: `src/assets/`
- **Recommended Size**: 300x300px or larger

### 3. Update References

The website currently looks for:
- Navigation logo: `/acm-w-logo.png` (in public folder) or `src/assets/acm-w-logo.png`

To change the logo file, edit `src/App.jsx` and update:
```jsx
<img src="/acm-w-logo.png" alt="ACM-W Logo" className="logo-img" />
```

### 4. Test the Changes

1. Place the logo file in `public/acm-w-logo.png` OR `src/assets/acm-w-logo.png`
2. Restart the dev server: `npm run dev`
3. The logo should appear in the navigation bar

### Logo Specifications

- **Format**: PNG with transparent background (recommended) or SVG
- **Min Size**: 100x100px
- **Ideal Size**: 200x200px - 500x500px
- **Colors**: The logo uses blues and whites, which match the ACM-W color scheme

### Files to Update

If you want to customize further, edit these files:
- `src/App.jsx` - Main component with logo references
- `src/App.css` - Logo styling (size, positioning)
- `public/index.html` - Favicon and meta tags

### Support

The website is responsive and will:
- Display logo at 60px in navbar on desktop
- Display logo at 50px in navbar on mobile
- Automatically scale to fit the container

Once you add the logo files, commit them to git:
```bash
git add src/assets/acm-w-logo.png
git commit -m "Add ACM-W official logos"
```

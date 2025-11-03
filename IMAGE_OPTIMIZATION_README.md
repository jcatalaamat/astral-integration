# Image Optimization System with Sharp

A complete image optimization system for React/Vite projects that automatically generates responsive WebP and JPG images at build time.

## Features

- ✅ **Automatic optimization** - Runs during build process
- ✅ **Responsive images** - Generates 3 sizes (mobile: 640px, tablet: 1024px, desktop: 1920px)
- ✅ **Modern formats** - WebP with JPG fallback
- ✅ **Build-time processing** - Zero runtime overhead
- ✅ **Automatic fallback** - Falls back to original images if optimized ones fail
- ✅ **Lazy loading** - Built-in lazy loading support
- ✅ **SEO friendly** - Faster page loads improve rankings

## Installation

### 1. Install Sharp

Add Sharp as a dev dependency:

```bash
npm install --save-dev sharp
```

Or with yarn:

```bash
yarn add -D sharp
```

### 2. Update package.json

Add the optimization script and update your build script:

```json
{
  "scripts": {
    "dev": "vite",
    "optimize:images": "node scripts/optimize-images.js",
    "build": "node scripts/optimize-images.js && tsc && vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

### 3. Create the optimization script

Create `scripts/optimize-images.js`:

```javascript
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const optimizedDir = path.join(__dirname, '../public/images/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image sizes for responsive images
const sizes = {
  mobile: 640,
  tablet: 1024,
  desktop: 1920
};

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);

  // Skip if not an image
  if (!['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].includes(ext)) {
    return;
  }

  console.log(`Optimizing ${filename}...`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate WebP versions for different sizes
    for (const [sizeName, width] of Object.entries(sizes)) {
      if (metadata.width >= width) {
        // WebP version
        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(path.join(optimizedDir, `${baseName}-${sizeName}.webp`));

        // JPG fallback
        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(optimizedDir, `${baseName}-${sizeName}.jpg`));
      }
    }

    // Also create a standard optimized version at original size (max 1920px)
    const maxWidth = Math.min(metadata.width, 1920);

    // WebP
    await image
      .clone()
      .resize(maxWidth, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(optimizedDir, `${baseName}.webp`));

    // JPG
    await image
      .clone()
      .resize(maxWidth, null, { withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(optimizedDir, `${baseName}.jpg`));

    console.log(`✓ ${filename} optimized successfully`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
  }
}

async function walkDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip the optimized directory itself
      if (filePath !== optimizedDir && !filePath.includes('/optimized')) {
        await walkDirectory(filePath);
      }
    } else if (stat.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

async function optimizeAllImages() {
  console.log('Starting image optimization...\n');

  await walkDirectory(imagesDir);

  console.log('\n✓ All images optimized!');
  console.log(`Optimized images are in: ${optimizedDir}`);
}

optimizeAllImages().catch(console.error);
```

### 4. Create the ResponsiveImage component

Create `src/components/shared/ResponsiveImage.tsx`:

```typescript
import React, { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  aspectRatio?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  aspectRatio
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useOptimized, setUseOptimized] = useState(true);

  // Extract filename without extension
  const getBaseName = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, '');
  };

  const baseName = getBaseName(src);
  const optimizedPath = `/images/optimized/${baseName}`;

  // If optimized images fail to load, fall back to original
  if (!useOptimized) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className={`w-full h-full object-cover ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    );
  }

  return (
    <picture className={className}>
      {/* WebP sources for different screen sizes */}
      <source
        media="(max-width: 640px)"
        srcSet={`${optimizedPath}-mobile.webp`}
        type="image/webp"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${optimizedPath}-tablet.webp`}
        type="image/webp"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${optimizedPath}-desktop.webp`}
        type="image/webp"
      />

      {/* JPG fallback sources */}
      <source
        media="(max-width: 640px)"
        srcSet={`${optimizedPath}-mobile.jpg`}
        type="image/jpeg"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${optimizedPath}-tablet.jpg`}
        type="image/jpeg"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${optimizedPath}-desktop.jpg`}
        type="image/jpeg"
      />

      {/* Final fallback to original image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          console.warn(`Failed to load optimized image, falling back to original: ${src}`);
          setUseOptimized(false);
        }}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    </picture>
  );
};

export default ResponsiveImage;
```

### 5. Update .gitignore

Add the optimized images directory to `.gitignore`:

```
# Optimized images (generated at build time)
public/images/optimized/
```

## Usage

### Basic Usage

Replace regular `<img>` tags with `ResponsiveImage`:

**Before:**
```tsx
<img
  src="/images/hero.jpg"
  alt="Hero image"
  className="w-full h-full object-cover"
/>
```

**After:**
```tsx
import ResponsiveImage from './components/shared/ResponsiveImage';

<ResponsiveImage
  src="/images/hero.jpg"
  alt="Hero image"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### With Priority Loading (Above the Fold)

For images that should load immediately (like hero images):

```tsx
<ResponsiveImage
  src="/images/hero.jpg"
  alt="Hero image"
  priority={true}
  loading="eager"
  className="w-full h-full object-cover"
/>
```

### With Aspect Ratio

```tsx
<ResponsiveImage
  src="/images/hero.jpg"
  alt="Hero image"
  aspectRatio="16/9"
  className="w-full object-cover"
/>
```

## Running Optimization

### During Development

Images are NOT optimized during development for faster build times. Run the dev server normally:

```bash
npm run dev
```

The ResponsiveImage component will automatically fall back to original images.

### Manual Optimization

To generate optimized images manually:

```bash
npm run optimize:images
```

### During Production Build

Optimization runs automatically during production builds:

```bash
npm run build
```

This will:
1. Optimize all images in `/public/images/`
2. Generate optimized versions in `/public/images/optimized/`
3. Compile TypeScript
4. Build with Vite

## File Structure

```
project/
├── public/
│   └── images/
│       ├── hero.jpg                    (original - 3MB)
│       ├── about.jpg                   (original - 2MB)
│       └── optimized/                  (generated, gitignored)
│           ├── hero-mobile.webp        (90KB)
│           ├── hero-mobile.jpg         (100KB)
│           ├── hero-tablet.webp        (200KB)
│           ├── hero-tablet.jpg         (220KB)
│           ├── hero-desktop.webp       (600KB)
│           ├── hero-desktop.jpg        (700KB)
│           ├── hero.webp               (600KB max)
│           ├── hero.jpg                (700KB max)
│           └── ... (same for about.jpg)
├── scripts/
│   └── optimize-images.js
├── src/
│   └── components/
│       └── shared/
│           └── ResponsiveImage.tsx
└── package.json
```

## Expected Performance Improvements

### File Size Reduction

- **Original images**: Typically 2-6 MB each
- **Optimized WebP (desktop)**: 400-800 KB (80% reduction)
- **Optimized WebP (mobile)**: 90-200 KB (95% reduction)
- **Overall savings**: 80-85% bandwidth reduction

### Page Load Metrics

- **Largest Contentful Paint (LCP)**: 4-6s → 1-2s
- **Total Page Weight**: 50-100 MB → 10-20 MB
- **Mobile Data Usage**: 70-90% reduction

### SEO Benefits

- Better Core Web Vitals scores
- Improved Google PageSpeed Insights rating
- Higher search rankings
- Better mobile experience

## Customization

### Adjust Image Sizes

Edit `scripts/optimize-images.js`:

```javascript
const sizes = {
  mobile: 640,    // Change to your preferred mobile width
  tablet: 1024,   // Change to your preferred tablet width
  desktop: 1920   // Change to your preferred desktop width
};
```

### Adjust Quality

Change the quality parameter (1-100):

```javascript
.webp({ quality: 85 })  // Higher = better quality, larger file
.jpeg({ quality: 85, progressive: true })
```

### Add More Formats

Add AVIF support for even better compression:

```javascript
// Add to optimizeImage function
await image
  .clone()
  .resize(width, null, { withoutEnlargement: true })
  .avif({ quality: 80 })
  .toFile(path.join(optimizedDir, `${baseName}-${sizeName}.avif`));
```

Then update ResponsiveImage.tsx to include AVIF sources before WebP.

## Troubleshooting

### Images not loading

1. **Make sure optimized images exist**:
   ```bash
   ls public/images/optimized/
   ```

2. **Regenerate optimized images**:
   ```bash
   rm -rf public/images/optimized
   npm run optimize:images
   ```

3. **Check browser console** for error messages

4. **Verify file paths** - Component looks for flat structure in `/images/optimized/`

### Build fails

1. **Check Node version** (requires 16+):
   ```bash
   node --version
   ```

2. **Reinstall Sharp**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check image format** - Only JPG, JPEG, PNG supported

### Images still large

1. **Check if WebP is loading** in browser DevTools Network tab
2. **Lower quality setting** if needed (try 75 instead of 85)
3. **Verify responsive sizes** are generating correctly

## FAQ

**Q: Do I need to optimize images every time I change code?**
A: No, only when you add or modify images.

**Q: Can I use the original images?**
A: Yes, originals remain in `/public/images/`. Just reference them directly with regular `<img>` tags.

**Q: What if I add new images?**
A: Run `npm run optimize:images` or they'll be optimized automatically on next `npm run build`.

**Q: Will this work with GitHub Pages/Netlify/Vercel?**
A: Yes! Everything is pre-built during `npm run build`. Works with any static hosting.

**Q: Can I skip optimization during development?**
A: Yes, `npm run dev` doesn't run optimization. ResponsiveImage automatically falls back to originals.

**Q: How do I handle subdirectories?**
A: The script automatically processes all subdirectories. Just put images anywhere in `/public/images/`.

## License

MIT - Feel free to use in any project!

## Credits

Built with [Sharp](https://sharp.pixelplumbing.com/) - High performance Node.js image processing.

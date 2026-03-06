# SiteFoundry - Complete Rebuild

## 🎉 What's New

Complete redesign with **industrial foundry aesthetic** featuring:
- Bold Bebas Neue display typography
- Industrial color palette (forge dark, fire orange accents)
- Smooth animations and micro-interactions
- Dual-track service focus (students vs. businesses)
- Transparent pricing throughout
- Mobile-responsive design

## 📁 Files Included

- **index.html** - Home page with hero, dual services, templates, process
- **services.html** - Detailed pricing tiers, add-ons, FAQ
- **about.html** - Your story, approach, why affordable, tech stack
- **contact.html** - Enhanced form with service selection, timeline
- **styles.css** - Complete stylesheet with industrial aesthetic
- **main.js** - All interactions: smooth scroll, animations, form handling

## 🚀 Getting Started

1. **Copy your images folder** into the same directory as these files
   - Make sure you have `images/logoMedWhite.png`
   - Make sure you have `images/foundry-hero.jpg` (or replace with your hero image)

2. **Test locally**:
   - Open `index.html` in your browser
   - Test all page links
      - Submit test form (goes to your Formspree)

3. **Customize before deploying**:
   - Update any placeholder text
   - Add your actual contact info if needed
   - Adjust pricing if desired
   - Add real template examples/links when available

## 🎨 Design System

### Colors
- **Forge Dark**: `#0d1117` - Primary backgrounds, headers
- **Forge Fire**: `#ff6b35` - CTA buttons, accents, prices
- **Forge Ember**: `#f7931e` - Gradient pairs with fire
- **Forge Steel**: `#2d3748` - Card backgrounds
- **Forge Silver**: `#cbd5e0` - Secondary text

### Typography
- **Display**: Bebas Neue (headings, prices, large text)
- **Body**: Work Sans (paragraphs, UI elements)

### Key Features
- Sticky navigation with scroll effects
- Hero parallax on desktop
- Animated elements on scroll
- Smooth anchor link scrolling
- Dark/light mode toggle (persists in localStorage)
- Form validation with visual feedback
- Hover effects on cards and buttons

## 📝 Content Notes

### Things You Should Update

1. **About Page**: 
   - The story is written in first person as you (Aiden)
   - Adjust any details that don't match your actual situation
   - Add testimonials when you get them

2. **Services Page**:
   - Pricing is set but you can adjust
   - "First 5 clients get 20% off" - update this when appropriate
   - FAQ answers reflect your actual policies

3. **Contact Form**:
   - Pre-populates service from URL params (e.g., `?service=basic-portfolio`)
   - Currently sends to your existing Formspree endpoint
   - Consider adding more fields if needed

### Template Showcase Section

The templates section shows mockup previews:
- **Modern Professional** (blue gradient)
- **Elegant Minimal** (clean, simple)
- **Bold & Dynamic** (image-focused)

When you have actual ResumeGen outputs:
1. Host them somewhere (Netlify, GitHub Pages, etc.)
2. Update the template cards to link to real examples
3. Consider adding screenshots instead of mockups

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Uses CSS Grid, Flexbox, CSS Variables

### Performance
- Minimal dependencies (just Google Fonts)
- CSS animations with GPU acceleration
- Lazy loading for images (when you add them)
- Optimized for Lighthouse scores

### Accessibility
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Proper heading hierarchy

## 🚢 Deployment

### Recommended Hosts (All Free Tier Available)

**Netlify** (Easiest):
1. Drag and drop folder to netlify.com/drop
2. Done!

**Vercel**:
1. Push to GitHub
2. Import to Vercel
3. Auto-deploys on git push

**GitHub Pages**:
1. Push to GitHub repo
2. Enable Pages in settings
3. Select main branch

### Pre-Deploy Checklist
- [ ] Test all page links
- [ ] Verify form submissions work
- [ ] Test on mobile device
- [ ] Check images load properly
- [ ] Test on different browsers
- [ ] Optimize hero image size (compress to <500KB)

## 🎯 Next Steps

1. **Test thoroughly** - Click everything, try every form field
2. **Get feedback** - Show to a friend, see what's confusing
3. **Add real content** - When you have actual client work, add it
4. **Deploy** - Get it live ASAP so you can start sharing
5. **Market it** - BYU-I Facebook groups, LinkedIn, local businesses

## 💡 Marketing Tips

### Where to Share
- BYU-I student Facebook groups
- r/forhire on Reddit
- Local Rexburg business Facebook groups
- LinkedIn with #webdevelopment #rexburg
- Nextdoor (local businesses love this)

### What to Say
> "Student web developer offering affordable portfolio sites ($150) and small business websites ($500+). Based in Rexburg. First 5 clients get 20% off. [link]"

Keep it simple, emphasize local and student-friendly.

## 🆘 Troubleshooting

**Theme toggle not working?**
- Check browser console for errors
- Make sure main.js is loading

**Form not submitting?**
- Verify Formspree endpoint is correct
- Check for CORS issues in console

**Animations not playing?**
- Clear browser cache
- Try in incognito mode
- Check if `prefers-reduced-motion` is enabled in OS

**Images not showing?**
- Verify file paths match exactly
- Check that images folder is in same directory
- Make sure filenames match (case-sensitive on some hosts)

## 📞 Questions?

If something's broken or unclear, just let me know what's not working and I can help troubleshoot or make adjustments.

---

**Built with Claude by Anthropic**
Industrial aesthetic · Bold typography · Production-ready code

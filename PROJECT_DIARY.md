# Personal Website Project Diary

## Project Overview
Building a personal website to showcase projects, skills, and professional presence.

**Repository:** https://github.com/g-beltrami/personal-website.git

## Project Timeline

### 2025-09-29 - Project Initialization & Development
- Created project diary for tracking progress and context
- Set up git repository
- Connected to GitHub remote repository
- Discovered existing Spotlight template (Tailwind Plus premium template)
- Customized website with personal branding and content

#### Website Customization Completed:
- ✅ Updated profile picture with personal photo
- ✅ Replaced gallery images with personal photos (5 images)
- ✅ Removed tilted styling from gallery for clean, professional look
- ✅ Removed newsletter signup component
- ✅ Updated page title and favicon to "G.Beltrami"
- ✅ Set up social sharing image and metadata
- ✅ Updated work experience with real career history:
  - DEX (Co-founder and CEO, 2022-Present)
  - AWS (Senior Technical Product Manager, 2021)
  - Harvard Business School (MBA Candidate, 2020-2022)
  - Rappi (Global Product Manager, 2019-2020)
  - McKinsey & Company (Business Analyst, 2016-2019)
  - Scuderia Toro Rosso F1 Team (Aerodynamics Engineer, 2015)
- ✅ Added all company logos and optimized sizing
- ✅ Fixed date formatting for consistent display

#### Deployment:
- ✅ Successfully deployed to Vercel
- ✅ Live URL: https://7personal-website-ml1u8tlff-gus-projects-e01fc15d.vercel.app
- ✅ Configured environment variables for RSS feeds
- ✅ Automatic HTTPS and global CDN enabled

## Current Goals
- [x] Design overall architecture and technology stack
- [x] Create initial project structure
- [x] Implement basic layout and navigation
- [x] Add content sections (About, Projects, Contact)
- [x] Deploy to hosting platform

## Technology Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 (Tailwind Plus template)
- **Template**: Spotlight - Professional personal website template
- **Content**: MDX support for articles/blog posts
- **Features**: Dark mode, RSS feeds, responsive design
- **Deployment**: Ready for Vercel/Netlify/AWS

## Development Notes
- **Template Choice**: Used Spotlight template from Tailwind Plus - premium template provided excellent foundation
- **Image Management**: Stored personal images in both `public/` and `src/images/` directories for different use cases
- **Logo Integration**: Company logos stored in `src/images/logos/` for optimal bundling and performance
- **Social Sharing**: Configured Open Graph and Twitter Card metadata for proper social media sharing
- **Environment Variables**: Set up NEXT_PUBLIC_SITE_URL for RSS feeds and canonical URLs

## Social Media Links
- **LinkedIn**: https://www.linkedin.com/in/gustavo-beltrami/
- **GitHub**: https://github.com/gustavo-beltrami
- **Instagram**: https://www.instagram.com/gustavo_mbeltrami/
- **Email**: me@gbeltrami.com

#### Content Development & Enhancement:
- ✅ Customized About page with complete personal biography
- ✅ Updated navigation structure to Home/About/Projects (removed Articles/Speaking/Uses)
- ✅ Enhanced homepage with "Builder. Founder. Learner." branding
- ✅ Added media-friendly bio section with copy functionality and toast notifications
- ✅ Implemented client-side interactivity for bio copying feature
- ✅ Added real projects to Projects page:
  - dex (unified data platform)
  - Patronos Endowment Fund (educational endowment)
  - Kartel Racing (amateur go-karting team)
  - AWS Global Accelerator (network optimization)
  - Rappi (Latin America super app)
  - McKinsey & Company (management consulting)
  - Beehive (enterprise project management)
- ✅ Integrated actual company logos and optimized project descriptions
- ✅ Enhanced Work panel design on homepage with better spacing and "Career Journey" branding
- ✅ Updated footer to match navigation with personalized copyright message
- ✅ Removed redundant Download CV button from Work panel

#### Recent Technical Improvements:
- ✅ Fixed logo import paths for Patronos and Kartel Racing
- ✅ Implemented toast notification system for user feedback
- ✅ Enhanced responsive design for project and work sections
- ✅ Improved component structure and eliminated duplicate content
- ✅ Updated metadata and page descriptions for better SEO

## Next Steps
- [ ] Consider custom domain setup (g.beltrami.com or gustavo.beltrami.com)
- [ ] Add analytics tracking (Google Analytics or Vercel Analytics)
- [ ] SEO optimization and meta descriptions for individual pages
- [ ] Create blog posts for future Articles section (if needed)
- [ ] Add proper logos for Patronos and Kartel Racing (currently using placeholders)
- [ ] Consider adding a contact form or calendar booking integration

---

### 2025-10-10 - Command Palette Mobile Support & Brand Consistency

#### Mobile-Responsive Command Palette Implementation
- **Context**: The command palette (Cmd+K) was desktop-only, creating a poor mobile UX where users couldn't access quick navigation features
- **Implementation**:
  - Created `CommandPaletteContext` for global state management of palette open/close state
  - Enhanced `KeyboardHint` component with mobile detection logic (`isMobile` check based on `window.innerWidth`)
  - Added tap interaction handler for mobile devices - users can now tap the hint to open the command palette
  - Desktop maintains keyboard-only interaction (Cmd+K), while mobile adds touch support
  - Properly handles cleanup of mobile detection event listeners
- **Files Modified**:
  - `/Users/G.Beltrami/Documents/Projects/7.personal-website/src/components/CommandPaletteContext.jsx` (new)
  - `/Users/G.Beltrami/Documents/Projects/7.personal-website/src/components/KeyboardHint.jsx`
  - `/Users/G.Beltrami/Documents/Projects/7.personal-website/src/components/CommandPalette.jsx`
  - `/Users/G.Beltrami/Documents/Projects/7.personal-website/src/app/layout.jsx`
- **Commit**: `54fe4aa` - "Add mobile support for command palette with tap interaction"

#### About Page Title Update
- **Context**: The About page had a different headline style ("I'm Gustavo Beltrami. I love building things that matter.") compared to the homepage's concise branding ("Builder. Founder. Learner.")
- **Decision**: Updated About page title to "Builder, founder, learner. Still chasing hard problems." for brand consistency across the site
- **Rationale**: Creates a cohesive personal brand voice that's more concise and action-oriented
- **Files Modified**:
  - `/Users/G.Beltrami/Documents/Projects/7.personal-website/src/app/about/page.jsx`
- **Commit**: `88af1f2` - "Update About page title to match homepage branding"

#### Deployment Status
- **Pushed to Production**: Both commits pushed to `main` branch on GitHub
- **Vercel Deployment**: Automatic deployment triggered via GitHub integration
- **Live Status**: Changes should be live at production URL within minutes

#### Technical Patterns Established
- **Mobile Detection Pattern**: Using `window.innerWidth < 768` as breakpoint for mobile detection
- **Context API Usage**: Leveraging React Context for cross-component state management (command palette)
- **Event Listener Cleanup**: Proper cleanup in `useEffect` return functions for resize listeners
- **Brand Consistency**: Matching headline styles across pages for cohesive messaging

#### Next Session Priorities
- Monitor Vercel deployment completion
- Test mobile command palette functionality on actual mobile devices
- Consider adding analytics to track command palette usage (desktop vs mobile)

---

### 2025-10-10 (Later Session) - Command Palette UX Refinements

#### Session Summary
Enhanced the command palette with critical UX improvements focused on keyboard interaction and user flow optimization.

#### Key Improvements Implemented

**1. Auto-Focus Input Field**
- **Problem**: After opening the command palette with Cmd+K, users had to manually click into the input field before typing
- **Solution**: Added `useRef` hook and `useEffect` to automatically focus the input field when the palette opens
- **Implementation**: Used 100ms timeout to ensure dialog transition completes before focusing
- **Impact**: Seamless keyboard-first workflow - users can immediately start typing after Cmd+K

**2. Removed Blue Outline**
- **Problem**: Browser's default blue outline appeared when input field was focused, creating visual inconsistency with the dark mode design
- **Solution**: Added `focus:outline-none` to the input field className
- **Design Rationale**: The input field is the only interactive element and is already visually distinct, so the outline was redundant

**3. Fixed Premature Dialog Closing**
- **Problem**: The command palette would close unexpectedly when users deleted text with Backspace or when the input was cleared
- **Root Cause**: Headless UI Combobox was treating empty/null selections as commands and closing the dialog
- **Solutions Implemented**:
  - Added `nullable` prop to Combobox component to allow null selections without triggering onChange
  - Added guard in `handleCommand` to prevent closing when no command is selected
  - Used `displayValue` prop for better control of input value display
  - Added keyboard event handler to prevent default closing behavior on Backspace/Delete keys
- **Impact**: Users can now freely delete text and clear the input without the dialog unexpectedly closing

#### Technical Details

**Files Modified**:
- `/Users/G.Beltrami/Documents/Projects/7.personal-website/src/components/CommandPalette.jsx`

**Code Changes**:
```javascript
// Added useRef for input focus management
const inputRef = useRef(null)

// Auto-focus logic in useEffect
useEffect(() => {
  if (!isOpen) {
    setQuery('')
  } else {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }
}, [isOpen])

// Guard to prevent closing on null/empty selection
const handleCommand = (command) => {
  if (!command) return
  // ... rest of handler
}

// Enhanced Combobox configuration
<Combobox onChange={handleCommand} nullable>
  <Combobox.Input
    ref={inputRef}
    className="... focus:outline-none ..."
    displayValue={() => query}
    onKeyDown={(event) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.stopPropagation()
      }
    }}
  />
</Combobox>
```

**Commit**: `94b1fd6` - "feat: Enhance command palette UX with auto-focus and improved keyboard handling"

#### Homepage Tagline Update
- **Change**: Updated homepage tagline from "Trying to build and learn" to "Living and building"
- **Rationale**: More confident and action-oriented messaging that better reflects professional positioning
- **Commit**: `e32f8b8` - "Update homepage tagline to 'Living and building'"

#### Design Patterns & Protocols Established

**1. Keyboard-First UX Pattern**
- When implementing modal/dialog components with input fields, always auto-focus the primary input on open
- Use refs and delayed focus (with timeout) to account for transition animations
- Prevent default browser behaviors that interfere with keyboard workflows

**2. Headless UI Combobox Pattern**
- Use `nullable` prop when you want to allow empty selections without triggering onChange
- Implement guards in onChange handlers to validate selection before taking action
- Use `displayValue` prop for explicit control over input display value
- Add keyboard event handlers to prevent unwanted propagation of delete/backspace events

**3. Focus State Styling**
- Remove default outlines (`focus:outline-none`) when the focused element is already visually distinct
- Ensure keyboard accessibility is maintained through other visual cues

#### Deployment Status
- **Committed**: Command palette improvements committed to local repo
- **Pushed to GitHub**: Successfully pushed to `origin/main`
- **Vercel Deployment**: Automatic deployment triggered
- **Production Status**: Changes deploying to production URL

#### User Experience Impact
These changes significantly improve the command palette's usability by:
1. Eliminating friction in the keyboard workflow (no need to click)
2. Providing more predictable and stable interaction behavior
3. Creating a more polished, professional feel consistent with dark mode design
4. Matching expected behavior from similar command palettes in tools like VS Code, Raycast, etc.

#### Testing Recommendations
- Test auto-focus behavior on different browsers (Chrome, Firefox, Safari)
- Verify keyboard navigation works correctly with arrow keys, Enter, Escape
- Test on mobile devices to ensure tap interactions still work properly
- Verify the command palette integrates well with the existing mobile tap support added earlier

---
*Last updated: 2025-10-10*
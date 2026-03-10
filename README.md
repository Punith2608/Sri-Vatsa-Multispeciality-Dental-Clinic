# Sri Vatsa Multispeciality Dental Clinic Website

A modern, professional, fully responsive dental clinic website built with React, Tailwind CSS, and Firebase.

## Features

✨ **Modern Design**
- Premium UI with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Dark mode support ready
- Soft shadows and rounded cards
- Professional healthcare aesthetic

🚀 **Performance**
- Optimized for fast loading
- SEO optimized
- Lighthouse optimized
- Production ready

📱 **Pages Included**
1. **Home** - Hero section, services preview, testimonials, why choose us
2. **About** - Clinic story, values, timeline, team commitment
3. **Services** - Detailed service pages with features and benefits
4. **Team** - Doctor profiles with qualifications and experience
5. **Appointment Booking** - Online appointment system with Firebase
6. **Testimonials** - Patient reviews and ratings
7. **Contact** - Contact form, location map, multiple contact options

🎯 **Key Features**
- Floating WhatsApp button
- Sticky navigation bar
- Smooth scrolling
- Animated section reveals (AOS)
- Appointment booking with Firebase
- Responsive navigation
- Professional testimonial slider
- Contact form with validation
- Google Map integration
- SEO meta tags
- Social media links

## Technology Stack

**Frontend:**
- React 18.2
- React Router DOM
- Tailwind CSS
- Lucide React Icons
- AOS (Animate On Scroll)
- Swiper

**Backend:**
- Firebase Firestore (Database)
- Firebase Authentication

**Deployment:**
- Vercel / Netlify Ready

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone or extract the project**
```bash
cd dental-clinic-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**

Create a `.env.local` file in the root directory:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

To get these values:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Create a Firestore database
4. Get your project credentials from Project Settings

4. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel settings
5. Deploy

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

## Project Structure

```
dental-clinic-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   └── TestimonialSlider.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   └── Testimonials.jsx
│   ├── config/
│   │   └── firebase.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── index.js
├── .env.local
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── index.html
```

## Customization

### Update Clinic Information

Edit the following files to customize clinic details:

- **Navigation.jsx** - Clinic name, logo, phone
- **Footer.jsx** - Contact info, social links
- **Home.jsx** - Hero content, services
- **Contact.jsx** - Address, phone, email
- **Appointment.jsx** - Time slots, treatments

### Colors

Edit `tailwind.config.js` to change brand colors:
- Primary Red: `#E62A41`
- Secondary Teal: `#1FA7C6`
- Accent Green: `#4DAD7A`

### Fonts

Already configured with:
- Poppins
- Inter
- Montserrat

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## SEO Optimization

The website includes:
- Meta descriptions
- Open Graph tags
- Semantic HTML
- Sitemap ready
- Mobile responsive design
- Fast loading times
- Schema markup ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact & Support

**Sri Vatsa Multispeciality Dental Clinic**
- Address: RC Road, Tirupati, Andhra Pradesh, India
- Phone: +91 98765 43210
- Email: info@srivatsa.com
- Hours: Monday - Sunday, 9:00 AM - 6:00 PM

## License

This project is proprietary and belongs to Sri Vatsa Multispeciality Dental Clinic.

## Notes

1. **Firebase Setup Required** - The appointment booking feature requires Firebase configuration
2. **Email Notifications** - Set up Firebase Cloud Functions for automatic email confirmations
3. **Images** - Replace placeholder emojis with real images in production
4. **Google Maps** - Update the iframe URL in Contact.jsx with actual clinic coordinates

## Troubleshooting

### Issue: Firebase errors on appointment submission
**Solution:** Ensure Firebase credentials are correctly set in `.env.local`

### Issue: Styles not loading
**Solution:** Run `npm install` and ensure Tailwind CSS is properly configured

### Issue: Images not showing
**Solution:** Replace emoji placeholders with actual image URLs

---

Built with ❤️ for Sri Vatsa Multispeciality Dental Clinic

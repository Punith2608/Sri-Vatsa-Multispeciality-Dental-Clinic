# Firebase Setup & Deployment Guide for Sri Vatsa Dental Clinic Website

## Firebase Configuration Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it: "sri-vatsa-dental-clinic"
4. Accept terms and continue
5. Disable Google Analytics (optional)
6. Click "Create project"

### 2. Create Firestore Database

1. In Firebase Console, click "Firestore Database" in left menu
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your preferred region (e.g., asia-south1 for India)
5. Click "Enable"

### 3. Set Up Firestore Collections

Create collection: `appointments`

Collection rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /appointments/{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 4. Get Firebase Credentials

1. Click Settings (gear icon) > Project Settings
2. Scroll down to "Your apps"
3. Click on your web app (or create one with icon)
4. Copy the configuration object:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

### 5. Set Environment Variables

Create `.env.local` file in project root:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Setup Email Notifications (Optional)

### Using Firebase Cloud Functions

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
```

2. Initialize functions:
```bash
firebase init functions
```

3. Create email sending function in `functions/index.js`:

```javascript
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

exports.sendAppointmentEmail = functions.firestore
  .document("appointments/{appointmentId}")
  .onCreate(async (snap, context) => {
    const appointment = snap.data();
    
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: appointment.email,
      subject: "Appointment Confirmation - Sri Vatsa Dental Clinic",
      html: `
        <h2>Appointment Confirmed!</h2>
        <p>Dear ${appointment.patientName},</p>
        <p>Your appointment has been scheduled:</p>
        <ul>
          <li>Date: ${appointment.preferredDate}</li>
          <li>Time: ${appointment.preferredTime}</li>
          <li>Treatment: ${appointment.treatment}</li>
        </ul>
        <p>Thank you for choosing Sri Vatsa Dental Clinic!</p>
      `
    };
    
    return transporter.sendMail(mailOptions);
  });
```

4. Deploy functions:
```bash
firebase deploy --only functions
```

## Deployment to Vercel

### Option 1: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Environment Variables
   - Add all REACT_APP_* variables

### Option 2: Via GitHub

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure environment variables
6. Click "Deploy"

## Deployment to Netlify

### Option 1: Via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

### Option 2: Via Netlify Dashboard

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub account
5. Select repository
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
7. Add environment variables
8. Deploy

## Firebase Security Rules (Production)

Update Firestore rules for production security:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /appointments/{document=**} {
      allow create: if request.data.keys().hasAll(['patientName', 'phoneNumber', 'email', 'preferredDate', 'preferredTime', 'treatment']);
      allow read, update, delete: if request.auth != null;
    }
    
    match /contact-messages/{document=**} {
      allow create: if request.data.keys().hasAll(['name', 'email', 'subject', 'message']);
      allow read, delete: if request.auth != null;
    }
  }
}
```

## Performance Optimization

### Image Optimization
- Replace emoji placeholders with actual images
- Use WebP format for images
- Optimize images before uploading

### Caching Strategy
```javascript
// In firebase.json
{
  "hosting": {
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{"key": "Cache-Control", "value": "max-age=31536000"}]
      }
    ]
  }
}
```

## Monitoring & Analytics

### Enable Google Analytics
1. In Firebase Console, go to Analytics
2. Link to Google Analytics account
3. Track user behavior, appointments, conversions

### Set Up Error Tracking
- Use Firebase Crashlytics
- Monitor app performance

## Backup Strategy

### Firestore Backup
1. Go to Firestore > Backups
2. Create regular backups
3. Set retention period (default: 35 days)

## Testing Before Deployment

```bash
# Local testing
npm start

# Production build testing
npm run build
npm install -g serve
serve -s build
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test appointment booking works
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Test WhatsApp button
- [ ] Monitor Firebase usage
- [ ] Set up error alerts
- [ ] Configure analytics
- [ ] Monitor performance metrics

## Troubleshooting

### Firebase Connection Issues
```javascript
// Check connection in browser console
firebase.initializeApp(firebaseConfig);
db.collection("appointments").get()
  .then(() => console.log("Connected"))
  .catch(err => console.error("Error:", err));
```

### Deployment Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CORS Issues
- Ensure Firebase is properly configured
- Check CORS policy in firebase.json

---

For more help, visit:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

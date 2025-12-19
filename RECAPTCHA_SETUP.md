# reCAPTCHA v3 Setup Guide

This guide will help you add Google reCAPTCHA v3 protection to the Contact form.

## Why reCAPTCHA v3?

reCAPTCHA v3 provides invisible spam protection without requiring user interaction (no "I'm not a robot" checkbox). It runs in the background and provides a score (0.0-1.0) indicating how likely the user is human.

## Setup Steps

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+" to create a new site
3. Fill in the form:
   - **Label**: Astral Integration Contact Form
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `astralintegration.co`
     - `www.astralintegration.co`
4. Accept the terms and click "Submit"
5. You'll receive:
   - **Site Key** (public key - safe to expose in frontend)
   - **Secret Key** (private key - keep this secret!)

### 2. Install Package

```bash
npm install react-google-recaptcha-v3
```

### 3. Add Environment Variables

Create or update `.env` file in your project root:

```env
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
```

Add `.env` to your `.gitignore` if not already there.

### 4. Update main.tsx

Wrap your App component with the GoogleReCaptchaProvider:

```tsx
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
```

### 5. Update ContactPage.tsx

Replace the TODO comment in the `handleSubmit` function with actual reCAPTCHA verification:

```tsx
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // ... existing code ...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      // reCAPTCHA verification
      if (!executeRecaptcha) {
        console.error('reCAPTCHA not available');
        // Continue without reCAPTCHA in development
      } else {
        const token = await executeRecaptcha('contact_form');
        console.log('reCAPTCHA token generated:', token);

        // Optional: Send token to your backend for verification
        // const verifyResponse = await fetch('/api/verify-recaptcha', {
        //   method: 'POST',
        //   body: JSON.stringify({ token }),
        // });

        // For now, we're just generating the token
        // A more secure approach would verify the token on a backend
      }

      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
}
```

### 6. (Optional but Recommended) Backend Verification

For complete security, verify the reCAPTCHA token on your backend:

#### Create a serverless function or API endpoint:

```javascript
// Example using Node.js
const verifyRecaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`
  });

  const data = await response.json();

  // data.success: true/false
  // data.score: 0.0 - 1.0 (higher is more likely human)
  // Recommended: require score >= 0.5

  return data.success && data.score >= 0.5;
};
```

#### Update EmailJS template to include verification:

You could modify your EmailJS setup to first verify the token server-side before sending the email, or use a proxy function that:
1. Receives the form data + reCAPTCHA token
2. Verifies the token with Google
3. If valid, sends email via EmailJS server-side
4. Returns success/failure to frontend

## Testing

### Development Testing

1. Start your dev server: `npm run dev`
2. Open the contact page
3. Fill out the form and submit
4. Check browser console for reCAPTCHA token generation
5. Verify form submission works as expected

### Production Testing

1. Deploy your site
2. Test the contact form
3. Check [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) for analytics
4. Monitor scores to adjust threshold if needed

## Troubleshooting

### "reCAPTCHA not available" error

- Make sure GoogleReCaptchaProvider is wrapping your App
- Verify VITE_RECAPTCHA_SITE_KEY is set correctly
- Check that the domain is registered in reCAPTCHA admin

### Form submissions blocked

- Check the score threshold (0.5 is recommended)
- Lower scores might indicate bot traffic
- Review analytics in reCAPTCHA admin console

### Development issues

- Make sure 'localhost' is added as a domain in reCAPTCHA admin
- Clear browser cache if making changes to environment variables

## Additional Resources

- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [react-google-recaptcha-v3 npm package](https://www.npmjs.com/package/react-google-recaptcha-v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

## Security Best Practices

1. Never expose your secret key in frontend code
2. Always verify tokens on the backend for production
3. Set appropriate score thresholds (0.5 is a good starting point)
4. Monitor reCAPTCHA analytics regularly
5. Have a fallback plan if reCAPTCHA is unavailable
6. Keep the package updated for security patches

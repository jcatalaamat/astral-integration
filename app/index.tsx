import { ScrollView, View } from 'react-native'
import './base-updated.css'

// Import components
import Hero from './components/Hero'
import About from './components/About'
import OfferingsGrid from './components/OfferingsGrid'
import BookingMenu from './components/BookingMenu'
import Testimonials from './components/Testimonials'
import QuoteDivider from './components/QuoteDivider'
import PremiumCTA from './components/PremiumCTA'
import ContactFooter from './components/ContactFooter'
import StartHereGuide from './components/StartHereGuide'
import SacredPortrait from './components/SacredPortrait'

export default function Index() {
  // Event handlers
  const handleHeroCta = () => {
    console.log('Handle Hero CTA click')
    // Implement scrolling to Booking section
  }

  const handleAboutCtaPress = () => {
    console.log('About CTA pressed')
    // Implement navigation to about page or modal
  }

  const handleApplyForPremium = () => {
    console.log('Apply for premium pressed')
    // Implement premium application flow
  }
  
  const handleClarityCallPress = () => {
    console.log('Clarity Call button pressed')
    // Implement navigation to Clarity Call details or booking
  }
  
  const handleMirrorPathPress = () => {
    console.log('Mirror Path button pressed')
    // Implement navigation to Mirror Path details
  }

  return (
    <ScrollView 
      className="flex-1 bg-white" 
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ height: '100%' }}
    >
      <Hero 
        headline="Journey Into"
        headlineAccent="Wholeness"
        subheadline="Transform Your Life Through Sacred Coaching & Soul Guidance"
        supportingText="This is not self-help. This is soul remembrance."
        microText="Your journey begins with one sacred step."
        ctaText="Book a Session"
        onCtaPress={handleHeroCta}
      />
      
      <About 
        quoteText="I am not here to teach you who you are. I'm here to remind you what you've always known."
        onCtaPress={handleAboutCtaPress}
      />
      
      <OfferingsGrid />
      
      <BookingMenu />
      
      <SacredPortrait 
        headline="This Is Not Coaching"
        supportingText="This is soul remembrance. A sacred invitation to witness yourself through the mirror of divine presence. I create a container for your transformation through ritual, presence, and sacred witnessing."
        imagePath="/images/sacred-portraits/main-portrait.jpg"
        secondaryImagePath="/images/sacred-portraits/secondary-portrait.jpg"
        alignment="right"
      />
      
      <StartHereGuide
        onClarityCallPress={handleClarityCallPress}
        onMirrorPathPress={handleMirrorPathPress}
      />
      
      <Testimonials />
      
      <QuoteDivider />
      
      <PremiumCTA 
        onApplyNow={handleApplyForPremium}
      />
      
      <ContactFooter />
    </ScrollView>
  )
}

// deno-lint-ignore-file
/* eslint-disable */
// biome-ignore: needed import
import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/animations` | `/animations/luxury` | `/components/About` | `/components/BookingMenu` | `/components/ContactFooter` | `/components/Footer` | `/components/GradientTest` | `/components/Hero` | `/components/OfferingsGrid` | `/components/Podcast` | `/components/PremiumCTA` | `/components/QuoteDivider` | `/components/SacredPortrait` | `/components/StartHereGuide` | `/components/Testimonials` | `/components/Todo` | `/components/utility/FadeIn` | `/components/utility/GlowEffect` | `/components/utility/GradientCard` | `/components/utility/TextureBackground` | `/components/utility/TextureBackgroundReact` | `/sacred-chamber` | `/sacred-chamber-react` | `/sacred-chamber/application` | `/todo`
      DynamicRoutes: never
      DynamicRouteTemplate: never
      IsTyped: true
    }
  }
}
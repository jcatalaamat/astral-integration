import React from 'react'
import { Slot } from 'one'
import './base-updated.css'

/**
 * The root _layout.tsx filters <html /> and <body /> out on native
 */

export default function Layout() {
  return (
    <React.Fragment>
      {typeof document !== 'undefined' && (
        <React.Fragment>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <link rel="icon" href="/favicon.svg" />
          <script src="/animations/luxury.js" defer></script>
        </React.Fragment>
      )}
      <Slot />
    </React.Fragment>
  )
}

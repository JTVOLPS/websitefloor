'use client';

import Script from 'next/script';
import { GHL_CONFIG } from '@/lib/ghl';

/**
 * GHL Chat Widget Component
 *
 * Add this component to your layout.tsx to enable the chat widget site-wide:
 *
 * import GHLChatWidget from '@/components/GHLChatWidget';
 *
 * Then in your layout:
 * <body>
 *   {children}
 *   <GHLChatWidget />
 * </body>
 */
export default function GHLChatWidget() {
  // Don't render if no widget ID is configured
  if (!GHL_CONFIG.chatWidgetId) {
    return null;
  }

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={GHL_CONFIG.chatWidgetId}
      strategy="lazyOnload"
    />
  );
}

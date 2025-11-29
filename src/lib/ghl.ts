/**
 * GoHighLevel Integration Configuration
 *
 * HOW TO SET UP:
 *
 * 1. WEBHOOK URL (for form submissions):
 *    - Go to GHL > Settings > Integrations > Webhooks
 *    - Create a new inbound webhook
 *    - Copy the webhook URL and add it to your .env.local file
 *
 * 2. CHAT WIDGET:
 *    - Go to GHL > Sites > Chat Widget
 *    - Copy your widget code/ID
 *    - Add to .env.local
 *
 * 3. CALENDAR EMBED:
 *    - Go to GHL > Calendars > Select Calendar > Embed
 *    - Copy the calendar URL
 *    - Add to .env.local
 *
 * 4. TRACKING SCRIPT:
 *    - Go to GHL > Settings > Business Info > Tracking Code
 *    - Copy your location ID
 *    - Add to .env.local
 */

// Environment variables - add these to your .env.local file
export const GHL_CONFIG = {
  // Webhook URL for form submissions
  webhookUrl: process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || '',

  // Chat widget ID
  chatWidgetId: process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID || '',

  // Location ID for tracking
  locationId: process.env.NEXT_PUBLIC_GHL_LOCATION_ID || '',

  // Calendar embed URL
  calendarUrl: process.env.NEXT_PUBLIC_GHL_CALENDAR_URL || '',
};

/**
 * Submit a lead to GoHighLevel via webhook
 */
export async function submitLeadToGHL(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
  tags?: string[];
  customFields?: Record<string, string>;
}) {
  if (!GHL_CONFIG.webhookUrl) {
    console.warn('GHL webhook URL not configured');
    return { success: false, error: 'Webhook not configured' };
  }

  try {
    const response = await fetch(GHL_CONFIG.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Standard GHL contact fields
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || '',
        company_name: data.company || '',
        source: data.source || 'Website',
        tags: data.tags || ['Website Lead'],

        // Custom fields (if configured in GHL)
        ...data.customFields,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting to GHL:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Generate the GHL tracking script
 */
export function getGHLTrackingScript(): string {
  if (!GHL_CONFIG.locationId) {
    return '';
  }

  return `
    <script src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="${GHL_CONFIG.chatWidgetId}">
    </script>
  `;
}

/**
 * Field mapping for GHL custom fields
 * Map your form fields to GHL custom field IDs
 */
export const GHL_FIELD_MAPPING = {
  industry: 'industry', // Update with your GHL custom field ID
  companySize: 'company_size', // Update with your GHL custom field ID
  reason: 'contact_reason', // Update with your GHL custom field ID
  message: 'message', // Update with your GHL custom field ID
};

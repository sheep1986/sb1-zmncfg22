import React, { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Remove any existing chat widget scripts
    const existingScripts = document.querySelectorAll('script[data-widget-id="673363ce16c21abe29eb3dc0"]');
    existingScripts.forEach(script => script.remove());

    // Create and inject the chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '673363ce16c21abe29eb3dc0');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      script.remove();
      const widgetContainer = document.querySelector('.chat-widget-container');
      if (widgetContainer) {
        widgetContainer.remove();
      }
    };
  }, []);

  return null;
}
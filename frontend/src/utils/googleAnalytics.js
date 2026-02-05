// Google Analytics Initialization
// This file sets up Google Analytics 4 for tracking visitor data

export const initializeGA = (measurementId) => {
  // Add Google Analytics script to the page
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (window.gtag) {
    window.gtag("config", window.GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent("form_submission", {
    form_name: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent("button_click", {
    button_name: buttonName,
  });
};

// Track product views
export const trackProductView = (productName, productId, category) => {
  trackEvent("view_item", {
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: category,
      },
    ],
  });
};

// Track page scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent("scroll_depth", {
    depth_percentage: depth,
  });
};

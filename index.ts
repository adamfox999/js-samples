/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 16,
      center: { lat: 51.928589195255995, lng: -0.6524950219463939 },
    }
  );

  const ctaLayer = new google.maps.KmlLayer({
    url: 'js-samples\LeestonePark.kml',
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

# Lanka Stayz — React + Tailwind

## Run locally

```bash
npm install
npm run dev
```

The ZIP includes the project's image assets in `public/images`, so the asset download script is not needed to run it. To create a production build, run `npm run build`.

## Sample functionality

- Featured homepage properties and curated stay listings open their own property-detail pages with property-specific copy, amenities, check-in/out guidance, and host information.
- The homepage search validates the check-in/check-out order and guest count, then applies the selected destination (when provided) and capacity filters on the stays page. Selected dates and guest count carry into the property's booking panel.
- “Request Booking” opens a required-fields sample form. Submitting it shows an on-screen confirmation; it does not connect to a booking backend or send messages.
- The stays catalog is sample data. It does not track live availability, so selected dates are carried into the request form rather than used to claim a property is available.

## Project structure

- `src/data` — featured copy, stay records, and property-specific detail content.
- `src/pages` — home, stays/search results, and property detail pages.
- `src/components/sections` — homepage sections and search widget.
- `src/components/stays` — destination filters and stay cards.
- `src/components/property` — property details, booking panel, and booking-request modal.
- `public/images` — bundled Figma image assets.

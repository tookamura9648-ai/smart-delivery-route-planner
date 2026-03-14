# Smart Delivery Route Planner

A lightweight delivery route planning web app built with **Leaflet + OpenStreetMap**.

This project is designed for delivery drivers and small logistics teams who need a simple way to:

- import stops from CSV
- optimize delivery order
- rearrange stops with drag and drop
- open the next stop in Google Maps navigation
- install the app as a PWA on mobile or desktop

## Features

- CSV bulk import of delivery stops
- Route optimization
- Drag & drop delivery order
- Google Maps navigation launch
- PWA support
- Opening animation
- English UI for international users

## Recommended folder structure

```text
smart-delivery-route-planner
│
├ index.html
├ manifest.json
├ sw.js
├ README.md
├ LICENSE.txt
├ logo.svg
├ hero_image.png
├ route_optimization.png
├ csv_import.png
├ icon-192.png
├ icon-512.png
└ api
    ├ geocode.js
    └ savePoint.js
```

## CSV format

```csv
name,address
Customer A,350 5th Ave New York NY
Customer B,Times Square New York NY
Customer C,1 Liberty Island New York NY
```

## Notes

- `icon-192.png` and `icon-512.png` are used for the PWA manifest.
- `hero_image.png`, `route_optimization.png`, and `csv_import.png` are marketing/demo assets for GitHub, Gumroad, or landing pages.
- `logo.svg` can be reused in the README, web page, and app splash materials.

## License

MIT License

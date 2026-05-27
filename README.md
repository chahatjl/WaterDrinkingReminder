# 💧 Hydrate, — Water Reminder PWA

A beautiful Progressive Web App that sends your fiancée hourly reminders to drink water.

## Features
- 💧 Tap to log each glass of water
- ⏰ Hourly push notifications (customizable start/end time)
- 🎯 Daily goal tracker with visual progress
- 📲 Installable on iPhone & Android (no App Store needed!)
- 💙 Works offline

## How to set it up

### Step 1: Host the files
Upload all files to any free static hosting service:
- **Netlify** (recommended): drag & drop the folder at netlify.com/drop
- **Vercel**: `npx vercel` in the folder
- **GitHub Pages**: push to a repo and enable Pages
- **Cloudflare Pages**: drag & drop at pages.cloudflare.com

### Step 2: Add the icons
You'll need two icon images:
- `icon-192.png` — 192×192 pixels
- `icon-512.png` — 512×512 pixels

Use a simple 💧 emoji on a blue background, or generate one at https://icon.kitchen

### Step 3: Share with your fiancée
Send her the URL. She will:
1. Open it in Safari (iPhone) or Chrome (Android)
2. Tap **Share → Add to Home Screen** (iPhone) or the install banner (Android)
3. Tap "Activate Reminders" and allow notifications
4. Done! 💧

## Notes
- On iPhone, notifications require iOS 16.4+ and the app must be added to Home Screen first
- Reminders fire at the top of each hour within her set time window
- Progress resets daily at midnight

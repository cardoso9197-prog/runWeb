# 🚗 RUN-RUN GUINEA-BISSAU - PROJECT REPORT

**Comprehensive Technical & Business Overview**  
**Date:** January 6, 2026  
**Version:** 3.1 (PRODUCTION DEPLOYED)  
**Status:** 🟢 LIVE - All Systems Operational  
**Admin Panel:** https://runrunwebapp.netlify.app  
**Location:** Guinea-Bissau 🇬🇼

**Contact:**
- **Developer:** Edivaldo Cardoso
- **Email:** suporte@runrungb.com
- **Phone:** +245 955 971 275

---

## 📋 EXECUTIVE SUMMARY

Run-Run is a complete ride-hailing platform built for Guinea-Bissau, featuring dual mobile applications (Passenger & Driver), robust backend infrastructure, and enterprise-grade admin dashboard.

### Key Metrics:

| Metric | Value |
|--------|-------|
| **Development Time** | 8 weeks (Nov 2025 - Jan 2026) |
| **Total Code** | 20,000+ lines |
| **Mobile Screens** | 25 (13 Passenger + 12 Driver) |
| **Admin Modules** | 8 feature modules |
| **API Endpoints** | 25+ REST endpoints |
| **Payment Methods** | 4 (Visa, Mastercard, Orange Money, MTN) |
| **Languages** | 3 (Portuguese, English, French) |
| **Vehicle Types** | 3 (Moto, Normal Car, Premium Car) |
| **GPS Tracking** | ✅ Real-time (15-second updates) |
| **Deployment** | ✅ Netlify + Railway |

---

## 🏗️ SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────┐
│           ADMIN DASHBOARD (Netlify)                      │
│     https://runrunwebapp.netlify.app                    │
│     Next.js 14 + TypeScript + Tailwind CSS              │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────┼────────────────────────────────┐
│              MOBILE APPS (Expo/React Native)            │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │ Passenger App│    │  Driver App  │                   │
│  │  13 Screens  │    │  12 Screens  │                   │
│  └──────┬───────┘    └──────┬───────┘                   │
└─────────┼───────────────────┼───────────────────────────┘
          │                   │
          └─────────┬─────────┘
                    │ REST API
┌───────────────────┴─────────────────────────────────────┐
│               BACKEND (Railway)                          │
│         Node.js + Express.js + PostgreSQL               │
└─────────────────────────────────────────────────────────┘
```

---

## 🖥️ ADMIN DASHBOARD FEATURES

### Live URL: https://runrunwebapp.netlify.app

| Module | Features |
|--------|----------|
| **Dashboard** | Real-time stats, revenue, charts |
| **Driver Management** | List, verify, activate/reject drivers |
| **Passenger Management** | Full directory, search, details |
| **Ride History** | Filtering, search, export CSV |
| **Financial Reports** | Revenue tracking, commission (20%) |
| **Notification Center** | Push, SMS (Orange/MTN), Email |
| **Support Tickets** | Ticket management, priorities |
| **Document Management** | View/download driver documents |

### Admin Credentials:
- **Email:** cardoso9197@gmail.com
- **Password:** Inside9791@
- **Admin Key:** runrun-admin-2025

---

## 📱 MOBILE APPLICATIONS

### Passenger App (13 Screens):
- Welcome & Language Selection
- Registration & OTP Verification
- Map-based Ride Booking
- Active Ride Tracking
- Payment Methods Management
- Profile & Settings
- Trip History & Receipts

### Driver App (12 Screens):
- Registration & Document Upload
- Activation Status Tracking
- Online/Offline Toggle
- Ride Request Management
- Navigation & Trip Progress
- Earnings Dashboard
- Profile Management

---

## 💰 PRICING SYSTEM

| Vehicle Type | Base Fare | Per-KM Rate |
|--------------|-----------|-------------|
| Moto | 500 CFA | 150 CFA/km |
| Normal | 1,000 CFA | 200 CFA/km |
| Premium | 1,500 CFA | 300 CFA/km |

**Formula:** `Total = Base Fare + (Distance × Per-KM Rate)`

**Example (5km Normal ride):**  
`1000 + (5 × 200) = 2000 CFA (~$3.33 USD)`

**Commission:** 20% to Run-Run | 80% to Driver

---

## 🔐 SECURITY

| Feature | Implementation |
|---------|----------------|
| Password Hashing | bcrypt (10 rounds) |
| Authentication | JWT tokens |
| API Security | Admin Key validation |
| Input Validation | Middleware validation |
| CORS | Configured allowed origins |

---

## 📊 API ENDPOINTS

### Authentication:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/verify-otp`

### Admin:
- `GET /api/admin/dashboard`
- `GET /api/admin/drivers`
- `GET /api/admin/passengers`
- `GET /api/admin/rides`
- `PUT /api/admin/drivers/:id/activate`

### Rides:
- `POST /api/rides/request`
- `GET /api/rides/:id`
- `PUT /api/rides/:id/status`

---

## 🚀 DEPLOYMENT STATUS

| Component | Platform | Status | URL |
|-----------|----------|--------|-----|
| Frontend | Netlify | ✅ Live | https://runrunwebapp.netlify.app |
| Backend | Railway | ✅ Live | Railway Cloud |
| Database | Railway | ✅ Live | PostgreSQL 14 |

---

## 📈 MILESTONES

### Completed ✅
- Nov 2025: Project Kickoff
- Nov 2025: Backend Architecture
- Dec 2025: Mobile Apps Development
- Dec 2025: PostgreSQL Migration
- Jan 2026: Admin Dashboard
- Jan 2026: Production Deployment

### Upcoming 📅
- Q1 2026: Beta Testing (50 Users)
- Q2 2026: Public Launch (500 Users)
- Q3 2026: 30 Active Drivers
- 2027: Senegal Expansion

---

## 📞 CONTACT

**Project:** Run-Run Guinea-Bissau  
**Email:** cardoso9197@gmail.com  
**Admin Panel:** https://runrunwebapp.netlify.app  
**Location:** Bissau, Guinea-Bissau 🇬🇼

---

**© 2026 Run-Run Guinea-Bissau. All Rights Reserved.**

*Last Updated: January 5, 2026*

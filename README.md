# TEDxVSSUT

> **Ideas worth spreading. Experiences worth remembering.**

Official website and digital ticketing platform for **TEDxVSSUT**, designed to provide a seamless experience for attendees — from discovering the event and crew to booking passes, making secure payments, and accessing digital passes.

---

## ✨ About the Project

The TEDxVSSUT website is a modern, responsive, and full-stack event platform built for the TEDxVSSUT event.

The platform combines:

* 🎤 Event information
* 👤 Individual user accounts
* 🎟️ Online pass booking
* 💳 Secure Razorpay payments
* 🎫 Digital pass generation
* 📱 QR-based pass verification
* 📊 User dashboard
* 🛠️ Admin dashboard
* 📧 Payment/pass confirmation
* ☁️ Cloud-based image storage

The goal is to make the complete pass booking process **digital, secure, and hassle-free**.

---

# 🚀 Features

## 🌐 Public Website

Visitors can explore:

* Home
* About TEDxVSSUT
* Sponsors
* Crew
* Past Events
* Book Passes
* Venue
* Contact information

The website is fully responsive and optimized for desktop, tablet, and mobile devices.

---

## 🔐 Authentication

Users can create and manage their own accounts.

### Registration

Users can register using:

* Name
* Email
* Phone number
* Password
* Profile picture

Passwords are securely hashed before being stored.

### Login

Registered users can log in and access their personal dashboard.

---

# 🎟️ Pass Booking System

The platform provides multiple pass categories such as:

* Student
* General
* VIP

Pass prices are controlled by the backend to prevent client-side price manipulation.

### Booking Flow

```text
User
 ↓
Login / Register
 ↓
Select Pass
 ↓
Create Razorpay Order
 ↓
Razorpay Checkout
 ↓
Payment
 ↓
Backend Payment Verification
 ↓
Digital Pass Generated
 ↓
Unique Pass ID
 ↓
QR Code Generated
 ↓
Pass Added to User Dashboard
```

---

# 💳 Razorpay Payment Integration

Payments are processed through **Razorpay**.

The payment process is securely handled by the backend.

> A pass is **not** generated simply because the frontend reports that payment was successful.

The backend verifies the payment before creating the pass.

```text
Frontend
   ↓
Backend
   ↓
Create Razorpay Order
   ↓
Razorpay Checkout
   ↓
Payment
   ↓
Payment Response
   ↓
Backend Verification
   ↓
Create Pass
```

---

# 🎫 Digital Pass

After successful payment, the user receives a digital pass containing:

* TEDxVSSUT branding
* Attendee name
* Profile picture
* Pass type
* Unique Pass ID
* QR code
* Payment status
* Event information

Example:

```text
┌──────────────────────────────────┐
│             TEDxVSSUT            │
│                                  │
│          [ PROFILE PHOTO ]       │
│                                  │
│  Name: John Doe                  │
│  Pass Type: Student              │
│  ID: TEDXVSSUT-8F29K             │
│                                  │
│            ┌────────┐            │
│            │   QR   │            │
│            │  CODE  │            │
│            └────────┘            │
│                                  │
│  ✓ PAYMENT CONFIRMED             │
│                                  │
│        [ DOWNLOAD PASS ]         │
└──────────────────────────────────┘
```

Users can download their pass for use at the event.

---

# 📱 QR Code Verification

Every confirmed pass receives a unique QR code.

The QR code contains a unique pass identifier rather than exposing unnecessary personal information.

### Event-day verification

```text
QR Code
   ↓
Admin Scanner
   ↓
Backend
   ↓
Find Pass
   ↓
Check Validity
   ↓
Check Payment Status
   ↓
Check Previous Check-in
   ↓
VALID / INVALID
```

A valid pass can then be marked as:

```text
checkedIn: true
```

This helps prevent duplicate entry using the same pass.

---

# 👤 User Dashboard

Each registered user gets a personal dashboard.

### Dashboard

Users can view:

* Profile
* My Passes
* Pass status
* Payment status
* Pass ID
* QR code
* Download pass
* Account settings

---

# 🛠️ Admin Dashboard

Administrators can manage the complete event pass system.

### Admin Features

* View registered users
* View passes
* View payments
* View pass statistics
* Verify passes
* Scan QR codes
* Check-in attendees
* View checked-in attendees
* Manage pass categories
* Monitor pass sales

### Dashboard Statistics

```text
Total Users
Total Passes
Paid Passes
Checked-in
Pending Payments
Total Revenue
```

---

# 🏗️ Tech Stack

## Frontend

| Technology    | Purpose         |
| ------------- | --------------- |
| Next.js       | React framework |
| TypeScript    | Type safety     |
| Tailwind CSS  | Styling         |
| Framer Motion | Animations      |
| Lucide React  | Icons           |

## Backend

| Technology | Purpose          |
| ---------- | ---------------- |
| Node.js    | Runtime          |
| Express.js | REST API         |
| MongoDB    | Database         |
| Mongoose   | MongoDB ODM      |
| JWT        | Authentication   |
| bcrypt     | Password hashing |

## Services

| Service         | Purpose                   |
| --------------- | ------------------------- |
| Razorpay        | Payment processing        |
| Cloudinary      | Image storage             |
| QR Code Library | QR generation             |
| Email Service   | Pass/payment notifications|

---

# 📁 Project Structure

```text
TEDXVSSUT/
│
├── frontend/
│   │
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   ├── sponsors/
│   │   │   ├── crew/
│   │   │   ├── past-events/
│   │   │   ├── venue/
│   │   │   └── passes/
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   └── dashboard/
│   │       ├── page.tsx
│   │       ├── pass/
│   │       ├── profile/
│   │       └── settings/
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── lib/
│   ├── public/
│   └── types/
│
├── backend/
│   │
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── .gitignore
└── README.md
```

---

# 🔌 API Structure

The backend will expose REST APIs.

## Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
GET  /api/v1/auth/me
```

## User

```http
GET   /api/v1/users/profile
PATCH /api/v1/users/profile
```

## Payments

```http
POST /api/v1/payments/create-order
POST /api/v1/payments/verify
```

## Passes

```http
GET /api/v1/passes/my-passes
GET /api/v1/passes/:passId
GET /api/v1/passes/:passId/download
```

## Admin

```http
GET  /api/v1/admin/users
GET  /api/v1/admin/passes
GET  /api/v1/admin/payments
POST /api/v1/admin/verify-pass
POST /api/v1/admin/check-in
```

---

# 🗄️ Database Design

## User

```text
User
├── _id
├── name
├── email
├── phone
├── passwordHash
├── profilePicture
├── role
└── createdAt
```

## Pass

```text
Pass
├── _id
├── passId
├── userId
├── passType
├── price
├── orderId
├── paymentId
├── qrCode
├── status
├── checkedIn
└── createdAt
```

## Payment

```text
Payment
├── _id
├── userId
├── passId
├── orderId
├── paymentId
├── amount
├── status
└── createdAt
```

---

# 🔒 Security

Security is a major part of the ticketing system.

### Implemented / Planned

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* Admin authorization
* Backend payment verification
* Server-side pass pricing
* Unique pass IDs
* Secure QR verification
* Environment variables for secrets
* No Razorpay secret keys on frontend
* No MongoDB credentials on frontend

### Environment Variables

Example:

```env
MONGODB_URI=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

> Never commit `.env` files or secret keys to GitHub.

---

# 🐳 Docker

Docker is not required during the initial development phase.

It can later be introduced to containerize:

```text
Frontend
Backend
MongoDB (optional)
```

Example future architecture:

```text
Docker Compose
│
├── Frontend Container
├── Backend Container
└── MongoDB Container
```

---

# ⚙️ Local Development

## 1. Clone the repository

```bash
git clone <repository-url>
cd TEDXVSSUT
```

## 2. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:3000
```

## 3. Start Backend

```bash
cd backend
npm install
npm run dev
```

Backend:

```text
http://localhost:5000
```

---

# 🔄 Complete System Flow

```text
                    TEDxVSSUT
                        │
                        ▼
                  Next.js Website
                        │
              ┌─────────┴─────────┐
              │                   │
           Visitor              User
              │                   │
       Explore Event        Login / Register
                                  │
                                  ▼
                           User Dashboard
                                  │
                                  ▼
                            Select Pass
                                  │
                                  ▼
                           Backend API
                                  │
                                  ▼
                            Razorpay
                                  │
                                  ▼
                              Payment
                                  │
                                  ▼
                         Payment Verification
                                  │
                                  ▼
                          Generate Pass
                                  │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
                Pass ID                     QR Code
                    │                           │
                    └─────────────┬─────────────┘
                                  ▼
                           User Dashboard
                                  │
                                  ▼
                            Event Day
                                  │
                                  ▼
                            QR Scanner
                                  │
                                  ▼
                         Backend Verification
                                  │
                                  ▼
                              Check-in
```

---

# 🎯 Development Roadmap

### Phase 1 — Frontend

* [ ] Next.js setup
* [ ] TypeScript setup
* [ ] Tailwind CSS
* [ ] TEDxVSSUT design system
* [ ] Navbar (Home | About | Sponsors | Crew | Past Events | Book Passes)
* [ ] Hero section
* [ ] About section
* [ ] Sponsors
* [ ] Crew
* [ ] Past Events
* [ ] Book Passes CTA / Page
* [ ] Venue
* [ ] Footer
* [ ] Responsive design

### Phase 2 — Authentication

* [ ] Register
* [ ] Login
* [ ] Logout
* [ ] Protected routes
* [ ] User profile
* [ ] Dashboard

### Phase 3 — Pass Booking

* [ ] Pass categories
* [ ] Pass pricing
* [ ] Pass selection
* [ ] Razorpay integration
* [ ] Payment verification
* [ ] Pass generation
* [ ] QR generation
* [ ] Pass download

### Phase 4 — Admin

* [ ] Admin authentication
* [ ] User management
* [ ] Pass management
* [ ] Payment statistics
* [ ] QR verification
* [ ] Attendee check-in

### Phase 5 — Production

* [ ] Security testing
* [ ] Performance optimization
* [ ] Mobile testing
* [ ] Production deployment
* [ ] Razorpay production configuration
* [ ] Domain configuration
* [ ] Monitoring

---

# 🌍 Deployment

Planned deployment architecture:

```text
                    Internet
                       │
          ┌────────────┴────────────┐
          │                         │
      Frontend                  Backend API
      Next.js                  Node + Express
          │                         │
          │                         │
          └──────────┬──────────────┘
                     │
                  MongoDB
                     │
              External Services
             ┌───────┼────────┐
             │       │        │
          Razorpay Cloudinary Email
```

---

# 🤝 Contribution

This project is developed for **TEDxVSSUT**.

Contributions from the TEDxVSSUT technical team are welcome.

Before making changes:

```bash
git pull
```

Create a feature branch:

```bash
git checkout -b feature/your-feature
```

Commit your changes:

```bash
git add .
git commit -m "feat: add pass dashboard"
```

Push:

```bash
git push origin feature/your-feature
```

---

# 📜 License

This project is developed for TEDxVSSUT.

All TEDx branding, logos, and event-related intellectual property remain subject to their respective ownership and usage guidelines.

---

## ❤️ Built for TEDxVSSUT

**Technology that connects people with ideas.**

> **TEDxVSSUT — Ideas worth spreading.**
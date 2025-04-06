# WellnessHub E-commerce Platform

A modern e-commerce platform built with Next.js 13+, focusing on health and wellness products. The platform offers a seamless shopping experience with features like user authentication, product management, and a responsive design.

## 🌟 Features

### User Features
- **Authentication System**
  - User/Admin role-based access
  - Protected routes
  - Persistent sessions

- **Shopping Experience**
  - Product browsing and search
  - Shopping cart management
  - Streamlined checkout process
  - Order tracking

- **User Dashboard**
  - Order history
  - Referral tracking
  - Profile management

### Admin Features
- **Admin Dashboard**
  - User management
  - Order monitoring
  - Referral tracking
  - Analytics overview

### General Features
- **Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Optimized for all screen sizes

- **Modern UI/UX**
  - Clean, intuitive interface
  - Dark/Light mode support
  - Smooth animations
  - Loading states

## 🛠️ Tech Stack

- **Framework**: Next.js 13+
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Authentication**: Custom implementation with localStorage
- **State Management**: React Context API

## 📂 Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
├── about/             # About page
├── contact/           # Contact page
├── login/            # Authentication
├── register/         # User registration
├── dashboard/        # Admin dashboard
├── user-dashboard/   # User dashboard
└── products/         # Product pages

components/
├── navbar.tsx        # Navigation component
├── footer.tsx        # Footer component
├── cart-modal.tsx    # Shopping cart
├── webinar-modal.tsx # Webinar promotions
└── ui/              # Reusable UI components

lib/
├── auth-context.tsx  # Authentication context
├── cart-context.tsx  # Shopping cart context
└── utils.ts         # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/wellness-hub.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Accounts

- **Admin Account**
  - Email: admin@gmail.com
  - Password: admin

- **User Account**
  - Email: user@gmail.com
  - Password: user

## 🎯 Key Features Breakdown

### Authentication System
- Role-based access control (Admin/User)
- Protected routes
- Persistent sessions using localStorage

### Product Management
- Product browsing and filtering
- Detailed product views
- Shopping cart functionality
- Secure checkout process

### User Features
- Personal dashboard
- Order history
- Referral system
- Profile management

### Admin Features
- User management
- Order monitoring
- Analytics dashboard
- Referral tracking

### Additional Features
- Webinar promotions
- Customer reviews
- Partner companies showcase
- Awards and recognition section

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## 🎨 Theme Support

- Light/Dark mode support
- Customizable color schemes
- Consistent design language
- Modern UI components

## 🔒 Security Features

- Protected routes
- Role-based access control
- Secure authentication flow
- Data validation

## 🎯 Future Enhancements

- [ ] Implement backend integration
- [ ] Add payment gateway integration
- [ ] Enhance analytics dashboard
- [ ] Add email notifications
- [ ] Implement real-time chat support
- [ ] Add product reviews and ratings
- [ ] Enhance search functionality
- [ ] Add wishlist feature

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any queries or support, please contact support@wellnesshub.com
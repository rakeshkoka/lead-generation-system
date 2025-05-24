# 🚀 Lead Generation System - Frontend

A modern, responsive lead generation frontend built with React, Vite, and Tailwind CSS. This application provides an intuitive interface for users to submit their contact information, which is processed through an automated workflow system.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Real-time Validation**: Form validation with user-friendly error messages
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Mobile Responsive**: Works seamlessly across all devices
- **API Integration**: Seamless connection with backend services

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **Vercel** - Deployment and hosting platform

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/rakeshkoka/lead-generation-system.git
cd lead-generation-system
```

### 2. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

Your application will be available at `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
|   |   ├── form/
│   │   └── Form.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables:
     - `VITE_BACKEND_URL`: Your backend API URL
   - Deploy automatically

3. **Update CORS Settings**
   After deployment, update your backend CORS configuration to include your Vercel URL.

### Manual Build

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 🔄 How It Works

1. **User Interaction**: Users fill out the lead generation form
2. **Form Validation**: Client-side validation ensures data quality
3. **API Request**: Form data is sent to the backend via Axios
4. **Feedback**: Users receive immediate feedback on submission status
5. **Automation**: Backend triggers n8n workflow for email notifications and data storage

## 🎨 Customization

### Styling
The project uses Tailwind CSS. Modify styles in:
- `src/styles/index.css` - Global styles
- Component files - Component-specific styling

### Form Fields
To add/modify form fields:
1. Update the form component in `src/components/form/Form.jsx`
2. Update validation logic
3. Ensure backend API accepts the new fields

### API Configuration
Update API settings in `src/components/form/Form.jsx`:
```javascript
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const submitLead = async (leadData) => {
  // API implementation
};
```

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
- Ensure your backend allows your frontend domain
- Check that URLs don't have trailing slashes
- Verify HTTPS/HTTP consistency

**Environment Variables Not Loading**
- Ensure `.env` file is in root directory
- Restart development server after changing `.env`
- Use `VITE_` prefix for all environment variables

**Build Failures**
- Check for TypeScript errors if using TS
- Ensure all dependencies are installed
- Verify Node.js version compatibility

## 📚 API Integration

The frontend communicates with the backend through a single endpoint:

```javascript
POST /api/submit-lead
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "message": "Interested in your services"
}
```

## 🔐 Security Considerations

- All form inputs are validated on both client and server
- HTTPS is enforced in production
- No sensitive data is stored in frontend
- Environment variables are properly configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

If you encounter any issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Create a new issue with detailed information

## 🔗 Related Repositories

- [Backend Repository](https://github.com/rakeshkoka/lead-generation-system-backend.git)
- [Complete System Documentation](https://docs.google.com/document/d/11QkuW50WU_SNdSLQE3ywvxXIJx0ESL34/edit?usp=sharing&ouid=116430246273662677638&rtpof=true&sd=true)

---

**Live Demo**: [https://lead-generation-system.vercel.app/](https://lead-generation-system.vercel.app/)

**Backend API**: [https://lead-generation-system-backend.onrender.com](https://lead-generation-system-backend.onrender.com)

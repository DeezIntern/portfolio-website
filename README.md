# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dynamic Content**: Portfolio data is served from a MongoDB database
- **Contact Form**: Functional contact form with backend integration
- **Skills Section**: Showcase your technical skills with icons
- **Projects Gallery**: Display your featured projects with links to code and live demos
- **Social Links**: Easy access to your social media profiles

## Tech Stack

### Frontend
- **React**: Component-based UI library
- **CSS3**: Modern styling with Grid and Flexbox
- **Font Awesome**: Icons for skills and social links
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for storing portfolio data
- **Mongoose**: MongoDB object modeling for Node.js
- **CORS**: Cross-origin resource sharing middleware

## Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js           # Main server file
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install express mongoose cors dotenv nodemon
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install react react-dom axios react-scripts
   ```

4. **Environment Variables**
   Create a `.env` file in the server directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Run the application**
   
   **Terminal 1 - Start the backend:**
   ```bash
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Start the frontend:**
   ```bash
   cd client
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

- `GET /api/portfolio` - Get portfolio data
- `PUT /api/portfolio` - Update portfolio data
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## Customization

### Update Personal Information
1. Edit the default portfolio data in `server/index.js`
2. Update social media links in `client/src/components/Footer.js`
3. Replace placeholder images with your own photos

### Styling
- Modify `client/src/App.css` for global styles
- Update color scheme by changing CSS variables
- Add custom fonts in `client/public/index.html`

### Add New Sections
1. Create new React components in `client/src/components/`
2. Import and use them in `client/src/App.js`
3. Add corresponding backend routes if needed

## Deployment

### Frontend (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your preferred hosting service

### Backend (Heroku/Railway)
1. Set up environment variables on your hosting platform
2. Deploy the server code
3. Update the MongoDB connection string for production

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas account
2. Set up a cluster
3. Update the `MONGODB_URI` in your environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with setup, please open an issue in the repository.

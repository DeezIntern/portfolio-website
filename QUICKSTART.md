# 🚀 Quick Start Guide - Portfolio Website

## 📋 **Prerequisites**
- Node.js (v14 or higher) ✅ 
- npm ✅
- Two terminal windows

## 🎯 **Method 1: Run Both Servers Manually (Recommended)**

### Step 1: Start the Backend Server
```bash
cd /Users/asleshchoudhary/portfolio-website/server
npm start
```

**You should see:**
```
🚀 Server running on port 5000
🌐 Health check: http://localhost:5000/api/health
📊 Portfolio API: http://localhost:5000/api/portfolio
```

### Step 2: Start the Frontend (in a new terminal)
```bash
cd /Users/asleshchoudhary/portfolio-website/client
npm start
```

**You should see:**
```
Compiled successfully!
You can now view portfolio-client in the browser.
Local: http://localhost:3000
```

### Step 3: Open Your Browser
Go to: **http://localhost:3000**

---

## 🎯 **Method 2: Run Both at Once (Alternative)**

```bash
cd /Users/asleshchoudhary/portfolio-website
npm install concurrently
npm run dev
```

---

## 🔧 **How to Edit Your Portfolio**

### **Edit Personal Information**
1. **Server Data**: Edit `/Users/asleshchoudhary/portfolio-website/server/index-simple.js`
2. **Update the `portfolioData` object:**

```javascript
const portfolioData = {
  name: 'Your Full Name',
  title: 'Your Job Title',
  bio: 'Your bio description...',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  projects: [
    {
      title: 'Project Name',
      description: 'Project description...',
      technologies: ['Tech1', 'Tech2'],
      githubUrl: 'https://github.com/yourusername/project',
      liveUrl: 'https://yourproject.com'
    }
  ],
  contact: {
    email: 'your.email@example.com',
    phone: '+1234567890',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername'
  }
};
```

### **Edit Social Links**
1. **Footer**: Edit `/Users/asleshchoudhary/portfolio-website/client/src/components/Footer.js`
2. **Header**: Edit `/Users/asleshchoudhary/portfolio-website/client/src/components/Header.js`

### **Edit Colors & Styling**
1. **Main Styles**: Edit `/Users/asleshchoudhary/portfolio-website/client/src/App.css`
2. **Change primary color**: Find `#3498db` and replace with your color
3. **Change gradient**: Find `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`

### **Add Your Photo**
1. **Add your photo** to `/Users/asleshchoudhary/portfolio-website/client/public/images/`
2. **Update About.js**: Edit `/Users/asleshchoudhary/portfolio-website/client/src/components/About.js`
3. **Replace**: `src="/api/placeholder/250/250"` with `src="/images/your-photo.jpg"`

---

## 🛠️ **Common Issues & Solutions**

### **Issue 1: Port Already in Use**
```bash
# Kill process on port 5000
kill -9 $(lsof -ti:5000)
# Kill process on port 3000
kill -9 $(lsof -ti:3000)
```

### **Issue 2: Backend Not Connecting**
- Make sure the backend is running on port 5000
- Check if you see "🚀 Server running on port 5000" message

### **Issue 3: Frontend Errors**
- Make sure you're in the correct directory
- Try refreshing the browser
- Check browser console for errors

---

## 🎨 **Customization Examples**

### **Example 1: Add New Skill**
In `server/index-simple.js`:
```javascript
skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Your New Skill']
```

### **Example 2: Add New Project**
In `server/index-simple.js`:
```javascript
projects: [
  // ... existing projects
  {
    title: 'Your New Project',
    description: 'Description of your new project...',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/newproject',
    liveUrl: 'https://yournewproject.com'
  }
]
```

### **Example 3: Change Color Scheme**
In `client/src/App.css`, find and replace:
```css
/* Change primary color */
#3498db → #your-color

/* Change hero gradient */
background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
```

---

## 🚀 **Next Steps**

1. **Edit your information** in `server/index-simple.js`
2. **Add your photo** to the images folder
3. **Update social links** in Footer.js
4. **Customize colors** in App.css
5. **Test the contact form** (submissions will appear in server terminal)

---

## 📱 **Testing**

### **Test Your Website:**
1. **Homepage**: http://localhost:3000
2. **Backend API**: http://localhost:5000/api/portfolio
3. **Health Check**: http://localhost:5000/api/health

### **Test Contact Form:**
1. Fill out the contact form on your website
2. Check the server terminal for the submitted data
3. You should see: "📧 Contact form submission: ..."

---

## 🎉 **You're Ready!**

Your portfolio website is now running! 

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

**Remember**: Every time you make changes to the server code, restart the server. Frontend changes will automatically reload.

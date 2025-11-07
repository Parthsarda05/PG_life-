# PG Life - Paying Guest Accommodation Website

A modern, responsive static website for finding Paying Guest (PG) accommodations in major Indian cities.

## 🚀 Features

- **City-based Property Listing**: Browse PG accommodations in Delhi, Mumbai, Bangalore, and Hyderabad
- **Property Filtering**: Filter properties by gender (Male, Female, Unisex)
- **Property Sorting**: Sort by rent (highest/lowest)
- **Property Details**: Detailed view of each property with images and amenities
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for a beautiful, modern interface

## 🛠️ Tech Stack

- **HTML5** - Structure
- **Tailwind CSS** - Styling (via CDN)
- **JavaScript** - Frontend functionality
- **Font Awesome** - Icons
- **Static Site** - No backend required

## 📁 Project Structure

```
pg_life/
├── index.html              # Homepage
├── property_list.html      # Property listing page
├── property_detail.html    # Property detail page
├── property_list.js        # Property listing logic
├── property_detail.js      # Property detail logic
├── user.js                 # User authentication (localStorage)
├── vercel.json            # Vercel configuration
├── about.css              # Additional styles
├── common.css             # Common styles
└── pglife image/          # Images and assets
    ├── properties/        # Property images
    ├── amenities/        # Amenity icons
    └── ...               # Other images
```

## 🌐 Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - What's your project's name? **pg-life** (or any name you prefer)
   - In which directory is your code located? **./** (press Enter)

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard (GitHub)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a static site
   - Click "Deploy"

3. **Automatic deployments**:
   - Every push to your main branch will automatically deploy
   - Pull requests will create preview deployments

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select "Deploy" tab
4. Drag and drop your project folder
5. Wait for deployment to complete

## 📝 Important Notes

### Image Paths
- All images are in the `pglife image` folder (note the space in the folder name)
- Vercel handles spaces in folder names automatically
- Images are served with proper caching headers

### Environment Variables
- No environment variables needed (static site)
- All data is hardcoded in JavaScript files

### Build Settings
- **Framework Preset**: Other
- **Build Command**: (leave empty - no build needed)
- **Output Directory**: (leave empty - root directory)
- **Install Command**: (leave empty - no dependencies)

## 🔧 Local Development

1. **Open the project**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

2. **Access the site**:
   - Open `http://localhost:8000` in your browser

## 📱 Features Overview

### Homepage (`index.html`)
- Hero section with search bar
- City selection cards
- Footer with city links

### Property List (`property_list.html`)
- Filter by gender
- Sort by rent (ascending/descending)
- Property cards with images
- Click to view details

### Property Detail (`property_detail.html`)
- Large property images
- Image gallery
- Property information
- Amenities list
- Interest tracking (localStorage)

## 🎨 Customization

### Adding More Properties
Edit `property_list.js` and add properties to the `propertiesData` object.

### Changing Styles
- Tailwind CSS classes can be modified directly in HTML
- Custom CSS in `about.css` and `common.css`

### Adding Cities
1. Add city data to `propertiesData` in `property_list.js`
2. Add city card to `index.html`
3. Add city image to `pglife image` folder

## 🌍 Live URL

After deployment, Vercel will provide you with:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: For each branch/PR

## 📞 Support

For issues or questions:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)

## 📄 License

ISC

---

**Made with ❤️ using Tailwind CSS**


# Paradise Nursery - Plant Shopping App

A beautiful React-based e-commerce application for purchasing houseplants. This project demonstrates modern React development practices including Context API for state management, React Router for navigation, and responsive design.

## Features

### 🏠 Landing Page
- Beautiful hero section with background image
- Company information and features
- Call-to-action button to start shopping

### 🌱 Product Listing Page
- Browse plants organized by categories (Succulents, Tropical Plants, Flowering Plants, Air Plants)
- Filter products by category
- Product cards with images, names, prices, and descriptions
- Add to cart functionality

### 🛒 Shopping Cart Page
- View all items in cart with thumbnails and details
- Adjust quantities with increase/decrease buttons
- Remove items from cart
- Real-time total calculation
- Continue shopping and checkout options

### 🧭 Navigation
- Responsive header with navigation links
- Dynamic shopping cart icon with item count
- Active page highlighting

## Technical Implementation

### State Management
- React Context API for global cart state
- useReducer for complex state updates
- Custom hooks for cart operations

### Routing
- React Router v6 for client-side routing
- Protected routes and navigation

### Styling
- Modern CSS with flexbox and grid
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Accessibility-focused design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd paradise-nursery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── LandingPage.js & LandingPage.css
│   ├── ProductListing.js & ProductListing.css
│   └── ShoppingCart.js & ShoppingCart.css
├── context/
│   └── CartContext.js
├── data/
│   └── products.js
├── App.js & App.css
└── index.js & index.css
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Context API** - State management
- **CSS3** - Styling and animations
- **Unsplash** - Plant images

## Features Implemented

✅ Landing page with hero section and company info  
✅ Product listing with category filtering  
✅ Shopping cart with add/remove/update functionality  
✅ Responsive navigation header  
✅ Dynamic cart counter  
✅ Modern, accessible UI design  
✅ Mobile-responsive layout  

## Future Enhancements

- User authentication and accounts
- Product search functionality
- Wishlist feature
- Product reviews and ratings
- Payment integration
- Order history
- Plant care tips and guides

## Contributing

This is a learning project. Feel free to fork and experiment with additional features!

## License

This project is for educational purposes.
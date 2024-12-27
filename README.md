# E-commerce React Application

A modern e-commerce application built with React, TypeScript, Redux Toolkit, and Tailwind CSS. Features a responsive design with dark mode support and real-time cart management.

🌐 Live Demo
Check out the live application: E-commerce Store
https://shopping-cart-redux-roan.vercel.app/

## 🚀 Features

- **Product Catalog**
  - Browse products by category
  - Search functionality
  - Responsive grid layout
  - Dynamic filtering

- **Shopping Cart**
  - Add/Remove items
  - Adjust quantities
  - Real-time total calculation
  - Persistent cart state

- **UI/UX**
  - Dark mode support
  - Responsive design
  - Modern gradient effects
  - Toast notifications
  - Loading states

## 🛠️ Technologies

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Notifications:** Sonner
- **API Client:** Axios



## 🏗️ Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx
│   ├── MainCart.tsx
│   ├── ProductCard.tsx
│   ├── Searchbar.tsx
│   └── ui/
├── redux/
│   ├── hooks.ts
│   └── slices/
│       ├── cartSlice.ts
│       └── productSlice.ts
├── types/
│   └── index.ts
└── App.tsx
```

## 🔧 Configuration

The application uses the following TypeScript interfaces for type safety:

```typescript
// Product Interface
interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
}

// Cart Item Interface
interface CartItem extends Omit<Product, 'category'> {
  quantity: number;
}
```

## 🚦 API Integration

The application integrates with the Fake Store API:
- Products Endpoint: `https://fakestoreapi.com/products`
- Single Product: `https://fakestoreapi.com/products/{id}`

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:
- Custom gradient effects
- Dark mode support
- Responsive breakpoints
- shadcn/ui component library integration



## 🧪 Type Safety

TypeScript is implemented throughout the project with:
- Strict type checking
- Interface definitions for all components
- Type-safe Redux store
- Proper error handling



## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



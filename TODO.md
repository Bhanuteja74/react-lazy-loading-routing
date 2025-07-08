# React Routing and Lazy Loading — Learning Tracker

## ✅ What I Have Learned

- Lazy loading components using `lazy()` and `Suspense`.
- Observed network behavior (components fetched on demand, cached with 304).
- Installed and configured `react-router-dom`.
- Wrapped app with `<BrowserRouter>`.
- Replaced manual `useState`-based rendering with proper routing.
- Created basic routes using `<Routes>` and `<Route>`.
- Implemented a 404 Page with wildcard route (`path="*"`).
- Understood Nested Routes and centralized route structure.
- Used `<Outlet />` to render child routes inside parent components.
- Understood relative paths for child routes (avoid leading `/`).
- Applied Lazy Loading to nested/child routes as well.
- Used `index` route for default child rendering.
- Reduced redundancy with `<Navigate>` for redirects.
- Used programmatic navigation with `useNavigate` and `<Navigate>`.

---

## 📚 What I Have To Learn (Checklist)

- [x] Nested Lazy Loading — Best Practices and Real-world Structure
- [x] Relative vs. Absolute `<Link>` Behavior
- [x] URL Parameters & Dynamic Routes (`/user/:id`)
- [x] Handling Query Parameters
- [ ] Route Guards and Simple Protected Routes
- [ ] Code Splitting Entire Route Trees
- [ ] React Router Hooks Deep Dive (`useParams`, `useLocation`, `useNavigate`)
- [ ] Layout Routes — Common UI (Navbars, Footers shared across pages)

### Optional Advanced Topics

- [ ] Authentication Flow with Routing
- [ ] Redirect After Login to Previous URL
- [ ] Deeply Nested Routes (`/dashboard/settings/advanced`)

###

- for url params we can use at todos. `/user/todos/:id`
- for url query we can practice with book search. `/books?author=Bhanu&title=LearnReact/dashboard?tab=settings/dashboard?tab=settings/dashboard?tab=settings`

import AppProviders from "./AppProviders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <Routes>

        {/* ---- PROTECTED DASHBOARD ---- */}
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Index />
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* ---- AUTH ROUTES ---- */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* ---- 404 ---- */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </AppProviders>
);

export default App;

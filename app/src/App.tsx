import { Routes, Route, Navigate } from "react-router-dom";
import { Shell } from "./components/Shell";
import { LanguageProvider } from "./components/LanguageContext";
import { OverviewPage } from "./pages/OverviewPage";
import { ExplorerPage } from "./pages/ExplorerPage";
import { CandidatePage } from "./pages/CandidatePage";
import { ComparePage } from "./pages/ComparePage";
import { SecurityPage } from "./pages/SecurityPage";
import { DecisionHistoryPage } from "./pages/DecisionHistoryPage";
import { LibraryPage } from "./pages/LibraryPage";
import { IdeaPage } from "./pages/IdeaPage";
import { PresentationPage } from "./pages/PresentationPage";
import { ValidationPage } from "./pages/ValidationPage";

export default function App() {
  return (
    <LanguageProvider>
      <Shell>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/explorer/:id" element={<CandidatePage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/history" element={<DecisionHistoryPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/ideas/:id" element={<IdeaPage />} />
          <Route path="/validation" element={<ValidationPage />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Shell>
    </LanguageProvider>
  );
}

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ContentOperations } from '@/components/sections/ContentOperations';
import { Transition } from '@/components/sections/Transition';
import { AIProject } from '@/components/sections/AIProject';
import { Workflow } from '@/components/sections/Workflow';
import { LiveDemo } from '@/components/sections/LiveDemo';
import { Results } from '@/components/sections/Results';
import { Lightbox, useLightbox } from '@/components/Lightbox';

function App() {
  const { state, open, close, next, prev } = useLightbox();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <ContentOperations onImageClick={open} />
        <Transition />
        <AIProject />
        <Workflow onImageClick={open} />
        <LiveDemo />
        <Results onImageClick={open} />
      </main>
      <Lightbox state={state} onClose={close} onNext={next} onPrev={prev} />
    </div>
  );
}

export default App;

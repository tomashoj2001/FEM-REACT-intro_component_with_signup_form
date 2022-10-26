import "./style.css"
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <>
      <main>
        <header>
          <h1>Learn to code by watching others</h1>
          <p className="paragraph">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </header>
        <section>
          <h2 className="trial">
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </h2>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

// ── Header scroll ──
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Reveal on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Modal data ──
const modals = {
  lucida: {
    eyebrow: 'Product Engineer · Jul 2025 — Present · Remote',
    title: 'Lucida',
    body: `
      <p>Lucida is an AI-powered exam platform for educators that helps automate exam creation and grading, so teachers can spend more time teaching and less time on repetitive work.</p>
      <ul>
        <li>Built core product features with Next.js, React, TypeScript, and the OpenAI API, from content generation flows to grading support experiences.</li>
        <li>Implemented a RAG pipeline with document chunking and semantic retrieval to improve AI accuracy when grading discursive answers against defined rubrics and source material.</li>
        <li>Developed an OMR-based answer sheet grading system using Python, FastAPI, and OpenCV — students mark physical answer sheets and a smartphone camera grades them automatically.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Next.js</span><span class="modal-tag">React</span><span class="modal-tag">TypeScript</span>
        <span class="modal-tag">OpenAI API</span><span class="modal-tag">RAG</span><span class="modal-tag">Python</span>
        <span class="modal-tag">FastAPI</span><span class="modal-tag">OpenCV</span>
      </div>
      <div class="modal-date">Jul 2025 — Present</div>`
  },
  nets: {
    eyebrow: 'Undergraduate Researcher · Florida Institute of Technology',
    title: 'NETS Lab — LLM Entropy Research',
    body: `
      <p>Conducted research on entropy patterns and behavioral dynamics in large language models under the supervision of Dr. Ryan White at the NETS Lab, Florida Tech.</p>
      <ul>
        <li>Investigated how entropy manifests across different layers and output distributions in transformer-based language models.</li>
        <li>Developed an entropy-based model using BERT, training it with a custom loss function that improved prediction accuracy on the SST-2 sentiment dataset.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">BERT</span><span class="modal-tag">PyTorch</span><span class="modal-tag">NLP</span>
        <span class="modal-tag">LLMs</span><span class="modal-tag">Research</span>
      </div>
      <div class="modal-date">Jan 2025 — May 2025 · Melbourne, FL</div>`
  },
  omeida: {
    eyebrow: 'English Tutor · Omeida Academy · Yangshuo, China',
    title: 'Omeida Academy — English Tutor',
    body: `
      <p>Taught small English classes in Yangshuo, a town in southern China where many students had limited chances to speak with foreigners in daily life.</p>
      <ul>
        <li>Led conversation-focused sessions to help students build confidence speaking naturally, beyond passive exposure from movies, books, and music.</li>
        <li>Adapted lessons to practical situations and local context, prioritizing clear communication over rigid textbook learning.</li>
        <li>Used the role as a two-way learning experience, improving students' spoken English while immersing deeply in Chinese culture.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Teaching</span><span class="modal-tag">Communication</span>
        <span class="modal-tag">Cross-cultural Work</span>
      </div>
      <div class="modal-date">May 2024 — Aug 2024 · Yangshuo, China</div>`
  },
  aws: {
    eyebrow: 'Software Development Engineer Intern · Amazon Web Services',
    title: 'AWS — Data Center Rack Planning',
    body: `
      <p>Interned at Amazon Web Services in Seattle, working on internal tooling for optical rack planning in AWS data centers.</p>
      <ul>
        <li>Optimized optical rack planning (brick & patch) using system-design principles and AWS SageMaker, resulting in faster planning cycles and improved capacity utilization.</li>
        <li>Built Java batch jobs on AWS Batch to process rack inventory projections and forecast optical demand, enabling the team to anticipate supply needs and reduce stock-out incidents.</li>
        <li>Automated data flows for downstream component ordering using AWS Lambda and Step Functions, cutting manual effort significantly.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Java</span><span class="modal-tag">AWS SageMaker</span><span class="modal-tag">AWS Batch</span>
        <span class="modal-tag">Lambda</span><span class="modal-tag">Step Functions</span>
      </div>
      <div class="modal-date">May 2023 — Aug 2023 · Seattle, WA</div>`
  },
  amazon: {
    eyebrow: 'Software Development Engineer Intern · Amazon.com',
    title: 'Amazon — Native App',
    body: `
      <p>Worked on the consumer-facing native Amazon app, improving the landing experience and building new user-facing features.</p>
      <ul>
        <li>Improved the native landing page using React and TypeScript, streamlining navigation and reducing page load time.</li>
        <li>Developed a new User Preferences interface, enabling users to customize settings and improving overall usability.</li>
        <li>Implemented several user-requested features that simplified key workflows across the app.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">React</span><span class="modal-tag">TypeScript</span>
      </div>
      <div class="modal-date">May 2022 — Aug 2022 · Washington, DC</div>`
  },
  floridatech: {
    eyebrow: 'Florida Institute of Technology · Melbourne, FL',
    title: 'B.S. Computer Science',
    body: `
      <p>Graduated Cum Laude with a 3.59 GPA from the Florida Institute of Technology, where I studied Computer Science from 2021 to 2025.</p>
      <ul>
        <li>Member of Phi Eta Sigma Honor Society.</li>
        <li>Member of Upsilon Pi Epsilon Honor Society (Computing Sciences).</li>
        <li>Conducted undergraduate research at the NETS Lab on entropy in large language models.</li>
        <li>Built multiple applied ML projects and participated in technical competitions.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Cum Laude</span><span class="modal-tag">GPA 3.59</span>
        <span class="modal-tag">Phi Eta Sigma</span><span class="modal-tag">Upsilon Pi Epsilon</span>
      </div>
      <div class="modal-date">2021 — 2025</div>`
  },
  stanfordsummer: {
    eyebrow: 'Stanford University · 2020',
    title: 'Coding Summer Program',
    body: `
      <p>Completed a coding summer program focused on strengthening software foundations and building projects in a collaborative environment.</p>
      <ul>
        <li>Practiced core programming concepts through hands-on exercises and iterative project work.</li>
        <li>Worked with peers on problem-solving tasks that emphasized clear thinking and maintainable implementation.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Programming Fundamentals</span><span class="modal-tag">Project Work</span>
      </div>
      <div class="modal-date">2020 · Stanford University</div>`
  },
  murss: {
    eyebrow: 'MIT / USP · 2019',
    title: 'MURSS — MIT/USP Robotics Summer Program',
    body: `
      <p>Participated in the MURSS robotics summer program, a joint MIT and USP initiative combining technical activities with exposure to research-oriented robotics work.</p>
      <ul>
        <li>Explored robotics concepts through practical exercises and team-based collaboration.</li>
        <li>Developed early interest in applying software to physical systems, which later shaped my broader engineering path.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Robotics</span><span class="modal-tag">MIT</span>
        <span class="modal-tag">USP</span>
      </div>
      <div class="modal-date">2019 · MIT & USP</div>`
  },
  agent: {
    eyebrow: 'Personal Project',
    title: 'AI Scheduling Agent for Health Clinics',
    body: `
      <p>A fully autonomous WhatsApp agent that handles appointment booking, rescheduling, and cancellations for health clinics — supporting text messages, voice notes, and phone calls.</p>
      <ul>
        <li>GPT-driven conversation orchestration manages the full scheduling flow, understanding context across multi-turn conversations.</li>
        <li>Whisper-based transcription converts voice notes to text seamlessly, so voice and text inputs are treated identically.</li>
        <li>ElevenLabs integration generates human-like audio for outbound calls, making the agent indistinguishable from a human receptionist.</li>
        <li>Proactive appointment reminders automatically sent to patients before their scheduled time.</li>
        <li>Backend built with FastAPI, PostgreSQL, Redis (conversation state), SQLAlchemy/Alembic, integrated with Meta WhatsApp Business API and Google Calendar.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">GPT-4</span><span class="modal-tag">Whisper</span><span class="modal-tag">ElevenLabs</span>
        <span class="modal-tag">FastAPI</span><span class="modal-tag">PostgreSQL</span><span class="modal-tag">Redis</span>
        <span class="modal-tag">WhatsApp API</span><span class="modal-tag">Google Calendar</span>
      </div>`
  },
  climbing: {
    eyebrow: 'Personal Project · Machine Learning',
    title: 'Climbing Performance Prediction',
    body: `
      <p>A machine learning project to predict a climber's maximum boulder grade using body metrics and physical measurements.</p>
      <ul>
        <li>Created a regression model trained on climber datasets correlating body metrics (height, weight, ape index, etc.) with climbing performance.</li>
        <li>Used decision trees to analyze and rank which features most influenced climbing grade — revealing non-obvious predictors.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Python</span><span class="modal-tag">Scikit-learn</span>
        <span class="modal-tag">Regression</span><span class="modal-tag">Decision Trees</span>
      </div>`
  },
  spraywall: {
    eyebrow: 'Personal Project · Sorocaba, Brazil',
    title: 'Spraywall',
    body: `
      <p>I built Spraywall for my local climbing gym in Sorocaba after noticing route creation was still done on printed wall sheets with circles and notes by hand.</p>
      <ul>
        <li>Created a web interface where setters and climbers can mark hold types (start, finish, feet-only, and others) directly on a digital spray wall.</li>
        <li>Stored all routes on the platform so users can search boulders by difficulty instead of digging through paper archives.</li>
        <li>Helped increase the number of boulders created in the gym while reducing printing costs and time spent finding routes.</li>
        <li>Built this as a practical, community-first product: solve a real pain point first, then keep improving based on day-to-day use.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">React</span><span class="modal-tag">Supabase</span>
        <span class="modal-tag">JavaScript</span><span class="modal-tag">Product Thinking</span>
        <span class="modal-tag">Climbing</span>
      </div>`
  },
  surfforecast: {
    eyebrow: 'Personal Project · Data Science',
    title: 'Melbourne Beach Surf Forecast',
    body: `
      <p>This project started from a personal frustration: I grew up surfing in Brazil and wanted a way to identify Melbourne Beach sessions that felt closer to the conditions I was used to.</p>
      <ul>
        <li>Used unsupervised learning to cluster surf conditions from wave height, direction, period, and wind-related environmental variables.</li>
        <li>Applied preprocessing and dimensionality techniques (including scaling and PCA) to organize noisy ocean/weather data into usable patterns.</li>
        <li>Compared cluster behavior across time windows to better understand which days and times align with preferred surf profiles.</li>
        <li>Turned raw forecast variables into interpretable groups that can support practical day-to-day surf decisions.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">Python</span><span class="modal-tag">Pandas</span>
        <span class="modal-tag">Scikit-learn</span><span class="modal-tag">K-means</span>
        <span class="modal-tag">Hierarchical Clustering</span><span class="modal-tag">PCA</span>
      </div>`
  },
  fitplanner: {
    eyebrow: 'Academic Product Project',
    title: 'FIT Class Schedule Planner',
    body: `
      <p>Built with my team to simplify course registration at Florida Tech, where students usually had to jump between disconnected systems (program pages, CAPP, and registration portals).</p>
      <ul>
        <li>Combined degree tracking, schedule planning, filtering, and conflict detection into one interface to reduce friction in the registration flow.</li>
        <li>Added prerequisite and schedule-conflict checks so students can catch issues instantly instead of discovering them late.</li>
        <li>Integrated RateMyProfessor data and CAPP evaluation uploads to support more informed and personalized planning.</li>
        <li>Reduced average registration workflow time from over 30 minutes to about 2:30 minutes in testing (with fastest completion under 45 seconds).</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">MongoDB</span><span class="modal-tag">Express.js</span>
        <span class="modal-tag">React</span><span class="modal-tag">Node.js</span>
        <span class="modal-tag">MERN</span><span class="modal-tag">UX</span>
      </div>
      <div class="modal-date">Florida Institute of Technology</div>`
  },
  vvgames: {
    eyebrow: 'Personal Project · Family App',
    title: 'Vilela Vianna Games',
    body: `
      <p>I made this for a friend's family who are serious about board games and used to track wins in a notebook to decide their annual champion.</p>
      <ul>
        <li>Replaced pen-and-paper tracking with a web app where they can create game sessions, record winners, and keep a reliable history.</li>
        <li>Built analytics views to compare performance by game and identify who performs best in each category.</li>
        <li>Added rankings per session and long-term stats so the annual competition feels structured and easy to follow.</li>
        <li>The app has been in real use for over two years, which makes it one of my favorite examples of software solving an everyday problem.</li>
      </ul>
      <div class="modal-tags">
        <span class="modal-tag">React</span><span class="modal-tag">Web App</span>
        <span class="modal-tag">Analytics</span><span class="modal-tag">Data Tracking</span>
        <span class="modal-tag">Product Design</span>
      </div>`
  }
};

function openModal(id) {
  const data = modals[id];
  if (!data) return;
  document.getElementById('modalEyebrow').textContent = data.eyebrow;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalBody').innerHTML = data.body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

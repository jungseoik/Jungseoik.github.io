const translations = {
  ko: {
    "work.inspect": "원인 분석",
    "work.isolate": "연산 격리",
    "work.restore": "정밀도 조정",
    "meta.title": "정서익 · AI 소프트웨어 엔지니어",
    "meta.description": "정서익은 멀티모달 영상 AI, 효율적인 추론, 프로덕션 ML 시스템을 개발하는 AI 소프트웨어 엔지니어입니다.",
    "meta.ogDescription": "모델 학습부터 프로덕션 추론까지, 현장에서 작동하는 영상 AI를 만듭니다.",
    "a11y.skip": "본문으로 건너뛰기",
    "a11y.home": "정서익, 홈",
    "a11y.menu": "메뉴 열기",
    "a11y.nav": "주요 메뉴",
    "a11y.language": "언어 선택",
    "a11y.portrait": "정서익 프로필 사진",
    "a11y.photo": "정서익",
    "a11y.focus": "핵심 분야",
    "a11y.chart": "개념적 수치 정렬 차트",
    "a11y.flow": "머신러닝 배포 흐름",
    "nav.about": "소개",
    "nav.work": "프로젝트",
    "nav.publications": "논문",
    "nav.experience": "경력",
    "nav.contact": "이야기 나누기",
    "hero.title": "실험을 넘어, <em>현장에서 작동하는</em> 영상 AI를 만듭니다.",
    "hero.lede": "멀티모달 모델 학습과 데이터 파이프라인부터 가속화된 멀티스트림 추론까지, 연구 아이디어를 신뢰할 수 있는 ML 시스템으로 구현합니다.",
    "hero.work": "프로젝트 보기",
    "hero.email": "이메일 보내기",
    "hero.noteRole": "<strong>프로덕션 중심</strong>ML 엔지니어링",
    "hero.notePapers": "제1저자<br />논문",
    "focus.one": "멀티모달 영상 AI",
    "focus.two": "실시간 추론",
    "focus.three": "모델 최적화",
    "focus.four": "ML 배포 시스템",
    "about.label": "제가 하는 일",
    "about.title": "연구의 깊이와<br />프로덕션의 완성도.",
    "about.lede": "컴퓨터 비전 시스템의 전체 수명주기를 다루며, 모델이 실제 환경에서도 안정적으로 작동하게 만드는 디테일에 집중합니다.",
    "about.card1Title": "멀티모달<br />영상 이해",
    "about.card1Body": "VLM 파인튜닝, 영상 질의응답, 구조화 출력, 이상상황 인식을 개발합니다.",
    "about.card2Title": "효율적인<br />모델 추론",
    "about.card2Body": "TensorRT, CUDA, 비동기 서빙, NPU 양자화, 멀티스트림 영상 파이프라인을 다룹니다.",
    "about.card3Title": "신뢰할 수 있는<br />ML 시스템",
    "about.card3Body": "데이터 정제, 재현 가능한 평가, 모델 자산 관리, CI/CD, 현장 피드백 루프를 구축합니다.",
    "work.label": "주요 프로젝트",
    "work.title": "제가 해결해 온 문제들.",
    "work.card1Meta": "영상 AI",
    "work.card1Title": "프레임을 넘어 사건의 맥락을 이해하는 VLM",
    "work.card1Body": "태스크 정의와 오토라벨링부터 LoRA 파인튜닝, 구조화 답변, 취약 사례 피드백까지 영상 추론 워크플로 전체를 설계했습니다.",
    "work.eventContext": "사건 맥락",
    "work.temporal": "시간축 추론",
    "work.card2Meta": "최적화",
    "work.card2Title": "저정밀도 변환 이후 무너진 정확도를 복구하다.",
    "work.card2Body": "양자화 성능 저하를 민감 연산까지 추적하고, 실제 활성화 분포로 문제를 격리해 선택적 정밀도로 수치 안정성을 복구했습니다.",
    "work.baseline": "기준",
    "work.lowPrecision": "저정밀도",
    "work.recovered": "복구",
    "work.card3Meta": "ML 시스템",
    "work.card3Title": "학습의 결정을 배포까지 연결하다.",
    "work.card3Body": "평가, 컨테이너 추론, 모델 등록, 배포 패키징을 반복 가능한 흐름으로 구축해 모든 개선에 측정 가능한 근거를 남겼습니다.",
    "work.train": "학습",
    "work.evaluate": "평가",
    "work.package": "패키징",
    "work.deploy": "배포",
    "papers.label": "논문",
    "papers.title": "현장의 질문을<br />연구로 검증했습니다.",
    "papers.lede": "영상 이해와 객체 계수 분야 제1저자 논문 3편을 발표했습니다.",
    "papers.result1": "UCF-Crime video-level AUC 92.33%",
    "papers.result2": "RWF-2000 정확도 95.25%",
    "papers.result3": "CARPK MAE 4.01",
    "experience.label": "경력",
    "experience.title": "이런 환경에서 만들어 왔습니다.",
    "experience.name": "정서익",
    "experience.role": "AI 소프트웨어 엔지니어",
    "experience.summary": "실험에서 작동하는 모델과 현장에서 계속 작동하는 시스템 사이의 복잡한 구간을 끝까지 책임지는 일을 좋아합니다.",
    "experience.focusLabel": "현재 집중 분야",
    "experience.focus": "영상 AI · ML 시스템",
    "experience.presentDate": "2024.08 — 현재",
    "experience.job1Title": "AI 소프트웨어 엔지니어",
    "experience.job1Org": "PIA SPACE · 서울",
    "experience.job1Body": "실시간 영상 AI, VLM 파인튜닝, 추론 가속, 모델 평가, 온프레미스 연동을 수행하고 있습니다.",
    "experience.job2Title": "AI Human Lab 인턴",
    "experience.job2Org": "ESTsoft · 서울",
    "experience.job2Body": "비전·음성·확산 모델을 연결해 비디오 번역과 제어 가능한 아바타 생성 프로토타입을 개발했습니다.",
    "experience.educationTitle": "학사",
    "experience.educationOrg": "충북대학교",
    "experience.educationBody": "목재종이과학과 주전공 · 소프트웨어학과 복수전공",
    "experience.toolkit": "기술 스택",
    "contact.label": "연락하기",
    "contact.title": "흥미로운 AI<br />문제가 있나요?",
    "contact.body": "멀티모달 AI, 추론 최적화, 프로덕션 ML 시스템에 관한 이야기라면 언제든 환영합니다.",
    "contact.sayHello": "이메일 보내기",
    "footer.role": "AI 소프트웨어 엔지니어 · 서울",
    "footer.top": "맨 위로 ↑",
  },
  en: {
    "work.inspect": "Diagnose",
    "work.isolate": "Isolate",
    "work.restore": "Tune precision",
    "meta.title": "Seoik Jung · AI Software Engineer",
    "meta.description": "Seoik Jung is an AI Software Engineer building multimodal video intelligence, efficient inference, and production ML systems.",
    "meta.ogDescription": "I build video AI that works in the real world — from model training to production inference.",
    "a11y.skip": "Skip to content",
    "a11y.home": "Seoik Jung, home",
    "a11y.menu": "Open menu",
    "a11y.nav": "Primary navigation",
    "a11y.language": "Choose language",
    "a11y.portrait": "Portrait of Seoik Jung",
    "a11y.photo": "Seoik Jung",
    "a11y.focus": "Core focus areas",
    "a11y.chart": "Conceptual numerical alignment chart",
    "a11y.flow": "Machine learning delivery flow",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.publications": "Publications",
    "nav.experience": "Experience",
    "nav.contact": "Let’s talk",
    "hero.title": "I build video AI that works in the <em>real world.</em>",
    "hero.lede": "From multimodal model training and data pipelines to accelerated, multi-stream inference — I turn research ideas into dependable ML systems.",
    "hero.work": "See my work",
    "hero.email": "Email me",
    "hero.noteRole": "<strong>Production-minded</strong>ML engineering",
    "hero.notePapers": "first-author<br />papers",
    "focus.one": "Multimodal video AI",
    "focus.two": "Real-time inference",
    "focus.three": "Model optimization",
    "focus.four": "ML delivery systems",
    "about.label": "What I do",
    "about.title": "Research depth.<br />Production discipline.",
    "about.lede": "I work across the complete lifecycle of computer vision systems, with a focus on the details that determine whether a model survives in production.",
    "about.card1Title": "Multimodal<br />video intelligence",
    "about.card1Body": "VLM fine-tuning, video question answering, structured outputs, and abnormal-event recognition.",
    "about.card2Title": "Efficient<br />model inference",
    "about.card2Body": "TensorRT, CUDA, asynchronous serving, NPU quantization, and multi-stream video pipelines.",
    "about.card3Title": "Reliable<br />ML systems",
    "about.card3Body": "Data curation, repeatable evaluation, model asset management, CI/CD, and field feedback loops.",
    "work.label": "Selected work",
    "work.title": "Problems I like solving.",
    "work.card1Meta": "VIDEO AI",
    "work.card1Title": "Making VLMs understand events, not just frames.",
    "work.card1Body": "Designed end-to-end video reasoning workflows — from task definition and auto-labeling to LoRA fine-tuning, structured answers, and hard-case feedback.",
    "work.eventContext": "event context",
    "work.temporal": "temporal reasoning",
    "work.card2Meta": "OPTIMIZATION",
    "work.card2Title": "Recovering accuracy after low-precision conversion.",
    "work.card2Body": "Traced quantization degradation to a sensitive operation, isolated it with real activation distributions, and restored stability through selective precision.",
    "work.baseline": "baseline",
    "work.lowPrecision": "low precision",
    "work.recovered": "recovered",
    "work.card3Meta": "ML SYSTEMS",
    "work.card3Title": "Connecting training decisions to delivery.",
    "work.card3Body": "Built repeatable workflows for evaluation, containerized inference, model registration, and deployment packaging so each iteration has measurable evidence.",
    "work.train": "Train",
    "work.evaluate": "Evaluate",
    "work.package": "Package",
    "work.deploy": "Deploy",
    "papers.label": "Publications",
    "papers.title": "Engineering questions,<br />tested through research.",
    "papers.lede": "Three first-author papers in video understanding and object counting.",
    "papers.result1": "92.33% video-level AUC on UCF-Crime",
    "papers.result2": "95.25% accuracy on RWF-2000",
    "papers.result3": "4.01 MAE on CARPK",
    "experience.label": "Experience",
    "experience.title": "Where I’ve been building.",
    "experience.name": "Seoik Jung",
    "experience.role": "AI Software Engineer",
    "experience.summary": "I enjoy taking ownership of the messy middle between a model that works in an experiment and a system that keeps working in the field.",
    "experience.focusLabel": "Current focus",
    "experience.focus": "Video AI · ML Systems",
    "experience.presentDate": "2024.08 — Present",
    "experience.job1Title": "AI Software Engineer",
    "experience.job1Org": "PIA SPACE · Seoul, Korea",
    "experience.job1Body": "Real-time video intelligence, VLM fine-tuning, inference acceleration, model evaluation, and on-premise integration.",
    "experience.job2Title": "AI Human Lab Intern",
    "experience.job2Org": "ESTsoft · Seoul, Korea",
    "experience.job2Body": "Generative AI prototypes for video translation and controllable avatar generation across vision, speech, and diffusion workflows.",
    "experience.educationTitle": "Bachelor’s Degree",
    "experience.educationOrg": "Chungbuk National University",
    "experience.educationBody": "Major in Wood & Paper Science · Double major in Software.",
    "experience.toolkit": "My toolkit",
    "contact.label": "Let’s connect",
    "contact.title": "Have an interesting<br />AI problem?",
    "contact.body": "I’m always happy to talk about multimodal AI, inference optimization, and production ML systems.",
    "contact.sayHello": "Say hello",
    "footer.role": "AI Software Engineer · Seoul",
    "footer.top": "Back to top ↑",
  },
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const year = document.querySelector("[data-year]");

function applyLanguage(language, persist = true) {
  const locale = translations[language] ? language : "ko";
  const copy = translations[locale];

  document.documentElement.lang = locale;
  document.title = copy["meta.title"];
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy["meta.description"]);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy["meta.title"]);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy["meta.ogDescription"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute("alt", value);
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === locale));
  });

  if (persist) localStorage.setItem("portfolio-language", locale);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  siteNav?.classList.toggle("is-open", !open);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    siteNav?.classList.remove("is-open");
  });
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 14),
  { passive: true },
);

const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-28% 0px -62% 0px", threshold: [0.01, 0.2, 0.5] },
);

sections.forEach((section) => sectionObserver.observe(section));

const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("portfolio-language");
const initialLanguage = ["ko", "en"].includes(urlLanguage) ? urlLanguage : savedLanguage || "ko";

applyLanguage(initialLanguage, false);
if (year) year.textContent = new Date().getFullYear();

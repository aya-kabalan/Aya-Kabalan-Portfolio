
import styles from './App.module.css';
import ProjectCard from './components/ProjectCard/ProjectCard';
import cert1 from './assets/cert1.jpg';
import cert2 from './assets/cert2.jpg';

function App() {
  const myTasks = [
    {
      id: 1,
      title: "Task 1: Library Management",
      description: "نظام إدارة مكتبة إلكترونية يعتمد كلياً على البرمجة كائنية التوجه (OOP). قمت ببناء كلاسات للكتب والمكتبة لإدارة البيانات برمجياً وباحترافية.",
      tech: ["TypeScript", "OOP", "Classes"],
      github: "https://github.com/aya-kabalan/aya-kabalan-adv-task-1.git"
    },
    {
      id: 2,
      title: "Task 2: Academy Landing Page",
      description: "تصميم واجهة أكاديمية تعليمية (Little Learners) متجاوبة بالكامل مع كافة الشاشات، باستخدام React و Props لتوزيع المحتوى بدقة.",
      tech: ["React", "Bootstrap", "Responsive"],
      github: "https://github.com/aya-kabalan/aya-kabalan-adv-task-2.git"
    },
    {
      id: 3,
      title: "Task 3: Multi-Page Academy",
      description: "تطوير التاسك الثاني ليصبح مشروعاً متعدد الصفحات (About, Academics) باستخدام React Router Dom، مع الحفاظ على دقة التصميم التفاعلي.",
      tech: ["React Router", "Vite", "SPA"],
      github: "https://github.com/aya-kabalan/aya-kabalan-adv-task-3.git"
    }
  ];

  return (
    <div className={styles.appContainer}>
      <header className={styles.hero}>
        <div className={styles.trainerBadge}>Intern at Focal X</div>
        <h1 className={styles.name}>Aya allah kasseb kabalan</h1>
          <p className={styles.bio}>
          مهندسة برمجيات سنة رابعة في جامعة اللاذقية و مبتدئة في إنشاء محتوى تطوير مواقع ويب ومعلومات عنها  على منصة الانستغرام و مطورة واجهات أمامية (Front-End) ومتدربة في شركة فوكال اكس. شغفي يكمن في تحويل التصاميم المعقدة إلى كود نظيف وتفاعلي باستخدام أحدث التقنيات.
          </p>
          
          <a href="https://github.com/aya-kabalan" target="_blank" rel="noreferrer" className={styles.mainGithubBtn}>
            زيارة حساب GitHub الأساسي
          </a>
          <a href="https://www.instagram.com/frontend.with.aya?igsh=MTlvMHU2NzVpbGk1Zw==" target="_blank" rel="noreferrer" className={styles.mainGithubBtn}>
          لزيارة حساب الانستغرام
          </a>
          <a href="https://www.linkedin.com/in/aya-kabalan-2b15602b7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className={styles.mainGithubBtn}>
  لزيارة حساب لينكد ان
          </a>
          <div className={styles.trainingContactWrapper}>
        <a 
          href="+963997758943"
          target="_blank" 
          rel="noreferrer" 
          className={styles.trainingBtn}
        >
          ✨ هل تود تعلم البرمجة؟ تواصل معي للتدريب
        </a>
</div>
        </header>

      <main className="container mt-5">
        <h2 className="text-center mb-5 text-info fw-bold">معرض أعمالي (التاسكات) (portfolio)</h2>
        <div className="row g-4">
          {myTasks.map(task => (
            <div key={task.id} className="col-md-6 col-lg-4">
              <ProjectCard 
                title={task.title}
                badge="Task"
                description={task.description}
                tech={task.tech}
                github={task.github}
              />
            </div>
          ))}
        </div>
        <section className={styles.certsSection}>
          <h2 className="text-center mt-5 mb-4 text-info fw-bold">الشهادات والاعتمادات</h2>
          <div className={styles.certsGrid}>
            <div className={styles.certCard}>
              <a href={cert1} target="_blank" rel="noopener noreferrer">
                <img src={cert1} alt="شهادة تدريب Focal X" className={styles.certImage} />
              </a>
              <p className="mt-2">شهادة تدريب Focal X</p>
            </div>

            <div className={styles.certCard}>
              <a href={cert2} target="_blank" rel="noopener noreferrer">
                <img src={cert2} alt="شهادة إتمام المسار التقني" className={styles.certImage} />
              </a>
              <p className="mt-2">شهادة توصية</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>aya kabalan | Focal X Academy © 2026</p>
      </footer>
    </div>
  );
}

export default App;
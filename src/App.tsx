import styles from './App.module.css';
import ProjectCard from './components/ProjectCard/ProjectCard';

// استيراد الأصول (Assets)
import cert1 from './assets/cert1.jpg';
import cert2 from './assets/cert2.jpg';
import task1_a from './assets/taskImage1.png'; 
import task1_b from './assets/taskImage2.png'; 
import task2_a from './assets/taskImage3.png'; 
import task2_b from './assets/taskImage4.png'; 
import task3_a from './assets/taskImage5.png'; 
import task3_b from './assets/taskImage5.png'; // يمكنك تغييرها لصورة سادسة

function App() {
  const myTasks = [
    {
      id: 1,
      title: "Task 1: Library Management",
      description: "نظام إدارة مكتبة إلكترونية يعتمد على البرمجة كائنية التوجه (OOP) لبناء كلاسات احترافية.",
      tech: ["TypeScript", "OOP"],
      image1: task1_a,
      image2: task1_b,
      github: "https://github.com/aya-kabalan/aya-kabalan-adv-task-1.git"
    },
    {
      id: 2,
      title: "Task 2: Academy Landing Page",
      description: "واجهة أكاديمية تعليمية متجاوبة بالكامل باستخدام React و Props لتوزيع المحتوى.",
      tech: ["React", "Bootstrap"],
      image1: task2_a,
      image2: task2_b,
      github: "https://github.com/aya-kabalan/aya-kabalan-adv-task-2.git"
    },
    {
      id: 3,
      title: "Task 3: Multi-Page Academy",
      description: "مشروع متعدد الصفحات باستخدام React Router Dom مع الحفاظ على التصميم التفاعلي.",
      tech: ["React Router", "Vite"],
      image1: task3_a,
      image2: task3_b,
      github: "https://github.com/aya-kabalan/aya-kabalan-adv-task-3.git"
    }
  ];

  return (
    <div className={styles.appContainer}>
      <header className={styles.hero}>
        <div className={styles.trainerBadge}>Intern at Focal X</div>
        <h1 className={styles.name}>Aya allah kasseb kabalan</h1>
        <p className={styles.bio}>
          مهندسة برمجيات سنة رابعة ومطورة واجهات أمامية (Front-End) ومتدربة في شركة فوكال اكس.
        </p>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/aya-kabalan" target="_blank" rel="noreferrer" className={styles.mainGithubBtn}>GitHub</a>
          <a href="https://www.instagram.com/frontend.with.aya" target="_blank" rel="noreferrer" className={styles.mainGithubBtn}>Instagram</a>
          <a href="https://www.linkedin.com/in/aya-kabalan-2b15602b7" target="_blank" rel="noreferrer" className={styles.mainGithubBtn}>LinkedIn</a>
        </div>

        <div className={styles.trainingContactWrapper}>
          <a href="https://wa.me/963997758943" target="_blank" rel="noreferrer" className={styles.trainingBtn}>
            ✨ تواصل معي للتدريب
          </a>
        </div>
      </header>

      <main className="container mt-5">
        <h2 className="text-center mb-5 text-info fw-bold">معرض أعمالي (Portfolio)</h2>
        
        {/* نظام الصفوف: صورتان (مشروعان) في الصف الواحد */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {myTasks.map(task => (
            <div key={task.id} className="col">
              <ProjectCard 
                title={task.title}
                image1={task.image1}
                image2={task.image2}
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
          <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
            <div className="col text-center">
              <div className={styles.certCard}>
                <img src={cert1} alt="Focal X Certificate" className={styles.certImage} />
                <p className="mt-2">شهادة تدريب Focal X</p>
              </div>
            </div>
            <div className="col text-center">
              <div className={styles.certCard}>
                <img src={cert2} alt="Recommendation" className={styles.certImage} />
                <p className="mt-2">شهادة توصية</p>
              </div>
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
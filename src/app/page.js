import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      
      {/* [//] Navigation Header */}
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.logoText}>
            R<span>.</span>
          </a>
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>Tentang</a>
            <a href="#skills" className={styles.navLink}>Kemampuan</a>
            <a href="#experience" className={styles.navLink}>Pengalaman</a>
            <a href="#projects" className={styles.navLink}>Proyek</a>
            <a href="#contact" className={styles.navLinkBtn}>Hubungi Saya</a>
          </nav>
        </div>
      </header>

      <main>
        {/* [//] Hero Section */}
        <section id="home" className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.badge}>D3 Teknik Informatika Student</span>
              <h1 className={styles.nameTitle}>
                RAPHAEL RHINOVALDI WIBISANA
              </h1>
              <h2 className={styles.roleSub}>
                Back-End Web Developer &amp; AI Integration Enthusiast
              </h2>
              <p className={styles.heroDesc}>
                Saya merupakan mahasiswa D3 Teknik Informatika semester 5 di Universitas Sebelas Maret yang memiliki minat mendalam pada pengembangan perangkat lunak (Back-End) dan Artificial Intelligence (AI). Senang mempelajari teknologi baru, mampu berkolaborasi secara tim, dan siap mengembangkan kemampuan melalui tantangan profesional.
              </p>
              <div className={styles.heroCtas}>
                <a href="#projects" className={styles.primaryBtn}>
                  Lihat Proyek
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#about" className={styles.secondaryBtn}>
                  Tentang Saya
                </a>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.avatarFrame}>
                {/* SVG Illustration of a Programmer/Developer inside a modern glowing portal */}
                <svg className={styles.developerSvg} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="85" stroke="url(#paint0_linear)" strokeWidth="4" />
                  <circle cx="100" cy="100" r="75" fill="#0f1626" />
                  {/* Laptop screen */}
                  <rect x="55" y="80" width="90" height="60" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2"/>
                  <rect x="62" y="87" width="76" height="42" rx="2" fill="#090d16"/>
                  {/* Code lines representation */}
                  <line x1="68" y1="94" x2="100" y2="94" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="68" y1="102" x2="114" y2="102" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="68" y1="110" x2="88" y2="110" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="68" y1="118" x2="106" y2="118" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
                  {/* Laptop base */}
                  <path d="M45 140H155C158 140 160 142 160 145V148H40V145C40 142 42 140 45 140Z" fill="#334155"/>
                  {/* Code cursor/brackets graphic */}
                  <path d="M80 40 L65 55 L80 70" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M120 40 L135 55 L120 70" stroke="#d97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="105" y1="38" x2="95" y2="72" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round"/>
                  {/* Glowing background radial definitions */}
                  <defs>
                    <linearGradient id="paint0_linear" x1="15" y1="15" x2="185" y2="185" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#14b8a6" />
                      <stop offset="0.5" stopColor="#0d9488" />
                      <stop offset="1" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* [//] About Me & Education Section */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.sectionTitleArea}>
            <h2 className={styles.sectionTitle}>Tentang Saya &amp; Pendidikan</h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.personalInfoCard}>
              <h3>Informasi Pribadi</h3>
              <p className={styles.aboutBio}>
                Sebagai mahasiswa D3 Teknik Informatika di Universitas Sebelas Maret, saya berfokus pada perancangan dan optimalisasi arsitektur Back-End serta mengintegrasikan solusi Artificial Intelligence guna menghadirkan sistem perangkat lunak yang andal, aman, dan efisien.
              </p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Lokasi:</span>
                  <span className={styles.infoValue}>Surakarta, Jawa Tengah</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tempat, Tgl Lahir:</span>
                  <span className={styles.infoValue}>Sukoharjo, 11 Januari 2006</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Bahasa:</span>
                  <span className={styles.infoValue}>Indonesia (Native), English (Intermediate)</span>
                </div>
              </div>

              <div className={styles.softSkillsContainer}>
                <h4>Soft Skills</h4>
                <div className={styles.softSkillsGrid}>
                  <span className={styles.softSkillTag}>Problem Solving</span>
                  <span className={styles.softSkillTag}>Kerjasama Tim</span>
                  <span className={styles.softSkillTag}>Brainstorming</span>
                  <span className={styles.softSkillTag}>Adaptasi</span>
                </div>
              </div>
            </div>

            <div className={styles.educationCard}>
              <h3>Riwayat Pendidikan</h3>
              
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineDate}>2024 - Sekarang</div>
                  <h4 className={styles.timelineSchool}>Universitas Sebelas Maret</h4>
                  <p className={styles.timelineMajor}>Jurusan D3 Teknik Informatika (Semester 5)</p>
                  <p className={styles.timelineDesc}>Aktif dalam organisasi kemahasiswaan: <strong>Emailkomp</strong>.</p>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineDate}>2021 - 2024</div>
                  <h4 className={styles.timelineSchool}>SMK Negeri 2 Surakarta</h4>
                  <p className={styles.timelineMajor}>Jurusan Rekayasa Perangkat Lunak (RPL)</p>
                  <p className={styles.timelineDesc}>Mempelajari dasar pemrograman, basis data, serta rekayasa perangkat lunak.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [//] Skills Section */}
        <section id="skills" className={styles.skillsSection}>
          <div className={styles.sectionTitleArea}>
            <h2 className={styles.sectionTitle}>Kemampuan Teknis</h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.skillsGrid}>
            
            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryHeader}>
                <div className={styles.skillIconTeal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
                </div>
                <h3>Bahasa Pemrograman</h3>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>PHP</span>
                <span className={styles.skillTag}>SQL</span>
                <span className={styles.skillTag}>Dart</span>
                <span className={styles.skillTag}>Java</span>
                <span className={styles.skillTag}>Python</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryHeader}>
                <div className={styles.skillIconTeal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                </div>
                <h3>Framework &amp; Libs</h3>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Laravel</span>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>Vue.js</span>
                <span className={styles.skillTag}>Inertia.js</span>
                <span className={styles.skillTag}>React.js</span>
                <span className={styles.skillTag}>Tailwind CSS</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryHeader}>
                <div className={styles.skillIconTeal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5"/><path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12"/></svg>
                </div>
                <h3>Basis Data</h3>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>MySQL</span>
                <span className={styles.skillTag}>PostgreSQL</span>
                <span className={styles.skillTag}>Database Design</span>
                <span className={styles.skillTag}>Database Migration</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryHeader}>
                <div className={styles.skillIconGold}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <h3>Back-End Skills</h3>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>REST API Development</span>
                <span className={styles.skillTag}>Laravel Sanctum Auth</span>
                <span className={styles.skillTag}>CRUD Application Dev</span>
                <span className={styles.skillTag}>API Testing &amp; Integration</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryHeader}>
                <div className={styles.skillIconGold}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3>Artificial Intelligence</h3>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>AI Integration</span>
                <span className={styles.skillTag}>Sentence Transformers</span>
                <span className={styles.skillTag}>Semantic Text Matching</span>
                <span className={styles.skillTag}>Embedding-based Recommendation System</span>
                <span className={styles.skillTag}>Cosine Similarity</span>
              </div>
            </div>

            <div className={styles.skillCategoryCard}>
              <div className={styles.skillCategoryHeader}>
                <div className={styles.skillIconTeal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h3>Version Control</h3>
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Git</span>
                <span className={styles.skillTag}>GitHub</span>
              </div>
            </div>

          </div>
        </section>

        {/* [//] Experience Section */}
        <section id="experience" className={styles.experienceSection}>
          <div className={styles.sectionTitleArea}>
            <h2 className={styles.sectionTitle}>Pengalaman Kerja</h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.experienceWrapper}>
            <div className={styles.experienceCard}>
              <div className={styles.expHeader}>
                <div className={styles.expTitleGroup}>
                  <h3>Back-End Web Developer</h3>
                  <h4 className={styles.companyName}>PT Daya Rekadigital Indonesia</h4>
                </div>
                <div className={styles.expYear}>2023</div>
              </div>
              <ul className={styles.expResponsibilities}>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.tealCheck}><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Membuat Back-End untuk website pemilihan ketua OSIS menggunakan Node.js.</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.tealCheck}><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Menjadi Quality Assurance (QA) untuk project Kiosk Perpustakaan.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* [//] Projects Section */}
        <section id="projects" className={styles.projectsSection}>
          <div className={styles.sectionTitleArea}>
            <h2 className={styles.sectionTitle}>Hasil Proyek</h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.projectsGrid}>
            
            {/* Project Digitefa (With Landing Image) */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image 
                  src="/digitefa-landing.png" 
                  alt="Digitefa Landing Page Showcase"
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeaderRow}>
                  <h3 className={styles.projectCardTitle}>Digitefa (Project Lanjutan)</h3>
                  <span className={styles.projectYear}>2026</span>
                </div>
                <p className={styles.projectCardRole}>Back-End Web Developer</p>
                <ul className={styles.projectDetailsList}>
                  <li>Membuat Back-End untuk website Digitefa.</li>
                  <li>Memperbaiki sistem Digitefa lama menjadi lebih baru dan optimal.</li>
                  <li>Memperbaiki sistem pembacaan AI seperti parsing dokumen CV.</li>
                </ul>
                <div className={styles.projectTechTags}>
                  <span>Laravel</span>
                  <span>AI Integration</span>
                  <span>CV Parsing</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            {/* Project Kubikal Space */}
            <div className={styles.projectCard}>
              <div className={styles.projectDummyGraphic}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                <span className={styles.graphicLabel}>Kubikal Space Backend</span>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeaderRow}>
                  <h3 className={styles.projectCardTitle}>Kubikal Space</h3>
                  <span className={styles.projectYear}>2025</span>
                </div>
                <p className={styles.projectCardRole}>Back-End Web Developer</p>
                <ul className={styles.projectDetailsList}>
                  <li>Membuat dan mengembangkan arsitektur Back-End untuk website Kubikal Space.</li>
                  <li>Sistem dirancang sebagai media Company Profile yang interaktif, cepat, dan aman.</li>
                </ul>
                <div className={styles.projectTechTags}>
                  <span>Laravel</span>
                  <span>REST API</span>
                  <span>Database Design</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            {/* Project Warung SE */}
            <div className={styles.projectCard}>
              <div className={styles.projectDummyGraphic}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span className={styles.graphicLabel}>Warung SE System</span>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeaderRow}>
                  <h3 className={styles.projectCardTitle}>Warung SE</h3>
                  <span className={styles.projectYear}>2025</span>
                </div>
                <p className={styles.projectCardRole}>Back-End Web Developer &amp; QA</p>
                <ul className={styles.projectDetailsList}>
                  <li>Membuat arsitektur Back-End untuk sistem Online Delivery Order Warung SE.</li>
                  <li>Bertindak sebagai Quality Assurance (QA) untuk memastikan seluruh fungsionalitas sistem berjalan bebas bug.</li>
                </ul>
                <div className={styles.projectTechTags}>
                  <span>Laravel</span>
                  <span>Online Delivery</span>
                  <span>API Testing</span>
                  <span>Quality Assurance</span>
                </div>
              </div>
            </div>

            {/* GitHub Call to Action - Sisa Project */}
            <div className={`${styles.projectCard} ${styles.githubPromoCard}`}>
              <div className={styles.githubPromoInner}>
                <div className={styles.githubLogoContainer}>
                  <Image 
                    src="/github-logo.png" 
                    alt="GitHub Logo"
                    width={80}
                    height={80}
                    className={styles.githubLogoImg}
                  />
                </div>
                <h3 className={styles.githubPromoTitle}>Ingin melihat sisa proyek lainnya?</h3>
                <p className={styles.githubPromoDesc}>
                  Seluruh dokumentasi kode sumber, repository proyek mandiri, serta kontribusi open-source saya dapat Anda akses secara lengkap di GitHub.
                </p>
                <a 
                  href="https://github.com/Laepher" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.githubBtn}
                >
                  Kunjungi GitHub Laepher
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* [//] Contact Section */}
        <section id="contact" className={styles.contactSection}>
          <div className={styles.sectionTitleArea}>
            <h2 className={styles.sectionTitle}>Hubungi Saya</h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.contactContainer}>
            <p className={styles.contactText}>
              Saya selalu terbuka untuk berdiskusi mengenai proyek web, integrasi kecerdasan buatan (AI), program magang, maupun kolaborasi teknologi lainnya. Silakan hubungi saya secara langsung melalui salah satu opsi kontak di bawah ini.
            </p>

            <div className={styles.contactDirectGrid}>
              <a href="tel:+6281328264788" className={styles.contactDirectItem}>
                <div className={styles.contactDirectIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span className={styles.contactDirectLabel}>Telepon / WhatsApp</span>
                  <span className={styles.contactDirectValue}>+62 813-2826-4788</span>
                </div>
              </a>

              <a href="mailto:raphael.rhinovaldi11@gmail.com" className={styles.contactDirectItem}>
                <div className={styles.contactDirectIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span className={styles.contactDirectLabel}>E-mail Resmi</span>
                  <span className={styles.contactDirectValue}>raphael.rhinovaldi11@gmail.com</span>
                </div>
              </a>

              <div className={styles.contactDirectItem}>
                <div className={styles.contactDirectIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span className={styles.contactDirectLabel}>Domisili</span>
                  <span className={styles.contactDirectValue}>Surakarta, Jawa Tengah</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* [//] Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerName}>Raphael Rhinovaldi Wibisana</p>
          <p className={styles.footerDescription}>Back-End Web Developer Portfolio &bull; Universitas Sebelas Maret</p>
          <div className={styles.footerDivider}></div>
          <p className={styles.copyText}>
            &copy; {new Date().getFullYear()} Raphael Rhinovaldi Wibisana. All Rights Reserved. Built with Next.js.
          </p>
        </div>
      </footer>

    </div>
  );
}

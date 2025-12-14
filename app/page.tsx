"use client";
import { Github, Linkedin, FileDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [isLight, setIsLight] = useState(true);

  return (
    <main
      className={`scroll-smooth ${
        isLight
          ? "bg-[#F9FAFB] text-[#111827]"
          : "bg-gradient-to-br from-[#0E1629] via-[#0B1220] to-[#020617] text-white"
      }`}
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur border-b ${
          isLight
            ? "bg-white/90 border-gray-200"
            : "bg-[#0E1629]/90 border-[#1E2A4A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span
            className={`font-bold text-lg ${
              isLight ? "text-[#E11D48]" : "text-blue-400"
            }`}
          >
            Aadil Mansoori
          </span>

          <div
            className={`hidden md:flex gap-6 text-sm ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <a
              href="#home"
              className={`transition-all duration-200 ${
                isLight
                  ? "hover:text-[#E11D48]"
                  : "hover:text-white hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-all duration-200 ${
                isLight
                  ? "hover:text-[#E11D48]"
                  : "hover:text-white hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`transition-all duration-200 ${
                isLight
                  ? "hover:text-[#E11D48]"
                  : "hover:text-white hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
              }`}
            >
              Skills
            </a>
            <a
              href="#experience"
              className={`transition-all duration-200 ${
                isLight
                  ? "hover:text-[#E11D48]"
                  : "hover:text-white hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
              }`}
            >
              Experience
            </a>
            <a
              href="#education"
              className={`transition-all duration-200 ${
                isLight
                  ? "hover:text-[#E11D48]"
                  : "hover:text-white hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
              }`}
            >
              Edu & Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* 🔘 DARK / LIGHT TOGGLE */}
          <button
            onClick={() => setIsLight(!isLight)}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              isLight
                ? "border-gray-300 text-gray-700 hover:border-[#E11D48] hover:text-[#E11D48] hover:shadow-[#E11D48]/30"
                : "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/30"
            }`}
          >
            {isLight ? (
              <MoonIcon className="h-[18px] w-[18px]" />
            ) : (
              <SunIcon className="h-[18px] w-[18px]" />
            )}
          </button>

            {/* 🔗 SOCIAL + RESUME */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aadil-mansoori-29b358211/"
                target="_blank"
                aria-label="LinkedIn"
                className={`p-2 rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isLight
                    ? "border-gray-300 text-gray-700 hover:border-[#E11D48] hover:text-[#E11D48] hover:shadow-[#E11D48]/30"
                    : "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/30"
                }`}
              >
                <Linkedin size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Data-with-Aadil"
                target="_blank"
                aria-label="GitHub"
                className={`p-2 rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isLight
                    ? "border-gray-300 text-gray-700 hover:border-[#E11D48] hover:text-[#E11D48] hover:shadow-[#E11D48]/30"
                    : "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/30"
                }`}
              >
                <Github size={18} />
              </a>

              {/* ⭐ SPECIAL RESUME BUTTON */}
              <a
                href="/resume.pdf"
                target="_blank"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isLight
                    ? "bg-[#E11D48] text-white hover:bg-[#be123c] hover:shadow-[#E11D48]/40"
                    : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/40"
                }`}
              >
                <FileDown size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className={`min-h-screen flex items-center pt-24 ${
          isLight
            ? "bg-gradient-to-b from-[#F9FAFB] to-white"
            : "bg-gradient-to-b from-[#111B36] to-[#0E1629]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Aadil Mansoori
            </h1>

            <p
              className={`text-2xl mb-6 ${
                isLight ? "text-[#E11D48]" : "text-blue-400"
              }`}
            >
              Senior Data Engineer
            </p>

            <p
              className={`text-lg mb-8 ${
                isLight ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Databricks · Azure · AWS · Big Data · Spark · SQL
            </p>

            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isLight
                    ? "bg-[#E11D48] text-white hover:bg-[#be123c] hover:shadow-[#E11D48]/40"
                    : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/40"
                }`}
              >
                Download Resume
              </a>

              <a
                href="#experience"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isLight
                    ? "bg-[#E11D48] text-white hover:bg-[#be123c] hover:shadow-[#E11D48]/40"
                    : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/40"
                }`}
              >
                View Experience
              </a>
            </div>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center">
            <div
              className={`relative w-72 h-72 rounded-full overflow-hidden border-4 shadow-xl ${
                isLight ? "border-[#E11D48]" : "border-blue-500"
              }`}
            >
              <Image
                src="/profile.jpg"
                alt="Aadil Mansoori"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p
          className={`text-lg leading-relaxed max-w-4xl ${
            isLight ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Experienced Senior Data Engineer with nearly 5 years of success in
          developing, and optimizing scalable data solutions within the
          Insurance, Healthcare and Digital Analytics sectors. Expertise spans
          leading cloud platforms such as AWS, Azure, and Databricks with strong
          proficiency in ETL development, end-to-end data pipelines, big data
          processing, data modeling, and data governance. Skilled in designing
          robust data architectures, enforcing data privacy and security
          standards, and leveraging advance analytics, modernized architecture
          and advanced data solutions to drive business insights. Proven track
          record of spearheading complex data engineering initiatives,
          collaborating with cross-functional teams, and delivering impactful
          solutions that improve business outcomes and revenue. Certified in
          Databricks, Apache Spark, Snowflake and Microsoft Azure.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10">Core Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {[
            "Python",
            "PySpark",
            "SQL",
            "NoSQL",
            "Databricks",
            "Delta Lake",
            "AWS S3",
            "AWS Glue",
            "AWS Lambda",
            "Redshift",
            "Azure Data Factory",
            "Azure Synapse",
            "Snowflake",
            "Kafka",
            "Airflow",
            "ETL",
            "ELT",
            "CDC",
            "SCD",
            "CI/CD",
          ].map((skill) => (
            <div
              key={skill}
              className={`rounded-lg p-4 text-center text-sm transition-all duration-300 cursor-default ${
                isLight
                  ? "bg-white border border-gray-300 text-gray-800 hover:border-[#E11D48] hover:shadow-[0_0_12px_rgba(225,29,72,0.35)] hover:-translate-y-1"
                  : "bg-[#162040] border border-[#24325F] text-white hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] hover:-translate-y-1"
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        <div className="space-y-12 max-w-5xl">
          <div className="transition-transform duration-200 hover:-translate-y-1">
            <h3
              className={`text-xl font-semibold transition-colors ${
                isLight ? "text-[#FF3621]" : "text-blue-400"
              }`}
            >
              Senior Data Engineer — Deloitte USI (HashedIn)
            </h3>
            <p className={`${isLight ? "text-gray-600" : "text-gray-400"} mb-4`}>
              May 2024 – Present | Mumbai
            </p>
            <ul
              className={`list-disc pl-5 space-y-2 ${
                isLight ? "text-gray-700" : "text-gray-300"
              }`}
            >
              <li>
                Designed Databricks Lakehouse (Raw → Silver → Gold) pipelines for clinical &
                insurance data
              </li>
              <li>
                Implemented Delta Lake optimizations, Spark tuning, and job performance
                improvements (~30%)
              </li>
              <li>
                Built governance framework with column-level security, audits, HIPAA & GDPR
                compliance
              </li>
              <li>Worked with AWS Glue, S3, Redshift for analytics consumption</li>
              <li>Led 5-member team, design reviews, UAT & production releases</li>
            </ul>
          </div>
          
          <div className="transition-transform duration-200 hover:-translate-y-1">
            <h3
              className={`text-xl font-semibold transition-colors ${
                isLight ? "text-[#FF3621]" : "text-blue-400"
              }`}
            >
              Data Engineer — Course5 Intelligence
            </h3>
            <p className={`${isLight ? "text-gray-600" : "text-gray-400"} mb-4`}>
              Feb 2022 – May 2024 | Mumbai
            </p>
            <ul
              className={`list-disc pl-5 space-y-2 ${
                isLight ? "text-gray-700" : "text-gray-300"
              }`}
            >
              <li>Built Azure-based ETL pipelines using ADLS, Synapse, Delta Lake</li>
              <li>Implemented SCD & CDC logic for analytical datasets</li>
              <li>Optimized Spark workloads achieving ~30% processing reduction</li>
              <li>Supported Power BI reporting & analytics layers</li>
            </ul>
          </div>
          
          <div className="transition-transform duration-200 hover:-translate-y-1">
            <h3
              className={`text-xl font-semibold transition-colors ${
                isLight ? "text-[#FF3621]" : "text-blue-400"
              }`}
            >
              Trainee Analyst — Ineuron.ai
            </h3>
            <p className={`${isLight ? "text-gray-600" : "text-gray-400"} mb-4`}>
              Feb 2021 – Feb 2022 | Bangalore
            </p>
            <ul
              className={`list-disc pl-5 space-y-2 ${
                isLight ? "text-gray-700" : "text-gray-300"
              }`}
            >
              <li>Worked on ETL pipelines and data transformations</li>
              <li>Orchestrated Spark jobs using Apache Airflow</li>
              <li>Built BI dashboards and analytical datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & CONTACT ================= */}
      <section id="education" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p
          className={`list-disc pl-5 space-y-2 ${
            isLight ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Bachelor of Engineering (Electronics & Telecommunication) <br />
          Rizvi College of Engineering, Mumbai — <b>2022</b>
        </p>
        <div className="my-12 border-t border-[#24325F] opacity-50"></div>
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div
          className={`${isLight ? "text-gray-700" : "text-gray-300"} space-y-2`}
        >
          <div>
            Email:{" "}
          <a
            href="mailto:aadilmansoori111@gmail.com"
            className={`hover:underline ${
              isLight ? "text-[#E11D48]" : "text-blue-400"
            }`}
          >
            aadilmansoori111@gmail.com
          </a>
          </div>

          <div>
            Phone:{" "}
          <a
            href="tel:+919340482240"
            className={`hover:underline ${
              isLight ? "text-[#E11D48]" : "text-blue-400"
            }`}
          >
            +91 9340482240
          </a>
          </div>

          <div>Location: Mumbai, India</div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#24325F] py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Aadil Mansoori
      </footer>
    </main>
  );
}

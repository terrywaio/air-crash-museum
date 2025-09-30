"use client";

import { useState } from 'react';

// Ebbinghaus forgetting curve review intervals (in days)
const reviewIntervals = [1, 3, 7, 15, 30];
const totalWordGroups = 40;
const totalDays = totalWordGroups + reviewIntervals[reviewIntervals.length - 1];

// Generate the full study plan
const generateStudyPlan = () => {
  const plan: { [key: number]: { learn: number[]; review: { group: number; daysOld: number }[] } } = {};

  for (let day = 1; day <= totalDays; day++) {
    plan[day] = { learn: [], review: [] };

    // Check for new group to learn
    if (day <= totalWordGroups) {
      plan[day].learn.push(day);
    }

    // Check for reviews
    for (let group = 1; group < day; group++) {
      const daysSinceLearning = day - group;
      if (reviewIntervals.includes(daysSinceLearning)) {
        plan[day].review.push({ group: group, daysOld: daysSinceLearning });
      }
    }
  }
  return plan;
};

const studyPlanData = generateStudyPlan();

export default function StudyPlanPage() {
  const [showFullPlan, setShowFullPlan] = useState(false);
  const daysToShow = showFullPlan ? totalDays : 15; // Initially show first 15 days

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-[var(--foreground)]">
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight" style={{ color: '#ffffff' }}>
            单词记忆计划表
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-gray-100">
            基于艾宾浩斯遗忘曲线，为您规划的40组单词循环记忆方案。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 dark:bg-black/40 backdrop-blur rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--foreground)]">每日学习任务</h2>
          <div className="space-y-6">
            {Object.keys(studyPlanData).slice(0, daysToShow).map(dayStr => {
              const day = parseInt(dayStr, 10);
              const { learn, review } = studyPlanData[day];
              
              if (learn.length === 0 && review.length === 0) return null;

              return (
                <div key={day} className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">第 {day} 天</h3>
                  <div className="space-y-3">
                    {learn.map(group => (
                      <div key={`learn-${group}`} className="flex items-center gap-3 p-3 bg-green-100 dark:bg-green-800/50 rounded-lg">
                        <span className="text-lg font-bold text-green-700 dark:text-green-300">学习:</span>
                        <span className="text-base font-semibold text-gray-800 dark:text-gray-200">第 {group} 组新单词</span>
                      </div>
                    ))}
                    {review.map(({ group, daysOld }) => (
                      <div key={`review-${group}`} className="flex items-center gap-3 p-3 bg-yellow-100 dark:bg-yellow-800/50 rounded-lg">
                        <span className="text-lg font-bold text-yellow-700 dark:text-yellow-300">复习:</span>
                        <span className="text-base font-semibold text-gray-800 dark:text-gray-200">第 {group} 组单词</span>
                        <span className="ml-auto text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                          (第 {daysOld} 天复习)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {!showFullPlan && totalDays > 15 && (
             <div className="text-center mt-12">
                <button 
                  onClick={() => setShowFullPlan(true)}
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  显示完整计划 ({totalDays}天)
                </button>
             </div>
          )}
        </div>
      </div>

       <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>祝您学习愉快！</p>
      </footer>
    </div>
  );
} 
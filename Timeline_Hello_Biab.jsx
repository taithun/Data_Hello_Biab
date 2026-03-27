import React from 'react';
import { 
  Search, 
  Database, 
  Bot, 
  GitMerge, 
  Wrench, 
  Users, 
  Key, 
  Rocket,
  Calendar,
  Clock
} from 'lucide-react';

export default function TimelineInfographic() {
  const tasks = [
    {
      id: 1,
      title: "การวิเคราะห์ความต้องการ",
      subtitle: "(Requirements Analysis)",
      desc: ["ศึกษาปัญหาการค้นหากฎระเบียบกำหนดขอบเขตกลุ่มกฎระเบียบ"],
      start: 0,
      duration: 1,
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
      icon: <Search className="w-5 h-5 text-blue-500" />
    },
    {
      id: 2,
      title: "การเตรียมฐานข้อมูลความรู้",
      subtitle: "(Knowledge Base Preparation)",
      desc: [
        "รวบรวมเอกสารกฎระเบียบ กำหนดรูปแบบการจัดเก็บ (Document Schema)",
        "ออกแบบกลยุทธ์การแบ่งส่วนเอกสาร (Chunking Strategy) โดยใช้หน่วยระดับมาตรา",
        "ตั้งค่า Parent Delimiter สำหรับเอกสารภาษาไทยและนำเข้าสู่ระบบ RAG"
      ],
      start: 0,
      duration: 12,
      color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
      icon: <Database className="w-5 h-5 text-indigo-500" />
    },
    {
      id: 3,
      title: "พัฒนา Chatbot บนแพลตฟอร์ม Dify",
      subtitle: "",
      desc: ["ติดตั้ง Dify Community Edition บน Docker (Self-hosted)"],
      start: 1,
      duration: 1,
      color: "bg-gradient-to-r from-violet-400 to-violet-600",
      icon: <Bot className="w-5 h-5 text-violet-500" />
    },
    {
      id: 4,
      title: "กำหนด Workflow",
      subtitle: "",
      desc: [
        "กำหนด Workflow และ System Prompt ที่ป้องกัน Hallucination",
        "เชื่อมต่อ Knowledge Base กำหนด RAG Pipeline"
      ],
      start: 2,
      duration: 6,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      icon: <GitMerge className="w-5 h-5 text-purple-500" />
    },
    {
      id: 5,
      title: "ทดสอบและปรับปรุงระบบฯ",
      subtitle: "(โดยทีมงาน)",
      desc: [],
      start: 8,
      duration: 4,
      color: "bg-gradient-to-r from-amber-400 to-amber-500",
      icon: <Wrench className="w-5 h-5 text-amber-500" />
    },
    {
      id: 6,
      title: "ทดสอบและปรับปรุงระบบฯ",
      subtitle: "(โดยหน่วยงานที่เกี่ยวข้อง)",
      desc: [],
      start: 12,
      duration: 4,
      color: "bg-gradient-to-r from-orange-400 to-orange-500",
      icon: <Users className="w-5 h-5 text-orange-500" />
    },
    {
      id: 7,
      title: "กำหนดช่องทางการเข้าถึงสำหรับผู้ใช้งาน",
      subtitle: "",
      desc: [],
      start: 16,
      duration: 1,
      color: "bg-gradient-to-r from-emerald-400 to-emerald-500",
      icon: <Key className="w-5 h-5 text-emerald-500" />
    },
    {
      id: 8,
      title: "นำเข้า Production Environment",
      subtitle: "(PEA Server) และนำออกใช้งาน",
      desc: [],
      start: 16,
      duration: 4,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      icon: <Rocket className="w-5 h-5 text-green-500" />
    }
  ];

  const totalWeeks = 20;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                  <Bot className="w-8 h-8" />
                </span>
                แผนปฏิบัติงาน: Hello Biab
              </h1>
              <p className="text-slate-500 mt-2 text-lg">Timeline Infographic แผนการดำเนินงานโครงการ 5 เดือน</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Calendar className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">ระยะเวลา</p>
                  <p className="text-lg font-bold text-slate-800">5 เดือน</p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-4 hidden sm:flex">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Clock className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">รวม</p>
                  <p className="text-lg font-bold text-slate-800">20 สัปดาห์</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Chart Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[1000px]">
              
              {/* Header: Months & Weeks */}
              <div className="flex border-b border-slate-200 bg-slate-50">
                {/* Activities Column Header */}
                <div className="w-[380px] shrink-0 p-5 font-bold text-slate-700 border-r border-slate-200 flex items-center bg-slate-50/80 backdrop-blur sticky left-0 z-20 shadow-[1px_0_5px_rgba(0,0,0,0.05)]">
                  รายการกิจกรรม (Activities)
                </div>
                
                {/* Timeline Header */}
                <div className="flex-1 flex flex-col">
                  {/* Months */}
                  <div className="flex border-b border-slate-200">
                    {[1, 2, 3, 4, 5].map(m => (
                      <div key={`month-${m}`} className="flex-1 text-center py-3 font-bold text-slate-700 border-r border-slate-200 last:border-r-0">
                        เดือนที่ {m}
                      </div>
                    ))}
                  </div>
                  {/* Weeks */}
                  <div className="flex">
                    {Array.from({ length: totalWeeks }).map((_, i) => (
                      <div key={`week-${i}`} className="flex-1 text-center py-2 text-xs font-semibold text-slate-500 border-r border-slate-200 last:border-r-0">
                        W{(i % 4) + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tasks Rows */}
              <div className="relative">
                {tasks.map((task, index) => (
                  <div key={task.id} className="flex group border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                    
                    {/* Activity Info (Sticky Left) */}
                    <div className="w-[380px] shrink-0 p-5 border-r border-slate-200 bg-white group-hover:bg-slate-50 transition-colors duration-200 sticky left-0 z-10 shadow-[1px_0_5px_rgba(0,0,0,0.02)]">
                      <div className="flex gap-3">
                        <div className="mt-1 bg-slate-100 p-2 rounded-lg shrink-0">
                          {task.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 leading-tight">
                            {task.title}
                          </h3>
                          {task.subtitle && (
                            <p className="text-sm text-slate-500 mt-0.5">{task.subtitle}</p>
                          )}
                          
                          {task.desc.length > 0 && (
                            <ul className="mt-3 space-y-1.5">
                              {task.desc.map((d, i) => (
                                <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                                  <span className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 shrink-0" />
                                  <span className="leading-relaxed">{d}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Bar Area */}
                    <div className="flex-1 relative">
                      {/* Background Grid Lines */}
                      <div className="absolute inset-0 flex pointer-events-none">
                        {Array.from({ length: totalWeeks }).map((_, i) => (
                          <div 
                            key={`grid-${i}`} 
                            className={`flex-1 border-r border-dashed ${i % 4 === 3 ? 'border-slate-300' : 'border-slate-200'} last:border-r-0`}
                          />
                        ))}
                      </div>

                      {/* The Bar */}
                      <div className="relative h-full w-full py-6">
                        <div
                          className={`absolute h-8 rounded-full shadow-md ${task.color} text-white text-xs flex items-center justify-center font-medium transition-all duration-300 hover:scale-[1.02] cursor-default`}
                          style={{
                            left: `${(task.start / totalWeeks) * 100}%`,
                            top: '24px',
                            // Margin left/right slightly for aesthetic padding within its cell
                            marginLeft: '2px',
                            width: `calc(${(task.duration / totalWeeks) * 100}% - 4px)`
                          }}
                        >
                          {/* Optional: Show week count if duration is long enough to display text */}
                          {task.duration >= 2 ? `${task.duration} สัปดาห์` : ''}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend / Footer */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>วิเคราะห์</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            <span>เตรียมการฐานข้อมูล</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span>พัฒนา</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>ทดสอบระบบ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>นำขึ้นใช้งานจริง</span>
          </div>
        </div>

      </div>
    </div>
  );
}

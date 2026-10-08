// โครงสร้างตัวอย่างภายในคอมโพเนนต์ StudentInfo
export  function StudentInfo() {
  return (
    <div className="flex flex-col items-center p-6 text-center max-w-sm mx-auto">
      
      <h2 className="text-xl font-bold text-gray-800 self-start mb-1">ข้อมูลนักศึกษา</h2>
      <p className="text-sm text-gray-500 self-start mb-4">Student Information</p>

      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
        <img 
          src="/pic1.jpg" // ใส่ url รูปภาพของอาจารย์/นักศึกษา
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 self-start">Korrawit Yawichai</h3>
      <p className="text-sm text-gray-600 text-left mt-1 mb-4">
        นักศึกษาประจำภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
      </p>

      <div className="w-full space-y-3 text-left border-t pt-4 text-sm">
        
        <div className="flex items-start gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs font-medium shrink-0">
            Hobbies
          </span>
          <span className="text-gray-700">ดูหนัง, เล่นดนตรี, ขี่มอเตอร์ไซค์</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs font-medium shrink-0">
            Email
          </span>
          <span className="text-gray-700">korrawit_y@cmu.ac.th</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs font-medium shrink-0">
            Social
          </span>
          <a href="https://www.facebook.com/korrawit.yawichai.2024/" className="text-blue-600 hover:underline break-all">
            https://www.facebook.com/korrawit.yawichai.2024/
          </a>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg p-3 text-left mt-6">
        <p className="text-xs text-gray-500 font-medium">รหัสนักศึกษา: 680610649</p>
      </div>

    </div>
  );
}

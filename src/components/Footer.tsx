import { StudentInfo } from "./StudentInfo";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"

export  function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-start gap-4 md:flex-row">
          
          {/* นำ Drawer มาครอบส่วนปุ่มชื่อนักศึกษาตรงนี้ */}
          <Drawer>
            <DrawerTrigger >
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Korrawit Yawichai
              </button>
            </DrawerTrigger>
            
            {/* ส่วนเนื้อหาที่จะเด้งขึ้นมาแสดงผล */}
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <StudentInfo />
                <div className="p-4">
                </div>
              </div>
            </DrawerContent>
          </Drawer>

          {/* ส่วนข้อความลิขสิทธิ์เดิมที่อยู่ฝั่งขวา */}
          <p className="text-xs text-muted-foreground text-center">
            © 2026 CPE207 Corp. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Updater from "@/components/updater";

export default function Home() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Tauri Demo 应用</h1>
        <p className="text-gray-600 mb-6">支持单例模式和自动更新的桌面应用</p>
        <Button>示例按钮</Button>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Updater />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">功能说明</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>单例模式</strong>: 应用只能运行一个实例，重复启动会聚焦到现有窗口</li>
          <li>• <strong>自动更新</strong>: 应用启动时自动检查更新，支持后台下载和安装</li>
          <li>• <strong>更新通知</strong>: 发现新版本时会显示更新内容和下载进度</li>
        </ul>
      </div>
    </div>
  );
}

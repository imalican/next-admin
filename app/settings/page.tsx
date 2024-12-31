import { SettingsTabs } from "@/components/settings/settings-tabs";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ayarlar</h1>
        <p className="text-gray-500 mt-2">Sistem ayarlarını buradan yönetebilirsiniz.</p>
      </div>
      <SettingsTabs />
    </div>
  );
}
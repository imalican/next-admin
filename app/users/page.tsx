import { UsersTable } from "@/components/users/users-table";
import { UsersHeader } from "@/components/users/users-header";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <UsersHeader />
      <UsersTable />
    </div>
  );
}
import { Search, SortAsc, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OrderToolbar() {
  return (
    <div className="flex w-full items-center gap-2 p-4">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="Find order"
          className="w-auto rounded-lg border py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sort Button */}
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-lg border px-4 py-2"
      >
        <SortAsc className="h-4 w-4" />
        <span>Sort by</span>
      </Button>

      {/* Filter Button */}
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-lg border px-4 py-2"
      >
        <SlidersHorizontal className="h-4 w-4" />
        <span>Filter</span>
      </Button>

      {/* Toggle Sort Direction Button */}
      <Button
        variant="outline"
        className="flex items-center justify-center rounded-lg border p-2"
      >
        <ArrowUpDown className="h-4 w-4" />
      </Button>
    </div>
  );
}

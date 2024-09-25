import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { geoData } from "@/lib/geoData";
import { useCheckboxState } from "@/hooks/useCheckboxState";

export function TableDemo() {
  const {
    checkedItems,
    isHeaderChecked,
    handleHeaderCheckboxChange,
    handleCheckboxChange,
  } = useCheckboxState(geoData.length);

  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Geo Data Library</h1>
          <p className="text-sm text-left text-gray-500">6 Services added</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search by file name" className="w-64 pl-8" />
          </div>
          <Button className="bg-[#681A8D]">Upload</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableHead className="w-12 pl-4">
            <Checkbox
              onClick={handleHeaderCheckboxChange}
              checked={isHeaderChecked}
            />
          </TableHead>
          <TableHead>File Name</TableHead>
          <TableHead>Author</TableHead>
          <TableHead className="pl-3">Country</TableHead>
          {/* <TableHead>File Size</TableHead> */}
          <TableHead>Upload Date</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableHeader>
        <TableBody>
          {geoData.map((file, index) => (
            <TableRow key={file.name}>
              <TableCell className="pl-4">
                <Checkbox
                  onClick={() => handleCheckboxChange(index)}
                  checked={checkedItems[index]}
                />
              </TableCell>
              <TableCell className="pr-32 font-bold">{file.name}</TableCell>
              <TableCell className="pr-12">{file.author}</TableCell>
              <TableCell className="pr-12">
                <div className="flex">
                  <img
                    className="object-contain w-[90px] h-[24px]"
                    src={`/countries.png`}
                    alt={`countries-flag`}
                  />
                </div>
              </TableCell>
              {/* <TableCell className="pl-4 pr-12 text-center text-[#5F6C79]">
                {file.size}
              </TableCell> */}
              <TableCell className="pr-8 text-[#5F6C79] pl-3">
                {file.date}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end gap-8 mt-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Rows per page:</span>
          <Select defaultValue="6">
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="24">24</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-sm text-gray-500">6-10 of 11</span>
          <div className="flex items-center gap-4">
            <ChevronLeft className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

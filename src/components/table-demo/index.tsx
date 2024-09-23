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

const geoData = [
  {
    name: "coastal_regions.geojson",
    author: "Sarah Thompson",
    countries: ["de", "es", "se"],
    size: "1.5MB",
    date: "15.08.2024",
  },
  {
    name: "urban_development_zones.geojson",
    author: "Abram Westervelt",
    countries: ["de", "es", "se"],
    size: "1.5MB",
    date: "15.08.2024",
  },
  {
    name: "protected_areas.geojson",
    author: "Ahmad Culhane",
    countries: ["de", "es", "se"],
    size: "1.5MB",
    date: "15.08.2024",
  },
  {
    name: "flood_risk_areas.geojson",
    author: "Zaire George",
    countries: ["de", "es", "se"],
    size: "1.5MB",
    date: "15.08.2024",
  },
  {
    name: "earthquake_zones.geojson",
    author: "Martin Bergson",
    countries: ["de", "es", "se"],
    size: "1.5MB",
    date: "15.08.2024",
  },
  {
    name: "population_density.geojson",
    author: "Tatiana Rhiel Madsen",
    countries: ["de", "es", "se"],
    size: "1.5MB",
    date: "15.08.2024",
  },
];

export function TableDemo() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Geo Data Library</h1>
          <p className="text-sm text-gray-500">6 Services added</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search by file name" className="pl-8 w-64" />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">Upload</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>File Name</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>File Size</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {geoData.map((file) => (
            <TableRow key={file.name}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.author}</TableCell>
              <TableCell>
                <div className="flex">
                  <img
                    src={`../../assets/countries.svg`}
                    alt={`countries-flag`}
                    // className={`w-6 h-4 ${index > 0 ? "-ml-2" : ""}`}
                  />
                  {file.countries.length > 3 && (
                    <span className="ml-1 text-xs text-gray-500">+16</span>
                  )}
                </div>
              </TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>{file.date}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
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
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">6-10 of 11</span>
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

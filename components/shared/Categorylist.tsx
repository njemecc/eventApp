import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/mongodb/database/models/category.model";
import { SelectItem } from "@radix-ui/react-select";

const Categorylist = async () => {
  const categoryList = await getAllCategories();
  return (
    categoryList.length > 0 &&
    categoryList.map((category: ICategory) => (
      <SelectItem key={category._id} value={category._id}>
        {category.name}
      </SelectItem>
    ))
  );
};

export default Categorylist;

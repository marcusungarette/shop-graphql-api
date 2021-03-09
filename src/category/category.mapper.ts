import { Category } from './category.entity'
import { CategoryCreateInput } from './dto/categoryCreate.input'

export class CategoryMapper {
  public static toEntity(data: CategoryCreateInput): Category {
    const entity = new Category()
    entity.name = data.name
    entity.slug = data.slug
    return entity
  }
}

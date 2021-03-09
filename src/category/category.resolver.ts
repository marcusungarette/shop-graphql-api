import { Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { Category } from './dto/category'

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [Category], { name: 'getAllCategories' })
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryService.findAll()
  }

  // @Mutation(returns => CategoryPublic, { name: 'panelCreateCategory' })
  // async createCategory(
  //   @Args('input') input: CategoryCreateInput
  // ): Promise<CategoryPublic> {
  //   return this.categoryService.create(CategoryMapper.toEntity(input))
  // }
}

import { Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { CategoryDTO } from './dto/categoryDTO'

@Resolver(of => CategoryDTO)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [CategoryDTO], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryDTO[]> {
    return await this.categoryService.findAll()
  }

  // @Mutation(returns => CategoryPublic, { name: 'panelCreateCategory' })
  // async createCategory(
  //   @Args('input') input: CategoryCreateInput
  // ): Promise<CategoryPublic> {
  //   return this.categoryService.create(CategoryMapper.toEntity(input))
  // }
}

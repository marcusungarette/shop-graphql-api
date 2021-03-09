import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Category } from './category.entity'
import { CategoryMapper } from './category.mapper'
import { CategoryService } from './category.service'
import { CategoryCreateInput } from './dto/categoryCreate.input'
import { CategoryDTO } from './dto/categoryDTO'

@Resolver(of => CategoryDTO)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [CategoryDTO], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryDTO[]> {
    return await this.categoryService.findAll()
  }

  @Mutation(returns => CategoryDTO, { name: 'CreateCategory' })
  async createCategory(
    @Args('data') data: CategoryCreateInput
  ): Promise<CategoryDTO> {
    return this.categoryService.create(CategoryMapper.toEntity(data))
  }
}

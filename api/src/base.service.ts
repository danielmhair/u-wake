import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm'

export class BaseService<T, CreateDto> {
  constructor(public readonly repo: Repository<T>) {}

  async create(createDto: CreateDto): Promise<DeepPartial<T>> {
    return this.repo.save(createDto as any)
  }

  async createMany(createDto: CreateDto[]): Promise<T[]> {
    return this.repo.create(createDto as any)
  }

  async getAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repo.find(options)
  }

  async getById(id: number): Promise<T> {
    return this.repo.findOneBy({ id: id } as any)
  }

  async getOne(options?: FindOneOptions<T>): Promise<T> {
    return this.repo.findOne(options)
  }

  async update(id: number, user: DeepPartial<T>): Promise<T> {
    return this.repo.save({ id, ...user })
  }

  async deleteById(id: string): Promise<void> {
    await this.repo.delete(id)
  }

  async deleteWhere(options?: Pick<FindOneOptions<T>, 'where'>): Promise<void> {
    const users = await this.repo.find({ where: options.where, select: ['id'] as any[] })
    await this.repo.remove(users)
  }
}
